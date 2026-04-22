"use client";

import { HistoryRecord } from "@/lib/history";

type SaveState = "idle" | "saving" | "saved" | "error";

interface HistoryPanelProps {
  histories: HistoryRecord[];
  isLoading: boolean;
  saveState: SaveState;
  activeHistoryId: number | null;
  onLoad: (record: HistoryRecord) => void;
  onToggleFavorite: (record: HistoryRecord) => void;
  onDelete: (record: HistoryRecord) => void;
}

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("zh-CN", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));

const saveStateLabel: Record<SaveState, string> = {
  idle: "自动保存开启",
  saving: "正在保存本次方案",
  saved: "已保存到历史记录",
  error: "保存失败，请稍后再试",
};

export default function HistoryPanel({
  histories,
  isLoading,
  saveState,
  activeHistoryId,
  onLoad,
  onToggleFavorite,
  onDelete,
}: HistoryPanelProps) {
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[var(--foreground)]">历史记录</h2>
          <p className="mt-1 text-sm text-[var(--foreground-secondary)]">
            每次生成后都会自动保存，收藏的方案会优先显示。
          </p>
        </div>
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
            saveState === "error"
              ? "bg-red-50 text-red-600"
              : saveState === "saved"
                ? "bg-emerald-50 text-emerald-600"
                : "bg-[var(--background-secondary)] text-[var(--foreground-secondary)]"
          }`}
        >
          {saveStateLabel[saveState]}
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {isLoading ? (
          <div className="rounded-xl border border-dashed border-[var(--border)] px-4 py-8 text-center text-sm text-[var(--foreground-secondary)]">
            正在读取你的历史记录...
          </div>
        ) : histories.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[var(--border)] px-4 py-8 text-center text-sm text-[var(--foreground-secondary)]">
            还没有历史记录。先生成一版提示词，这里就会自动开始积累。
          </div>
        ) : (
          histories.map((record) => (
            <article
              key={record.id}
              className={`rounded-xl border p-4 transition-all ${
                activeHistoryId === record.id
                  ? "border-[var(--accent)] bg-[var(--accent)]/5"
                  : "border-[var(--border)] bg-[var(--background-secondary)]"
              }`}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate text-base font-semibold text-[var(--foreground)]">
                      {record.title}
                    </h3>
                    {record.isFavorite && (
                      <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-600">
                        已收藏
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-[var(--foreground-secondary)]">
                    保存于 {formatDate(record.createdAt)}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[var(--card-bg)] px-2.5 py-1 text-xs text-[var(--foreground)]">
                      {record.spaceName}
                    </span>
                    <span className="rounded-full bg-[var(--card-bg)] px-2.5 py-1 text-xs text-[var(--foreground)]">
                      {record.cabinetName}
                    </span>
                    <span className="rounded-full bg-[var(--card-bg)] px-2.5 py-1 text-xs text-[var(--foreground)]">
                      {record.styleName}
                    </span>
                    <span className="rounded-full bg-[var(--card-bg)] px-2.5 py-1 text-xs text-[var(--foreground)]">
                      {record.materialName}
                    </span>
                    <span className="rounded-full bg-[var(--card-bg)] px-2.5 py-1 text-xs text-[var(--foreground-secondary)]">
                      {record.residenceTypeName}
                    </span>
                    <span className="rounded-full bg-[var(--card-bg)] px-2.5 py-1 text-xs text-[var(--foreground-secondary)]">
                      {record.cameraAngleName}
                    </span>
                    <span className="rounded-full bg-[var(--card-bg)] px-2.5 py-1 text-xs text-[var(--foreground-secondary)]">
                      {record.lightingName}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => onToggleFavorite(record)}
                    className="rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--foreground-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {record.isFavorite ? "取消收藏" : "收藏"}
                  </button>
                  <button
                    onClick={() => onLoad(record)}
                    className="rounded-lg bg-[var(--accent)] px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
                  >
                    载入方案
                  </button>
                  <button
                    onClick={() => onDelete(record)}
                    className="rounded-lg border border-red-200 px-3 py-2 text-sm text-red-600 transition-colors hover:bg-red-50"
                  >
                    删除
                  </button>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
