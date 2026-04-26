import type { Selection } from "./data";
import type { PromptResult } from "./prompt-generator";

const HISTORY_STORAGE_KEY = "ai_home_design_local_histories";
const PENDING_LOAD_KEY = "ai_home_design_pending_history";
const MAX_HISTORY_COUNT = 80;

export interface LocalHistoryRecord {
  id: string;
  title: string;
  chinese: string;
  english: string;
  createdAt: number;
  isFavorite?: boolean;
  spaceId: string;
  spaceName: string;
  cabinetId: string;
  cabinetName: string;
  styleId: string;
  styleName: string;
  materialId: string;
  materialName: string;
  residenceTypeId: string;
  cameraAngleId: string;
  lightingId: string;
}

export const getLocalHistories = (): LocalHistoryRecord[] => {
  try {
    return (wx.getStorageSync(HISTORY_STORAGE_KEY) || []) as LocalHistoryRecord[];
  } catch (error) {
    console.error("Read local histories failed:", error);
    return [];
  }
};

export const saveLocalHistory = (
  selection: Selection,
  result: PromptResult,
  options: { isFavorite?: boolean } = {}
) => {
  const record: LocalHistoryRecord = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title: result.title,
    chinese: result.chinese,
    english: result.english,
    createdAt: Date.now(),
    isFavorite: Boolean(options.isFavorite),
    spaceId: selection.space.id,
    spaceName: selection.space.name,
    cabinetId: selection.cabinet.id,
    cabinetName: selection.cabinet.name,
    styleId: selection.style.id,
    styleName: selection.style.name,
    materialId: selection.material.id,
    materialName: selection.material.name,
    residenceTypeId: selection.residenceType.id,
    cameraAngleId: selection.cameraAngle.id,
    lightingId: selection.lighting.id
  };

  const nextHistories = [record, ...getLocalHistories()].slice(0, MAX_HISTORY_COUNT);
  wx.setStorageSync(HISTORY_STORAGE_KEY, nextHistories);
  return record;
};

export const updateLocalHistoryFavorite = (id: string, isFavorite: boolean) => {
  const nextHistories = getLocalHistories().map((record) =>
    record.id === id ? { ...record, isFavorite } : record
  );
  wx.setStorageSync(HISTORY_STORAGE_KEY, nextHistories);
  return nextHistories.find((record) => record.id === id) || null;
};

export const updateLocalHistoryPrompts = (id: string, result: PromptResult) => {
  const nextHistories = getLocalHistories().map((record) =>
    record.id === id
      ? {
          ...record,
          title: result.title,
          chinese: result.chinese,
          english: result.english
        }
      : record
  );
  wx.setStorageSync(HISTORY_STORAGE_KEY, nextHistories);
  return nextHistories.find((record) => record.id === id) || null;
};

export const deleteLocalHistory = (id: string) => {
  const nextHistories = getLocalHistories().filter((record) => record.id !== id);
  wx.setStorageSync(HISTORY_STORAGE_KEY, nextHistories);
  return nextHistories;
};

export const setPendingHistory = (record: LocalHistoryRecord) => {
  wx.setStorageSync(PENDING_LOAD_KEY, record);
};

export const takePendingHistory = (): LocalHistoryRecord | null => {
  const record = wx.getStorageSync(PENDING_LOAD_KEY) as LocalHistoryRecord | "";
  if (!record) {
    return null;
  }

  wx.removeStorageSync(PENDING_LOAD_KEY);
  return record;
};

export const formatHistoryTime = (timestamp: number) => {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = `${date.getHours()}`.padStart(2, "0");
  const minute = `${date.getMinutes()}`.padStart(2, "0");

  return `${month}/${day} ${hour}:${minute}`;
};
