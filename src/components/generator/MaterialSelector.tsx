"use client";

import { Material } from "@/lib/data";

interface MaterialSelectorProps {
  materials: Material[];
  selectedMaterial: Material | null;
  onSelect: (material: Material) => void;
}

export default function MaterialSelector({
  materials,
  selectedMaterial,
  onSelect,
}: MaterialSelectorProps) {
  if (materials.length === 0) {
    return (
      <div className="space-y-3 opacity-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--border)] flex items-center justify-center">
            <span className="text-sm font-bold text-[var(--foreground-secondary)]">4</span>
          </div>
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            选择材质
          </h3>
        </div>
        <p className="text-sm text-[var(--foreground-secondary)] pl-10">
          请先选择风格
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
          <span className="text-sm font-bold text-[var(--accent)]">4</span>
        </div>
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          选择材质
        </h3>
        {selectedMaterial && (
          <span className="ml-auto text-sm text-[var(--accent)] font-medium">
            ✓ 已选择
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {materials.map((material) => (
          <button
            key={material.id}
            onClick={() => onSelect(material)}
            className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
              selectedMaterial?.id === material.id
                ? "border-[var(--accent)] bg-[var(--accent)]/10 shadow-md"
                : "border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--accent)]/50 hover:bg-[var(--card-hover)]"
            }`}
          >
            <span className="text-sm font-medium text-[var(--foreground)]">
              {material.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
