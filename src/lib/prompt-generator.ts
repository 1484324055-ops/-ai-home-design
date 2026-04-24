import { Selection, buildEnglishPrompt } from "./data";

export interface PromptResult {
  title: string;
  english: string;
  chinese: string;
  sections: PromptSection[];
}

export interface PromptSection {
  label: string;
  labelEn: string;
  value: string;
  valueEn: string;
}

const getPromptZh = (item: { name: string; promptZh?: string }) => item.promptZh || item.name;

const buildChinesePrompt = (selection: Selection) =>
  [
    `请生成一张${getPromptZh(selection.residenceType)}的${getPromptZh(selection.space)}全屋定制效果图。`,
    `整体以${getPromptZh(selection.style)}为设计基调，重点呈现${getPromptZh(selection.cabinet)}。`,
    `材质与细节采用${getPromptZh(selection.material)}，画面需要突出柜体比例、收纳秩序、材质肌理、空间层次和真实居住感。`,
    `镜头采用${getPromptZh(selection.cameraAngle)}，光影为${getPromptZh(selection.lighting)}。`,
    "整体视觉应高级、统一、干净，接近建筑杂志和专业室内设计渲染图质感，8K超清，适合高质量生图模型直接使用。",
  ].join("");

export const generatePrompts = (selection: Selection): PromptResult => {
  const english = buildEnglishPrompt(selection);
  const chinese = buildChinesePrompt(selection);

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

  return {
    title: `${selection.space.name} · ${selection.style.name} · ${selection.cabinet.name}方案`,
    english,
    chinese,
    sections,
  };
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Failed to copy:", error);
    return false;
  }
};
