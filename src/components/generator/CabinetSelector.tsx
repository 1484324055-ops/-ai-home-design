"use client";

import { Cabinet } from "@/lib/data";

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
      <div className="space-y-3 opacity-50">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-[var(--border)] flex items-center justify-center">
            <span className="text-sm font-bold text-[var(--foreground-secondary)]">2</span>
          </div>
          <h3 className="text-base font-semibold text-[var(--foreground)] sm:text-lg">
            选择柜体
          </h3>
        </div>
        <p className="pl-10 text-sm text-[var(--foreground-secondary)]">
          请先选择空间
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
          <span className="text-sm font-bold text-[var(--accent)]">2</span>
        </div>
        <h3 className="text-base font-semibold text-[var(--foreground)] sm:text-lg">
          选择柜体
        </h3>
        {selectedCabinet && (
          <span className="ml-auto text-xs font-medium text-[var(--accent)] sm:text-sm">
            ✓ 已选择
          </span>
        )}
      </div>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4">
        {cabinets.map((cabinet) => (
          <button
            key={cabinet.id}
            onClick={() => onSelect(cabinet)}
            className={`min-h-[58px] rounded-xl border-2 p-2 text-left transition-all duration-200 sm:min-h-[72px] sm:p-4 ${
              selectedCabinet?.id === cabinet.id
                ? "border-[var(--accent)] bg-[var(--accent)]/10 shadow-md"
                : "border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--accent)]/50 hover:bg-[var(--card-hover)]"
            }`}
          >
            <span className="text-xs font-medium leading-5 text-[var(--foreground)] sm:text-sm sm:leading-6">
              {cabinet.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
