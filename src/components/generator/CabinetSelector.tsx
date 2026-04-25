"use client";

import { Cabinet } from "@/lib/data";
import { getCabinetVisual } from "@/lib/visual-metadata";
import VisualOptionCard from "./VisualOptionCard";

interface CabinetSelectorProps {
  cabinets: Cabinet[];
  selectedCabinet: Cabinet | null;
  onSelect: (cabinet: Cabinet) => void;
}

export default function CabinetSelector({
  cabinets,
  selectedCabinet,
  onSelect,
}: CabinetSelectorProps) {
  if (cabinets.length === 0) {
    return (
      <div className="space-y-2 opacity-50">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--border)] sm:h-8 sm:w-8">
            <span className="text-xs font-bold text-[var(--foreground-secondary)] sm:text-sm">2</span>
          </div>
          <h3 className="text-sm font-semibold text-[var(--foreground)] sm:text-base">选择柜体</h3>
        </div>
        <p className="pl-10 text-sm text-[var(--foreground-secondary)]">请先选择空间</p>
      </div>
    );
  }

  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent)]/10 sm:h-8 sm:w-8">
          <span className="text-xs font-bold text-[var(--accent)] sm:text-sm">2</span>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--foreground)] sm:text-base">选择柜体</h3>
          <p className="hidden text-xs text-[var(--foreground-secondary)] sm:block">
            根据当前空间自动筛选可用柜体
          </p>
        </div>
        {selectedCabinet && (
          <span className="ml-auto text-xs font-medium text-[var(--accent)] sm:text-sm">
            已选择
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {cabinets.map((cabinet) => (
          <VisualOptionCard
            key={cabinet.id}
            name={cabinet.name}
            meta={getCabinetVisual(cabinet.id, cabinet.name)}
            isSelected={selectedCabinet?.id === cabinet.id}
            onClick={() => onSelect(cabinet)}
          />
        ))}
      </div>
    </div>
  );
}
