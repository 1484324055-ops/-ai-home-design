"use client";

import { useState } from "react";
import { HistoryRecord } from "@/lib/history";

type SaveState = "idle" | "saving" | "saved" | "error";
type HistoryPanelMode = "sidebar" | "drawer";

interface HistoryPanelProps {
  histories: HistoryRecord[];
  isLoading: boolean;
  saveState: SaveState;
  activeHistoryId: number | null;
  onLoad: (record: HistoryRecord) => void;
  onToggleFavorite: (record: HistoryRecord) => void;
  onDelete: (record: HistoryRecord) => void;
  mode?: HistoryPanelMode;
  onClose?: () => void;
}

interface FilterOption {
  id: string;
  name: string;
  count: number;
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
  saving: "正在保存",
  saved: "刚刚已保存",
  error: "保存失败",
};

const buildOptions = (
  records: HistoryRecord[],
  key: "spaceId" | "cabinetId" | "styleId",
  labelKey: "spaceName" | "cabinetName" | "styleName"
): FilterOption[] => {
  const optionMap = new Map<string, FilterOption>();

  for (const record of records) {
    const id = record[key];
    const name = record[labelKey];
    const existing = optionMap.get(id);

    if (existing) {
      existing.count += 1;
    } else {
      optionMap.set(id, { id, name, count: 1 });
    }
  }

  return [...optionMap.values()].sort((left, right) => right.count - left.count);
};

const filterSectionStyle =
  "rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] p-3";

export default function HistoryPanel({
  histories,
  isLoading,
  saveState,
  activeHistoryId,
  onLoad,
  onToggleFavorite,
  onDelete,
  mode = "sidebar",
  onClose,
}: HistoryPanelProps) {
  const [selectedSpaceId, setSelectedSpaceId] = useState("");
  const [selectedCabinetId, setSelectedCabinetId] = useState("");
  const [selectedStyleId, setSelectedStyleId] = useState("");

  const spaceOptions = buildOptions(histories, "spaceId", "spaceName");
  const cabinetOptions = buildOptions(histories, "cabinetId", "cabinetName");
  const styleOptions = buildOptions(histories, "styleId", "styleName");

  const filteredHistories = histories.filter((record) => {
    if (selectedSpaceId && record.spaceId !== selectedSpaceId) {
      return false;
    }

    if (selectedCabinetId && record.cabinetId !== selectedCabinetId) {
      return false;
    }

    if (selectedStyleId && record.styleId !== selectedStyleId) {
      return false;
    }

    return true;
  });

  const hasActiveFilter = Boolean(selectedSpaceId || selectedCabinetId || selectedStyleId);

  const containerClassName =
    mode === "drawer"
      ? "flex h-full w-full max-w-[380px] flex-col border-r border-[var(--border)] bg-[var(--background)]"
      : "flex h-[calc(100vh-7.5rem)] min-h-[720px] w-full flex-col overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--card-bg)] shadow-[0_18px_60px_rgba(15,23,42,0.08)]";

  return (
    <section className={containerClassName}>
      <div className="border-b border-[var(--border)] bg-[var(--background)]/92 px-4 py-4 backdrop-blur">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--foreground-secondary)]">
              Prompt Library
            </p>
            <h2 className="mt-1 text-xl font-semibold text-[var(--foreground)]">历史方案库</h2>
            <p className="mt-1 text-sm leading-6 text-[var(--foreground-secondary)]">
              像会话栏一样管理你做过的方案，并按空间、柜体、风格快速筛选。
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`inline-flex shrink-0 items-center rounded-full px-3 py-1 text-[11px] font-medium ${
                saveState === "error"
                  ? "bg-red-50 text-red-600"
                  : saveState === "saved"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-[var(--background-secondary)] text-[var(--foreground-secondary)]"
              }`}
            >
              {saveStateLabel[saveState]}
            </span>

            {mode === "drawer" && onClose && (
              <button
                onClick={onClose}
                className="rounded-xl border border-[var(--border)] px-3 py-2 text-sm text-[var(--foreground-secondary)] transition-colors hover:bg-[var(--background-secondary)] hover:text-[var(--foreground)]"
              >
                关闭
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          <div className={filterSectionStyle}>
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-sm font-semibold text-[var(--foreground)]">空间</span>
              <span className="text-[11px] text-[var(--foreground-secondary)]">
                {spaceOptions.length} 个已用空间
              </span>
            </div>
            <select
              value={selectedSpaceId}
              onChange={(event) => setSelectedSpaceId(event.target.value)}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--card-bg)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--accent)]"
            >
              <option value="">全部空间</option>
              {spaceOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name} · {option.count}
                </option>
              ))}
            </select>
          </div>

          <div className={filterSectionStyle}>
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-sm font-semibold text-[var(--foreground)]">柜体</span>
              <span className="text-[11px] text-[var(--foreground-secondary)]">
                {cabinetOptions.length} 个已用柜体
              </span>
            </div>
            <select
              value={selectedCabinetId}
              onChange={(event) => setSelectedCabinetId(event.target.value)}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--card-bg)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--accent)]"
            >
              <option value="">全部柜体</option>
              {cabinetOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name} · {option.count}
                </option>
              ))}
            </select>
          </div>

          <div className={filterSectionStyle}>
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-sm font-semibold text-[var(--foreground)]">风格</span>
              <span className="text-[11px] text-[var(--foreground-secondary)]">
                {styleOptions.length} 个已用风格
              </span>
            </div>
            <select
              value={selectedStyleId}
              onChange={(event) => setSelectedStyleId(event.target.value)}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--card-bg)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--accent)]"
            >
              <option value="">全部风格</option>
              {styleOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name} · {option.count}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-xs text-[var(--foreground-secondary)]">
            当前显示 {filteredHistories.length} 条历史记录
          </p>
          {hasActiveFilter && (
            <button
              onClick={() => {
                setSelectedSpaceId("");
                setSelectedCabinetId("");
                setSelectedStyleId("");
              }}
              className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--foreground-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              清空筛选
            </button>
          )}
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-3 py-3">
        {isLoading ? (
          <div className="rounded-2xl border border-dashed border-[var(--border)] px-4 py-8 text-center text-sm text-[var(--foreground-secondary)]">
            正在读取你的历史记录...
          </div>
        ) : filteredHistories.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[var(--border)] px-4 py-8 text-center text-sm leading-6 text-[var(--foreground-secondary)]">
            {histories.length === 0
              ? "还没有历史记录。先生成一版提示词，这里就会像会话栏一样慢慢积累。"
              : "当前筛选下没有匹配方案。你可以切换空间、柜体或风格试试。"}
          </div>
        ) : (
          <div className="space-y-2">
            {filteredHistories.map((record) => (
              <article
                key={record.id}
                className={`group rounded-2xl border transition-all ${
                  activeHistoryId === record.id
                    ? "border-[var(--accent)] bg-[var(--accent)]/8 shadow-[0_10px_30px_rgba(59,130,246,0.12)]"
                    : "border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--accent)]/35 hover:bg-[var(--background-secondary)]"
                }`}
              >
                <div className="p-3">
                  <div className="flex items-start justify-between gap-3">
                    <button
                      onClick={() => {
                        onLoad(record);
                        onClose?.();
                      }}
                      className="min-w-0 flex-1 text-left"
                    >
                      <div className="flex items-center gap-2">
                        <h3 className="truncate text-sm font-semibold text-[var(--foreground)]">
                          {record.title}
                        </h3>
                        {record.isFavorite && (
                          <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-600">
                            收藏
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-[var(--foreground-secondary)]">
                        {formatDate(record.createdAt)}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        <span className="rounded-full bg-[var(--background-secondary)] px-2 py-1 text-[11px] text-[var(--foreground)]">
                          {record.spaceName}
                        </span>
                        <span className="rounded-full bg-[var(--background-secondary)] px-2 py-1 text-[11px] text-[var(--foreground)]">
                          {record.cabinetName}
                        </span>
                        <span className="rounded-full bg-[var(--background-secondary)] px-2 py-1 text-[11px] text-[var(--foreground-secondary)]">
                          {record.styleName}
                        </span>
                      </div>
                    </button>

                    <div className="flex shrink-0 items-center gap-1 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                      <button
                        onClick={() => onToggleFavorite(record)}
                        className="rounded-xl border border-[var(--border)] px-2.5 py-2 text-xs text-[var(--foreground-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      >
                        {record.isFavorite ? "取消" : "收藏"}
                      </button>
                      <button
                        onClick={() => onDelete(record)}
                        className="rounded-xl border border-red-200 px-2.5 py-2 text-xs text-red-600 transition-colors hover:bg-red-50"
                      >
                        删除
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
