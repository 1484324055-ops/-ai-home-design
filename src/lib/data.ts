export interface Space {
  id: string;
  name: string;
  nameEn: string;
}

export const spaces: Space[] = [
  { id: "dining-room", name: "餐厅", nameEn: "Dining room, open plan dining area" },
  { id: "balcony", name: "阳台", nameEn: "Enclosed balcony, laundry area, leisure balcony" },
  { id: "entrance", name: "玄关", nameEn: "Entrance hall, foyer area, shoe cabinet design" },
  { id: "kids-room", name: "儿童房", nameEn: "Kids bedroom, children's playroom" },
  { id: "ldk", name: "LDK一体化", nameEn: "LDK open concept, living dining kitchen connected space" },
  { id: "walk-in-closet", name: "衣帽间", nameEn: "Walk-in closet, dressing room, open shelving system" },
  { id: "master-bedroom", name: "主卧", nameEn: "Master bedroom interior design, calm and comfortable residential space" },
  { id: "study", name: "书房", nameEn: "Minimalist home office interior, built-in storage and desk" },
  { id: "vertical-living", name: "竖厅", nameEn: "Modern living room interior, elongated layout, clear visual axis" },
  { id: "horizontal-living", name: "横厅", nameEn: "Modern minimalist living room interior, wide open-plan layout" },
  { id: "kitchen", name: "厨房", nameEn: "Modern open-plan kitchen interior with island" },
  { id: "multi-functional", name: "多功能房", nameEn: "Multi-functional room, guest room cum study, tatami layout" },
  { id: "secondary-bedroom", name: "次卧", nameEn: "Secondary bedroom, cozy and functional" },
  {
    id: "enclosed-kitchen",
    name: "封闭式厨房",
    nameEn:
      "Modern enclosed kitchen interior, separate room with glass door, efficient U-shaped layout, compact scale, floor-to-ceiling cabinets, quartz countertops, integrated appliances, bright and functional",
  },
  {
    id: "semi-enclosed-kitchen",
    name: "半封闭厨房",
    nameEn:
      "Semi-enclosed kitchen with floor-to-ceiling glass sliding doors, narrow black metal frame glass partition, visible kitchen interior, L-shaped layout with small operational island, modern luxury style, visual transparency",
  },
];

export interface Cabinet {
  id: string;
  name: string;
  nameEn: string;
  applicableSpaces: string[];
}

export const cabinets: Cabinet[] = [
  {
    id: "floating-tv",
    name: "悬浮电视柜",
    nameEn: "Floating TV cabinet, wall-mounted, minimalist design, hidden storage",
    applicableSpaces: ["vertical-living", "horizontal-living", "master-bedroom"],
  },
  {
    id: "floor-wardrobe",
    name: "一门到顶衣柜",
    nameEn: "Floor-to-ceiling wardrobe, seamless minimalist doors, handleless design",
    applicableSpaces: ["master-bedroom", "secondary-bedroom", "kids-room"],
  },
  {
    id: "glass-wardrobe",
    name: "玻璃衣柜",
    nameEn: "Glass display cabinet with integrated LED lighting, aluminum frame doors",
    applicableSpaces: ["walk-in-closet", "master-bedroom"],
  },
  {
    id: "island",
    name: "岛台",
    nameEn: "Kitchen island with marble waterfall countertop, breakfast bar functionality",
    applicableSpaces: ["ldk", "dining-room", "kitchen"],
  },
  {
    id: "bookshelf",
    name: "满墙书柜",
    nameEn: "Wall-to-wall bookshelf system, open shelving with closed storage at bottom",
    applicableSpaces: ["ldk", "horizontal-living", "study", "vertical-living"],
  },
  {
    id: "l-kitchen",
    name: "L型整体橱柜",
    nameEn: "L-shaped kitchen cabinets, built-in appliances, seamless countertop",
    applicableSpaces: ["kitchen", "semi-enclosed-kitchen", "enclosed-kitchen"],
  },
  {
    id: "u-kitchen",
    name: "U型整体橱柜",
    nameEn: "U-shaped kitchen cabinets, maximum storage efficiency, modern design",
    applicableSpaces: ["kitchen", "semi-enclosed-kitchen", "enclosed-kitchen"],
  },
  {
    id: "shoe-cabinet",
    name: "入户鞋柜",
    nameEn: "Entrance shoe cabinet, floor-to-ceiling, middle open shelf for keys",
    applicableSpaces: ["entrance"],
  },
  {
    id: "balcony-cabinet",
    name: "阳台家政柜",
    nameEn: "Balcony laundry cabinet, integrated washing machine space, practical storage",
    applicableSpaces: ["balcony"],
  },
  {
    id: "tatami",
    name: "榻榻米一体柜",
    nameEn: "Integrated tatami bed with wardrobe and desk system, maximum storage efficiency",
    applicableSpaces: ["kids-room", "secondary-bedroom", "multi-functional"],
  },
  {
    id: "bay-window",
    name: "飘窗储物柜",
    nameEn: "Bay window storage cabinet, cozy seating area with drawers underneath",
    applicableSpaces: ["master-bedroom", "secondary-bedroom", "kids-room"],
  },
  {
    id: "sideboard",
    name: "餐边酒柜",
    nameEn: "Dining sideboard with glass display upper cabinets, built-in wine rack, coffee corner",
    applicableSpaces: ["horizontal-living", "ldk", "dining-room", "vertical-living"],
  },
  {
    id: "display-cabinet",
    name: "玻璃展示柜",
    nameEn: "Glass display cabinet, integrated LED, for collectibles",
    applicableSpaces: ["vertical-living", "horizontal-living", "study"],
  },
  {
    id: "accessories-island",
    name: "衣帽间中岛",
    nameEn: "Accessories island cabinet, jewelry storage drawer",
    applicableSpaces: ["walk-in-closet"],
  },
];

export interface Style {
  id: string;
  name: string;
  nameEn: string;
}

export const styles: Style[] = [
  {
    id: "japanese-wood",
    name: "日式原木",
    nameEn: "Japanese wabi-sabi wood style, natural oak wood, warm and cozy, zen vibe",
  },
  {
    id: "italian-minimal",
    name: "意式极简",
    nameEn: "Italian minimalist luxury, high-end materials, dark grey and brown tones, sophisticated",
  },
  {
    id: "modern-chinese",
    name: "现代新中式",
    nameEn: "Modern Chinese style, dark wood accents, symmetry, elegant ink wash elements",
  },
  {
    id: "french-cream",
    name: "法式奶油",
    nameEn: "French cream style, wall moldings, warm white palette, romantic and soft atmosphere",
  },
  {
    id: "modern-minimalist",
    name: "现代简约",
    nameEn: "Modern minimalist style, clean lines, neutral tones, functional and uncluttered",
  },
  {
    id: "american-vintage",
    name: "美式复古",
    nameEn: "Modern American style, shaker cabinets, warm colors, cozy family atmosphere",
  },
  {
    id: "wabi-sabi",
    name: "极简侘寂",
    nameEn: "Wabi-sabi style, micro-cement texture, organic shapes, earthy tones, raw beauty",
  },
];

export interface Material {
  id: string;
  name: string;
  nameEn: string;
  applicableStyles: string[];
}

export const materials: Material[] = [
  {
    id: "a-oak-white",
    name: "A-原木白+隐形",
    nameEn:
      "Warm white matte lacquer finish, natural oak wood texture, handleless design, clean joinery, soft organic feel",
    applicableStyles: ["modern-minimalist", "japanese-wood", "wabi-sabi"],
  },
  {
    id: "b-gloss-white",
    name: "B-高光白+岩板",
    nameEn: "High-gloss white lacquer, white carrara marble texture, black glass cabinet doors",
    applicableStyles: ["modern-minimalist"],
  },
  {
    id: "c-cream-brass",
    name: "C-奶油肤感+黄铜",
    nameEn: "Creamy white skin-feel finish, brushed brass gold handles, curved edge",
    applicableStyles: ["french-cream", "wabi-sabi"],
  },
  {
    id: "d-dark-grey",
    name: "D-深灰肤感+黑玻",
    nameEn: "Matte dark grey finish, smoked black glass, linear LED lights",
    applicableStyles: ["italian-minimal", "modern-minimalist"],
  },
  {
    id: "e-walnut-glass",
    name: "E-黑胡桃+长虹玻璃",
    nameEn: "Black walnut wood, fluted glass, brass accents",
    applicableStyles: ["modern-chinese", "american-vintage"],
  },
  {
    id: "f-cement-rattan",
    name: "F-微水泥+藤编",
    nameEn: "Micro-cement texture, natural rattan cane, matte wood",
    applicableStyles: ["japanese-wood", "wabi-sabi"],
  },
  {
    id: "g-american-white",
    name: "G-美式白+复古金",
    nameEn: "White shaker cabinets, vintage gold knobs, dark walnut top",
    applicableStyles: ["american-vintage"],
  },
  {
    id: "h-matte-white",
    name: "H-哑光白+极简",
    nameEn:
      "Ultra-matte white minimalist finish, seamless edge, invisible handles, pure white tone, understated elegance, clean architectural lines",
    applicableStyles: ["italian-minimal", "modern-minimalist"],
  },
];

export interface ResidenceType {
  id: string;
  name: string;
  nameEn: string;
}

export const residenceTypes: ResidenceType[] = [
  {
    id: "standard",
    name: "商品房",
    nameEn:
      "Standard residential apartment, ceiling height 2.8 meters, cozy and intimate scale, typical residential proportions, compact and functional layout, eye-level shot",
  },
  {
    id: "upscale",
    name: "改善型",
    nameEn:
      "Upscale modern apartment, ceiling height 3.0 meters, airy and comfortable atmosphere, spacious residential layout, well-balanced proportions, clean architecture",
  },
  {
    id: "luxury",
    name: "大平层",
    nameEn:
      "Luxury large floor flat, high ceiling 3.3 meters, expansive open plan, grand residential scale, premium spatial quality, floor-to-ceiling windows, architectural depth",
  },
];

export interface CameraAngle {
  id: string;
  name: string;
  nameEn: string;
}

export const cameraAngles: CameraAngle[] = [
  {
    id: "straight",
    name: "正视平视",
    nameEn: "Straight-on view, eye-level shot, symmetrical composition",
  },
  {
    id: "45-degree",
    name: "45度侧视",
    nameEn: "45-degree angle shot, depth-rich composition",
  },
  {
    id: "wide-angle",
    name: "广角全景",
    nameEn: "Wide angle shot, capturing the whole room layout",
  },
];

export interface Lighting {
  id: string;
  name: string;
  nameEn: string;
}

export const lightings: Lighting[] = [
  {
    id: "cool",
    name: "高级冷调光",
    nameEn: "Cool cinematic lighting, high contrast, moody atmosphere",
  },
  {
    id: "warm",
    name: "暖调无主灯",
    nameEn: "Warm indoor lighting, no main light design, cozy evening vibe, recessed lights",
  },
  {
    id: "natural",
    name: "明亮自然光",
    nameEn: "Bright natural daylight, soft shadows, airy atmosphere",
  },
];

export const DEFAULT_RESIDENCE_TYPE_ID = "standard";
export const DEFAULT_CAMERA_ANGLE_ID = "wide-angle";
export const DEFAULT_LIGHTING_ID = "natural";

export const recommendedAdvancedOptions = {
  residenceTypeId: DEFAULT_RESIDENCE_TYPE_ID,
  cameraAngleId: DEFAULT_CAMERA_ANGLE_ID,
  lightingId: DEFAULT_LIGHTING_ID,
} as const;

export const defaultResidenceType =
  residenceTypes.find((item) => item.id === DEFAULT_RESIDENCE_TYPE_ID) ?? residenceTypes[0];
export const defaultCameraAngle =
  cameraAngles.find((item) => item.id === DEFAULT_CAMERA_ANGLE_ID) ?? cameraAngles[0];
export const defaultLighting =
  lightings.find((item) => item.id === DEFAULT_LIGHTING_ID) ?? lightings[0];

export const getAvailableCabinets = (spaceId: string): Cabinet[] =>
  cabinets.filter((cabinet) => cabinet.applicableSpaces.includes(spaceId));

export const getAvailableMaterials = (styleId: string): Material[] =>
  materials.filter((material) => material.applicableStyles.includes(styleId));

export const getSpaceById = (id: string) => spaces.find((item) => item.id === id) ?? null;
export const getCabinetById = (id: string) => cabinets.find((item) => item.id === id) ?? null;
export const getStyleById = (id: string) => styles.find((item) => item.id === id) ?? null;
export const getMaterialById = (id: string) => materials.find((item) => item.id === id) ?? null;
export const getResidenceTypeById = (id: string) =>
  residenceTypes.find((item) => item.id === id) ?? null;
export const getCameraAngleById = (id: string) =>
  cameraAngles.find((item) => item.id === id) ?? null;
export const getLightingById = (id: string) => lightings.find((item) => item.id === id) ?? null;

export interface Selection {
  space: Space;
  cabinet: Cabinet;
  style: Style;
  material: Material;
  residenceType: ResidenceType;
  cameraAngle: CameraAngle;
  lighting: Lighting;
}

export const buildEnglishPrompt = (selection: Selection): string =>
  [
    selection.residenceType.nameEn,
    selection.space.nameEn,
    selection.style.nameEn,
    selection.cabinet.nameEn,
    selection.material.nameEn,
    selection.lighting.nameEn,
    selection.cameraAngle.nameEn,
    "custom built-in cabinetry, refined storage composition, tactile material layers, realistic residential scale, 8k, photorealistic interior render, editorial quality",
  ].join(", ");
