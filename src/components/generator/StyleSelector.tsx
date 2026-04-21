"use client";

import { Style, styles } from "@/lib/data";

interface StyleSelectorProps {
  selectedStyle: Style | null;
  onSelect: (style: Style) => void;
}

export default function StyleSelector({ selectedStyle, onSelect }: StyleSelectorProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
          <span className="text-sm font-bold text-[var(--accent)]">3</span>
        </div>
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          选择风格
        </h3>
        {selectedStyle && (
          <span className="ml-auto text-sm text-[var(--accent)] font-medium">
            ✓ 已选择
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => onSelect(style)}
            className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
              selectedStyle?.id === style.id
                ? "border-[var(--accent)] bg-[var(--accent)]/10 shadow-md"
                : "border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--accent)]/50 hover:bg-[var(--card-hover)]"
            }`}
          >
            <span className="text-sm font-medium text-[var(--foreground)]">
              {style.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
