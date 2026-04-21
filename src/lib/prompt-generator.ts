import { Selection, generatePrompts as generatePromptsFromData } from "./data";

export interface PromptResult {
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
      label: "风格",
      labelEn: "Style",
      value: selection.style.name,
      valueEn: selection.style.nameEn,
    },
    {
      label: "柜体",
      labelEn: "Cabinet",
      value: selection.cabinet.name,
      valueEn: selection.cabinet.nameEn,
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

  return { english, chinese, sections };
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
