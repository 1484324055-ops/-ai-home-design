"use client";

import { Material } from "@/lib/data";
import { getMaterialVisual } from "@/lib/visual-metadata";
import VisualOptionCard from "./VisualOptionCard";

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
          <h3 className="text-sm font-semibold text-[var(--foreground)] sm:text-base">选择材质</h3>
        </div>
        <p className="pl-10 text-sm text-[var(--foreground-secondary)]">请先选择风格</p>
      </div>
    );
  }

  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent)]/10 sm:h-8 sm:w-8">
          <span className="text-xs font-bold text-[var(--accent)] sm:text-sm">4</span>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--foreground)] sm:text-base">选择材质</h3>
          <p className="hidden text-xs text-[var(--foreground-secondary)] sm:block">
            纹理预览对应主要板材和质感组合
          </p>
        </div>
        {selectedMaterial && (
          <span className="ml-auto text-xs font-medium text-[var(--accent)] sm:text-sm">
            已选择
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {materials.map((material) => (
          <VisualOptionCard
            key={material.id}
            name={material.name}
            meta={getMaterialVisual(material.id, material.name)}
            isSelected={selectedMaterial?.id === material.id}
            onClick={() => onSelect(material)}
          />
        ))}
      </div>
    </div>
  );
}
