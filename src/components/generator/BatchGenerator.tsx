"use client";

import { useEffect, useState } from "react";
import type {
  CameraAngle,
  Lighting,
  Material,
  ResidenceType,
  Selection,
  Space,
  Style,
} from "@/lib/data";
import type { AssetLibrary } from "@/lib/assets";
import { generatePrompts, PromptResult, copyToClipboard } from "@/lib/prompt-generator";
import { getCabinetVisual, getSpaceVisual } from "@/lib/visual-metadata";

export interface BatchPromptItem {
  id: string;
  selection: Selection;
  result: PromptResult;
}

interface BatchGeneratorProps {
  assetLibrary: AssetLibrary;
  selectedStyle: Style | null;
  selectedMaterial: Material | null;
  selectedResidenceType: ResidenceType;
  selectedCameraAngle: CameraAngle;
  selectedLighting: Lighting;
  onLoadItem: (item: BatchPromptItem) => void;
  onSaveItems: (items: BatchPromptItem[]) => Promise<void>;
}

type BatchStatus = "idle" | "copied" | "saving" | "saved" | "error";

const MAX_BATCH_ITEMS = 60;

export default function BatchGenerator({
  assetLibrary,
  selectedStyle,
  selectedMaterial,
  selectedResidenceType,
  selectedCameraAngle,
  selectedLighting,
  onLoadItem,
  onSaveItems,
}: BatchGeneratorProps) {
  const [selectedSpaceIds, setSelectedSpaceIds] = useState<string[]>([]);
  const [items, setItems] = useState<BatchPromptItem[]>([]);
  const [status, setStatus] = useState<BatchStatus>("idle");

  const isReady = Boolean(selectedStyle && selectedMaterial);
  const spacesWithCabinets = assetLibrary.spaces.filter((space) =>
    assetLibrary.cabinets.some((cabinet) => cabinet.applicableSpaces.includes(space.id))
  );
  const selectedSpaces = spacesWithCabinets.filter((space) => selectedSpaceIds.includes(space.id));
  const estimatedCount = selectedSpaces.reduce(
    (total, space) =>
      total +
      assetLibrary.cabinets.filter((cabinet) => cabinet.applicableSpaces.includes(space.id)).length,
    0
  );

  useEffect(() => {
    setItems([]);
    setStatus("idle");
  }, [
    selectedStyle?.id,
    selectedMaterial?.id,
    selectedResidenceType.id,
    selectedCameraAngle.id,
    selectedLighting.id,
  ]);

  const toggleSpace = (space: Space) => {
    setSelectedSpaceIds((current) =>
      current.includes(space.id)
        ? current.filter((id) => id !== space.id)
        : [...current, space.id]
    );
    setStatus("idle");
  };

  const selectAllSpaces = () => {
    setSelectedSpaceIds(spacesWithCabinets.map((space) => space.id));
    setStatus("idle");
  };

  const clearSpaces = () => {
    setSelectedSpaceIds([]);
    setItems([]);
    setStatus("idle");
  };

  const handleGenerateBatch = () => {
    if (!selectedStyle || !selectedMaterial || selectedSpaces.length === 0) {
      return;
    }

    const nextItems = selectedSpaces.flatMap((space) =>
      assetLibrary.cabinets
        .filter((cabinet) => cabinet.applicableSpaces.includes(space.id))
        .map((cabinet) => {
          const selection: Selection = {
            space,
            cabinet,
            style: selectedStyle,
            material: selectedMaterial,
            residenceType: selectedResidenceType,
            cameraAngle: selectedCameraAngle,
            lighting: selectedLighting,
          };

          return {
            id: `${space.id}-${cabinet.id}-${selectedStyle.id}-${selectedMaterial.id}`,
            selection,
            result: generatePrompts(selection),
          };
        })
    );

    setItems(nextItems.slice(0, MAX_BATCH_ITEMS));
    setStatus("idle");
  };

  const handleCopyAll = async () => {
    const content = items
      .map((item, index) => [`${index + 1}. ${item.result.title}`, item.result.chinese].join("\n"))
      .join("\n\n---\n\n");

    const success = await copyToClipboard(content);
    if (success) {
      setStatus("copied");
      setTimeout(() => setStatus("idle"), 1800);
    }
  };

  const handleSaveAll = async () => {
    if (items.length === 0) {
      return;
    }

    try {
      setStatus("saving");
      await onSaveItems(items);
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 2200);
    } catch (error) {
      console.error("Save batch error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--background-secondary)]">
      <div className="border-b border-[var(--border)] p-3 sm:p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--foreground-secondary)]">
              Batch Studio
            </p>
            <h3 className="mt-1 text-lg font-bold text-[var(--foreground)]">批量生成</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--foreground-secondary)]">
              以当前风格和材质套餐为中心，批量生成不同空间、不同柜体的提示词组合。
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-[var(--border)] bg-[var(--card-bg)] px-3 py-1.5 text-[var(--foreground-secondary)]">
              风格：{selectedStyle?.name ?? "未选择"}
            </span>
            <span className="rounded-full border border-[var(--border)] bg-[var(--card-bg)] px-3 py-1.5 text-[var(--foreground-secondary)]">
              材质：{selectedMaterial?.name ?? "未选择"}
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 p-3 sm:p-4 xl:grid-cols-[minmax(0,0.92fr)_minmax(360px,1.08fr)]">
        <div className={`${isReady ? "" : "opacity-55"}`}>
          <div className="mb-2 flex items-center justify-between gap-2">
            <div>
              <h4 className="text-sm font-semibold text-[var(--foreground)]">选择要批量生成的空间</h4>
              <p className="text-xs text-[var(--foreground-secondary)]">
                当前预计生成 {estimatedCount} 条组合，单次最多 {MAX_BATCH_ITEMS} 条
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                disabled={!isReady}
                onClick={selectAllSpaces}
                className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--foreground-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                全选
              </button>
              <button
                type="button"
                disabled={!isReady}
                onClick={clearSpaces}
                className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--foreground-secondary)] transition-colors hover:border-[var(--error)] hover:text-[var(--error)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                清空
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4">
            {spacesWithCabinets.map((space) => {
              const visual = getSpaceVisual(space.id, space.name);
              const isSelected = selectedSpaceIds.includes(space.id);
              const cabinetCount = assetLibrary.cabinets.filter((cabinet) =>
                cabinet.applicableSpaces.includes(space.id)
              ).length;

              return (
                <button
                  type="button"
                  key={space.id}
                  disabled={!isReady}
                  onClick={() => toggleSpace(space)}
                  className={`rounded-2xl border p-2.5 text-left transition-all ${
                    isSelected
                      ? "border-[var(--accent)] bg-[var(--accent)]/10"
                      : "border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--accent)]/45"
                  } disabled:cursor-not-allowed`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-black"
                      style={{ backgroundColor: `${visual.accent}16`, color: visual.accent }}
                    >
                      {visual.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-[var(--foreground)]">
                        {space.name}
                      </span>
                      <span className="text-xs text-[var(--foreground-secondary)]">
                        {cabinetCount} 个柜体
                      </span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            disabled={!isReady || selectedSpaces.length === 0}
            onClick={handleGenerateBatch}
            className={`mt-3 min-h-[46px] w-full rounded-2xl px-4 text-sm font-semibold transition-all ${
              isReady && selectedSpaces.length > 0
                ? "bg-[var(--foreground)] text-[var(--background)] hover:opacity-90"
                : "cursor-not-allowed bg-[var(--border)] text-[var(--foreground-secondary)]"
            }`}
          >
            生成 {Math.min(estimatedCount, MAX_BATCH_ITEMS)} 条批量提示词
          </button>

          {!isReady && (
            <p className="mt-2 text-xs text-[var(--foreground-secondary)]">
              先在上方选好风格和材质，这里就会解锁批量生成。
            </p>
          )}
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
          <div className="flex flex-col gap-2 border-b border-[var(--border)] p-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-sm font-semibold text-[var(--foreground)]">批量结果</h4>
              <p className="text-xs text-[var(--foreground-secondary)]">
                {items.length > 0 ? `已生成 ${items.length} 条，可复制或保存到方案库` : "生成后会显示在这里"}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                disabled={items.length === 0}
                onClick={handleCopyAll}
                className="rounded-xl border border-[var(--border)] px-3 py-2 text-xs font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-45"
              >
                {status === "copied" ? "已复制" : "复制全部"}
              </button>
              <button
                type="button"
                disabled={items.length === 0 || status === "saving"}
                onClick={handleSaveAll}
                className="rounded-xl bg-[var(--accent)] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-45"
              >
                {status === "saving" ? "保存中" : status === "saved" ? "已保存" : "保存到方案库"}
              </button>
            </div>
          </div>

          <div className="max-h-[360px] space-y-2 overflow-y-auto p-3">
            {items.length === 0 ? (
              <div className="flex min-h-[180px] items-center justify-center rounded-2xl border border-dashed border-[var(--border)] text-center text-sm text-[var(--foreground-secondary)]">
                这里会像清单一样列出每个空间和柜体的组合。
              </div>
            ) : (
              items.map((item, index) => {
                const cabinetVisual = getCabinetVisual(item.selection.cabinet.id, item.selection.cabinet.name);

                return (
                  <article
                    key={item.id}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] p-3"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-black"
                        style={{
                          backgroundColor: `${cabinetVisual.accent}16`,
                          color: cabinetVisual.accent,
                        }}
                      >
                        {cabinetVisual.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h5 className="line-clamp-1 text-sm font-semibold text-[var(--foreground)]">
                          {index + 1}. {item.result.title}
                        </h5>
                        <p className="mt-1 line-clamp-2 text-xs leading-5 text-[var(--foreground-secondary)]">
                          {item.result.chinese}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => onLoadItem(item)}
                        className="rounded-full bg-[var(--accent)]/10 px-3 py-1.5 text-xs font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/15"
                      >
                        载入当前方案
                      </button>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(item.result.chinese)}
                        className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-semibold text-[var(--foreground-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      >
                        复制中文
                      </button>
                    </div>
                  </article>
                );
              })
            )}
          </div>

          {status === "error" && (
            <p className="border-t border-[var(--border)] px-3 py-2 text-xs text-[var(--error)]">
              保存失败了，稍后可以再试一次。
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
