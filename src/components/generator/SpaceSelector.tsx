"use client";

import { Space } from "@/lib/data";

interface SpaceSelectorProps {
  spaces: Space[];
  selectedSpace: Space | null;
  onSelect: (space: Space) => void;
}

export default function SpaceSelector({ spaces, selectedSpace, onSelect }: SpaceSelectorProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
          <span className="text-sm font-bold text-[var(--accent)]">1</span>
        </div>
        <h3 className="text-base font-semibold text-[var(--foreground)] sm:text-lg">
          选择空间
        </h3>
        {selectedSpace && (
          <span className="ml-auto text-xs font-medium text-[var(--accent)] sm:text-sm">
            ✓ 已选择
          </span>
        )}
      </div>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
        {spaces.map((space) => (
          <button
            key={space.id}
            onClick={() => onSelect(space)}
            className={`min-h-[58px] rounded-xl border-2 p-2 text-left transition-all duration-200 sm:min-h-[72px] sm:p-4 ${
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
