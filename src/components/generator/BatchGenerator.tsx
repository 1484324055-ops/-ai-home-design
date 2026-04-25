"use client";

import { useEffect, useMemo, useState } from "react";
import type {
  Cabinet,
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

interface SpaceCabinetGroup {
  space: Space;
  cabinets: Cabinet[];
}

type BatchStatus = "idle" | "copied" | "saving" | "saved" | "error";

const MAX_BATCH_ITEMS = 60;

const getComboId = (spaceId: string, cabinetId: string) => `${spaceId}::${cabinetId}`;

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
  const [selectedComboIds, setSelectedComboIds] = useState<string[]>([]);
  const [items, setItems] = useState<BatchPromptItem[]>([]);
  const [status, setStatus] = useState<BatchStatus>("idle");

  const isReady = Boolean(selectedStyle && selectedMaterial);

  const groups = useMemo<SpaceCabinetGroup[]>(
    () =>
      assetLibrary.spaces
        .map((space) => ({
          space,
          cabinets: assetLibrary.cabinets.filter((cabinet) =>
            cabinet.applicableSpaces.includes(space.id)
          ),
        }))
        .filter((group) => group.cabinets.length > 0),
    [assetLibrary]
  );

  const allComboIds = useMemo(
    () =>
      groups.flatMap((group) =>
        group.cabinets.map((cabinet) => getComboId(group.space.id, cabinet.id))
      ),
    [groups]
  );

  const selectedComboSet = useMemo(() => new Set(selectedComboIds), [selectedComboIds]);
  const selectedCount = selectedComboIds.length;

  useEffect(() => {
    setItems([]);
    setStatus("idle");
  }, [
    selectedStyle?.id,
    selectedMaterial?.id,
    selectedResidenceType.id,
    selectedCameraAngle.id,
    selectedLighting.id,
    selectedComboIds,
  ]);

  useEffect(() => {
    setSelectedComboIds((current) => current.filter((id) => allComboIds.includes(id)));
  }, [allComboIds]);

  const updateSelection = (nextComboIds: string[]) => {
    setSelectedComboIds(Array.from(new Set(nextComboIds)));
    setStatus("idle");
  };

  const toggleCombo = (comboId: string) => {
    updateSelection(
      selectedComboSet.has(comboId)
        ? selectedComboIds.filter((id) => id !== comboId)
        : [...selectedComboIds, comboId]
    );
  };

  const selectAllCombos = () => {
    updateSelection(allComboIds);
  };

  const clearAllCombos = () => {
    updateSelection([]);
    setItems([]);
  };

  const selectSpaceCombos = (group: SpaceCabinetGroup) => {
    const groupComboIds = group.cabinets.map((cabinet) => getComboId(group.space.id, cabinet.id));
    const isSpaceFullySelected = groupComboIds.every((id) => selectedComboSet.has(id));

    updateSelection(
      isSpaceFullySelected
        ? selectedComboIds.filter((id) => !groupComboIds.includes(id))
        : [...selectedComboIds, ...groupComboIds]
    );
  };

  const buildSelectedItems = () => {
    if (!selectedStyle || !selectedMaterial || selectedCount === 0) {
      return [];
    }

    return groups
      .flatMap((group) =>
        group.cabinets
          .filter((cabinet) => selectedComboSet.has(getComboId(group.space.id, cabinet.id)))
          .map((cabinet) => {
            const selection: Selection = {
              space: group.space,
              cabinet,
              style: selectedStyle,
              material: selectedMaterial,
              residenceType: selectedResidenceType,
              cameraAngle: selectedCameraAngle,
              lighting: selectedLighting,
            };

            return {
              id: `${group.space.id}-${cabinet.id}-${selectedStyle.id}-${selectedMaterial.id}`,
              selection,
              result: generatePrompts(selection),
            };
          })
      )
      .slice(0, MAX_BATCH_ITEMS);
  };

  const handleGenerateBatch = () => {
    const nextItems = buildSelectedItems();
    setItems(nextItems);
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
              先选风格和材质，再自由勾选空间里的单个柜体组合；也可以全选全部空间或只全选某一个空间。
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

      <div className="grid gap-4 p-3 sm:p-4 xl:grid-cols-[minmax(0,0.95fr)_minmax(340px,1.05fr)]">
        <div className={`${isReady ? "" : "opacity-55"}`}>
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h4 className="text-sm font-semibold text-[var(--foreground)]">选择要批量生成的组合</h4>
              <p className="text-xs text-[var(--foreground-secondary)]">
                当前已选 {selectedCount} 条组合，单次最多生成 {MAX_BATCH_ITEMS} 条
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                disabled={!isReady}
                onClick={selectAllCombos}
                className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--foreground-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                全选全部空间
              </button>
              <button
                type="button"
                disabled={!isReady || selectedCount === 0}
                onClick={clearAllCombos}
                className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--foreground-secondary)] transition-colors hover:border-[var(--error)] hover:text-[var(--error)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                清空
              </button>
            </div>
          </div>

          <div className="max-h-[520px] space-y-2.5 overflow-y-auto pr-1">
            {groups.map((group) => {
              const spaceVisual = getSpaceVisual(group.space.id, group.space.name);
              const groupComboIds = group.cabinets.map((cabinet) =>
                getComboId(group.space.id, cabinet.id)
              );
              const selectedInSpace = groupComboIds.filter((id) => selectedComboSet.has(id)).length;
              const isSpaceFullySelected = selectedInSpace === groupComboIds.length;

              return (
                <div
                  key={group.space.id}
                  className={`rounded-2xl border p-2.5 transition-all ${
                    selectedInSpace > 0
                      ? "border-[var(--accent)]/60 bg-[var(--accent)]/6"
                      : "border-[var(--border)] bg-[var(--card-bg)]"
                  }`}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-black"
                      style={{ backgroundColor: `${spaceVisual.accent}16`, color: spaceVisual.accent }}
                    >
                      {spaceVisual.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="truncate text-sm font-semibold text-[var(--foreground)]">
                          {group.space.name}
                        </span>
                        {selectedInSpace > 0 && (
                          <span className="rounded-full bg-[var(--accent)] px-2 py-0.5 text-[10px] font-bold text-white">
                            {selectedInSpace}/{groupComboIds.length}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[var(--foreground-secondary)]">
                        {group.cabinets.length} 个可选柜体
                      </p>
                    </div>
                    <button
                      type="button"
                      disabled={!isReady}
                      onClick={() => selectSpaceCombos(group)}
                      className="shrink-0 rounded-full border border-[var(--border)] bg-[var(--background-secondary)] px-3 py-1.5 text-xs font-semibold text-[var(--foreground-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed"
                    >
                      {isSpaceFullySelected ? "清空本空间" : "全选本空间"}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 2xl:grid-cols-3">
                    {group.cabinets.map((cabinet) => {
                      const cabinetVisual = getCabinetVisual(cabinet.id, cabinet.name);
                      const comboId = getComboId(group.space.id, cabinet.id);
                      const isSelected = selectedComboSet.has(comboId);

                      return (
                        <button
                          type="button"
                          key={comboId}
                          disabled={!isReady}
                          onClick={() => toggleCombo(comboId)}
                          className={`flex min-h-[52px] items-center gap-2 rounded-xl border px-2.5 py-2 text-left transition-all ${
                            isSelected
                              ? "border-[var(--accent)] bg-[var(--accent)]/12 shadow-sm"
                              : "border-[var(--border)] bg-[var(--background-secondary)] hover:border-[var(--accent)]/45"
                          } disabled:cursor-not-allowed`}
                        >
                          <span
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-black"
                            style={{
                              backgroundColor: `${cabinetVisual.accent}16`,
                              color: cabinetVisual.accent,
                            }}
                          >
                            {cabinetVisual.icon}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="line-clamp-1 text-xs font-semibold text-[var(--foreground)]">
                              {cabinet.name}
                            </span>
                            <span className="line-clamp-1 text-[11px] text-[var(--foreground-secondary)]">
                              {cabinetVisual.caption}
                            </span>
                          </span>
                          <span
                            className={`h-4 w-4 shrink-0 rounded-full border transition-all ${
                              isSelected
                                ? "border-[var(--accent)] bg-[var(--accent)] shadow-[inset_0_0_0_3px_white]"
                                : "border-[var(--border)] bg-[var(--card-bg)]"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            disabled={!isReady || selectedCount === 0}
            onClick={handleGenerateBatch}
            className={`mt-3 min-h-[46px] w-full rounded-2xl px-4 text-sm font-semibold transition-all ${
              isReady && selectedCount > 0
                ? "bg-[var(--foreground)] text-[var(--background)] hover:opacity-90"
                : "cursor-not-allowed bg-[var(--border)] text-[var(--foreground-secondary)]"
            }`}
          >
            生成 {Math.min(selectedCount, MAX_BATCH_ITEMS)} 条批量提示词
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

          <div className="max-h-[520px] space-y-2 overflow-y-auto p-3">
            {items.length === 0 ? (
              <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-[var(--border)] px-6 text-center text-sm text-[var(--foreground-secondary)]">
                先在左侧选择一个或多个组合，再点击生成。
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
