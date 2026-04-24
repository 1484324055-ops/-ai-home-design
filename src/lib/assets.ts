import type {
  Cabinet,
  CameraAngle,
  Lighting,
  Material,
  ResidenceType,
  Space,
  Style,
} from "./data";

export type AssetCategory =
  | "space"
  | "cabinet"
  | "style"
  | "material"
  | "residence"
  | "camera"
  | "lighting";

export interface PromptAssetRecord {
  id: string;
  category: AssetCategory;
  name: string;
  nameEn: string;
  promptZh: string;
  promptEn: string;
  applicableSpaceIds: string[];
  applicableStyleIds: string[];
  enabled: boolean;
  sortOrder: number;
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

export const assetCategoryLabels: Record<AssetCategory, string> = {
  space: "空间",
  cabinet: "柜体",
  style: "风格",
  material: "材质",
  residence: "住宅类型",
  camera: "镜头",
  lighting: "光影",
};

export const assetCategoryOrder: AssetCategory[] = [
  "space",
  "cabinet",
  "style",
  "material",
  "residence",
  "camera",
  "lighting",
];

const asset = (
  category: AssetCategory,
  id: string,
  name: string,
  nameEn: string,
  promptZh: string,
  promptEn: string,
  sortOrder: number,
  options: Partial<Pick<PromptAssetRecord, "applicableSpaceIds" | "applicableStyleIds">> = {}
): PromptAssetRecord => ({
  id,
  category,
  name,
  nameEn,
  promptZh,
  promptEn,
  applicableSpaceIds: options.applicableSpaceIds ?? [],
  applicableStyleIds: options.applicableStyleIds ?? [],
  enabled: true,
  sortOrder,
});

export const defaultPromptAssets: PromptAssetRecord[] = [
  asset(
    "style",
    "modern-minimalist",
    "现代简约",
    "Modern minimalist",
    "现代简约风格，线条干净利落，色彩克制中性，强调功能秩序、留白和整洁的居住感",
    "modern minimalist style, clean lines, neutral tones, functional order, uncluttered residential atmosphere",
    10
  ),
  asset(
    "style",
    "french-cream",
    "法式奶油",
    "French cream",
    "法式奶油风格，温润浅色基调，细腻墙面线条，柔和浪漫但不过度繁复",
    "French cream style, warm white palette, refined wall moldings, soft romantic atmosphere, elegant and restrained",
    20
  ),
  asset(
    "style",
    "italian-minimal",
    "意式极简",
    "Italian minimalist luxury",
    "意式极简风格，高级克制，强调比例、线条、材质质感和沉稳精致的空间气质",
    "Italian minimalist luxury, refined proportions, clean architectural lines, high-end materials, restrained sophisticated atmosphere",
    30
  ),
  asset(
    "style",
    "japanese-wood",
    "日式原木",
    "Japanese natural wood",
    "日式原木风格，天然木色、温暖柔和、低饱和配色，强调松弛、自然和干净的生活感",
    "Japanese natural wood style, warm oak texture, soft low-saturation palette, calm cozy residential atmosphere",
    40
  ),
  asset(
    "style",
    "modern-chinese",
    "现代新中式",
    "Modern Chinese",
    "现代新中式风格，深木色点缀，对称秩序，克制雅致，带有东方审美和现代简洁感",
    "modern Chinese style, dark wood accents, balanced symmetry, elegant oriental aesthetics, contemporary restraint",
    50
  ),
  asset(
    "style",
    "wabi-sabi",
    "极简侘寂",
    "Wabi-sabi minimalism",
    "极简侘寂风格，微水泥肌理、有机形态、大地色调，呈现自然、安静和朴素的高级感",
    "wabi-sabi minimalism, micro-cement texture, organic forms, earthy tones, quiet raw beauty",
    60
  ),
  asset(
    "style",
    "american-vintage",
    "美式复古",
    "Modern American vintage",
    "美式复古风格，框线柜门、温暖色调、复古金属细节，呈现舒适、有家庭感的空间氛围",
    "modern American vintage style, shaker cabinet doors, warm colors, vintage metal details, cozy family atmosphere",
    70
  ),

  asset(
    "lighting",
    "natural",
    "明亮自然光",
    "Bright natural daylight",
    "明亮自然光，柔和阴影，空间通透轻盈，材质纹理清晰真实",
    "bright natural daylight, soft shadows, airy atmosphere, clear realistic material textures",
    10
  ),
  asset(
    "lighting",
    "warm",
    "暖调无主灯",
    "Warm indirect lighting",
    "暖调无主灯照明，嵌入式灯带和局部氛围光，营造舒适柔和的夜晚居家氛围",
    "warm indirect lighting, no main light design, recessed light strips, cozy evening residential atmosphere",
    20
  ),
  asset(
    "lighting",
    "cool",
    "高级冷调光",
    "Cool refined lighting",
    "高级冷调光，干净利落的明暗层次，强调材质反差和沉稳的高级空间感",
    "cool refined lighting, controlled contrast, crisp light and shadow, premium material depth",
    30
  ),

  asset(
    "camera",
    "wide-angle",
    "广角全景",
    "Wide-angle full-room view",
    "广角全景构图，完整呈现房间布局、柜体关系和空间纵深",
    "wide-angle full-room view, capturing the whole room layout, cabinetry relationship and spatial depth",
    10
  ),
  asset(
    "camera",
    "straight",
    "正视平视",
    "Straight-on eye-level view",
    "正视平视构图，视线高度自然，对称稳定，适合展示柜体立面比例",
    "straight-on eye-level view, stable symmetrical composition, ideal for showing cabinetry elevation and proportions",
    20
  ),
  asset(
    "camera",
    "45-degree",
    "45度侧视",
    "45-degree perspective view",
    "45度侧视构图，增强空间层次和转角关系，保持整体画面清晰",
    "45-degree perspective view, enhanced spatial layers and corner relationships, clear full-room composition",
    30
  ),

  asset(
    "space",
    "horizontal-living",
    "横厅",
    "Wide living room",
    "横厅客厅空间，面宽开阔，客餐厅关系清晰，适合展示连续柜体和大尺度收纳系统",
    "wide living room interior, broad open-plan layout, clear living-dining relationship, suitable for continuous cabinetry and large storage systems",
    10
  ),
  asset(
    "space",
    "vertical-living",
    "竖厅",
    "Long living room",
    "竖厅客厅空间，进深较长，视觉轴线明确，适合展示电视墙、展示柜和收纳秩序",
    "long living room interior, elongated layout, clear visual axis, suitable for TV wall cabinetry, display cabinets and storage order",
    20
  ),
  asset(
    "space",
    "master-bedroom",
    "主卧",
    "Master bedroom",
    "主卧空间，安静舒适的居住尺度，强调衣柜、床头背景和收纳系统的整体关系",
    "master bedroom interior, calm comfortable residential scale, emphasizing wardrobe, headboard wall and integrated storage system",
    30
  ),
  asset(
    "space",
    "kitchen",
    "厨房",
    "Kitchen",
    "厨房空间，操作动线清晰，强调橱柜、台面、电器和收纳系统的功能关系",
    "kitchen interior, clear workflow, emphasizing cabinetry, countertop, appliances and functional storage system",
    40
  ),
  asset(
    "space",
    "enclosed-kitchen",
    "封闭式厨房",
    "Enclosed kitchen",
    "封闭式厨房，独立空间边界明确，强调紧凑高效的操作区、储物区和整洁台面",
    "enclosed kitchen interior, clear separate room boundary, compact efficient workflow, storage zones and clean countertops",
    50
  ),
  asset(
    "space",
    "semi-enclosed-kitchen",
    "半封闭厨房",
    "Semi-enclosed kitchen",
    "半封闭厨房，玻璃隔断或推拉门形成通透边界，兼顾开放感和油烟分区",
    "semi-enclosed kitchen, glass partition or sliding doors, transparent boundary, balancing openness and cooking separation",
    60
  ),
  asset(
    "space",
    "study",
    "书房",
    "Study room",
    "书房空间，安静专注，强调书柜、书桌、展示层板和封闭收纳的组合关系",
    "study room or home office, quiet focused atmosphere, built-in bookshelf, desk, display shelving and closed storage",
    70
  ),
  asset(
    "space",
    "entrance",
    "玄关",
    "Entrance foyer",
    "玄关空间，入户动线清晰，强调鞋柜、换鞋区、中部开放格和随手收纳",
    "entrance foyer, clear entry circulation, shoe cabinet, bench area, middle open shelf and everyday storage",
    80
  ),
  asset(
    "space",
    "walk-in-closet",
    "衣帽间",
    "Walk-in closet",
    "衣帽间空间，强调开放挂衣、玻璃柜门、抽屉收纳和中岛陈列的精致秩序",
    "walk-in closet, open hanging system, glass wardrobe doors, drawer storage and refined island display",
    90
  ),
  asset(
    "space",
    "dining-room",
    "餐厅",
    "Dining room",
    "餐厅空间，餐桌与餐边柜关系清晰，适合展示酒柜、展示柜和收纳背景",
    "dining room, clear relationship between dining table and sideboard, suitable for wine cabinet, display cabinet and storage wall",
    100
  ),
  asset(
    "space",
    "ldk",
    "LDK一体化",
    "LDK open concept",
    "LDK一体化空间，客餐厨连续联动，强调开放格局、岛台、餐边柜和整体收纳系统",
    "LDK open concept, connected living dining kitchen space, open layout, island, sideboard and integrated storage system",
    110
  ),
  asset(
    "space",
    "kids-room",
    "儿童房",
    "Kids bedroom",
    "儿童房空间，兼顾睡眠、学习、玩耍和收纳，强调安全、明亮和成长型布局",
    "kids bedroom, combining sleeping, study, play and storage, safe bright atmosphere and growth-friendly layout",
    120
  ),
  asset(
    "space",
    "balcony",
    "阳台",
    "Enclosed balcony",
    "封闭式阳台空间，兼顾家政洗衣、储物和休闲功能，空间明亮实用",
    "enclosed balcony, laundry area, storage and leisure function, bright practical residential space",
    130
  ),
  asset(
    "space",
    "multi-functional",
    "多功能房",
    "Multi-functional room",
    "多功能房，兼顾客房、书房、榻榻米和储物功能，强调空间复合利用",
    "multi-functional room, guest room combined with study, tatami and storage, efficient compact space use",
    140
  ),
  asset(
    "space",
    "secondary-bedroom",
    "次卧",
    "Secondary bedroom",
    "次卧空间，尺度紧凑舒适，强调衣柜、书桌和床区的实用组合",
    "secondary bedroom, cozy compact residential scale, practical combination of wardrobe, desk and sleeping area",
    150
  ),

  asset(
    "cabinet",
    "floor-wardrobe",
    "一门到顶衣柜",
    "Floor-to-ceiling wardrobe",
    "一门到顶衣柜，通高柜门、简洁立面、隐形拉手或无拉手设计，强化整体感和收纳容量",
    "floor-to-ceiling wardrobe, full-height seamless doors, handleless or concealed handle design, strong integrated storage volume",
    10,
    { applicableSpaceIds: ["master-bedroom", "secondary-bedroom", "kids-room"] }
  ),
  asset(
    "cabinet",
    "glass-wardrobe",
    "玻璃衣柜",
    "Glass wardrobe",
    "玻璃衣柜，窄边金属框、通透柜门、内置灯带和衣物陈列，呈现轻奢精致感",
    "glass wardrobe, slim metal frames, transparent doors, integrated LED lighting and clothing display, refined luxury feeling",
    20,
    { applicableSpaceIds: ["walk-in-closet", "master-bedroom"] }
  ),
  asset(
    "cabinet",
    "floating-tv",
    "悬浮电视柜",
    "Floating TV cabinet",
    "悬浮电视柜，壁挂式轻盈结构，隐藏收纳，线条简洁，强调电视背景墙比例",
    "floating TV cabinet, wall-mounted lightweight structure, hidden storage, clean lines, balanced TV wall proportions",
    30,
    { applicableSpaceIds: ["vertical-living", "horizontal-living", "master-bedroom"] }
  ),
  asset(
    "cabinet",
    "bookshelf",
    "满墙书柜",
    "Wall-to-wall bookshelf",
    "满墙书柜，开放层板与下方封闭收纳结合，适合书籍、摆件和展示系统",
    "wall-to-wall bookshelf system, open shelving combined with lower closed storage, books, objects and display composition",
    40,
    { applicableSpaceIds: ["ldk", "horizontal-living", "study", "vertical-living"] }
  ),
  asset(
    "cabinet",
    "u-kitchen",
    "U型整体橱柜",
    "U-shaped kitchen cabinets",
    "U型整体橱柜，三面操作台围合，高效动线，最大化台面和储物能力",
    "U-shaped kitchen cabinets, three-sided worktop layout, efficient workflow, maximum countertop and storage capacity",
    50,
    { applicableSpaceIds: ["kitchen", "semi-enclosed-kitchen", "enclosed-kitchen"] }
  ),
  asset(
    "cabinet",
    "l-kitchen",
    "L型整体橱柜",
    "L-shaped kitchen cabinets",
    "L型整体橱柜，转角利用充分，嵌入式电器与连续台面形成整洁操作区",
    "L-shaped kitchen cabinets, efficient corner use, built-in appliances and seamless countertop work area",
    60,
    { applicableSpaceIds: ["kitchen", "semi-enclosed-kitchen", "enclosed-kitchen"] }
  ),
  asset(
    "cabinet",
    "island",
    "岛台",
    "Kitchen island",
    "厨房岛台，兼具备餐、早餐吧、操作台和下方收纳功能，强化空间中心感",
    "kitchen island, prep counter, breakfast bar, work surface and lower storage, strong spatial centerpiece",
    70,
    { applicableSpaceIds: ["ldk", "dining-room", "kitchen"] }
  ),
  asset(
    "cabinet",
    "shoe-cabinet",
    "入户鞋柜",
    "Entrance shoe cabinet",
    "入户鞋柜，通高收纳，中部开放格，预留换鞋与随手置物区域",
    "entrance shoe cabinet, full-height storage, middle open shelf, bench and everyday drop zone",
    80,
    { applicableSpaceIds: ["entrance"] }
  ),
  asset(
    "cabinet",
    "balcony-cabinet",
    "阳台家政柜",
    "Balcony laundry cabinet",
    "阳台家政柜，嵌入洗衣机与烘干机，清洁工具收纳和台盆操作区一体化",
    "balcony laundry cabinet, integrated washer and dryer, cleaning tool storage and utility sink work area",
    90,
    { applicableSpaceIds: ["balcony"] }
  ),
  asset(
    "cabinet",
    "tatami",
    "榻榻米一体柜",
    "Integrated tatami storage",
    "榻榻米一体柜，床、衣柜、书桌和储物空间整合，提升小空间利用率",
    "integrated tatami bed, wardrobe, desk and storage system, maximizing compact room efficiency",
    100,
    { applicableSpaceIds: ["kids-room", "secondary-bedroom", "multi-functional"] }
  ),
  asset(
    "cabinet",
    "bay-window",
    "飘窗储物柜",
    "Bay window storage cabinet",
    "飘窗储物柜，下方抽屉收纳与坐卧休闲区结合，营造舒适角落",
    "bay window storage cabinet, lower drawer storage combined with cozy seating nook",
    110,
    { applicableSpaceIds: ["master-bedroom", "secondary-bedroom", "kids-room"] }
  ),
  asset(
    "cabinet",
    "sideboard",
    "餐边酒柜",
    "Dining sideboard and wine cabinet",
    "餐边酒柜，上方玻璃展示、下方封闭收纳，结合酒架、咖啡角和餐厅背景功能",
    "dining sideboard with wine cabinet, upper glass display, lower closed storage, wine rack and coffee corner",
    120,
    { applicableSpaceIds: ["horizontal-living", "ldk", "dining-room", "vertical-living"] }
  ),
  asset(
    "cabinet",
    "display-cabinet",
    "玻璃展示柜",
    "Glass display cabinet",
    "玻璃展示柜，通透柜门、内置灯带和层板展示，用于收藏品、艺术品或装饰摆件",
    "glass display cabinet, transparent doors, integrated LED lighting and shelves for collectibles, art objects and decor",
    130,
    { applicableSpaceIds: ["vertical-living", "horizontal-living", "study"] }
  ),
  asset(
    "cabinet",
    "accessories-island",
    "衣帽间中岛",
    "Closet accessories island",
    "衣帽间中岛，首饰、配饰和抽屉分类收纳，增强衣帽间的精品陈列感",
    "closet accessories island, jewelry and accessory drawers, refined display and organized storage",
    140,
    { applicableSpaceIds: ["walk-in-closet"] }
  ),

  asset(
    "material",
    "a-oak-white",
    "A-原木白+隐形",
    "Warm white and natural oak",
    "暖白哑光饰面搭配天然橡木纹理，无拉手或隐形拉手，接缝干净，质感柔和自然",
    "warm white matte lacquer finish, natural oak wood texture, handleless design, clean joinery, soft organic feel",
    10,
    { applicableStyleIds: ["modern-minimalist", "japanese-wood", "wabi-sabi"] }
  ),
  asset(
    "material",
    "b-gloss-white",
    "B-高光白+岩板",
    "Glossy white and marble slab",
    "高光白饰面搭配白色卡拉拉纹理岩板，局部黑玻柜门形成干净明亮的现代感",
    "high-gloss white lacquer, white carrara marble slab texture, black glass cabinet doors, clean bright modern feeling",
    20,
    { applicableStyleIds: ["modern-minimalist"] }
  ),
  asset(
    "material",
    "c-cream-brass",
    "C-奶油肤感+黄铜",
    "Cream finish and brushed brass",
    "奶油白肤感饰面，拉丝黄铜金属细节，弧形收边，整体温柔细腻",
    "creamy white skin-feel finish, brushed brass details, curved edges, soft delicate material feeling",
    30,
    { applicableStyleIds: ["french-cream", "wabi-sabi"] }
  ),
  asset(
    "material",
    "d-dark-grey",
    "D-深灰肤感+黑玻",
    "Matte dark grey and smoked glass",
    "深灰肤感饰面，烟熏黑玻璃，线性灯带点缀，呈现沉稳高级的柜体质感",
    "matte dark grey finish, smoked black glass, linear LED lights, restrained premium cabinetry texture",
    40,
    { applicableStyleIds: ["italian-minimal", "modern-minimalist"] }
  ),
  asset(
    "material",
    "e-walnut-glass",
    "E-黑胡桃+长虹玻璃",
    "Black walnut and fluted glass",
    "黑胡桃木搭配长虹玻璃和黄铜细节，兼具复古温度与精致层次",
    "black walnut wood, fluted glass, brass accents, warm vintage character and refined layers",
    50,
    { applicableStyleIds: ["modern-chinese", "american-vintage"] }
  ),
  asset(
    "material",
    "f-cement-rattan",
    "F-微水泥+藤编",
    "Micro-cement and rattan",
    "微水泥肌理搭配天然藤编和哑光木质，呈现朴素、自然、低饱和的材质氛围",
    "micro-cement texture, natural rattan cane, matte wood, raw natural low-saturation material atmosphere",
    60,
    { applicableStyleIds: ["japanese-wood", "wabi-sabi"] }
  ),
  asset(
    "material",
    "g-american-white",
    "G-美式白+复古金",
    "White shaker and vintage gold",
    "白色美式框线柜门，复古金色拉手，深胡桃木台面，呈现温暖复古的家庭感",
    "white shaker cabinet doors, vintage gold knobs, dark walnut countertop, warm American vintage feeling",
    70,
    { applicableStyleIds: ["american-vintage"] }
  ),
  asset(
    "material",
    "h-matte-white",
    "H-哑光白+极简",
    "Ultra-matte white minimal finish",
    "超哑光白色极简饰面，无缝收边，隐形拉手，线条纯净克制",
    "ultra-matte white minimalist finish, seamless edges, invisible handles, pure restrained architectural lines",
    80,
    { applicableStyleIds: ["italian-minimal", "modern-minimalist"] }
  ),

  asset(
    "residence",
    "standard",
    "商品房",
    "Standard residential apartment",
    "标准商品房尺度，层高约2.8米，空间比例真实，布局紧凑实用，符合常见住宅居住感",
    "standard residential apartment, ceiling height around 2.8 meters, realistic residential proportions, compact functional layout",
    10
  ),
  asset(
    "residence",
    "upscale",
    "改善型",
    "Upscale modern apartment",
    "改善型住宅尺度，层高约3.0米，空间更通透舒适，比例均衡，整体更有品质感",
    "upscale modern apartment, ceiling height around 3.0 meters, airy comfortable space, balanced proportions, refined residential quality",
    20
  ),
  asset(
    "residence",
    "luxury",
    "大平层",
    "Luxury large flat",
    "大平层住宅尺度，层高约3.3米，开阔大气，空间层次丰富，强调高端居住品质",
    "luxury large flat, ceiling height around 3.3 meters, expansive open plan, premium spatial quality and architectural depth",
    30
  ),
];

const sortAssets = (assets: PromptAssetRecord[]) =>
  [...assets].sort((left, right) => left.sortOrder - right.sortOrder || left.name.localeCompare(right.name, "zh-CN"));

export const buildAssetLibrary = (assets: PromptAssetRecord[]): AssetLibrary => {
  const enabledAssets = sortAssets(assets.filter((item) => item.enabled));
  const byCategory = (category: AssetCategory) => enabledAssets.filter((item) => item.category === category);

  return {
    spaces: byCategory("space").map((item) => ({
      id: item.id,
      name: item.name,
      nameEn: item.nameEn,
      promptZh: item.promptZh,
      promptEn: item.promptEn,
    })),
    cabinets: byCategory("cabinet").map((item) => ({
      id: item.id,
      name: item.name,
      nameEn: item.nameEn,
      promptZh: item.promptZh,
      promptEn: item.promptEn,
      applicableSpaces: item.applicableSpaceIds,
    })),
    styles: byCategory("style").map((item) => ({
      id: item.id,
      name: item.name,
      nameEn: item.nameEn,
      promptZh: item.promptZh,
      promptEn: item.promptEn,
    })),
    materials: byCategory("material").map((item) => ({
      id: item.id,
      name: item.name,
      nameEn: item.nameEn,
      promptZh: item.promptZh,
      promptEn: item.promptEn,
      applicableStyles: item.applicableStyleIds,
    })),
    residenceTypes: byCategory("residence").map((item) => ({
      id: item.id,
      name: item.name,
      nameEn: item.nameEn,
      promptZh: item.promptZh,
      promptEn: item.promptEn,
    })),
    cameraAngles: byCategory("camera").map((item) => ({
      id: item.id,
      name: item.name,
      nameEn: item.nameEn,
      promptZh: item.promptZh,
      promptEn: item.promptEn,
    })),
    lightings: byCategory("lighting").map((item) => ({
      id: item.id,
      name: item.name,
      nameEn: item.nameEn,
      promptZh: item.promptZh,
      promptEn: item.promptEn,
    })),
  };
};

export const defaultAssetLibrary = buildAssetLibrary(defaultPromptAssets);

export const getDefaultAssetById = (id: string) =>
  defaultPromptAssets.find((item) => item.id === id) ?? null;
