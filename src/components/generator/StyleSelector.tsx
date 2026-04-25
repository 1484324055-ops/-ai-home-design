"use client";

import { Style } from "@/lib/data";
import { getStyleVisual } from "@/lib/visual-metadata";
import VisualOptionCard from "./VisualOptionCard";

interface StyleSelectorProps {
  styles: Style[];
  selectedStyle: Style | null;
  onSelect: (style: Style) => void;
}

export default function StyleSelector({ styles, selectedStyle, onSelect }: StyleSelectorProps) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent)]/10 sm:h-8 sm:w-8">
          <span className="text-xs font-bold text-[var(--accent)] sm:text-sm">3</span>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--foreground)] sm:text-base">选择风格</h3>
          <p className="hidden text-xs text-[var(--foreground-secondary)] sm:block">
            色块预览帮助判断整体调性
          </p>
        </div>
        {selectedStyle && (
          <span className="ml-auto text-xs font-medium text-[var(--accent)] sm:text-sm">
            已选择
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {styles.map((style) => (
          <VisualOptionCard
            key={style.id}
            name={style.name}
            meta={getStyleVisual(style.id, style.name)}
            isSelected={selectedStyle?.id === style.id}
            onClick={() => onSelect(style)}
          />
        ))}
      </div>
    </div>
  );
}
