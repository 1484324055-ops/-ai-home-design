export type VisualKind = "icon" | "palette" | "texture";

export interface VisualMeta {
  kind: VisualKind;
  icon: string;
  accent: string;
  caption: string;
  swatches?: string[];
  texture?: string;
}

const fallbackAccents = ["#3B82F6", "#A1887F", "#D4AF37", "#64748B", "#10B981"];

const firstVisibleChar = (name: string, fallback: string) =>
  Array.from(name).find((char) => char.trim().length > 0) ?? fallback;

const fallbackMeta = (
  name: string,
  kind: VisualKind,
  fallback: string,
  indexSeed = 0
): VisualMeta => ({
  kind,
  icon: firstVisibleChar(name, fallback),
  accent: fallbackAccents[indexSeed % fallbackAccents.length],
  caption: "自定义资产",
  swatches: kind === "palette" ? ["#f8fafc", "#cbd5e1", "#334155"] : undefined,
  texture:
    kind === "texture"
      ? "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 45%, #94a3b8 100%)"
      : undefined,
});

const spaceVisuals: Record<string, VisualMeta> = {
  "dining-room": { kind: "icon", icon: "餐", accent: "#D97706", caption: "餐桌 / 餐边柜" },
  balcony: { kind: "icon", icon: "阳", accent: "#0EA5E9", caption: "洗烘 / 储物" },
  entrance: { kind: "icon", icon: "玄", accent: "#64748B", caption: "入户 / 鞋柜" },
  "kids-room": { kind: "icon", icon: "童", accent: "#F97316", caption: "学习 / 成长" },
  ldk: { kind: "icon", icon: "LDK", accent: "#14B8A6", caption: "客餐厨一体" },
  "walk-in-closet": { kind: "icon", icon: "衣", accent: "#A855F7", caption: "衣帽间" },
  "master-bedroom": { kind: "icon", icon: "卧", accent: "#6366F1", caption: "主卧收纳" },
  study: { kind: "icon", icon: "书", accent: "#2563EB", caption: "书桌 / 书柜" },
  "vertical-living": { kind: "icon", icon: "竖", accent: "#22C55E", caption: "竖厅客厅" },
  "horizontal-living": { kind: "icon", icon: "横", accent: "#3B82F6", caption: "横厅客厅" },
  kitchen: { kind: "icon", icon: "厨", accent: "#EF4444", caption: "橱柜 / 岛台" },
  "multi-functional": { kind: "icon", icon: "多", accent: "#8B5CF6", caption: "复合功能" },
  "secondary-bedroom": { kind: "icon", icon: "次", accent: "#64748B", caption: "次卧收纳" },
  "enclosed-kitchen": { kind: "icon", icon: "闭", accent: "#DC2626", caption: "封闭厨房" },
  "semi-enclosed-kitchen": { kind: "icon", icon: "半", accent: "#F97316", caption: "半开放厨房" },
};

const cabinetVisuals: Record<string, VisualMeta> = {
  "floating-tv": { kind: "icon", icon: "视", accent: "#2563EB", caption: "电视墙" },
  "floor-wardrobe": { kind: "icon", icon: "衣", accent: "#7C3AED", caption: "通高衣柜" },
  "glass-wardrobe": { kind: "icon", icon: "玻", accent: "#0891B2", caption: "玻璃展示" },
  island: { kind: "icon", icon: "岛", accent: "#D97706", caption: "中岛操作台" },
  bookshelf: { kind: "icon", icon: "书", accent: "#2563EB", caption: "满墙书柜" },
  "l-kitchen": { kind: "icon", icon: "L", accent: "#DC2626", caption: "L 型橱柜" },
  "u-kitchen": { kind: "icon", icon: "U", accent: "#B91C1C", caption: "U 型橱柜" },
  "shoe-cabinet": { kind: "icon", icon: "鞋", accent: "#64748B", caption: "玄关鞋柜" },
  "balcony-cabinet": { kind: "icon", icon: "洗", accent: "#0EA5E9", caption: "阳台家政" },
  tatami: { kind: "icon", icon: "榻", accent: "#16A34A", caption: "榻榻米" },
  "bay-window": { kind: "icon", icon: "飘", accent: "#14B8A6", caption: "飘窗收纳" },
  sideboard: { kind: "icon", icon: "酒", accent: "#92400E", caption: "餐边酒柜" },
  "display-cabinet": { kind: "icon", icon: "展", accent: "#0891B2", caption: "展示柜" },
  "accessories-island": { kind: "icon", icon: "饰", accent: "#9333EA", caption: "饰品中岛" },
};

const styleVisuals: Record<string, VisualMeta> = {
  "japanese-wood": {
    kind: "palette",
    icon: "日",
    accent: "#B7791F",
    caption: "原木 / 米白 / 暖灰",
    swatches: ["#EAD7B7", "#F7F1E5", "#9C8A72"],
  },
  "italian-minimal": {
    kind: "palette",
    icon: "意",
    accent: "#374151",
    caption: "深灰 / 咖棕 / 石材",
    swatches: ["#111827", "#4B3A2B", "#D6D3D1"],
  },
  "modern-chinese": {
    kind: "palette",
    icon: "中",
    accent: "#7C2D12",
    caption: "胡桃 / 米灰 / 墨色",
    swatches: ["#3F2A1D", "#E7DED2", "#111827"],
  },
  "french-cream": {
    kind: "palette",
    icon: "法",
    accent: "#D6A34A",
    caption: "奶油 / 香槟金 / 暖白",
    swatches: ["#FFF2D8", "#D8B56D", "#F8F5EF"],
  },
  "modern-minimalist": {
    kind: "palette",
    icon: "简",
    accent: "#475569",
    caption: "白 / 灰 / 黑",
    swatches: ["#F8FAFC", "#CBD5E1", "#1F2937"],
  },
  "american-vintage": {
    kind: "palette",
    icon: "美",
    accent: "#92400E",
    caption: "复古白 / 胡桃 / 金属",
    swatches: ["#F8F1E7", "#5A3825", "#C99A4A"],
  },
  "wabi-sabi": {
    kind: "palette",
    icon: "侘",
    accent: "#8B7355",
    caption: "微水泥 / 土色 / 藤编",
    swatches: ["#D8CEC0", "#A58B6F", "#6F6458"],
  },
};

const materialVisuals: Record<string, VisualMeta> = {
  "a-oak-white": {
    kind: "texture",
    icon: "A",
    accent: "#C0842F",
    caption: "原木白 + 隐形拉手",
    texture:
      "linear-gradient(120deg, rgba(255,255,255,0.9), rgba(255,255,255,0.45)), repeating-linear-gradient(90deg, #d6ad73 0 5px, #efcf96 5px 9px, #c99555 9px 12px)",
  },
  "b-gloss-white": {
    kind: "texture",
    icon: "B",
    accent: "#94A3B8",
    caption: "高光白 + 岩板",
    texture:
      "linear-gradient(135deg, #ffffff 0%, #f8fafc 42%, #dbeafe 100%), linear-gradient(45deg, transparent 42%, rgba(148,163,184,0.4) 43%, transparent 45%)",
  },
  "c-cream-brass": {
    kind: "texture",
    icon: "C",
    accent: "#D6A34A",
    caption: "奶油肤感 + 黄铜",
    texture: "linear-gradient(135deg, #fff7e8 0%, #f5dfb7 60%, #b8872f 100%)",
  },
  "d-dark-grey": {
    kind: "texture",
    icon: "D",
    accent: "#334155",
    caption: "深灰肤感 + 黑玻",
    texture:
      "linear-gradient(135deg, #111827 0%, #374151 50%, #0f172a 100%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.22), transparent 28%)",
  },
  "e-walnut-glass": {
    kind: "texture",
    icon: "E",
    accent: "#7C2D12",
    caption: "黑胡桃 + 长虹玻璃",
    texture:
      "repeating-linear-gradient(90deg, rgba(255,255,255,0.22) 0 3px, transparent 3px 8px), linear-gradient(135deg, #2B170D 0%, #7C3F1D 55%, #C7A27A 100%)",
  },
  "f-cement-rattan": {
    kind: "texture",
    icon: "F",
    accent: "#8B7355",
    caption: "微水泥 + 藤编",
    texture:
      "repeating-linear-gradient(45deg, rgba(91,68,45,0.18) 0 3px, transparent 3px 9px), linear-gradient(135deg, #C9B8A3 0%, #EEE7DD 52%, #A78B64 100%)",
  },
  "g-american-white": {
    kind: "texture",
    icon: "G",
    accent: "#B8872F",
    caption: "美式白 + 复古金",
    texture: "linear-gradient(135deg, #fffaf0 0%, #ead7b7 50%, #b7791f 100%)",
  },
  "h-matte-white": {
    kind: "texture",
    icon: "H",
    accent: "#CBD5E1",
    caption: "哑光白 + 极简",
    texture: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 62%, #cbd5e1 100%)",
  },
};

export const getSpaceVisual = (id: string, name: string) =>
  spaceVisuals[id] ?? fallbackMeta(name, "icon", "空", id.length);

export const getCabinetVisual = (id: string, name: string) =>
  cabinetVisuals[id] ?? fallbackMeta(name, "icon", "柜", id.length);

export const getStyleVisual = (id: string, name: string) =>
  styleVisuals[id] ?? fallbackMeta(name, "palette", "风", id.length);

export const getMaterialVisual = (id: string, name: string) =>
  materialVisuals[id] ?? fallbackMeta(name, "texture", "材", id.length);
