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

const buildChinesePrompt = (selection: Selection) =>
  [
    `请生成一张${selection.residenceType.name}尺度的${selection.space.name}全屋定制效果图`,
    `整体以${selection.style.name}为设计基调`,
    `重点展示${selection.cabinet.name}与${selection.material.name}的组合关系`,
    `画面采用${selection.cameraAngle.name}构图，呈现${selection.lighting.name}氛围`,
    "突出柜体比例、材质肌理、收纳秩序、空间层次和真实居住感",
    "整体视觉高级、统一、干净，具备建筑杂志级的空间表达",
    "8K超清，写实室内设计渲染，适合高质量生图模型直接使用",
  ].join("，") + "。";

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
