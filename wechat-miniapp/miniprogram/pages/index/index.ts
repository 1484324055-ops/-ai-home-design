import { loadAssetLibrary } from "../../services/assets";
import type { AssetLibrary, Cabinet, Material, Selection } from "../../utils/data";
import { fallbackLibrary } from "../../utils/data";
import { generatePrompts } from "../../utils/prompt-generator";
import type { PromptResult } from "../../utils/prompt-generator";
import { saveLocalHistory, takePendingHistory } from "../../utils/history";

Page({
  data: {
    library: fallbackLibrary as AssetLibrary,
    spaces: fallbackLibrary.spaces,
    cabinets: fallbackLibrary.cabinets,
    availableCabinets: [] as Cabinet[],
    styles: fallbackLibrary.styles,
    materials: fallbackLibrary.materials,
    availableMaterials: [] as Material[],
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
    activePromptTab: "chinese"
  },

  async onLoad() {
    const { library, message } = await loadAssetLibrary();
    this.setData({
      library,
      spaces: library.spaces,
      cabinets: library.cabinets,
      styles: library.styles,
      materials: library.materials,
      assetMessage: message,
      isLoadingAssets: false
    });
    this.refreshDerivedOptions();
    this.applyPendingHistory();
  },

  onShow() {
    this.applyPendingHistory();
  },

  refreshDerivedOptions() {
    const library = this.data.library as AssetLibrary;
    const availableCabinets = this.data.selectedSpaceId
      ? library.cabinets.filter((cabinet) => cabinet.applicableSpaces.includes(this.data.selectedSpaceId))
      : [];
    const availableMaterials = this.data.selectedStyleId
      ? library.materials.filter((material) => material.applicableStyles.includes(this.data.selectedStyleId))
      : [];
    const isReady = Boolean(
      this.data.selectedSpaceId &&
        this.data.selectedCabinetId &&
        this.data.selectedStyleId &&
        this.data.selectedMaterialId
    );

    this.setData({
      availableCabinets,
      availableMaterials,
      isReady
    });
  },

  selectSpace(event: WechatMiniprogram.TouchEvent) {
    const id = event.currentTarget.dataset.id as string;
    this.setData({
      selectedSpaceId: id,
      selectedCabinetId: "",
      promptResult: null
    });
    this.refreshDerivedOptions();
  },

  selectCabinet(event: WechatMiniprogram.TouchEvent) {
    const id = event.currentTarget.dataset.id as string;
    this.setData({
      selectedCabinetId: id,
      promptResult: null
    });
    this.refreshDerivedOptions();
  },

  selectStyle(event: WechatMiniprogram.TouchEvent) {
    const id = event.currentTarget.dataset.id as string;
    this.setData({
      selectedStyleId: id,
      selectedMaterialId: "",
      promptResult: null
    });
    this.refreshDerivedOptions();
  },

  selectMaterial(event: WechatMiniprogram.TouchEvent) {
    const id = event.currentTarget.dataset.id as string;
    this.setData({
      selectedMaterialId: id,
      promptResult: null
    });
    this.refreshDerivedOptions();
  },

  setPromptTab(event: WechatMiniprogram.TouchEvent) {
    this.setData({
      activePromptTab: event.currentTarget.dataset.tab as string
    });
  },

  generatePrompt() {
    const library = this.data.library as AssetLibrary;
    const selection: Selection = {
      space: library.spaces.find((item) => item.id === this.data.selectedSpaceId)!,
      cabinet: library.cabinets.find((item) => item.id === this.data.selectedCabinetId)!,
      style: library.styles.find((item) => item.id === this.data.selectedStyleId)!,
      material: library.materials.find((item) => item.id === this.data.selectedMaterialId)!,
      residenceType: library.residenceTypes.find((item) => item.id === this.data.selectedResidenceTypeId) || library.residenceTypes[0],
      cameraAngle: library.cameraAngles.find((item) => item.id === this.data.selectedCameraAngleId) || library.cameraAngles[0],
      lighting: library.lightings.find((item) => item.id === this.data.selectedLightingId) || library.lightings[0]
    };

    if (!selection.space || !selection.cabinet || !selection.style || !selection.material) {
      wx.showToast({
        title: "请先选完整",
        icon: "none"
      });
      return;
    }

    const promptResult = generatePrompts(selection);
    this.setData({ promptResult, activePromptTab: "chinese" });
    saveLocalHistory(selection, promptResult);

    wx.showToast({
      title: "已保存到历史",
      icon: "success"
    });
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
      activePromptTab: "chinese"
    });
    this.refreshDerivedOptions();
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
      promptResult: null,
      activePromptTab: "chinese"
    });
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
