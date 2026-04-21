import { Selection, generatePrompts as generatePromptsFromData } from "./data";

export interface PromptResult {
  title: string;
  english: string;
  chinese: string;
  englishNegative: string;
  chineseNegative: string;
  sections: PromptSection[];
}

export interface PromptSection {
  label: string;
  labelEn: string;
  value: string;
  valueEn: string;
}

const englishNegativeParts = [
  "blurry",
  "low resolution",
  "distorted perspective",
  "warped geometry",
  "incorrect cabinet proportions",
  "messy composition",
  "oversaturated colors",
  "underexposed scene",
  "harsh shadows",
  "duplicate furniture",
  "people",
  "text",
  "watermark",
  "logo",
];

const chineseNegativeParts = [
  "模糊",
  "低清晰度",
  "透视错误",
  "空间比例失真",
  "柜体结构错误",
  "构图杂乱",
  "颜色过饱和",
  "画面过暗",
  "阴影生硬",
  "家具重复",
  "人物",
  "文字",
  "水印",
  "Logo",
];

export const generatePrompts = (selection: Selection): PromptResult => {
  const { english, chinese } = generatePromptsFromData(selection);

  const sections: PromptSection[] = [
    {
      label: "住宅",
      labelEn: "Residence",
      value: selection.residenceType.name,
      valueEn: selection.residenceType.nameEn,
    },
    {
      label: "空间",
      labelEn: "Space",
      value: selection.space.name,
      valueEn: selection.space.nameEn,
    },
    {
      label: "柜体",
      labelEn: "Cabinet",
      value: selection.cabinet.name,
      valueEn: selection.cabinet.nameEn,
    },
    {
      label: "风格",
      labelEn: "Style",
      value: selection.style.name,
      valueEn: selection.style.nameEn,
    },
    {
      label: "材质",
      labelEn: "Material",
      value: selection.material.name,
      valueEn: selection.material.nameEn,
    },
    {
      label: "光影",
      labelEn: "Lighting",
      value: selection.lighting.name,
      valueEn: selection.lighting.nameEn,
    },
    {
      label: "镜头",
      labelEn: "Camera",
      value: selection.cameraAngle.name,
      valueEn: selection.cameraAngle.nameEn,
    },
  ];

  const title = `${selection.space.name} · ${selection.style.name} · ${selection.cabinet.name}`;

  return {
    title,
    english,
    chinese,
    englishNegative: englishNegativeParts.join(", "),
    chineseNegative: chineseNegativeParts.join("，"),
    sections,
  };
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Failed to copy:", err);
    return false;
  }
};
