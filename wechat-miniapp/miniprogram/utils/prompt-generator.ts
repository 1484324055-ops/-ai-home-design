import type { Selection } from "./data";

export interface PromptResult {
  title: string;
  chinese: string;
  english: string;
}

const getZh = (item: { name: string; promptZh?: string }) => item.promptZh || item.name;
const getEn = (item: { nameEn: string; promptEn?: string }) => item.promptEn || item.nameEn;

export const generatePrompts = (selection: Selection): PromptResult => {
  const title = `${selection.space.name} · ${selection.style.name} · ${selection.cabinet.name}方案`;
  const chinese = [
    `请生成一张${getZh(selection.residenceType)}的${getZh(selection.space)}全屋定制效果图。`,
    `整体以${getZh(selection.style)}为设计基调，重点呈现${getZh(selection.cabinet)}。`,
    `材质与细节采用${getZh(selection.material)}，画面需要突出柜体比例、收纳秩序、材质肌理、空间层次和真实居住感。`,
    `镜头采用${getZh(selection.cameraAngle)}，光影为${getZh(selection.lighting)}。`,
    "整体视觉应高级、统一、干净，接近建筑杂志和专业室内设计渲染图质感，8K超清，适合高质量生图模型直接使用。"
  ].join("");

  const english = [
    `Generate a photorealistic custom cabinetry rendering for ${getEn(selection.space)} in ${getEn(selection.residenceType)}.`,
    `Use ${getEn(selection.style)} as the design direction, with a clear focus on ${getEn(selection.cabinet)}.`,
    `Materials and details should emphasize ${getEn(selection.material)}.`,
    `Compose the image with ${getEn(selection.cameraAngle)} and ${getEn(selection.lighting)}.`,
    "custom built-in cabinetry, refined storage composition, realistic residential scale, 8k, photorealistic interior render, editorial quality"
  ].join(" ");

  return {
    title,
    chinese,
    english
  };
};
