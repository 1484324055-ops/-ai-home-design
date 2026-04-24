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
      <div className="space-y-2 opacity-50">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--border)] sm:h-8 sm:w-8">
            <span className="text-xs font-bold text-[var(--foreground-secondary)] sm:text-sm">4</span>
          </div>
          <h3 className="text-sm font-semibold text-[var(--foreground)] sm:text-base">
            选择材质
          </h3>
        </div>
        <p className="pl-10 text-sm text-[var(--foreground-secondary)]">
          请先选择风格
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent)]/10 sm:h-8 sm:w-8">
          <span className="text-xs font-bold text-[var(--accent)] sm:text-sm">4</span>
        </div>
        <h3 className="text-sm font-semibold text-[var(--foreground)] sm:text-base">
          选择材质
        </h3>
        {selectedMaterial && (
          <span className="ml-auto text-xs font-medium text-[var(--accent)] sm:text-sm">
            ✓ 已选择
          </span>
        )}
      </div>
      <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4 sm:gap-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
        {materials.map((material) => (
          <button
            key={material.id}
            onClick={() => onSelect(material)}
            className={`min-h-[46px] rounded-xl border p-2 text-left transition-all duration-200 sm:min-h-[56px] sm:border-2 sm:p-3 ${
              selectedMaterial?.id === material.id
                ? "border-[var(--accent)] bg-[var(--accent)]/10 shadow-md"
                : "border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--accent)]/50 hover:bg-[var(--card-hover)]"
            }`}
          >
            <span className="text-xs font-medium leading-5 text-[var(--foreground)] sm:text-sm sm:leading-6">
              {material.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
