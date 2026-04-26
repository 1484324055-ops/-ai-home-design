import { loadAssetLibrary } from "../../services/assets";
import type { AssetLibrary, Cabinet, Material, Selection, Space, Style } from "../../utils/data";
import { fallbackLibrary } from "../../utils/data";
import { generatePrompts } from "../../utils/prompt-generator";
import type { PromptResult } from "../../utils/prompt-generator";
import { saveLocalHistory } from "../../utils/history";

const MAX_BATCH_RESULTS = 60;

type SpaceCard = Space & {
  initial: string;
  cabinetCount: number;
  selectedCount: number;
  isSelected: boolean;
};

type CabinetCard = Cabinet & {
  isSelected: boolean;
};

type SelectedSpaceGroup = SpaceCard & {
  cabinets: CabinetCard[];
};

type BatchPromptItem = PromptResult & {
  id: string;
  spaceName: string;
  cabinetName: string;
};

const getDefaultResidenceType = (library: AssetLibrary) => library.residenceTypes[0];
const getDefaultCameraAngle = (library: AssetLibrary) => library.cameraAngles[0];
const getDefaultLighting = (library: AssetLibrary) => library.lightings[0];

Page({
  data: {
    library: fallbackLibrary as AssetLibrary,
    styles: fallbackLibrary.styles,
    materials: [] as Material[],
    spaceCards: [] as SpaceCard[],
    selectedSpaceGroups: [] as SelectedSpaceGroup[],
    selectedStyleId: "",
    selectedMaterialId: "",
    selectedSpaceIds: [] as string[],
    selectedCabinetIdsBySpace: {} as Record<string, string[]>,
    comboCount: 0,
    results: [] as BatchPromptItem[],
    isReady: false,
    isLoadingAssets: true,
    assetMessage: ""
  },

  async onLoad() {
    const { library, message } = await loadAssetLibrary();
    this.setData({
      library,
      styles: library.styles,
      materials: [],
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
      const selectedCount = selectedCabinetIdsBySpace[space.id]?.length || 0;

      return {
        ...space,
        initial: space.name.slice(0, 1),
        cabinetCount: cabinets.length,
        selectedCount,
        isSelected: selectedSpaceIds.includes(space.id)
      };
    });

    const selectedSpaceGroups: SelectedSpaceGroup[] = spaceCards
      .filter((space) => space.isSelected)
      .map((space) => {
        const selectedCabinetIds = selectedCabinetIdsBySpace[space.id] || [];
        return {
          ...space,
          cabinets: this.getCabinetsForSpace(space.id).map((cabinet) => ({
            ...cabinet,
            isSelected: selectedCabinetIds.includes(cabinet.id)
          }))
        };
      });

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
      results: []
    });
    this.refreshViewState();
  },

  selectMaterial(event: WechatMiniprogram.TouchEvent) {
    const id = event.currentTarget.dataset.id as string;
    this.setData({
      selectedMaterialId: id,
      results: []
    });
    this.refreshViewState();
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
        results: []
      });
    } else {
      this.setData({
        selectedSpaceIds: [...selectedSpaceIds, id],
        selectedCabinetIdsBySpace,
        results: []
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
      results: []
    });
    this.refreshViewState();
  },

  clearSpaces() {
    this.setData({
      selectedSpaceIds: [],
      selectedCabinetIdsBySpace: {},
      results: []
    });
    this.refreshViewState();
  },

  toggleCabinet(event: WechatMiniprogram.TouchEvent) {
    const spaceId = event.currentTarget.dataset.spaceId as string;
    const cabinetId = event.currentTarget.dataset.cabinetId as string;
    const selectedCabinetIdsBySpace = {
      ...(this.data.selectedCabinetIdsBySpace as Record<string, string[]>)
    };
    const currentIds = selectedCabinetIdsBySpace[spaceId] || [];

    selectedCabinetIdsBySpace[spaceId] = currentIds.includes(cabinetId)
      ? currentIds.filter((id) => id !== cabinetId)
      : [...currentIds, cabinetId];

    this.setData({
      selectedCabinetIdsBySpace,
      results: []
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

    selectedCabinetIdsBySpace[spaceId] =
      currentIds.length === cabinets.length ? [] : cabinets.map((cabinet) => cabinet.id);

    this.setData({
      selectedCabinetIdsBySpace,
      results: []
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

    this.setData({ results });

    wx.showToast({
      title: (this.data.comboCount as number) > MAX_BATCH_RESULTS ? "已生成前60条" : "批量生成完成",
      icon: "success"
    });
  },

  buildSelections(style: Style, material: Material): Selection[] {
    const library = this.data.library as AssetLibrary;
    const selectedSpaceIds = this.data.selectedSpaceIds as string[];
    const selectedCabinetIdsBySpace = this.data.selectedCabinetIdsBySpace as Record<string, string[]>;
    const residenceType = getDefaultResidenceType(library);
    const cameraAngle = getDefaultCameraAngle(library);
    const lighting = getDefaultLighting(library);

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
      success: () => wx.showToast({ title: "已复制", icon: "success" })
    });
  },

  copyAll() {
    const results = this.data.results as BatchPromptItem[];

    if (!results.length) {
      return;
    }

    wx.setClipboardData({
      data: results.map((item, index) => `${index + 1}. ${item.title}\n${item.chinese}`).join("\n\n---\n\n"),
      success: () => wx.showToast({ title: "已复制全部", icon: "success" })
    });
  },

  resetBatch() {
    this.setData({
      selectedStyleId: "",
      selectedMaterialId: "",
      selectedSpaceIds: [],
      selectedCabinetIdsBySpace: {},
      results: []
    });
    this.refreshViewState();
  }
});
