"use client";

import { Space } from "@/lib/data";

interface SpaceSelectorProps {
  spaces: Space[];
  selectedSpace: Space | null;
  onSelect: (space: Space) => void;
}

export default function SpaceSelector({ spaces, selectedSpace, onSelect }: SpaceSelectorProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent)]/10 sm:h-8 sm:w-8">
          <span className="text-xs font-bold text-[var(--accent)] sm:text-sm">1</span>
        </div>
        <h3 className="text-sm font-semibold text-[var(--foreground)] sm:text-base">
          选择空间
        </h3>
        {selectedSpace && (
          <span className="ml-auto text-xs font-medium text-[var(--accent)] sm:text-sm">
            ✓ 已选择
          </span>
        )}
      </div>
      <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4 sm:gap-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
        {spaces.map((space) => (
          <button
            key={space.id}
            onClick={() => onSelect(space)}
            className={`min-h-[46px] rounded-xl border p-2 text-left transition-all duration-200 sm:min-h-[56px] sm:border-2 sm:p-3 ${
              selectedSpace?.id === space.id
                ? "border-[var(--accent)] bg-[var(--accent)]/10 shadow-md"
                : "border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--accent)]/50 hover:bg-[var(--card-hover)]"
            }`}
          >
            <span className="text-xs font-medium leading-5 text-[var(--foreground)] sm:text-sm sm:leading-6">
              {space.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
