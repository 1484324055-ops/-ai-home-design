// 空间（15个）
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
  { id: "master-bedroom", name: "主卧", nameEn: "master bedroom interior design, calm and comfortable residential space" },
  { id: "study", name: "书房", nameEn: "minimalist home office interior, built-in storage and desk" },
  { id: "vertical-living", name: "竖厅", nameEn: "modern living room interior, elongated layout, clear visual axis" },
  { id: "horizontal-living", name: "横厅", nameEn: "modern minimalist living room interior, wide open-plan layout" },
  { id: "kitchen", name: "厨房", nameEn: "modern open-plan kitchen interior with island" },
  { id: "multi-functional", name: "多功能房", nameEn: "Multi-functional room, guest room cum study, tatami layout" },
  { id: "secondary-bedroom", name: "次卧", nameEn: "Secondary bedroom, cozy and functional" },
  { id: "enclosed-kitchen", name: "封闭式厨房", nameEn: "modern enclosed kitchen interior, separate room with glass door, efficient U-shaped layout, compact scale, floor-to-ceiling cabinets, quartz countertops, integrated appliances, bright and functional" },
  { id: "semi-enclosed-kitchen", name: "半封闭厨房", nameEn: "semi-enclosed kitchen with floor-to-ceiling glass sliding doors, narrow black metal frame glass partition, visible kitchen interior, L-shaped layout with small operational island, modern luxury style, visual transparency" },
];

// 柜体（14个，含适用空间）
export interface Cabinet {
  id: string;
  name: string;
  nameEn: string;
  applicableSpaces: string[];
}

export const cabinets: Cabinet[] = [
  { id: "floating-tv", name: "悬浮电视柜", nameEn: "Floating TV cabinet, wall-mounted, minimalist design, hidden storage", applicableSpaces: ["vertical-living", "horizontal-living", "master-bedroom"] },
  { id: "floor-wardrobe", name: "一门到顶衣柜", nameEn: "Floor-to-ceiling wardrobe, seamless minimalist doors, handleless design", applicableSpaces: ["master-bedroom", "secondary-bedroom", "kids-room"] },
  { id: "glass-wardrobe", name: "玻璃衣柜", nameEn: "Glass display cabinet with integrated LED lighting, aluminum frame doors", applicableSpaces: ["walk-in-closet", "master-bedroom"] },
  { id: "island", name: "岛台", nameEn: "Kitchen island with marble waterfall countertop, breakfast bar functionality", applicableSpaces: ["ldk", "dining-room", "kitchen"] },
  { id: "bookshelf", name: "满墙书柜", nameEn: "Wall-to-wall bookshelf system, open shelving with closed storage at bottom", applicableSpaces: ["ldk", "horizontal-living", "study", "vertical-living"] },
  { id: "l-kitchen", name: "L型整体橱柜", nameEn: "L-shaped kitchen cabinets, built-in appliances, seamless countertop", applicableSpaces: ["kitchen", "semi-enclosed-kitchen", "enclosed-kitchen"] },
  { id: "u-kitchen", name: "U型整体橱柜", nameEn: "U-shaped kitchen cabinets, maximum storage efficiency, modern design", applicableSpaces: ["kitchen", "semi-enclosed-kitchen", "enclosed-kitchen"] },
  { id: "shoe-cabinet", name: "入户鞋柜", nameEn: "Entrance shoe cabinet, floor-to-ceiling, middle open shelf for keys", applicableSpaces: ["entrance"] },
  { id: "balcony-cabinet", name: "阳台家政柜", nameEn: "Balcony laundry cabinet, integrated washing machine space, practical storage", applicableSpaces: ["balcony"] },
  { id: "tatami", name: "榻榻米一体柜", nameEn: "Integrated tatami bed with wardrobe and desk system, maximum storage efficiency", applicableSpaces: ["kids-room", "secondary-bedroom", "multi-functional"] },
  { id: "bay-window", name: "飘窗储物柜", nameEn: "Bay window storage cabinet, cozy seating area with drawers underneath", applicableSpaces: ["master-bedroom", "secondary-bedroom", "kids-room"] },
  { id: "sideboard", name: "餐边酒柜", nameEn: "Dining sideboard with glass display upper cabinets, built-in wine rack, coffee corner", applicableSpaces: ["horizontal-living", "ldk", "dining-room", "vertical-living"] },
  { id: "display-cabinet", name: "玻璃展示柜", nameEn: "Glass display cabinet, integrated LED, for collectibles", applicableSpaces: ["vertical-living", "horizontal-living", "study"] },
  { id: "accessories-island", name: "衣帽间中岛", nameEn: "Accessories island cabinet, jewelry storage drawer", applicableSpaces: ["walk-in-closet"] },
];

// 风格（7个）
export interface Style {
  id: string;
  name: string;
  nameEn: string;
}

export const styles: Style[] = [
  { id: "japanese-wood", name: "日式原木", nameEn: "Japanese wabi-sabi wood style, natural oak wood, warm and cozy, zen vibe" },
  { id: "italian-minimal", name: "意式极简", nameEn: "Italian minimalist luxury, high-end materials, dark grey and brown tones, sophisticated" },
  { id: "modern-chinese", name: "现代新中式", nameEn: "Modern Chinese style, dark wood accents, symmetry, elegant ink wash elements" },
  { id: "french-cream", name: "法式奶油", nameEn: "French cream style, wall moldings, warm white palette, romantic and soft atmosphere" },
  { id: "modern-minimalist", name: "现代简约", nameEn: "Modern minimalist style, clean lines, neutral tones, functional and uncluttered" },
  { id: "american-vintage", name: "美式复古", nameEn: "Modern American style, shaker cabinets, warm colors, cozy family atmosphere" },
  { id: "wabi-sabi", name: "极简侘寂", nameEn: "Wabi-sabi style, micro-cement texture, organic shapes, earthy tones, raw beauty" },
];

// 材质（8个，含适用风格）
export interface Material {
  id: string;
  name: string;
  nameEn: string;
  applicableStyles: string[];
}

export const materials: Material[] = [
  { id: "a-oak-white", name: "A-原木白+隐形", nameEn: "Warm white matte lacquer finish, natural oak wood texture, handleless design, clean joinery, soft organic feel", applicableStyles: ["modern-minimalist", "japanese-wood", "wabi-sabi"] },
  { id: "b-gloss-white", name: "B-高光白+岩板", nameEn: "High-gloss white lacquer, white carrara marble texture, black glass cabinet doors", applicableStyles: ["modern-minimalist"] },
  { id: "c-cream-brass", name: "C-奶油肤感+黄铜", nameEn: "Creamy white skin-feel finish, brushed brass gold handles, curved edge", applicableStyles: ["french-cream", "wabi-sabi"] },
  { id: "d-dark-grey", name: "D-深灰肤感+黑玻", nameEn: "Matte dark grey finish, smoked black glass, linear LED lights", applicableStyles: ["italian-minimal", "modern-minimalist"] },
  { id: "e-walnut-glass", name: "E-黑胡桃+长虹玻璃", nameEn: "Black walnut wood, fluted glass, brass accents", applicableStyles: ["modern-chinese", "american-vintage"] },
  { id: "f-cement-rattan", name: "F-微水泥+藤编", nameEn: "Micro-cement texture, natural rattan cane, matte wood", applicableStyles: ["japanese-wood", "wabi-sabi"] },
  { id: "g-american-white", name: "G-美式白+复古金", nameEn: "White shaker cabinets, vintage gold knobs, dark walnut top", applicableStyles: ["american-vintage"] },
  { id: "h-matte-white", name: "H-哑光白+极简", nameEn: "H-matte white minimalist finish, ultra-matte surface, seamless edge, invisible handles, pure white tone, understated elegance, clean architectural lines", applicableStyles: ["italian-minimal", "modern-minimalist"] },
];

// 住宅类型（3个）
export interface ResidenceType {
  id: string;
  name: string;
  nameEn: string;
}

export const residenceTypes: ResidenceType[] = [
  { id: "standard", name: "商品房", nameEn: "standard residential apartment, ceiling height 2.8 meters, cozy and intimate scale, typical residential proportions, compact and functional layout, eye-level shot" },
  { id: "upscale", name: "改善型", nameEn: "upscale modern apartment, ceiling height 3.0 meters, airy and comfortable atmosphere, spacious residential layout, well-balanced proportions, clean architecture" },
  { id: "luxury", name: "大平层", nameEn: "luxury large floor flat, high ceiling 3.3 meters, expansive open plan, grand residential scale, premium spatial quality, floor-to-ceiling windows, architectural depth" },
];

// 镜头（3个）
export interface CameraAngle {
  id: string;
  name: string;
  nameEn: string;
}

export const cameraAngles: CameraAngle[] = [
  { id: "straight", name: "正视平视", nameEn: "Straight-on view, eye-level shot, symmetrical composition" },
  { id: "45-degree", name: "45度侧视", nameEn: "45-degree angle shot, depth of field" },
  { id: "wide-angle", name: "广角全景", nameEn: "Wide angle shot, capturing the whole room layout" },
];

// 光影（3个）
export interface Lighting {
  id: string;
  name: string;
  nameEn: string;
}

export const lightings: Lighting[] = [
  { id: "cool", name: "高级冷调光", nameEn: "Cool cinematic lighting, high contrast, moody atmosphere" },
  { id: "warm", name: "暖调无主灯", nameEn: "Warm indoor lighting, no main light design, cozy evening vibe, recessed lights" },
  { id: "natural", name: "明亮自然光", nameEn: "Bright natural daylight, soft shadows, airy atmosphere" },
];

// 级联过滤函数
export const getAvailableCabinets = (spaceId: string): Cabinet[] => {
  return cabinets.filter(c => c.applicableSpaces.includes(spaceId));
};

export const getAvailableMaterials = (styleId: string): Material[] => {
  return materials.filter(m => m.applicableStyles.includes(styleId));
};

// 提示词生成
export interface Selection {
  space: Space;
  cabinet: Cabinet;
  style: Style;
  material: Material;
  residenceType: ResidenceType;
  cameraAngle: CameraAngle;
  lighting: Lighting;
}

export const generatePrompts = (s: Selection) => {
  const english = [
    s.residenceType.nameEn,
    s.space.nameEn,
    s.style.nameEn,
    s.cabinet.nameEn,
    s.material.nameEn,
    s.lighting.nameEn,
    s.cameraAngle.nameEn,
    "8k, realistic, architectural digest, depth of field"
  ].join(", ");

  const chinese = [
    s.residenceType.name,
    s.space.name,
    s.style.name,
    s.cabinet.name,
    s.material.name,
    s.lighting.name,
    s.cameraAngle.name,
    "8k超清，写实风格，建筑杂志级，景深效果"
  ].join("，");

  return { english, chinese };
};
