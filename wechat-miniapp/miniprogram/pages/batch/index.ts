import { loadAssetLibrary } from "../../services/assets";
import type {
  AssetLibrary,
  Cabinet,
  Material,
  Selection,
  Space,
  Style,
  ResidenceType,
  CameraAngle,
  Lighting
} from "../../utils/data";
import { fallbackLibrary } from "../../utils/data";
import { generatePrompts } from "../../utils/prompt-generator";
import type { PromptResult } from "../../utils/prompt-generator";
import { saveLocalHistory } from "../../utils/history";

const MAX_BATCH_RESULTS = 60;

type CabinetCard = Cabinet & {
  isSelected: boolean;
  icon: string;
};

type SpaceCard = Space & {
  initial: string;
  icon: string;
  caption: string;
  statusLabel: string;
  cabinetCount: number;
  selectedCount: number;
  isSelected: boolean;
  cabinets: CabinetCard[];
};

type SelectedSpaceGroup = SpaceCard;

type BatchPromptItem = PromptResult & {
  id: string;
  spaceName: string;
  cabinetName: string;
};

const getDefaultResidenceType = (library: AssetLibrary) => library.residenceTypes[0];
const getDefaultCameraAngle = (library: AssetLibrary) => library.cameraAngles[0];
const getDefaultLighting = (library: AssetLibrary) => library.lightings[0];

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

const getSpaceIcon = (id: string) => SPACE_ICONS[id] || "🏠";
const getCabinetIcon = (id: string) => CABINET_ICONS[id] || "🗄";

Page({
  data: {
    library: fallbackLibrary as AssetLibrary,
    styles: fallbackLibrary.styles,
    materials: [] as Material[],
    residenceTypes: fallbackLibrary.residenceTypes as ResidenceType[],
    cameraAngles: fallbackLibrary.cameraAngles as CameraAngle[],
    lightings: fallbackLibrary.lightings as Lighting[],
    spaceCards: [] as SpaceCard[],
    selectedSpaceGroups: [] as SelectedSpaceGroup[],
    selectedStyleId: "",
    selectedMaterialId: "",
    selectedResidenceTypeId: "standard",
    selectedCameraAngleId: "wide-angle",
    selectedLightingId: "natural",
    selectedSpaceIds: [] as string[],
    selectedCabinetIdsBySpace: {} as Record<string, string[]>,
    comboCount: 0,
    results: [] as BatchPromptItem[],
    isReady: false,
    isLoadingAssets: true,
    assetMessage: "",
    isAdvancedOpen: false,
    copyAllText: "复制全部",
    copiedResultId: "",
    resultMotionClass: ""
  },

  async onLoad() {
    const { library, message } = await loadAssetLibrary();
    this.setData({
      library,
      styles: library.styles,
      materials: [],
      residenceTypes: library.residenceTypes,
      cameraAngles: library.cameraAngles,
      lightings: library.lightings,
      assetMessage: message,
      isLoadingAssets: false
    });
    this.refreshViewState();
  },

  refreshViewState() {
    const library = this.data.library as AssetLibrary;
    const selectedSpaceIds = this.data.selectedSpaceIds as string[];
    const selectedCabinetIdsBySpace = this.data.selectedCabinetIdsBySpace as Record<string, string[]>;
    const selectedStyleId = this.data.selectedStyleId as string;
    const selectedMaterialId = this.data.selectedMaterialId as string;

    const materials = selectedStyleId
      ? library.materials.filter((material) => material.applicableStyles.includes(selectedStyleId))
      : [];

    const spaceCards: SpaceCard[] = library.spaces.map((space) => {
      const cabinets = this.getCabinetsForSpace(space.id);
      const selectedCabinetIds = selectedCabinetIdsBySpace[space.id] || [];
      const selectedCount = selectedCabinetIds.length;
      const cabinetCards = cabinets.map((cabinet) => ({
        ...cabinet,
        icon: getCabinetIcon(cabinet.id),
        isSelected: selectedCabinetIds.includes(cabinet.id)
      }));

      return {
        ...space,
        initial: space.name.slice(0, 1),
        icon: getSpaceIcon(space.id),
        caption: selectedSpaceIds.includes(space.id)
          ? `${selectedCount}/${cabinets.length} 已选`
          : `${cabinets.length} 个柜体`,
        statusLabel: selectedCount > 0 ? `${selectedCount} 已选` : `${cabinets.length} 可选`,
        cabinetCount: cabinets.length,
        selectedCount,
        isSelected: selectedSpaceIds.includes(space.id),
        cabinets: cabinetCards
      };
    });

    const selectedSpaceGroups: SelectedSpaceGroup[] = spaceCards.filter((space) => space.isSelected);

    const comboCount = selectedSpaceGroups.reduce((total, group) => total + group.selectedCount, 0);
    const isReady = Boolean(selectedStyleId && selectedMaterialId && comboCount > 0);

    this.setData({
      materials,
      spaceCards,
      selectedSpaceGroups,
      comboCount,
      isReady
    });
  },

  getCabinetsForSpace(spaceId: string) {
    const library = this.data.library as AssetLibrary;
    return library.cabinets.filter((cabinet) => cabinet.applicableSpaces.includes(spaceId));
  },

  selectStyle(event: WechatMiniprogram.TouchEvent) {
    const id = event.currentTarget.dataset.id as string;
    this.setData({
      selectedStyleId: id,
      selectedMaterialId: "",
      results: [],
      copyAllText: "复制全部",
      copiedResultId: "",
      resultMotionClass: ""
    });
    this.refreshViewState();
  },

  selectMaterial(event: WechatMiniprogram.TouchEvent) {
    const id = event.currentTarget.dataset.id as string;
    this.setData({
      selectedMaterialId: id,
      results: [],
      copyAllText: "复制全部",
      copiedResultId: "",
      resultMotionClass: ""
    });
    this.refreshViewState();
  },

  toggleAdvanced() {
    this.setData({
      isAdvancedOpen: !this.data.isAdvancedOpen
    });
  },

  selectResidenceType(event: WechatMiniprogram.TouchEvent) {
    this.setData({
      selectedResidenceTypeId: event.currentTarget.dataset.id as string,
      results: []
    });
  },

  selectCameraAngle(event: WechatMiniprogram.TouchEvent) {
    this.setData({
      selectedCameraAngleId: event.currentTarget.dataset.id as string,
      results: []
    });
  },

  selectLighting(event: WechatMiniprogram.TouchEvent) {
    this.setData({
      selectedLightingId: event.currentTarget.dataset.id as string,
      results: []
    });
  },

  toggleSpace(event: WechatMiniprogram.TouchEvent) {
    const id = event.currentTarget.dataset.id as string;
    const selectedSpaceIds = [...(this.data.selectedSpaceIds as string[])];
    const selectedCabinetIdsBySpace = {
      ...(this.data.selectedCabinetIdsBySpace as Record<string, string[]>)
    };

    if (selectedSpaceIds.includes(id)) {
      this.setData({
        selectedSpaceIds: selectedSpaceIds.filter((spaceId) => spaceId !== id),
        selectedCabinetIdsBySpace: {
          ...selectedCabinetIdsBySpace,
          [id]: []
        },
        results: [],
        copyAllText: "复制全部",
        copiedResultId: "",
        resultMotionClass: ""
      });
    } else {
      this.setData({
        selectedSpaceIds: [...selectedSpaceIds, id],
        selectedCabinetIdsBySpace,
        results: [],
        copyAllText: "复制全部",
        copiedResultId: "",
        resultMotionClass: ""
      });
    }

    this.refreshViewState();
  },

  selectAllSpaces() {
    const library = this.data.library as AssetLibrary;
    const selectedCabinetIdsBySpace = library.spaces.reduce<Record<string, string[]>>((result, space) => {
      result[space.id] = this.getCabinetsForSpace(space.id).map((cabinet) => cabinet.id);
      return result;
    }, {});

    this.setData({
      selectedSpaceIds: library.spaces.map((space) => space.id),
      selectedCabinetIdsBySpace,
      results: [],
      copyAllText: "复制全部",
      copiedResultId: "",
      resultMotionClass: ""
    });
    this.refreshViewState();
  },

  clearSpaces() {
    this.setData({
      selectedSpaceIds: [],
      selectedCabinetIdsBySpace: {},
      results: [],
      copyAllText: "复制全部",
      copiedResultId: "",
      resultMotionClass: ""
    });
    this.refreshViewState();
  },

  toggleCabinet(event: WechatMiniprogram.TouchEvent) {
    const spaceId = event.currentTarget.dataset.spaceId as string;
    const cabinetId = event.currentTarget.dataset.cabinetId as string;
    let selectedSpaceIds = [...(this.data.selectedSpaceIds as string[])];
    const selectedCabinetIdsBySpace = {
      ...(this.data.selectedCabinetIdsBySpace as Record<string, string[]>)
    };
    const currentIds = selectedCabinetIdsBySpace[spaceId] || [];

    selectedCabinetIdsBySpace[spaceId] = currentIds.includes(cabinetId)
      ? currentIds.filter((id) => id !== cabinetId)
      : [...currentIds, cabinetId];

    if (selectedCabinetIdsBySpace[spaceId].length > 0 && !selectedSpaceIds.includes(spaceId)) {
      selectedSpaceIds = [...selectedSpaceIds, spaceId];
    }

    if (selectedCabinetIdsBySpace[spaceId].length === 0) {
      selectedSpaceIds = selectedSpaceIds.filter((id) => id !== spaceId);
    }

    this.setData({
      selectedSpaceIds,
      selectedCabinetIdsBySpace,
      results: [],
      copyAllText: "复制全部",
      copiedResultId: "",
      resultMotionClass: ""
    });
    this.refreshViewState();
  },

  toggleAllCabinetsForSpace(event: WechatMiniprogram.TouchEvent) {
    const spaceId = event.currentTarget.dataset.spaceId as string;
    const cabinets = this.getCabinetsForSpace(spaceId);
    const selectedCabinetIdsBySpace = {
      ...(this.data.selectedCabinetIdsBySpace as Record<string, string[]>)
    };
    const currentIds = selectedCabinetIdsBySpace[spaceId] || [];
    let selectedSpaceIds = [...(this.data.selectedSpaceIds as string[])];

    selectedCabinetIdsBySpace[spaceId] =
      currentIds.length === cabinets.length ? [] : cabinets.map((cabinet) => cabinet.id);

    if (selectedCabinetIdsBySpace[spaceId].length > 0 && !selectedSpaceIds.includes(spaceId)) {
      selectedSpaceIds = [...selectedSpaceIds, spaceId];
    }

    if (selectedCabinetIdsBySpace[spaceId].length === 0) {
      selectedSpaceIds = selectedSpaceIds.filter((id) => id !== spaceId);
    }

    this.setData({
      selectedSpaceIds,
      selectedCabinetIdsBySpace,
      results: [],
      copyAllText: "复制全部",
      copiedResultId: "",
      resultMotionClass: ""
    });
    this.refreshViewState();
  },

  generateBatch() {
    const library = this.data.library as AssetLibrary;
    const style = library.styles.find((item) => item.id === this.data.selectedStyleId) as Style | undefined;
    const material = library.materials.find((item) => item.id === this.data.selectedMaterialId) as Material | undefined;

    if (!style || !material || !(this.data.comboCount as number)) {
      wx.showToast({
        title: "请先选完整",
        icon: "none"
      });
      return;
    }

    const combos = this.buildSelections(style, material).slice(0, MAX_BATCH_RESULTS);
    const results: BatchPromptItem[] = combos.map((selection) => {
      const promptResult = generatePrompts(selection);
      saveLocalHistory(selection, promptResult);

      return {
        ...promptResult,
        id: `${selection.space.id}-${selection.cabinet.id}`,
        spaceName: selection.space.name,
        cabinetName: selection.cabinet.name
      };
    });

    this.setData({
      results,
      copyAllText: "复制全部",
      copiedResultId: "",
      resultMotionClass: "result-entering"
    });
    setTimeout(() => this.setData({ resultMotionClass: "" }), 320);

    wx.showToast({
      title: (this.data.comboCount as number) > MAX_BATCH_RESULTS ? "已生成前60条" : "批量生成完成",
      icon: "success"
    });
  },

  buildSelections(style: Style, material: Material): Selection[] {
    const library = this.data.library as AssetLibrary;
    const selectedSpaceIds = this.data.selectedSpaceIds as string[];
    const selectedCabinetIdsBySpace = this.data.selectedCabinetIdsBySpace as Record<string, string[]>;
    const residenceType =
      library.residenceTypes.find((item) => item.id === this.data.selectedResidenceTypeId) ||
      getDefaultResidenceType(library);
    const cameraAngle =
      library.cameraAngles.find((item) => item.id === this.data.selectedCameraAngleId) ||
      getDefaultCameraAngle(library);
    const lighting =
      library.lightings.find((item) => item.id === this.data.selectedLightingId) ||
      getDefaultLighting(library);

    return selectedSpaceIds.flatMap((spaceId) => {
      const space = library.spaces.find((item) => item.id === spaceId);
      const cabinetIds = selectedCabinetIdsBySpace[spaceId] || [];

      if (!space) {
        return [];
      }

      return cabinetIds
        .map((cabinetId) => {
          const cabinet = library.cabinets.find((item) => item.id === cabinetId);

          if (!cabinet) {
            return null;
          }

          return {
            space,
            cabinet,
            style,
            material,
            residenceType,
            cameraAngle,
            lighting
          };
        })
        .filter(Boolean) as Selection[];
    });
  },

  copyOne(event: WechatMiniprogram.TouchEvent) {
    const id = event.currentTarget.dataset.id as string;
    const record = (this.data.results as BatchPromptItem[]).find((item) => item.id === id);

    if (!record) {
      return;
    }

    wx.setClipboardData({
      data: record.chinese,
      success: () => {
        this.setData({ copiedResultId: id });
        setTimeout(() => this.setData({ copiedResultId: "" }), 1400);
        wx.showToast({ title: "已复制", icon: "success" });
      }
    });
  },

  copyAll() {
    const results = this.data.results as BatchPromptItem[];

    if (!results.length) {
      return;
    }

    wx.setClipboardData({
      data: results.map((item, index) => `${index + 1}. ${item.title}\n${item.chinese}`).join("\n\n---\n\n"),
      success: () => {
        this.setData({ copyAllText: "已复制" });
        setTimeout(() => this.setData({ copyAllText: "复制全部" }), 1400);
        wx.showToast({ title: "已复制全部", icon: "success" });
      }
    });
  },

  resetBatch() {
    this.setData({
      selectedStyleId: "",
      selectedMaterialId: "",
      selectedResidenceTypeId: "standard",
      selectedCameraAngleId: "wide-angle",
      selectedLightingId: "natural",
      selectedSpaceIds: [],
      selectedCabinetIdsBySpace: {},
      results: [],
      isAdvancedOpen: false,
      copyAllText: "复制全部",
      copiedResultId: "",
      resultMotionClass: ""
    });
    this.refreshViewState();
  }
});
