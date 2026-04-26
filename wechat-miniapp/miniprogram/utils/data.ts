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
    { id: "horizontal-living", name: "横厅", nameEn: "Wide living room", promptZh: "横厅客厅空间，面宽开阔，客餐厅关系清晰，适合展示连续柜体和大尺度收纳系统", promptEn: "wide living room interior, broad open-plan layout, clear living-dining relationship, suitable for continuous cabinetry and large storage systems" },
    { id: "vertical-living", name: "竖厅", nameEn: "Long living room", promptZh: "竖厅客厅空间，进深较长，视觉轴线明确，适合展示电视墙、展示柜和收纳秩序", promptEn: "long living room interior, elongated layout, clear visual axis, suitable for TV wall cabinetry, display cabinets and storage order" },
    { id: "master-bedroom", name: "主卧", nameEn: "Master bedroom", promptZh: "主卧空间，安静舒适的居住尺度，强调衣柜、床头背景和收纳系统的整体关系", promptEn: "master bedroom interior, calm comfortable residential scale, emphasizing wardrobe, headboard wall and integrated storage system" },
    { id: "kitchen", name: "厨房", nameEn: "Kitchen", promptZh: "厨房空间，操作动线清晰，强调橱柜、台面、电器和收纳系统的功能关系", promptEn: "kitchen interior, clear workflow, emphasizing cabinetry, countertop, appliances and functional storage system" },
    { id: "enclosed-kitchen", name: "封闭式厨房", nameEn: "Enclosed kitchen", promptZh: "封闭式厨房，独立空间边界明确，强调紧凑高效的操作区、储物区和整洁台面", promptEn: "enclosed kitchen interior, clear separate room boundary, compact efficient workflow, storage zones and clean countertops" },
    { id: "semi-enclosed-kitchen", name: "半封闭厨房", nameEn: "Semi-enclosed kitchen", promptZh: "半封闭厨房，玻璃隔断或推拉门形成通透边界，兼顾开放感和油烟分区", promptEn: "semi-enclosed kitchen, glass partition or sliding doors, transparent boundary, balancing openness and cooking separation" },
    { id: "study", name: "书房", nameEn: "Study room", promptZh: "书房空间，安静专注，强调书柜、书桌、展示层板和封闭收纳的组合关系", promptEn: "study room or home office, quiet focused atmosphere, built-in bookshelf, desk, display shelving and closed storage" },
    { id: "entrance", name: "玄关", nameEn: "Entrance foyer", promptZh: "玄关空间，入户动线清晰，强调鞋柜、换鞋区、中部开放格和随手收纳", promptEn: "entrance foyer, clear entry circulation, shoe cabinet, bench area, middle open shelf and everyday storage" },
    { id: "walk-in-closet", name: "衣帽间", nameEn: "Walk-in closet", promptZh: "衣帽间空间，强调开放挂衣、玻璃柜门、抽屉收纳和中岛陈列的精致秩序", promptEn: "walk-in closet, open hanging system, glass wardrobe doors, drawer storage and refined island display" },
    { id: "dining-room", name: "餐厅", nameEn: "Dining room", promptZh: "餐厅空间，餐桌与餐边柜关系清晰，适合展示酒柜、展示柜和收纳背景", promptEn: "dining room, clear relationship between dining table and sideboard, suitable for wine cabinet, display cabinet and storage wall" },
    { id: "ldk", name: "LDK一体化", nameEn: "LDK open concept", promptZh: "LDK一体化空间，客餐厨连续联动，强调开放格局、岛台、餐边柜和整体收纳系统", promptEn: "LDK open concept, connected living dining kitchen space, open layout, island, sideboard and integrated storage system" },
    { id: "kids-room", name: "儿童房", nameEn: "Kids bedroom", promptZh: "儿童房空间，兼顾睡眠、学习、玩耍和收纳，强调安全、明亮和成长型布局", promptEn: "kids bedroom, combining sleeping, study, play and storage, safe bright atmosphere and growth-friendly layout" },
    { id: "balcony", name: "阳台", nameEn: "Enclosed balcony", promptZh: "封闭式阳台空间，兼顾家政洗衣、储物和休闲功能，空间明亮实用", promptEn: "enclosed balcony, laundry area, storage and leisure function, bright practical residential space" },
    { id: "multi-functional", name: "多功能房", nameEn: "Multi-functional room", promptZh: "多功能房，兼顾客房、书房、榻榻米和储物功能，强调空间复合利用", promptEn: "multi-functional room, guest room combined with study, tatami and storage, efficient compact space use" },
    { id: "secondary-bedroom", name: "次卧", nameEn: "Secondary bedroom", promptZh: "次卧空间，尺度紧凑舒适，强调衣柜、书桌和床区的实用组合", promptEn: "secondary bedroom, cozy compact residential scale, practical combination of wardrobe, desk and sleeping area" }
  ],
  cabinets: [
    { id: "floor-wardrobe", name: "一门到顶衣柜", nameEn: "Floor-to-ceiling wardrobe", promptZh: "一门到顶衣柜，通高柜门、简洁立面、隐形拉手或无拉手设计，强化整体感和收纳容量", promptEn: "floor-to-ceiling wardrobe, full-height seamless doors, handleless or concealed handle design, strong integrated storage volume", applicableSpaces: ["master-bedroom", "secondary-bedroom", "kids-room"] },
    { id: "glass-wardrobe", name: "玻璃衣柜", nameEn: "Glass wardrobe", promptZh: "玻璃衣柜，窄边金属框、通透柜门、内置灯带和衣物陈列，呈现轻奢精致感", promptEn: "glass wardrobe, slim metal frames, transparent doors, integrated LED lighting and clothing display, refined luxury feeling", applicableSpaces: ["walk-in-closet", "master-bedroom"] },
    { id: "floating-tv", name: "悬浮电视柜", nameEn: "Floating TV cabinet", promptZh: "悬浮电视柜，壁挂式轻盈结构，隐藏收纳，线条简洁，强调电视背景墙比例", promptEn: "floating TV cabinet, wall-mounted lightweight structure, hidden storage, clean lines, balanced TV wall proportions", applicableSpaces: ["vertical-living", "horizontal-living", "master-bedroom"] },
    { id: "bookshelf", name: "满墙书柜", nameEn: "Wall-to-wall bookshelf", promptZh: "满墙书柜，开放层板与下方封闭收纳结合，适合书籍、摆件和展示系统", promptEn: "wall-to-wall bookshelf system, open shelving combined with lower closed storage, books, objects and display composition", applicableSpaces: ["ldk", "horizontal-living", "study", "vertical-living"] },
    { id: "u-kitchen", name: "U型整体橱柜", nameEn: "U-shaped kitchen cabinets", promptZh: "U型整体橱柜，三面操作台围合，高效动线，最大化台面和储物能力", promptEn: "U-shaped kitchen cabinets, three-sided worktop layout, efficient workflow, maximum countertop and storage capacity", applicableSpaces: ["kitchen", "semi-enclosed-kitchen", "enclosed-kitchen"] },
    { id: "l-kitchen", name: "L型整体橱柜", nameEn: "L-shaped kitchen cabinets", promptZh: "L型整体橱柜，转角利用充分，嵌入式电器与连续台面形成整洁操作区", promptEn: "L-shaped kitchen cabinets, efficient corner use, built-in appliances and seamless countertop work area", applicableSpaces: ["kitchen", "semi-enclosed-kitchen", "enclosed-kitchen"] },
    { id: "island", name: "岛台", nameEn: "Kitchen island", promptZh: "厨房岛台，兼具备餐、早餐吧、操作台和下方收纳功能，强化空间中心感", promptEn: "kitchen island, prep counter, breakfast bar, work surface and lower storage, strong spatial centerpiece", applicableSpaces: ["ldk", "dining-room", "kitchen"] },
    { id: "shoe-cabinet", name: "入户鞋柜", nameEn: "Entrance shoe cabinet", promptZh: "入户鞋柜，通高收纳，中部开放格，预留换鞋与随手置物区域", promptEn: "entrance shoe cabinet, full-height storage, middle open shelf, bench and everyday drop zone", applicableSpaces: ["entrance"] },
    { id: "balcony-cabinet", name: "阳台家政柜", nameEn: "Balcony laundry cabinet", promptZh: "阳台家政柜，嵌入洗衣机与烘干机，清洁工具收纳和台盆操作区一体化", promptEn: "balcony laundry cabinet, integrated washer and dryer, cleaning tool storage and utility sink work area", applicableSpaces: ["balcony"] },
    { id: "tatami", name: "榻榻米一体柜", nameEn: "Integrated tatami storage", promptZh: "榻榻米一体柜，床、衣柜、书桌和储物空间整合，提升小空间利用率", promptEn: "integrated tatami bed, wardrobe, desk and storage system, maximizing compact room efficiency", applicableSpaces: ["kids-room", "secondary-bedroom", "multi-functional"] },
    { id: "bay-window", name: "飘窗储物柜", nameEn: "Bay window storage cabinet", promptZh: "飘窗储物柜，下方抽屉收纳与坐卧休闲区结合，营造舒适角落", promptEn: "bay window storage cabinet, lower drawer storage combined with cozy seating nook", applicableSpaces: ["master-bedroom", "secondary-bedroom", "kids-room"] },
    { id: "sideboard", name: "餐边酒柜", nameEn: "Dining sideboard and wine cabinet", promptZh: "餐边酒柜，上方玻璃展示、下方封闭收纳，结合酒架、咖啡角和餐厅背景功能", promptEn: "dining sideboard with wine cabinet, upper glass display, lower closed storage, wine rack and coffee corner", applicableSpaces: ["horizontal-living", "ldk", "dining-room", "vertical-living"] },
    { id: "display-cabinet", name: "玻璃展示柜", nameEn: "Glass display cabinet", promptZh: "玻璃展示柜，通透柜门、内置灯带和层板展示，用于收藏品、艺术品或装饰摆件", promptEn: "glass display cabinet, transparent doors, integrated LED lighting and shelves for collectibles, art objects and decor", applicableSpaces: ["vertical-living", "horizontal-living", "study"] },
    { id: "accessories-island", name: "衣帽间中岛", nameEn: "Closet accessories island", promptZh: "衣帽间中岛，首饰、配饰和抽屉分类收纳，增强衣帽间的精品陈列感", promptEn: "closet accessories island, jewelry and accessory drawers, refined display and organized storage", applicableSpaces: ["walk-in-closet"] }
  ],
  styles: [
    { id: "modern-minimalist", name: "现代简约", nameEn: "Modern minimalist", promptZh: "现代简约风格，线条干净利落，色彩克制中性，强调功能秩序、留白和整洁的居住感", promptEn: "modern minimalist style, clean lines, neutral tones, functional order, uncluttered residential atmosphere" },
    { id: "french-cream", name: "法式奶油", nameEn: "French cream", promptZh: "法式奶油风格，温润浅色基调，细腻墙面线条，柔和浪漫但不过度繁复", promptEn: "French cream style, warm white palette, refined wall moldings, soft romantic atmosphere, elegant and restrained" },
    { id: "italian-minimal", name: "意式极简", nameEn: "Italian minimalist luxury", promptZh: "意式极简风格，高级克制，强调比例、线条、材质质感和沉稳精致的空间气质", promptEn: "Italian minimalist luxury, refined proportions, clean architectural lines, high-end materials, restrained sophisticated atmosphere" },
    { id: "japanese-wood", name: "日式原木", nameEn: "Japanese natural wood", promptZh: "日式原木风格，天然木色、温暖柔和、低饱和配色，强调松弛、自然和干净的生活感", promptEn: "Japanese natural wood style, warm oak texture, soft low-saturation palette, calm cozy residential atmosphere" },
    { id: "modern-chinese", name: "现代新中式", nameEn: "Modern Chinese", promptZh: "现代新中式风格，深木色点缀，对称秩序，克制雅致，带有东方审美和现代简洁感", promptEn: "modern Chinese style, dark wood accents, balanced symmetry, elegant oriental aesthetics, contemporary restraint" },
    { id: "wabi-sabi", name: "极简侘寂", nameEn: "Wabi-sabi minimalism", promptZh: "极简侘寂风格，微水泥肌理、有机形态、大地色调，呈现自然、安静和朴素的高级感", promptEn: "wabi-sabi minimalism, micro-cement texture, organic forms, earthy tones, quiet raw beauty" },
    { id: "american-vintage", name: "美式复古", nameEn: "Modern American vintage", promptZh: "美式复古风格，框线柜门、温暖色调、复古金属细节，呈现舒适、有家庭感的空间氛围", promptEn: "modern American vintage style, shaker cabinet doors, warm colors, vintage metal details, cozy family atmosphere" }
  ],
  materials: [
    { id: "a-oak-white", name: "A-原木白+隐形", nameEn: "Warm white and natural oak", promptZh: "暖白哑光饰面搭配天然橡木纹理，无拉手或隐形拉手，接缝干净，质感柔和自然", promptEn: "warm white matte lacquer finish, natural oak wood texture, handleless design, clean joinery, soft organic feel", applicableStyles: ["modern-minimalist", "japanese-wood", "wabi-sabi"] },
    { id: "b-gloss-white", name: "B-高光白+岩板", nameEn: "Glossy white and marble slab", promptZh: "高光白饰面搭配白色卡拉拉纹理岩板，局部黑玻柜门形成干净明亮的现代感", promptEn: "high-gloss white lacquer, white carrara marble slab texture, black glass cabinet doors, clean bright modern feeling", applicableStyles: ["modern-minimalist"] },
    { id: "c-cream-brass", name: "C-奶油肤感+黄铜", nameEn: "Cream finish and brushed brass", promptZh: "奶油白肤感饰面，拉丝黄铜金属细节，弧形收边，整体温柔细腻", promptEn: "creamy white skin-feel finish, brushed brass details, curved edges, soft delicate material feeling", applicableStyles: ["french-cream", "wabi-sabi"] },
    { id: "d-dark-grey", name: "D-深灰肤感+黑玻", nameEn: "Matte dark grey and smoked glass", promptZh: "深灰肤感饰面，烟熏黑玻璃，线性灯带点缀，呈现沉稳高级的柜体质感", promptEn: "matte dark grey finish, smoked black glass, linear LED lights, restrained premium cabinetry texture", applicableStyles: ["italian-minimal", "modern-minimalist"] },
    { id: "e-walnut-glass", name: "E-黑胡桃+长虹玻璃", nameEn: "Black walnut and fluted glass", promptZh: "黑胡桃木搭配长虹玻璃和黄铜细节，兼具复古温度与精致层次", promptEn: "black walnut wood, fluted glass, brass accents, warm vintage character and refined layers", applicableStyles: ["modern-chinese", "american-vintage"] },
    { id: "f-cement-rattan", name: "F-微水泥+藤编", nameEn: "Micro-cement and rattan", promptZh: "微水泥肌理搭配天然藤编和哑光木质，呈现朴素、自然、低饱和的材质氛围", promptEn: "micro-cement texture, natural rattan cane, matte wood, raw natural low-saturation material atmosphere", applicableStyles: ["japanese-wood", "wabi-sabi"] },
    { id: "g-american-white", name: "G-美式白+复古金", nameEn: "White shaker and vintage gold", promptZh: "白色美式框线柜门，复古金色拉手，深胡桃木台面，呈现温暖复古的家庭感", promptEn: "white shaker cabinet doors, vintage gold knobs, dark walnut countertop, warm American vintage feeling", applicableStyles: ["american-vintage"] },
    { id: "h-matte-white", name: "H-哑光白+极简", nameEn: "Ultra-matte white minimal finish", promptZh: "超哑光白色极简饰面，无缝收边，隐形拉手，线条纯净克制", promptEn: "ultra-matte white minimalist finish, seamless edges, invisible handles, pure restrained architectural lines", applicableStyles: ["italian-minimal", "modern-minimalist"] }
  ],
  residenceTypes: [
    { id: "standard", name: "商品房", nameEn: "Standard residential apartment", promptZh: "标准商品房尺度，层高约2.8米，空间比例真实，布局紧凑实用，符合常见住宅居住感", promptEn: "standard residential apartment, ceiling height around 2.8 meters, realistic residential proportions, compact functional layout" },
    { id: "upscale", name: "改善型", nameEn: "Upscale modern apartment", promptZh: "改善型住宅尺度，层高约3.0米，空间更通透舒适，比例均衡，整体更有品质感", promptEn: "upscale modern apartment, ceiling height around 3.0 meters, airy comfortable space, balanced proportions, refined residential quality" },
    { id: "luxury", name: "大平层", nameEn: "Luxury large flat", promptZh: "大平层住宅尺度，层高约3.3米，开阔大气，空间层次丰富，强调高端居住品质", promptEn: "luxury large flat, ceiling height around 3.3 meters, expansive open plan, premium spatial quality and architectural depth" }
  ],
  cameraAngles: [
    { id: "wide-angle", name: "广角全景", nameEn: "Wide-angle full-room view", promptZh: "广角全景构图，完整呈现房间布局、柜体关系和空间纵深", promptEn: "wide-angle full-room view, capturing the whole room layout, cabinetry relationship and spatial depth" },
    { id: "straight", name: "正视平视", nameEn: "Straight-on eye-level view", promptZh: "正视平视构图，视线高度自然，对称稳定，适合展示柜体立面比例", promptEn: "straight-on eye-level view, stable symmetrical composition, ideal for showing cabinetry elevation and proportions" },
    { id: "45-degree", name: "45度侧视", nameEn: "45-degree perspective view", promptZh: "45度侧视构图，增强空间层次和转角关系，保持整体画面清晰", promptEn: "45-degree perspective view, enhanced spatial layers and corner relationships, clear full-room composition" }
  ],
  lightings: [
    { id: "natural", name: "明亮自然光", nameEn: "Bright natural daylight", promptZh: "明亮自然光，柔和阴影，空间通透轻盈，材质纹理清晰真实", promptEn: "bright natural daylight, soft shadows, airy atmosphere, clear realistic material textures" },
    { id: "warm", name: "暖调无主灯", nameEn: "Warm indirect lighting", promptZh: "暖调无主灯照明，嵌入式灯带和局部氛围光，营造舒适柔和的夜晚居家氛围", promptEn: "warm indirect lighting, no main light design, recessed light strips, cozy evening residential atmosphere" },
    { id: "cool", name: "高级冷调光", nameEn: "Cool refined lighting", promptZh: "高级冷调光，干净利落的明暗层次，强调材质反差和沉稳的高级空间感", promptEn: "cool refined lighting, controlled contrast, crisp light and shadow, premium material depth" }
  ]
};
