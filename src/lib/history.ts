import type { PromptResult, PromptSection } from "./prompt-generator";
import {
  Selection,
  getCabinetById,
  getCameraAngleById,
  getLightingById,
  getMaterialById,
  getResidenceTypeById,
  getSpaceById,
  getStyleById,
} from "./data";

export interface HistoryRecord {
  id: number;
  title: string;
  englishPrompt: string;
  chinesePrompt: string;
  englishNegative: string;
  chineseNegative: string;
  spaceId: string;
  spaceName: string;
  cabinetId: string;
  cabinetName: string;
  styleId: string;
  styleName: string;
  materialId: string;
  materialName: string;
  residenceTypeId: string;
  residenceTypeName: string;
  cameraAngleId: string;
  cameraAngleName: string;
  lightingId: string;
  lightingName: string;
  isFavorite: boolean;
  createdAt: string;
}

export interface HistoryPayload {
  title: string;
  englishPrompt: string;
  chinesePrompt: string;
  englishNegative: string;
  chineseNegative: string;
  spaceId: string;
  spaceName: string;
  cabinetId: string;
  cabinetName: string;
  styleId: string;
  styleName: string;
  materialId: string;
  materialName: string;
  residenceTypeId: string;
  residenceTypeName: string;
  cameraAngleId: string;
  cameraAngleName: string;
  lightingId: string;
  lightingName: string;
}

export const buildHistoryPayload = (
  selection: Selection,
  promptResult: PromptResult
): HistoryPayload => ({
  title: promptResult.title,
  englishPrompt: promptResult.english,
  chinesePrompt: promptResult.chinese,
  englishNegative: promptResult.englishNegative,
  chineseNegative: promptResult.chineseNegative,
  spaceId: selection.space.id,
  spaceName: selection.space.name,
  cabinetId: selection.cabinet.id,
  cabinetName: selection.cabinet.name,
  styleId: selection.style.id,
  styleName: selection.style.name,
  materialId: selection.material.id,
  materialName: selection.material.name,
  residenceTypeId: selection.residenceType.id,
  residenceTypeName: selection.residenceType.name,
  cameraAngleId: selection.cameraAngle.id,
  cameraAngleName: selection.cameraAngle.name,
  lightingId: selection.lighting.id,
  lightingName: selection.lighting.name,
});

const buildSectionsFromRecord = (record: HistoryRecord): PromptSection[] => [
  {
    label: "住宅",
    labelEn: "Residence",
    value: record.residenceTypeName,
    valueEn: record.residenceTypeName,
  },
  {
    label: "空间",
    labelEn: "Space",
    value: record.spaceName,
    valueEn: record.spaceName,
  },
  {
    label: "柜体",
    labelEn: "Cabinet",
    value: record.cabinetName,
    valueEn: record.cabinetName,
  },
  {
    label: "风格",
    labelEn: "Style",
    value: record.styleName,
    valueEn: record.styleName,
  },
  {
    label: "材质",
    labelEn: "Material",
    value: record.materialName,
    valueEn: record.materialName,
  },
  {
    label: "光影",
    labelEn: "Lighting",
    value: record.lightingName,
    valueEn: record.lightingName,
  },
  {
    label: "镜头",
    labelEn: "Camera",
    value: record.cameraAngleName,
    valueEn: record.cameraAngleName,
  },
];

export const promptResultFromHistory = (record: HistoryRecord): PromptResult => ({
  title: record.title,
  english: record.englishPrompt,
  chinese: record.chinesePrompt,
  englishNegative: record.englishNegative,
  chineseNegative: record.chineseNegative,
  sections: buildSectionsFromRecord(record),
});

export const selectionFromHistory = (record: HistoryRecord): Selection | null => {
  const space = getSpaceById(record.spaceId);
  const cabinet = getCabinetById(record.cabinetId);
  const style = getStyleById(record.styleId);
  const material = getMaterialById(record.materialId);
  const residenceType = getResidenceTypeById(record.residenceTypeId);
  const cameraAngle = getCameraAngleById(record.cameraAngleId);
  const lighting = getLightingById(record.lightingId);

  if (!space || !cabinet || !style || !material || !residenceType || !cameraAngle || !lighting) {
    return null;
  }

  return {
    space,
    cabinet,
    style,
    material,
    residenceType,
    cameraAngle,
    lighting,
  };
};

export const sortHistories = (records: HistoryRecord[]) =>
  [...records].sort((left, right) => {
    if (left.isFavorite !== right.isFavorite) {
      return Number(right.isFavorite) - Number(left.isFavorite);
    }

    return new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime();
  });
