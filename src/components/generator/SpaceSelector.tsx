"use client";

import { Space, spaces } from "@/lib/data";

interface SpaceSelectorProps {
  selectedSpace: Space | null;
  onSelect: (space: Space) => void;
}

export default function SpaceSelector({ selectedSpace, onSelect }: SpaceSelectorProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
          <span className="text-sm font-bold text-[var(--accent)]">1</span>
        </div>
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          选择空间
        </h3>
        {selectedSpace && (
          <span className="ml-auto text-sm text-[var(--accent)] font-medium">
            ✓ 已选择
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {spaces.map((space) => (
          <button
            key={space.id}
            onClick={() => onSelect(space)}
            className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
              selectedSpace?.id === space.id
                ? "border-[var(--accent)] bg-[var(--accent)]/10 shadow-md"
                : "border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--accent)]/50 hover:bg-[var(--card-hover)]"
            }`}
          >
            <span className="text-sm font-medium text-[var(--foreground)]">
              {space.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
