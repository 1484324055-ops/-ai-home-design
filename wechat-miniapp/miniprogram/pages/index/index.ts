import { loadAssetLibrary } from "../../services/assets";
import type { AssetLibrary, Cabinet, Material, Selection, ResidenceType, CameraAngle, Lighting } from "../../utils/data";
import { fallbackLibrary } from "../../utils/data";
import { generatePrompts } from "../../utils/prompt-generator";
import type { PromptResult } from "../../utils/prompt-generator";
import {
  saveLocalHistory,
  takePendingHistory,
  updateLocalHistoryFavorite
} from "../../utils/history";
import type { LocalHistoryRecord } from "../../utils/history";

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

type LastSelectionState = {
  selectedSpaceId?: string;
  selectedCabinetId?: string;
  selectedStyleId?: string;
  selectedMaterialId?: string;
  selectedResidenceTypeId?: string;
  selectedCameraAngleId?: string;
  selectedLightingId?: string;
};

const emptyChips: SelectionChip[] = [
  { label: "空间", value: "未选择", state: "empty" },
  { label: "柜体", value: "未选择", state: "empty" },
  { label: "风格", value: "未选择", state: "empty" },
  { label: "材质", value: "未选择", state: "empty" }
];

Page({
  data: {
    library: fallbackLibrary as AssetLibrary,
    spaces: fallbackLibrary.spaces,
    cabinets: fallbackLibrary.cabinets,
    availableCabinets: [] as Cabinet[],
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
    isPlannerPinned: false
  },

  async onLoad() {
    const { library, message } = await loadAssetLibrary();
    this.setData({
      library,
      spaces: library.spaces,
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
    const selectedSpace = library.spaces.find((item) => item.id === this.data.selectedSpaceId);
    const selectedCabinet = library.cabinets.find((item) => item.id === this.data.selectedCabinetId);
    const selectedStyle = library.styles.find((item) => item.id === this.data.selectedStyleId);
    const selectedMaterial = library.materials.find((item) => item.id === this.data.selectedMaterialId);
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
      availableCabinets,
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
      isFavoriteCurrent: false
    });
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
      isFavoriteCurrent: Boolean(record.isFavorite)
    });
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
      isAdvancedOpen: false
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
