export interface Space {
  id: string;
  name: string;
  nameEn: string;
  promptZh?: string;
  promptEn?: string;
}

export interface Cabinet {
  id: string;
  name: string;
  nameEn: string;
  promptZh?: string;
  promptEn?: string;
  applicableSpaces: string[];
}

export interface Style {
  id: string;
  name: string;
  nameEn: string;
  promptZh?: string;
  promptEn?: string;
}

export interface Material {
  id: string;
  name: string;
  nameEn: string;
  promptZh?: string;
  promptEn?: string;
  applicableStyles: string[];
}

export interface ResidenceType {
  id: string;
  name: string;
  nameEn: string;
  promptZh?: string;
  promptEn?: string;
}

export interface CameraAngle {
  id: string;
  name: string;
  nameEn: string;
  promptZh?: string;
  promptEn?: string;
}

export interface Lighting {
  id: string;
  name: string;
  nameEn: string;
  promptZh?: string;
  promptEn?: string;
}

export interface AssetLibrary {
  spaces: Space[];
  cabinets: Cabinet[];
  styles: Style[];
  materials: Material[];
  residenceTypes: ResidenceType[];
  cameraAngles: CameraAngle[];
  lightings: Lighting[];
}

export interface Selection {
  space: Space;
  cabinet: Cabinet;
  style: Style;
  material: Material;
  residenceType: ResidenceType;
  cameraAngle: CameraAngle;
  lighting: Lighting;
}

export const fallbackLibrary: AssetLibrary = {
  spaces: [
    { id: "dining-room", name: "餐厅", nameEn: "Dining room", promptZh: "餐厅空间，餐桌与餐边柜关系清晰" },
    { id: "balcony", name: "阳台", nameEn: "Enclosed balcony", promptZh: "封闭式阳台空间，兼顾家政洗衣、储物和休闲功能" },
    { id: "entrance", name: "玄关", nameEn: "Entrance foyer", promptZh: "玄关空间，入户动线清晰，强调鞋柜和随手收纳" },
    { id: "kids-room", name: "儿童房", nameEn: "Kids bedroom", promptZh: "儿童房空间，兼顾睡眠、学习、玩耍和收纳" },
    { id: "master-bedroom", name: "主卧", nameEn: "Master bedroom", promptZh: "主卧空间，强调衣柜、床头背景和整体收纳系统" },
    { id: "study", name: "书房", nameEn: "Study room", promptZh: "书房空间，强调书柜、书桌和展示收纳组合" },
    { id: "horizontal-living", name: "横厅", nameEn: "Wide living room", promptZh: "横厅客厅空间，面宽开阔，适合展示连续柜体" },
    { id: "vertical-living", name: "竖厅", nameEn: "Long living room", promptZh: "竖厅客厅空间，进深较长，视觉轴线明确" },
    { id: "kitchen", name: "厨房", nameEn: "Kitchen", promptZh: "厨房空间，操作动线清晰，强调橱柜和台面关系" }
  ],
  cabinets: [
    { id: "floating-tv", name: "悬浮电视柜", nameEn: "Floating TV cabinet", promptZh: "悬浮电视柜，壁挂式轻盈结构，隐藏收纳，线条简洁", applicableSpaces: ["horizontal-living", "vertical-living", "master-bedroom"] },
    { id: "sideboard", name: "餐边酒柜", nameEn: "Dining sideboard", promptZh: "餐边酒柜，上方玻璃展示，下方封闭收纳，结合酒架和咖啡角", applicableSpaces: ["dining-room", "horizontal-living", "vertical-living"] },
    { id: "floor-wardrobe", name: "一门到顶衣柜", nameEn: "Floor-to-ceiling wardrobe", promptZh: "一门到顶衣柜，通高柜门，简洁立面，隐形拉手", applicableSpaces: ["master-bedroom", "kids-room"] },
    { id: "shoe-cabinet", name: "入户鞋柜", nameEn: "Entrance shoe cabinet", promptZh: "入户鞋柜，通高收纳，中部开放格，预留换鞋区", applicableSpaces: ["entrance"] },
    { id: "balcony-cabinet", name: "阳台家政柜", nameEn: "Balcony laundry cabinet", promptZh: "阳台家政柜，嵌入洗衣机与烘干机，工具收纳一体化", applicableSpaces: ["balcony"] },
    { id: "bookshelf", name: "满墙书柜", nameEn: "Wall-to-wall bookshelf", promptZh: "满墙书柜，开放层板与封闭收纳结合", applicableSpaces: ["study", "horizontal-living", "vertical-living"] },
    { id: "l-kitchen", name: "L型整体橱柜", nameEn: "L-shaped kitchen cabinets", promptZh: "L型整体橱柜，转角利用充分，嵌入式电器与连续台面", applicableSpaces: ["kitchen"] },
    { id: "u-kitchen", name: "U型整体橱柜", nameEn: "U-shaped kitchen cabinets", promptZh: "U型整体橱柜，三面操作台围合，高效动线，最大化储物", applicableSpaces: ["kitchen"] }
  ],
  styles: [
    { id: "modern-minimalist", name: "现代简约", nameEn: "Modern minimalist", promptZh: "现代简约风格，线条干净利落，色彩克制中性，强调功能秩序" },
    { id: "japanese-wood", name: "日式原木", nameEn: "Japanese natural wood", promptZh: "日式原木风格，天然木色、温暖柔和、低饱和配色" },
    { id: "italian-minimal", name: "意式极简", nameEn: "Italian minimalist luxury", promptZh: "意式极简风格，高级克制，强调比例、线条和材质质感" },
    { id: "modern-chinese", name: "现代新中式", nameEn: "Modern Chinese", promptZh: "现代新中式风格，深木色点缀，对称秩序，东方审美与现代简洁感" },
    { id: "french-cream", name: "法式奶油", nameEn: "French cream", promptZh: "法式奶油风格，温润浅色基调，细腻墙面线条，柔和浪漫" }
  ],
  materials: [
    { id: "a-oak-white", name: "A-原木白+隐形", nameEn: "Warm white and natural oak", promptZh: "暖白哑光饰面搭配天然橡木纹理，无拉手或隐形拉手，质感柔和自然", applicableStyles: ["modern-minimalist", "japanese-wood"] },
    { id: "d-dark-grey", name: "D-深灰肤感+黑玻", nameEn: "Matte dark grey and smoked glass", promptZh: "深灰肤感饰面，烟熏黑玻璃，线性灯带点缀，沉稳高级", applicableStyles: ["modern-minimalist", "italian-minimal"] },
    { id: "e-walnut-glass", name: "E-黑胡桃+长虹玻璃", nameEn: "Black walnut and fluted glass", promptZh: "黑胡桃木搭配长虹玻璃和黄铜细节，兼具复古温度与精致层次", applicableStyles: ["modern-chinese"] },
    { id: "c-cream-brass", name: "C-奶油肤感+黄铜", nameEn: "Cream finish and brushed brass", promptZh: "奶油白肤感饰面，拉丝黄铜金属细节，弧形收边，整体温柔细腻", applicableStyles: ["french-cream"] }
  ],
  residenceTypes: [
    { id: "standard", name: "商品房", nameEn: "Standard residential apartment", promptZh: "标准商品房尺度，层高约2.8米，空间比例真实，布局紧凑实用" }
  ],
  cameraAngles: [
    { id: "wide-angle", name: "广角全景", nameEn: "Wide-angle full-room view", promptZh: "广角全景构图，完整呈现房间布局、柜体关系和空间纵深" }
  ],
  lightings: [
    { id: "natural", name: "明亮自然光", nameEn: "Bright natural daylight", promptZh: "明亮自然光，柔和阴影，空间通透轻盈，材质纹理清晰真实" }
  ]
};
