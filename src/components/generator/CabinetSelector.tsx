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
          <div className="w-8 h-8 rounded-lg bg-[var(--border)] flex items-center justify-center">
            <span className="text-sm font-bold text-[var(--foreground-secondary)]">2</span>
          </div>
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            选择柜体
          </h3>
        </div>
        <p className="text-sm text-[var(--foreground-secondary)] pl-10">
          请先选择空间
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
          <span className="text-sm font-bold text-[var(--accent)]">2</span>
        </div>
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          选择柜体
        </h3>
        {selectedCabinet && (
          <span className="ml-auto text-sm text-[var(--accent)] font-medium">
            ✓ 已选择
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {cabinets.map((cabinet) => (
          <button
            key={cabinet.id}
            onClick={() => onSelect(cabinet)}
            className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
              selectedCabinet?.id === cabinet.id
                ? "border-[var(--accent)] bg-[var(--accent)]/10 shadow-md"
                : "border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--accent)]/50 hover:bg-[var(--card-hover)]"
            }`}
          >
            <span className="text-sm font-medium text-[var(--foreground)]">
              {cabinet.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
