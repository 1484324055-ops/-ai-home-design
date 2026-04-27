import { loadAssetLibrary } from "../../services/assets";
import type { AssetLibrary, Cabinet, Material, Selection, Space, ResidenceType, CameraAngle, Lighting } from "../../utils/data";
import { fallbackLibrary } from "../../utils/data";
import { generatePrompts } from "../../utils/prompt-generator";
import type { PromptResult } from "../../utils/prompt-generator";
import {
  saveLocalHistory,
  takePendingHistory,
  updateLocalHistoryFavorite,
  updateLocalHistoryPrompts
} from "../../utils/history";
import type { LocalHistoryRecord } from "../../utils/history";
import { saveMiniappFeedback } from "../../utils/feedback";

const LAST_SELECTION_KEY = "ai_home_design_last_selection";

type SelectionChip = {
  label: string;
  value: string;
  state: "ready" | "empty";
};

type ProgressStep = {
  index: string;
  label: string;
  value: string;
  state: "done" | "active" | "pending";
};

type TextareaInputEvent = WechatMiniprogram.BaseEvent & {
  detail: {
    value: string;
  };
};

type WechatProfile = {
  nickName: string;
  avatarUrl: string;
};

type LastSelectionState = {
  selectedSpaceId?: string;
  selectedCabinetId?: string;
  selectedStyleId?: string;
  selectedMaterialId?: string;
  selectedResidenceTypeId?: string;
  selectedCameraAngleId?: string;
  selectedLightingId?: string;
};

type SpaceOption = Space & {
  icon: string;
  isCompact: boolean;
};

type CabinetOption = Cabinet & {
  icon: string;
};

const SPACE_ICONS: Record<string, string> = {
  "horizontal-living": "🛋",
  "vertical-living": "📺",
  "master-bedroom": "🛏",
  kitchen: "🍳",
  "enclosed-kitchen": "🚪",
  "semi-enclosed-kitchen": "🪟",
  study: "📚",
  entrance: "👟",
  "walk-in-closet": "👗",
  "dining-room": "🍽",
  ldk: "🏡",
  "kids-room": "🧸",
  balcony: "🌿",
  "multi-functional": "🧩",
  "secondary-bedroom": "🛌"
};

const CABINET_ICONS: Record<string, string> = {
  "floor-wardrobe": "🚪",
  "glass-wardrobe": "🪞",
  "floating-tv": "📺",
  bookshelf: "📚",
  "u-kitchen": "🍳",
  "l-kitchen": "🔪",
  island: "☕",
  "shoe-cabinet": "👟",
  "balcony-cabinet": "🧺",
  tatami: "🛏",
  "bay-window": "🪟",
  sideboard: "🍷",
  "display-cabinet": "🏺",
  "accessories-island": "💍"
};

const COMPACT_SPACE_IDS = [
  "horizontal-living",
  "vertical-living",
  "entrance",
  "dining-room",
  "kitchen",
  "master-bedroom",
  "secondary-bedroom",
  "study",
  "balcony"
];

const REGULAR_SPACE_IDS = [
  "enclosed-kitchen",
  "semi-enclosed-kitchen",
  "walk-in-closet",
  "ldk",
  "kids-room",
  "multi-functional"
];

const SPACE_ORDER = [...COMPACT_SPACE_IDS, ...REGULAR_SPACE_IDS];
const SPACE_ORDER_INDEX = SPACE_ORDER.reduce<Record<string, number>>((indexMap, id, index) => {
  indexMap[id] = index;
  return indexMap;
}, {});
const COMPACT_SPACE_SET = new Set(COMPACT_SPACE_IDS);

const buildSpaceOptions = (spaces: Space[]) =>
  spaces
    .map((space): SpaceOption => ({
      ...space,
      icon: SPACE_ICONS[space.id] || "🏠",
      isCompact: COMPACT_SPACE_SET.has(space.id)
    }))
    .sort((a, b) => {
      const aIndex = SPACE_ORDER_INDEX[a.id] ?? 999;
      const bIndex = SPACE_ORDER_INDEX[b.id] ?? 999;

      if (aIndex !== bIndex) {
        return aIndex - bIndex;
      }

      return a.name.localeCompare(b.name, "zh-Hans-CN");
    });

const splitSpaceOptions = (spaces: Space[]) => {
  const options = buildSpaceOptions(spaces);

  return {
    spaces: options,
    compactSpaces: options.filter((space) => space.isCompact),
    regularSpaces: options.filter((space) => !space.isCompact)
  };
};

const initialSpaceOptions = splitSpaceOptions(fallbackLibrary.spaces);

const withCabinetIcon = (cabinet: Cabinet): CabinetOption => ({
  ...cabinet,
  icon: CABINET_ICONS[cabinet.id] || "🗄"
});

const emptyChips: SelectionChip[] = [
  { label: "空间", value: "未选择", state: "empty" },
  { label: "柜体", value: "未选择", state: "empty" },
  { label: "风格", value: "未选择", state: "empty" },
  { label: "材质", value: "未选择", state: "empty" }
];

Page({
  data: {
    library: fallbackLibrary as AssetLibrary,
    spaces: initialSpaceOptions.spaces,
    compactSpaces: initialSpaceOptions.compactSpaces,
    regularSpaces: initialSpaceOptions.regularSpaces,
    cabinets: fallbackLibrary.cabinets,
    availableCabinets: [] as CabinetOption[],
    styles: fallbackLibrary.styles,
    materials: fallbackLibrary.materials,
    availableMaterials: [] as Material[],
    residenceTypes: fallbackLibrary.residenceTypes as ResidenceType[],
    cameraAngles: fallbackLibrary.cameraAngles as CameraAngle[],
    lightings: fallbackLibrary.lightings as Lighting[],
    selectedSpaceId: "",
    selectedCabinetId: "",
    selectedStyleId: "",
    selectedMaterialId: "",
    selectedResidenceTypeId: "standard",
    selectedCameraAngleId: "wide-angle",
    selectedLightingId: "natural",
    promptResult: null as PromptResult | null,
    isReady: false,
    assetMessage: "",
    isLoadingAssets: true,
    activePromptTab: "chinese",
    selectionSummaryTitle: "先选一个空间开始",
    selectionSummarySubtitle: "系统会按空间筛选可用柜体，再组合风格和材质生成提示词。",
    selectionChips: emptyChips,
    progressSteps: [] as ProgressStep[],
    progressPercent: 0,
    nextStepText: "下一步：选择空间",
    lastGeneratedRecord: null as LocalHistoryRecord | null,
    isFavoriteCurrent: false,
    isAdvancedOpen: false,
    isPlannerPinned: false,
    isPromptEditorOpen: false,
    editChinese: "",
    editEnglish: "",
    copyButtonText: "复制",
    copyWideButtonText: "复制当前提示词",
    resultMotionClass: "",
    isFeedbackOpen: false,
    feedbackText: "",
    feedbackContact: "",
    wechatProfile: null as WechatProfile | null
  },

  async onLoad() {
    const { library, message } = await loadAssetLibrary();
    const spaceOptions = splitSpaceOptions(library.spaces);
    this.setData({
      library,
      spaces: spaceOptions.spaces,
      compactSpaces: spaceOptions.compactSpaces,
      regularSpaces: spaceOptions.regularSpaces,
      cabinets: library.cabinets,
      styles: library.styles,
      materials: library.materials,
      residenceTypes: library.residenceTypes,
      cameraAngles: library.cameraAngles,
      lightings: library.lightings,
      assetMessage: message,
      isLoadingAssets: false
    });
    this.restoreLastSelection();
    this.refreshDerivedOptions();
    this.applyPendingHistory();
  },

  onShow() {
    this.applyPendingHistory();
  },

  onPageScroll(event: { scrollTop: number }) {
    const shouldPin = event.scrollTop > 260;

    if (shouldPin !== this.data.isPlannerPinned) {
      this.setData({ isPlannerPinned: shouldPin });
    }
  },

  refreshDerivedOptions() {
    const library = this.data.library as AssetLibrary;
    const availableCabinets = this.data.selectedSpaceId
      ? library.cabinets.filter((cabinet) => cabinet.applicableSpaces.includes(this.data.selectedSpaceId))
      : [];
    const availableMaterials = this.data.selectedStyleId
      ? library.materials.filter((material) => material.applicableStyles.includes(this.data.selectedStyleId))
      : [];
    const currentCabinetIsAvailable = availableCabinets.some((item) => item.id === this.data.selectedCabinetId);
    const currentMaterialIsAvailable = availableMaterials.some((item) => item.id === this.data.selectedMaterialId);
    const nextSelectedCabinetId = currentCabinetIsAvailable
      ? this.data.selectedCabinetId
      : availableCabinets.length === 1
        ? availableCabinets[0].id
        : "";
    const nextSelectedMaterialId = currentMaterialIsAvailable
      ? this.data.selectedMaterialId
      : availableMaterials.length === 1
        ? availableMaterials[0].id
        : "";
    const selectedSpace = library.spaces.find((item) => item.id === this.data.selectedSpaceId);
    const selectedCabinet = library.cabinets.find((item) => item.id === nextSelectedCabinetId);
    const selectedStyle = library.styles.find((item) => item.id === this.data.selectedStyleId);
    const selectedMaterial = library.materials.find((item) => item.id === nextSelectedMaterialId);
    const isReady = Boolean(selectedSpace && selectedCabinet && selectedStyle && selectedMaterial);

    const selectedValues = [selectedSpace, selectedCabinet, selectedStyle, selectedMaterial];
    const labels = ["空间", "柜体", "风格", "材质"];
    const names = [
      selectedSpace?.name || "未选择",
      selectedCabinet?.name || "未选择",
      selectedStyle?.name || "未选择",
      selectedMaterial?.name || "未选择"
    ];
    const completedCount = selectedValues.filter(Boolean).length;
    const firstMissingIndex = selectedValues.findIndex((item) => !item);
    const nextStepText =
      firstMissingIndex === -1 ? "方案已完整，可以生成提示词" : `下一步：选择${labels[firstMissingIndex]}`;

    const progressSteps: ProgressStep[] = labels.map((label, index) => ({
      index: `${index + 1}`,
      label,
      value: names[index],
      state: selectedValues[index] ? "done" : index === firstMissingIndex ? "active" : "pending"
    }));
    const selectionChips: SelectionChip[] = labels.map((label, index) => ({
      label,
      value: names[index],
      state: selectedValues[index] ? "ready" : "empty"
    }));
    const selectionSummaryTitle = isReady
      ? `${selectedSpace!.name} · ${selectedStyle!.name} · ${selectedCabinet!.name}方案`
      : selectedSpace
        ? `正在配置 ${selectedSpace.name} 方案`
        : "先选一个空间开始";
    const selectionSummarySubtitle = isReady
      ? `已组合 ${selectedCabinet!.name}、${selectedMaterial!.name}，可以生成或收藏为常用方案。`
      : nextStepText;

    this.setData({
      selectedCabinetId: nextSelectedCabinetId,
      selectedMaterialId: nextSelectedMaterialId,
      availableCabinets: availableCabinets.map(withCabinetIcon),
      availableMaterials,
      isReady,
      selectionSummaryTitle,
      selectionSummarySubtitle,
      selectionChips,
      progressSteps,
      progressPercent: completedCount * 25,
      nextStepText
    });
  },

  persistCurrentSelection() {
    const selectionState: LastSelectionState = {
      selectedSpaceId: this.data.selectedSpaceId,
      selectedCabinetId: this.data.selectedCabinetId,
      selectedStyleId: this.data.selectedStyleId,
      selectedMaterialId: this.data.selectedMaterialId,
      selectedResidenceTypeId: this.data.selectedResidenceTypeId,
      selectedCameraAngleId: this.data.selectedCameraAngleId,
      selectedLightingId: this.data.selectedLightingId
    };

    if (!selectionState.selectedSpaceId && !selectionState.selectedStyleId) {
      wx.removeStorageSync(LAST_SELECTION_KEY);
      return;
    }

    wx.setStorageSync(LAST_SELECTION_KEY, selectionState);
  },

  restoreLastSelection() {
    const library = this.data.library as AssetLibrary;
    const saved = wx.getStorageSync(LAST_SELECTION_KEY) as LastSelectionState | "";

    if (!saved) {
      return;
    }

    const selectedSpaceId = library.spaces.some((item) => item.id === saved.selectedSpaceId)
      ? saved.selectedSpaceId || ""
      : "";
    const selectedCabinetId =
      selectedSpaceId &&
      library.cabinets.some(
        (item) => item.id === saved.selectedCabinetId && item.applicableSpaces.includes(selectedSpaceId)
      )
        ? saved.selectedCabinetId || ""
        : "";
    const selectedStyleId = library.styles.some((item) => item.id === saved.selectedStyleId)
      ? saved.selectedStyleId || ""
      : "";
    const selectedMaterialId =
      selectedStyleId &&
      library.materials.some(
        (item) => item.id === saved.selectedMaterialId && item.applicableStyles.includes(selectedStyleId)
      )
        ? saved.selectedMaterialId || ""
        : "";

    this.setData({
      selectedSpaceId,
      selectedCabinetId,
      selectedStyleId,
      selectedMaterialId,
      selectedResidenceTypeId: saved.selectedResidenceTypeId || this.data.selectedResidenceTypeId,
      selectedCameraAngleId: saved.selectedCameraAngleId || this.data.selectedCameraAngleId,
      selectedLightingId: saved.selectedLightingId || this.data.selectedLightingId
    });
  },

  selectSpace(event: WechatMiniprogram.TouchEvent) {
    const id = event.currentTarget.dataset.id as string;
    this.setData({
      selectedSpaceId: id,
      selectedCabinetId: "",
      promptResult: null,
      lastGeneratedRecord: null,
      isFavoriteCurrent: false
    });
    this.refreshDerivedOptions();
    this.persistCurrentSelection();
  },

  selectCabinet(event: WechatMiniprogram.TouchEvent) {
    const id = event.currentTarget.dataset.id as string;
    this.setData({
      selectedCabinetId: id,
      promptResult: null,
      lastGeneratedRecord: null,
      isFavoriteCurrent: false
    });
    this.refreshDerivedOptions();
    this.persistCurrentSelection();
  },

  selectStyle(event: WechatMiniprogram.TouchEvent) {
    const id = event.currentTarget.dataset.id as string;
    this.setData({
      selectedStyleId: id,
      selectedMaterialId: "",
      promptResult: null,
      lastGeneratedRecord: null,
      isFavoriteCurrent: false
    });
    this.refreshDerivedOptions();
    this.persistCurrentSelection();
  },

  selectMaterial(event: WechatMiniprogram.TouchEvent) {
    const id = event.currentTarget.dataset.id as string;
    this.setData({
      selectedMaterialId: id,
      promptResult: null,
      lastGeneratedRecord: null,
      isFavoriteCurrent: false
    });
    this.refreshDerivedOptions();
    this.persistCurrentSelection();
  },

  toggleAdvanced() {
    this.setData({
      isAdvancedOpen: !this.data.isAdvancedOpen
    });
  },

  selectResidenceType(event: WechatMiniprogram.TouchEvent) {
    this.setData({
      selectedResidenceTypeId: event.currentTarget.dataset.id as string,
      promptResult: null,
      lastGeneratedRecord: null,
      isFavoriteCurrent: false
    });
    this.persistCurrentSelection();
  },

  selectCameraAngle(event: WechatMiniprogram.TouchEvent) {
    this.setData({
      selectedCameraAngleId: event.currentTarget.dataset.id as string,
      promptResult: null,
      lastGeneratedRecord: null,
      isFavoriteCurrent: false
    });
    this.persistCurrentSelection();
  },

  selectLighting(event: WechatMiniprogram.TouchEvent) {
    this.setData({
      selectedLightingId: event.currentTarget.dataset.id as string,
      promptResult: null,
      lastGeneratedRecord: null,
      isFavoriteCurrent: false
    });
    this.persistCurrentSelection();
  },

  setPromptTab(event: WechatMiniprogram.TouchEvent) {
    this.setData({
      activePromptTab: event.currentTarget.dataset.tab as string
    });
  },

  openPromptEditor() {
    const promptResult = this.data.promptResult as PromptResult | null;

    if (!promptResult) {
      return;
    }

    this.setData({
      isPromptEditorOpen: true,
      editChinese: promptResult.chinese,
      editEnglish: promptResult.english
    });
  },

  closePromptEditor() {
    this.setData({
      isPromptEditorOpen: false
    });
  },

  openFeedback() {
    this.setData({
      isFeedbackOpen: true
    });
  },

  closeFeedback() {
    this.setData({
      isFeedbackOpen: false
    });
  },

  onFeedbackTextInput(event: TextareaInputEvent) {
    this.setData({
      feedbackText: event.detail.value
    });
  },

  onFeedbackContactInput(event: TextareaInputEvent) {
    this.setData({
      feedbackContact: event.detail.value
    });
  },

  requestWechatProfile() {
    if (!wx.getUserProfile) {
      wx.showToast({
        title: "当前微信版本暂不支持",
        icon: "none"
      });
      return;
    }

    wx.getUserProfile({
      desc: "用于标记反馈来源",
      success: (res) => {
        this.setData({
          wechatProfile: {
            nickName: res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl
          }
        });
        wx.showToast({
          title: "已绑定微信身份",
          icon: "success"
        });
      },
      fail: () => {
        wx.showToast({
          title: "未授权也可以提交",
          icon: "none"
        });
      }
    });
  },

  submitFeedback() {
    const content = this.data.feedbackText.trim();

    if (!content) {
      wx.showToast({
        title: "先写一点建议吧",
        icon: "none"
      });
      return;
    }

    saveMiniappFeedback({
      content,
      contact: this.data.feedbackContact.trim(),
      page: "home",
      user: this.data.wechatProfile || undefined
    });

    this.setData({
      isFeedbackOpen: false,
      feedbackText: "",
      feedbackContact: ""
    });

    wx.showToast({
      title: "感谢反馈",
      icon: "success"
    });
  },

  onEditChineseInput(event: TextareaInputEvent) {
    this.setData({
      editChinese: event.detail.value
    });
  },

  onEditEnglishInput(event: TextareaInputEvent) {
    this.setData({
      editEnglish: event.detail.value
    });
  },

  savePromptEdits() {
    const promptResult = this.data.promptResult as PromptResult | null;

    if (!promptResult) {
      return;
    }

    const nextPromptResult: PromptResult = {
      ...promptResult,
      chinese: this.data.editChinese.trim(),
      english: this.data.editEnglish.trim()
    };
    const existingRecord = this.data.lastGeneratedRecord as LocalHistoryRecord | null;
    const updatedRecord = existingRecord
      ? updateLocalHistoryPrompts(existingRecord.id, nextPromptResult)
      : null;

    this.setData({
      promptResult: nextPromptResult,
      lastGeneratedRecord: updatedRecord || existingRecord,
      isPromptEditorOpen: false
    });

    wx.showToast({
      title: "已保存编辑",
      icon: "success"
    });
  },

  buildCurrentSelection(): Selection | null {
    const library = this.data.library as AssetLibrary;
    const space = library.spaces.find((item) => item.id === this.data.selectedSpaceId);
    const cabinet = library.cabinets.find((item) => item.id === this.data.selectedCabinetId);
    const style = library.styles.find((item) => item.id === this.data.selectedStyleId);
    const material = library.materials.find((item) => item.id === this.data.selectedMaterialId);

    if (!space || !cabinet || !style || !material) {
      return null;
    }

    return {
      space,
      cabinet,
      style,
      material,
      residenceType: library.residenceTypes.find((item) => item.id === this.data.selectedResidenceTypeId) || library.residenceTypes[0],
      cameraAngle: library.cameraAngles.find((item) => item.id === this.data.selectedCameraAngleId) || library.cameraAngles[0],
      lighting: library.lightings.find((item) => item.id === this.data.selectedLightingId) || library.lightings[0]
    };
  },

  generatePrompt() {
    const selection = this.buildCurrentSelection();

    if (!selection) {
      wx.showToast({
        title: "请先选完整",
        icon: "none"
      });
      return;
    }

    const promptResult = generatePrompts(selection);
    const lastGeneratedRecord = saveLocalHistory(selection, promptResult);
    this.setData({
      promptResult,
      activePromptTab: "chinese",
      lastGeneratedRecord,
      isFavoriteCurrent: false,
      copyButtonText: "复制",
      copyWideButtonText: "复制当前提示词",
      resultMotionClass: "result-entering"
    });
    setTimeout(() => this.setData({ resultMotionClass: "" }), 320);
    this.persistCurrentSelection();

    wx.showToast({
      title: "已保存到历史",
      icon: "success"
    });
  },

  favoriteCurrent() {
    const promptResult = this.data.promptResult as PromptResult | null;
    const existingRecord = this.data.lastGeneratedRecord as LocalHistoryRecord | null;

    if (existingRecord) {
      const updatedRecord = updateLocalHistoryFavorite(existingRecord.id, true);
      this.setData({
        lastGeneratedRecord: updatedRecord || existingRecord,
        isFavoriteCurrent: true
      });
      wx.showToast({ title: "已收藏常用", icon: "success" });
      return;
    }

    const selection = this.buildCurrentSelection();

    if (!selection || !promptResult) {
      wx.showToast({ title: "请先生成提示词", icon: "none" });
      return;
    }

    const record = saveLocalHistory(selection, promptResult, { isFavorite: true });
    this.setData({
      lastGeneratedRecord: record,
      isFavoriteCurrent: true
    });
    wx.showToast({ title: "已收藏常用", icon: "success" });
  },

  applyPendingHistory() {
    const record = takePendingHistory();

    if (!record) {
      return;
    }

    this.setData({
      selectedSpaceId: record.spaceId,
      selectedCabinetId: record.cabinetId,
      selectedStyleId: record.styleId,
      selectedMaterialId: record.materialId,
      selectedResidenceTypeId: record.residenceTypeId,
      selectedCameraAngleId: record.cameraAngleId,
      selectedLightingId: record.lightingId,
      promptResult: {
        title: record.title,
        chinese: record.chinese,
        english: record.english
      },
      activePromptTab: "chinese",
      lastGeneratedRecord: record,
      isFavoriteCurrent: Boolean(record.isFavorite),
      copyButtonText: "复制",
      copyWideButtonText: "复制当前提示词",
      resultMotionClass: "result-entering"
    });
    setTimeout(() => this.setData({ resultMotionClass: "" }), 320);
    this.refreshDerivedOptions();
    this.persistCurrentSelection();
  },

  copyPrompt() {
    const promptResult = this.data.promptResult as PromptResult | null;

    if (!promptResult) {
      return;
    }

    const text = this.data.activePromptTab === "english" ? promptResult.english : promptResult.chinese;
    wx.setClipboardData({
      data: text,
      success: () => {
        this.setData({
          copyButtonText: "已复制",
          copyWideButtonText: "已复制"
        });
        setTimeout(() => {
          this.setData({
            copyButtonText: "复制",
            copyWideButtonText: "复制当前提示词"
          });
        }, 1400);
        wx.showToast({
          title: "已复制",
          icon: "success"
        });
      }
    });
  },

  resetAll() {
    this.setData({
      selectedSpaceId: "",
      selectedCabinetId: "",
      selectedStyleId: "",
      selectedMaterialId: "",
      selectedResidenceTypeId: "standard",
      selectedCameraAngleId: "wide-angle",
      selectedLightingId: "natural",
      promptResult: null,
      activePromptTab: "chinese",
      lastGeneratedRecord: null,
      isFavoriteCurrent: false,
      isAdvancedOpen: false,
      isPromptEditorOpen: false,
      editChinese: "",
      editEnglish: "",
      copyButtonText: "复制",
      copyWideButtonText: "复制当前提示词",
      resultMotionClass: ""
    });
    wx.removeStorageSync(LAST_SELECTION_KEY);
    this.refreshDerivedOptions();
  },

  goBatch() {
    wx.navigateTo({ url: "/pages/batch/index" });
  },

  goHistory() {
    wx.navigateTo({ url: "/pages/history/index" });
  },

  goProfile() {
    wx.navigateTo({ url: "/pages/profile/index" });
  }
});
