"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/layout/Header";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import { useAuth } from "@/app/AuthProvider";
import {
  assetCategoryLabels,
  assetCategoryOrder,
  PromptAssetRecord,
  type AssetCategory,
} from "@/lib/assets";
import { generatePrompts } from "@/lib/prompt-generator";

type SaveState = "idle" | "saving" | "saved" | "error";

interface AssetsResponse {
  assets: PromptAssetRecord[];
  source: "database" | "default";
  needsSetup: boolean;
  needsSeed: boolean;
  message?: string;
}

const blankAsset = (category: AssetCategory, sortOrder: number): PromptAssetRecord => ({
  id: `${category}-${Date.now()}`,
  category,
  name: "",
  nameEn: "",
  promptZh: "",
  promptEn: "",
  applicableSpaceIds: [],
  applicableStyleIds: [],
  enabled: true,
  sortOrder,
});

const sortAssets = (assets: PromptAssetRecord[]) =>
  [...assets].sort((left, right) => left.sortOrder - right.sortOrder || left.name.localeCompare(right.name, "zh-CN"));

const toPromptItem = (asset: PromptAssetRecord) => ({
  id: asset.id,
  name: asset.name,
  nameEn: asset.nameEn,
  promptZh: asset.promptZh,
  promptEn: asset.promptEn,
});

export default function AssetsPage() {
  const { user, isLoading: authLoading } = useAuth();
  const [assets, setAssets] = useState<PromptAssetRecord[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<AssetCategory>("space");
  const [selectedId, setSelectedId] = useState("");
  const [draft, setDraft] = useState<PromptAssetRecord | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [message, setMessage] = useState("");
  const [needsSetup, setNeedsSetup] = useState(false);
  const [needsSeed, setNeedsSeed] = useState(false);
  const [source, setSource] = useState<"database" | "default">("default");

  const categoryAssets = useMemo(
    () => sortAssets(assets.filter((item) => item.category === selectedCategory)),
    [assets, selectedCategory]
  );

  const spaceOptions = useMemo(
    () => sortAssets(assets.filter((item) => item.category === "space")),
    [assets]
  );

  const styleOptions = useMemo(
    () => sortAssets(assets.filter((item) => item.category === "style")),
    [assets]
  );

  const enabledAssetsCount = assets.filter((item) => item.enabled).length;
  const disabledAssetsCount = assets.length - enabledAssetsCount;
  const setupState = needsSetup ? "needs-table" : needsSeed ? "needs-seed" : "ready";

  const promptPreview = useMemo(() => {
    if (!draft) {
      return null;
    }

    const findAsset = (category: AssetCategory, preferredIds: string[] = []) => {
      const categoryItems = assets.filter((item) => item.category === category);

      for (const preferredId of preferredIds) {
        const preferred = categoryItems.find((item) => item.id === preferredId);
        if (preferred) {
          return preferred;
        }
      }

      return categoryItems.find((item) => item.enabled) ?? categoryItems[0] ?? null;
    };

    const useDraftOrAsset = (category: AssetCategory, preferredIds: string[] = []) =>
      draft.category === category ? draft : findAsset(category, preferredIds);

    const cabinetPreview = useDraftOrAsset("cabinet", ["sideboard"]);
    const spacePreview = useDraftOrAsset(
      "space",
      draft.category === "cabinet" && draft.applicableSpaceIds.length > 0
        ? draft.applicableSpaceIds
        : ["dining-room"]
    );
    const stylePreview = useDraftOrAsset("style", ["modern-minimalist"]);
    const materialPreview = useDraftOrAsset(
      "material",
      draft.category === "style"
        ? assets
            .filter((item) => item.category === "material" && item.applicableStyleIds.includes(draft.id))
            .map((item) => item.id)
        : ["a-oak-white"]
    );
    const residencePreview = useDraftOrAsset("residence", ["standard"]);
    const cameraPreview = useDraftOrAsset("camera", ["wide-angle"]);
    const lightingPreview = useDraftOrAsset("lighting", ["natural"]);

    if (
      !spacePreview ||
      !cabinetPreview ||
      !stylePreview ||
      !materialPreview ||
      !residencePreview ||
      !cameraPreview ||
      !lightingPreview
    ) {
      return null;
    }

    return generatePrompts({
      space: toPromptItem(spacePreview),
      cabinet: {
        ...toPromptItem(cabinetPreview),
        applicableSpaces: cabinetPreview.applicableSpaceIds,
      },
      style: toPromptItem(stylePreview),
      material: {
        ...toPromptItem(materialPreview),
        applicableStyles: materialPreview.applicableStyleIds,
      },
      residenceType: toPromptItem(residencePreview),
      cameraAngle: toPromptItem(cameraPreview),
      lighting: toPromptItem(lightingPreview),
    });
  }, [assets, draft]);

  useEffect(() => {
    if (!authLoading && user?.isAdmin) {
      void loadAssets();
    }
  }, [authLoading, user?.isAdmin]);

  useEffect(() => {
    if (categoryAssets.length === 0) {
      setSelectedId("");
      if (!isNew) {
        setDraft(null);
      }
      return;
    }

    const nextSelected = categoryAssets.find((item) => item.id === selectedId) ?? categoryAssets[0];

    if (!isNew) {
      setSelectedId(nextSelected.id);
      setDraft(nextSelected);
    }
  }, [categoryAssets, selectedId, isNew]);

  const loadAssets = async () => {
    try {
      setIsLoading(true);
      setMessage("");

      const response = await fetch("/api/admin/assets");
      const data: AssetsResponse = await response.json();

      if (!response.ok) {
        throw new Error((data as unknown as { error?: string }).error || "读取资产库失败");
      }

      setAssets(sortAssets(data.assets || []));
      setNeedsSetup(Boolean(data.needsSetup));
      setNeedsSeed(Boolean(data.needsSeed));
      setSource(data.source || "default");
      setMessage(data.message || "");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "读取资产库失败");
    } finally {
      setIsLoading(false);
    }
  };

  const selectAsset = (asset: PromptAssetRecord) => {
    setIsNew(false);
    setSelectedId(asset.id);
    setDraft(asset);
    setSaveState("idle");
    setMessage("");
  };

  const startCreate = () => {
    const nextSortOrder = categoryAssets.length > 0 ? Math.max(...categoryAssets.map((item) => item.sortOrder)) + 10 : 10;
    setIsNew(true);
    setSelectedId("");
    setDraft(blankAsset(selectedCategory, nextSortOrder));
    setSaveState("idle");
    setMessage("");
  };

  const updateDraft = (patch: Partial<PromptAssetRecord>) => {
    setDraft((current) => (current ? { ...current, ...patch } : current));
  };

  const toggleListValue = (field: "applicableSpaceIds" | "applicableStyleIds", value: string) => {
    if (!draft) {
      return;
    }

    const current = draft[field];
    const next = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];

    updateDraft({ [field]: next });
  };

  const saveDraft = async () => {
    if (!draft) {
      return;
    }

    try {
      setSaveState("saving");
      setMessage("");

      const response = await fetch("/api/admin/assets", {
        method: isNew ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(draft),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "保存资产失败");
      }

      setSaveState("saved");
      setIsNew(false);
      setSelectedId(data.asset.id);
      await loadAssets();
      setMessage("资产已保存，前台会读取最新资产库。");
    } catch (error) {
      setSaveState("error");
      setMessage(error instanceof Error ? error.message : "保存资产失败");
    }
  };

  const deleteDraft = async () => {
    if (!draft || isNew) {
      setDraft(null);
      setIsNew(false);
      return;
    }

    const confirmed = window.confirm(`确定要删除“${draft.name}”吗？删除后前台将不再显示这条资产。`);

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/assets?id=${draft.id}`, { method: "DELETE" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "删除资产失败");
      }

      setDraft(null);
      setSelectedId("");
      await loadAssets();
      setMessage("资产已删除。");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "删除资产失败");
    }
  };

  const seedDefaults = async () => {
    try {
      setMessage("");
      const response = await fetch("/api/admin/assets/seed", { method: "POST" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "导入默认资产失败");
      }

      await loadAssets();
      setMessage(`已导入 ${data.count} 条默认资产。`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "导入默认资产失败");
    }
  };

  const renderRelationshipEditor = () => {
    if (!draft || draft.category === "space" || draft.category === "style") {
      return null;
    }

    if (draft.category === "cabinet") {
      return (
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--foreground)]">适用空间</label>
          <div className="grid gap-2 sm:grid-cols-2">
            {spaceOptions.map((space) => (
              <label
                key={space.id}
                className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] px-3 py-2 text-sm"
              >
                <input
                  type="checkbox"
                  checked={draft.applicableSpaceIds.includes(space.id)}
                  onChange={() => toggleListValue("applicableSpaceIds", space.id)}
                />
                {space.name}
              </label>
            ))}
          </div>
        </div>
      );
    }

    if (draft.category === "material") {
      return (
        <div className="space-y-2">
          <label className="text-sm font-semibold text-[var(--foreground)]">适用风格</label>
          <div className="grid gap-2 sm:grid-cols-2">
            {styleOptions.map((style) => (
              <label
                key={style.id}
                className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] px-3 py-2 text-sm"
              >
                <input
                  type="checkbox"
                  checked={draft.applicableStyleIds.includes(style.id)}
                  onChange={() => toggleListValue("applicableStyleIds", style.id)}
                />
                {style.name}
              </label>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[var(--background)]">
        <Header />

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {!authLoading && !user?.isAdmin ? (
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-8 text-center">
              <h1 className="text-2xl font-bold text-[var(--foreground)]">没有权限</h1>
              <p className="mt-2 text-[var(--foreground-secondary)]">资产库只对管理员开放。</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--foreground-secondary)]">
                    Asset Library
                  </p>
                  <h1 className="mt-2 text-3xl font-bold text-[var(--foreground)]">提示词资产库</h1>
                  <p className="mt-2 max-w-3xl text-[var(--foreground-secondary)]">
                    管理空间、柜体、风格、材质和高级选项的中英文提示词片段。前台生成时会分别润色中文和英文版本。
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={loadAssets}
                    className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-[var(--card-hover)]"
                  >
                    刷新
                  </button>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-4">
                  <p className="text-xs font-medium text-[var(--foreground-secondary)]">当前数据源</p>
                  <p className="mt-2 text-lg font-bold text-[var(--foreground)]">
                    {source === "database" ? "数据库资产" : "内置默认资产"}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[var(--foreground-secondary)]">
                    {source === "database"
                      ? "前台正在读取你在这里维护的资产。"
                      : "还没导入数据库，当前只是在看默认模板。"}
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-4">
                  <p className="text-xs font-medium text-[var(--foreground-secondary)]">资产数量</p>
                  <p className="mt-2 text-lg font-bold text-[var(--foreground)]">
                    {enabledAssetsCount} 启用 / {assets.length} 总数
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[var(--foreground-secondary)]">
                    {disabledAssetsCount > 0 ? `${disabledAssetsCount} 条已停用，不会出现在前台。` : "全部资产都处于启用状态。"}
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-4">
                  <p className="text-xs font-medium text-[var(--foreground-secondary)]">初始化状态</p>
                  <p className="mt-2 text-lg font-bold text-[var(--foreground)]">
                    {setupState === "needs-table"
                      ? "需要先建表"
                      : setupState === "needs-seed"
                        ? "等待导入资产"
                        : "可以直接编辑"}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[var(--foreground-secondary)]">
                    {setupState === "needs-table"
                      ? "先去 Neon 执行建表 SQL，再回到这里刷新。"
                      : setupState === "needs-seed"
                        ? "点击导入默认资产后，就能长期维护。"
                        : "保存后前台会读取最新资产内容。"}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-sm font-semibold text-[var(--foreground)]">资产库使用流程</h2>
                    <p className="mt-1 text-xs leading-5 text-[var(--foreground-secondary)]">
                      这三个状态能帮你判断：现在是还没建表、还没导入，还是已经正式使用数据库资产。
                    </p>
                  </div>
                  {needsSeed && !needsSetup && (
                    <button
                      onClick={seedDefaults}
                      className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
                    >
                      导入默认资产
                    </button>
                  )}
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {[
                    ["1", "创建数据表", needsSetup ? "未完成" : "已完成"],
                    ["2", "导入默认资产", needsSeed ? "未完成" : "已完成"],
                    ["3", "编辑并保存", source === "database" && !needsSeed ? "已启用" : "等待前两步"],
                  ].map(([step, title, state]) => (
                    <div
                      key={step}
                      className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] px-4 py-3"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)]/10 text-xs font-bold text-[var(--accent)]">
                          {step}
                        </span>
                        <span className="text-xs font-medium text-[var(--foreground-secondary)]">{state}</span>
                      </div>
                      <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">{title}</p>
                    </div>
                  ))}
                </div>
              </div>

              {(message || needsSetup || source === "default") && (
                <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
                  {needsSetup
                    ? "资产表还没有初始化。请先在 Neon 执行本次给你的建表 SQL，再回来导入默认资产。"
                    : message || "当前正在查看内置默认资产，导入后即可在数据库里长期编辑。"}
                </div>
              )}

              <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
                <section className="space-y-4">
                  <div className="flex gap-2 overflow-x-auto pb-1 lg:grid lg:grid-cols-2 lg:overflow-visible">
                    {assetCategoryOrder.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsNew(false);
                          setSaveState("idle");
                        }}
                        className={`rounded-xl border px-3 py-2 text-sm font-semibold transition-colors ${
                          selectedCategory === category
                            ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                            : "border-[var(--border)] bg-[var(--card-bg)] text-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
                        }`}
                      >
                        {assetCategoryLabels[category]}
                      </button>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
                    <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
                      <h2 className="font-semibold text-[var(--foreground)]">
                        {assetCategoryLabels[selectedCategory]}
                      </h2>
                      <button
                        onClick={startCreate}
                        className="rounded-lg bg-[var(--foreground)] px-3 py-1.5 text-xs font-semibold text-white"
                      >
                        新增
                      </button>
                    </div>

                    <div className="max-h-[640px] overflow-y-auto p-2">
                      {isLoading ? (
                        <p className="px-3 py-4 text-sm text-[var(--foreground-secondary)]">正在读取资产...</p>
                      ) : categoryAssets.length === 0 ? (
                        <p className="px-3 py-4 text-sm text-[var(--foreground-secondary)]">这个分类还没有资产。</p>
                      ) : (
                        <div className="space-y-1">
                          {categoryAssets.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => selectAsset(item)}
                              className={`w-full rounded-xl px-3 py-3 text-left transition-colors ${
                                selectedId === item.id && !isNew
                                  ? "bg-[var(--accent)]/10 text-[var(--foreground)]"
                                  : "hover:bg-[var(--card-hover)]"
                              }`}
                            >
                              <div className="flex items-center justify-between gap-3">
                                <span className="truncate text-sm font-semibold">{item.name}</span>
                                <span
                                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                                    item.enabled
                                      ? "bg-emerald-50 text-emerald-600"
                                      : "bg-slate-100 text-slate-500"
                                  }`}
                                >
                                  {item.enabled ? "启用" : "停用"}
                                </span>
                              </div>
                              <p className="mt-1 truncate text-xs text-[var(--foreground-secondary)]">{item.id}</p>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </section>

                <section className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
                  {draft ? (
                    <div className="space-y-5 p-5">
                      <div className="flex flex-col gap-3 border-b border-[var(--border)] pb-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--foreground-secondary)]">
                            {isNew ? "New Asset" : draft.id}
                          </p>
                          <h2 className="mt-1 text-xl font-bold text-[var(--foreground)]">
                            {draft.name || "未命名资产"}
                          </h2>
                        </div>
                        <label className="flex items-center gap-2 text-sm text-[var(--foreground-secondary)]">
                          <input
                            type="checkbox"
                            checked={draft.enabled}
                            onChange={(event) => updateDraft({ enabled: event.target.checked })}
                          />
                          启用
                        </label>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="space-y-2">
                          <span className="text-sm font-semibold text-[var(--foreground)]">资产 ID</span>
                          <input
                            value={draft.id}
                            disabled={!isNew}
                            onChange={(event) => updateDraft({ id: event.target.value.trim() })}
                            className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm disabled:opacity-60"
                          />
                        </label>

                        <label className="space-y-2">
                          <span className="text-sm font-semibold text-[var(--foreground)]">排序</span>
                          <input
                            type="number"
                            value={draft.sortOrder}
                            onChange={(event) => updateDraft({ sortOrder: Number(event.target.value) })}
                            className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm"
                          />
                        </label>

                        <label className="space-y-2">
                          <span className="text-sm font-semibold text-[var(--foreground)]">中文名称</span>
                          <input
                            value={draft.name}
                            onChange={(event) => updateDraft({ name: event.target.value })}
                            className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm"
                          />
                        </label>

                        <label className="space-y-2">
                          <span className="text-sm font-semibold text-[var(--foreground)]">英文名称</span>
                          <input
                            value={draft.nameEn}
                            onChange={(event) => updateDraft({ nameEn: event.target.value })}
                            className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm"
                          />
                        </label>
                      </div>

                      <label className="space-y-2 block">
                        <span className="text-sm font-semibold text-[var(--foreground)]">中文提示词片段</span>
                        <textarea
                          value={draft.promptZh}
                          onChange={(event) => updateDraft({ promptZh: event.target.value })}
                          className="h-32 w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm leading-6"
                        />
                      </label>

                      <label className="space-y-2 block">
                        <span className="text-sm font-semibold text-[var(--foreground)]">英文提示词片段</span>
                        <textarea
                          value={draft.promptEn}
                          onChange={(event) => updateDraft({ promptEn: event.target.value })}
                          className="h-32 w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm leading-6"
                        />
                      </label>

                      {renderRelationshipEditor()}

                      {promptPreview && (
                        <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] p-4">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--foreground-secondary)]">
                                Live Preview
                              </p>
                              <h3 className="mt-1 text-lg font-bold text-[var(--foreground)]">提示词质量预览</h3>
                            </div>
                            <span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                              示例：{promptPreview.title}
                            </span>
                          </div>

                          <p className="mt-2 text-sm leading-6 text-[var(--foreground-secondary)]">
                            你正在编辑的片段会被临时放进一套示例方案里，方便马上判断这段中文和英文读起来是否自然。
                          </p>

                          <div className="mt-4 grid gap-3 xl:grid-cols-2">
                            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-4">
                              <p className="text-xs font-semibold text-[var(--accent)]">中文完整示例</p>
                              <p className="mt-2 text-sm leading-7 text-[var(--foreground-secondary)]">
                                {promptPreview.chinese}
                              </p>
                            </div>
                            <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-4">
                              <p className="text-xs font-semibold text-[var(--accent)]">English Preview</p>
                              <p className="mt-2 text-sm leading-7 text-[var(--foreground-secondary)]">
                                {promptPreview.english}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-3 border-t border-[var(--border)] pt-4">
                        <button
                          onClick={saveDraft}
                          disabled={saveState === "saving" || needsSetup}
                          className="rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {saveState === "saving" ? "保存中" : saveState === "saved" ? "已保存" : "保存资产"}
                        </button>
                        <button
                          onClick={deleteDraft}
                          className="rounded-xl border border-rose-200 px-5 py-3 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-50"
                        >
                          {isNew ? "取消新增" : "删除"}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex min-h-[420px] items-center justify-center p-8 text-center text-[var(--foreground-secondary)]">
                      选择左侧资产，或新增一条资产。
                    </div>
                  )}
                </section>
              </div>
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
}
