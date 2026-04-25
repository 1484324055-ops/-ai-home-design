"use client";

import { Space } from "@/lib/data";
import { getSpaceVisual } from "@/lib/visual-metadata";
import VisualOptionCard from "./VisualOptionCard";

interface SpaceSelectorProps {
  spaces: Space[];
  selectedSpace: Space | null;
  onSelect: (space: Space) => void;
}

export default function SpaceSelector({ spaces, selectedSpace, onSelect }: SpaceSelectorProps) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent)]/10 sm:h-8 sm:w-8">
          <span className="text-xs font-bold text-[var(--accent)] sm:text-sm">1</span>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--foreground)] sm:text-base">选择空间</h3>
          <p className="hidden text-xs text-[var(--foreground-secondary)] sm:block">
            小图标帮助快速识别房间类型
          </p>
        </div>
        {selectedSpace && (
          <span className="ml-auto text-xs font-medium text-[var(--accent)] sm:text-sm">
            已选择
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {spaces.map((space) => (
          <VisualOptionCard
            key={space.id}
            name={space.name}
            meta={getSpaceVisual(space.id, space.name)}
            isSelected={selectedSpace?.id === space.id}
            onClick={() => onSelect(space)}
          />
        ))}
      </div>
    </div>
  );
}
