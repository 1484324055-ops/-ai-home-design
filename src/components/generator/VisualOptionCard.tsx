"use client";

import type { VisualMeta } from "@/lib/visual-metadata";

interface VisualOptionCardProps {
  name: string;
  meta: VisualMeta;
  isSelected: boolean;
  onClick: () => void;
  subtitle?: string;
  disabled?: boolean;
}

export default function VisualOptionCard({
  name,
  meta,
  isSelected,
  onClick,
  subtitle,
  disabled = false,
}: VisualOptionCardProps) {
  const previewStyle =
    meta.kind === "texture"
      ? { background: meta.texture, boxShadow: `inset 0 0 0 1px ${meta.accent}22` }
      : { backgroundColor: `${meta.accent}14`, color: meta.accent };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`group relative min-h-[74px] overflow-hidden rounded-2xl border p-2.5 text-left transition-all duration-200 sm:min-h-[84px] sm:p-3 ${
        isSelected
          ? "border-[var(--accent)] bg-[var(--accent)]/10 shadow-[0_14px_32px_rgba(59,130,246,0.14)]"
          : "border-[var(--border)] bg-[var(--card-bg)] hover:-translate-y-0.5 hover:border-[var(--accent)]/45 hover:bg-[var(--card-hover)]"
      } ${disabled ? "cursor-not-allowed opacity-55" : ""}`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${meta.accent}, transparent)` }}
      />

      <div className="flex items-start gap-2.5">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl text-[13px] font-black tracking-tight sm:h-10 sm:w-10"
          style={previewStyle}
        >
          {meta.kind === "texture" ? (
            <span className="rounded-full bg-white/70 px-1.5 py-0.5 text-[10px] text-slate-900 shadow-sm">
              {meta.icon}
            </span>
          ) : (
            meta.icon
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start gap-2">
            <span className="line-clamp-2 text-[13px] font-semibold leading-5 text-[var(--foreground)] sm:text-sm">
              {name}
            </span>
            {isSelected && (
              <span className="ml-auto rounded-full bg-[var(--accent)] px-1.5 py-0.5 text-[10px] font-bold text-white">
                已选
              </span>
            )}
          </div>

          <p className="mt-1 line-clamp-1 text-[11px] text-[var(--foreground-secondary)]">
            {subtitle || meta.caption}
          </p>

          {meta.kind === "palette" && meta.swatches && (
            <div className="mt-2 flex h-2.5 overflow-hidden rounded-full border border-black/5">
              {meta.swatches.map((color) => (
                <span key={color} className="flex-1" style={{ backgroundColor: color }} />
              ))}
            </div>
          )}

          {meta.kind === "texture" && (
            <div className="mt-2 h-2.5 rounded-full border border-black/5" style={{ background: meta.texture }} />
          )}
        </div>
      </div>
    </button>
  );
}
