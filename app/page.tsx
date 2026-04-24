"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/app/AuthProvider";
import Header from "@/components/layout/Header";
import SpaceSelector from "@/components/generator/SpaceSelector";
import CabinetSelector from "@/components/generator/CabinetSelector";
import StyleSelector from "@/components/generator/StyleSelector";
import MaterialSelector from "@/components/generator/MaterialSelector";
import AdvancedOptions from "@/components/generator/AdvancedOptions";
import PromptEditor from "@/components/generator/PromptEditor";
import HistoryPanel from "@/components/generator/HistoryPanel";
import ImageSiteLinks from "@/components/generator/ImageSiteLinks";
import FeedbackWidget from "@/components/feedback/FeedbackWidget";
import {
  Space,
  Cabinet,
  Style,
  Material,
  ResidenceType,
  CameraAngle,
  Lighting,
  DEFAULT_RESIDENCE_TYPE_ID,
  DEFAULT_CAMERA_ANGLE_ID,
  DEFAULT_LIGHTING_ID,
} from "@/lib/data";
import { AssetLibrary, defaultAssetLibrary } from "@/lib/assets";
import { generatePrompts, PromptResult } from "@/lib/prompt-generator";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import {
  HistoryRecord,
  buildHistoryPayload,
  promptResultFromHistory,
  selectionFromHistory,
  sortHistories,
} from "@/lib/history";

type SaveState = "idle" | "saving" | "saved" | "error";

export default function HomePage() {
  const { user, isLoading: authLoading } = useAuth();
  const [isHistoryDrawerOpen, setIsHistoryDrawerOpen] = useState(false);
  const [assetLibrary, setAssetLibrary] = useState<AssetLibrary>(defaultAssetLibrary);
  const [assetMessage, setAssetMessage] = useState("");
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);
  const [selectedCabinet, setSelectedCabinet] = useState<Cabinet | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<Style | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
  const [selectedResidenceType, setSelectedResidenceType] =
    useState<ResidenceType>(
      defaultAssetLibrary.residenceTypes.find((item) => item.id === DEFAULT_RESIDENCE_TYPE_ID) ??
        defaultAssetLibrary.residenceTypes[0]
    );
  const [selectedCameraAngle, setSelectedCameraAngle] =
    useState<CameraAngle>(
      defaultAssetLibrary.cameraAngles.find((item) => item.id === DEFAULT_CAMERA_ANGLE_ID) ??
        defaultAssetLibrary.cameraAngles[0]
    );
  const [selectedLighting, setSelectedLighting] = useState<Lighting>(
    defaultAssetLibrary.lightings.find((item) => item.id === DEFAULT_LIGHTING_ID) ??
      defaultAssetLibrary.lightings[0]
  );
  const [promptResult, setPromptResult] = useState<PromptResult | null>(null);
  const [histories, setHistories] = useState<HistoryRecord[]>([]);
  const [isHistoryLoading, setIsHistoryLoading] = useState(true);
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [activeHistoryId, setActiveHistoryId] = useState<number | null>(null);
  const [historyMessage, setHistoryMessage] = useState("");

  const availableCabinets = selectedSpace
    ? assetLibrary.cabinets.filter((cabinet) => cabinet.applicableSpaces.includes(selectedSpace.id))
    : [];
  const availableMaterials = selectedStyle
    ? assetLibrary.materials.filter((material) => material.applicableStyles.includes(selectedStyle.id))
    : [];

  useEffect(() => {
    if (!authLoading && user) {
      void loadAssets();
      void loadHistories();
    }
  }, [authLoading, user]);

  useEffect(() => {
    const nextResidenceType =
      assetLibrary.residenceTypes.find((item) => item.id === selectedResidenceType.id) ??
      assetLibrary.residenceTypes.find((item) => item.id === DEFAULT_RESIDENCE_TYPE_ID) ??
      assetLibrary.residenceTypes[0];
    const nextCameraAngle =
      assetLibrary.cameraAngles.find((item) => item.id === selectedCameraAngle.id) ??
      assetLibrary.cameraAngles.find((item) => item.id === DEFAULT_CAMERA_ANGLE_ID) ??
      assetLibrary.cameraAngles[0];
    const nextLighting =
      assetLibrary.lightings.find((item) => item.id === selectedLighting.id) ??
      assetLibrary.lightings.find((item) => item.id === DEFAULT_LIGHTING_ID) ??
      assetLibrary.lightings[0];

    setSelectedResidenceType(nextResidenceType);
    setSelectedCameraAngle(nextCameraAngle);
    setSelectedLighting(nextLighting);
  }, [assetLibrary]);

  useEffect(() => {
    if (availableCabinets.length !== 1) {
      return;
    }

    const [onlyCabinet] = availableCabinets;

    if (selectedCabinet?.id === onlyCabinet.id) {
      return;
    }

    setSelectedCabinet(onlyCabinet);
  }, [availableCabinets, selectedCabinet]);

  useEffect(() => {
    if (availableMaterials.length !== 1) {
      return;
    }

    const [onlyMaterial] = availableMaterials;

    if (selectedMaterial?.id === onlyMaterial.id) {
      return;
    }

    setSelectedMaterial(onlyMaterial);
  }, [availableMaterials, selectedMaterial]);

  useEffect(() => {
    if (saveState === "saved" || saveState === "error") {
      const timer = setTimeout(() => setSaveState("idle"), 2400);
      return () => clearTimeout(timer);
    }
  }, [saveState]);

  useEffect(() => {
    if (!isHistoryDrawerOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isHistoryDrawerOpen]);

  const loadHistories = async () => {
    try {
      setIsHistoryLoading(true);
      const response = await fetch("/api/history");
      const data = await response.json();

      if (response.ok) {
        setHistories(sortHistories(data.histories ?? []));
        if (data.needsSetup && data.message) {
          setHistoryMessage(data.message);
        }
      }
    } catch (error) {
      console.error("Load histories error:", error);
    } finally {
      setIsHistoryLoading(false);
    }
  };

  const loadAssets = async () => {
    try {
      const response = await fetch("/api/assets");
      const data = await response.json();

      if (response.ok && data.library) {
        setAssetLibrary(data.library);
        setAssetMessage(data.message || "");
      }
    } catch (error) {
      console.error("Load assets error:", error);
      setAssetMessage("资产库读取失败，当前先使用内置资产。");
    }
  };

  const resetStatusMessages = () => {
    setHistoryMessage("");
  };

  const handleSpaceSelect = (space: Space) => {
    resetStatusMessages();
    setSelectedSpace(space);
    setSelectedCabinet(null);
    setPromptResult(null);
    setActiveHistoryId(null);
  };

  const handleCabinetSelect = (cabinet: Cabinet) => {
    resetStatusMessages();
    setSelectedCabinet(cabinet);
    setPromptResult(null);
    setActiveHistoryId(null);
  };

  const handleStyleSelect = (style: Style) => {
    resetStatusMessages();
    setSelectedStyle(style);
    setSelectedMaterial(null);
    setPromptResult(null);
    setActiveHistoryId(null);
  };

  const handleMaterialSelect = (material: Material) => {
    resetStatusMessages();
    setSelectedMaterial(material);
    setPromptResult(null);
    setActiveHistoryId(null);
  };

  const persistHistory = async (selection: {
    space: Space;
    cabinet: Cabinet;
    style: Style;
    material: Material;
    residenceType: ResidenceType;
    cameraAngle: CameraAngle;
    lighting: Lighting;
  }, result: PromptResult) => {
    try {
      setSaveState("saving");

      const response = await fetch("/api/history", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildHistoryPayload(selection, result)),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "保存失败");
      }

      setHistories((current) => sortHistories([data.history, ...current]));
      setActiveHistoryId(data.history.id);
      setSaveState("saved");
    } catch (error) {
      console.error("Persist history error:", error);
      if (error instanceof Error) {
        setHistoryMessage(error.message);
      }
      setSaveState("error");
    }
  };

  const handleGenerate = () => {
    if (!selectedSpace || !selectedCabinet || !selectedStyle || !selectedMaterial) {
      return;
    }

    resetStatusMessages();

    const selection = {
      space: selectedSpace,
      cabinet: selectedCabinet,
      style: selectedStyle,
      material: selectedMaterial,
      residenceType: selectedResidenceType,
      cameraAngle: selectedCameraAngle,
      lighting: selectedLighting,
    };

    const result = generatePrompts(selection);
    setPromptResult(result);
    setActiveHistoryId(null);
    void persistHistory(selection, result);
  };

  const handleReset = () => {
    setSelectedSpace(null);
    setSelectedCabinet(null);
    setSelectedStyle(null);
    setSelectedMaterial(null);
    setSelectedResidenceType(
      assetLibrary.residenceTypes.find((item) => item.id === DEFAULT_RESIDENCE_TYPE_ID) ??
        assetLibrary.residenceTypes[0]
    );
    setSelectedCameraAngle(
      assetLibrary.cameraAngles.find((item) => item.id === DEFAULT_CAMERA_ANGLE_ID) ??
        assetLibrary.cameraAngles[0]
    );
    setSelectedLighting(
      assetLibrary.lightings.find((item) => item.id === DEFAULT_LIGHTING_ID) ??
        assetLibrary.lightings[0]
    );
    setPromptResult(null);
    setActiveHistoryId(null);
    resetStatusMessages();
  };

  const handleLoadHistory = (record: HistoryRecord) => {
    const selection = selectionFromHistory(record, assetLibrary);

    if (!selection) {
      setHistoryMessage("这条历史记录对应的选项已经不存在了，暂时无法直接载入。");
      return;
    }

    setSelectedSpace(selection.space);
    setSelectedCabinet(selection.cabinet);
    setSelectedStyle(selection.style);
    setSelectedMaterial(selection.material);
    setSelectedResidenceType(selection.residenceType);
    setSelectedCameraAngle(selection.cameraAngle);
    setSelectedLighting(selection.lighting);
    setPromptResult(promptResultFromHistory(record));
    setActiveHistoryId(record.id);
    setHistoryMessage("已从历史记录恢复这套方案。");
    setIsHistoryDrawerOpen(false);
  };

  const handleToggleFavorite = async (record: HistoryRecord) => {
    const nextFavorite = !record.isFavorite;
    const previousHistories = histories;
    const optimistic = histories.map((item) =>
      item.id === record.id ? { ...item, isFavorite: nextFavorite } : item
    );
    setHistories(sortHistories(optimistic));

    try {
      const response = await fetch("/api/history", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: record.id, isFavorite: nextFavorite }),
      });

      if (!response.ok) {
        throw new Error("收藏状态更新失败");
      }
    } catch (error) {
      console.error("Toggle favorite error:", error);
      setHistories(previousHistories);
      setHistoryMessage("收藏状态更新失败了，请稍后再试。");
    }
  };

  const handleDeleteHistory = async (record: HistoryRecord) => {
    const confirmed = window.confirm(`确定要删除“${record.title}”这条历史记录吗？`);

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(`/api/history?id=${record.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "删除失败");
      }

      const nextHistories = histories.filter((item) => item.id !== record.id);
      setHistories(sortHistories(nextHistories));

      if (activeHistoryId === record.id) {
        setActiveHistoryId(null);
      }

      setHistoryMessage("历史记录已删除。");
    } catch (error) {
      console.error("Delete history error:", error);
      setHistoryMessage("删除历史记录失败，请稍后再试。");
    }
  };

  const isComplete = selectedSpace && selectedCabinet && selectedStyle && selectedMaterial;

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[var(--background)]">
        <Header />

        <main className="mx-auto max-w-[1500px] px-3 py-3 pb-24 sm:px-6 sm:py-5 sm:pb-28 lg:pb-6 lg:pl-20 lg:pr-10 xl:px-10">
          <div>
            <section className="min-w-0 space-y-4 sm:space-y-6">
              <div className="rounded-[20px] border border-[var(--border)] bg-[var(--card-bg)] p-3 shadow-[0_18px_60px_rgba(15,23,42,0.08)] sm:rounded-[24px] sm:p-5">
                <div className="flex flex-col gap-3 border-b border-[var(--border)] pb-3 sm:pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="max-w-3xl">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--foreground-secondary)]">
                        Prompt Studio
                      </p>
                      <h1 className="mt-1 text-xl font-bold leading-tight text-[var(--foreground)] sm:text-2xl">
                        AI 全屋定制效果图生成器
                      </h1>
                      <p className="mt-1 max-w-3xl text-xs leading-5 text-[var(--foreground-secondary)] sm:text-sm">
                        选择空间、柜体、风格和材质，生成更自然的中英文提示词，并把常用方案沉淀在左侧方案库里。
                      </p>
                    </div>

                    <button
                      onClick={() => setIsHistoryDrawerOpen(true)}
                      className="inline-flex min-h-[48px] items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] lg:hidden"
                    >
                      <span className="text-base">☰</span>
                      打开历史方案栏
                    </button>
                  </div>

                  <div className="hidden grid-cols-3 gap-2 sm:grid">
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] px-3 py-3 sm:px-4">
                      <p className="truncate text-[11px] text-[var(--foreground-secondary)] sm:text-xs">历史方案</p>
                      <p className="mt-1 text-xl font-semibold text-[var(--foreground)]">{histories.length}</p>
                    </div>
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] px-3 py-3 sm:px-4">
                      <p className="truncate text-[11px] text-[var(--foreground-secondary)] sm:text-xs">当前方案</p>
                      <p className="mt-1 truncate text-sm font-medium text-[var(--foreground)]">
                        {promptResult?.title || "未生成"}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] px-3 py-3 sm:px-4">
                      <p className="truncate text-[11px] text-[var(--foreground-secondary)] sm:text-xs">保存状态</p>
                      <p className="mt-1 text-sm font-medium text-[var(--foreground)]">
                        {saveState === "saving"
                          ? "正在保存"
                          : saveState === "saved"
                            ? "刚刚已保存"
                            : saveState === "error"
                              ? "保存失败"
                              : "自动保存开启"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 space-y-4 sm:mt-4 sm:space-y-5">
                  {assetMessage && (
                    <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-700">
                      {assetMessage}
                    </div>
                  )}

                  <SpaceSelector
                    spaces={assetLibrary.spaces}
                    selectedSpace={selectedSpace}
                    onSelect={handleSpaceSelect}
                  />

                  <CabinetSelector
                    cabinets={availableCabinets}
                    selectedCabinet={selectedCabinet}
                    onSelect={handleCabinetSelect}
                  />

                  <StyleSelector
                    styles={assetLibrary.styles}
                    selectedStyle={selectedStyle}
                    onSelect={handleStyleSelect}
                  />

                  <MaterialSelector
                    materials={availableMaterials}
                    selectedMaterial={selectedMaterial}
                    onSelect={handleMaterialSelect}
                  />

                  <AdvancedOptions
                    residenceTypes={assetLibrary.residenceTypes}
                    cameraAngles={assetLibrary.cameraAngles}
                    lightings={assetLibrary.lightings}
                    selectedResidenceType={selectedResidenceType}
                    selectedCameraAngle={selectedCameraAngle}
                    selectedLighting={selectedLighting}
                    onResidenceTypeChange={setSelectedResidenceType}
                    onCameraAngleChange={setSelectedCameraAngle}
                    onLightingChange={setSelectedLighting}
                  />

                  <div className="hidden flex-wrap justify-center gap-3 border-t border-[var(--border)] pt-2 sm:flex">
                    <button
                      onClick={handleGenerate}
                      disabled={!isComplete}
                      className={`rounded-xl px-7 py-3 text-base font-semibold transition-all ${
                        isComplete
                          ? "bg-[var(--accent)] text-white shadow-lg hover:bg-[var(--accent-hover)] hover:shadow-xl"
                          : "cursor-not-allowed bg-[var(--border)] text-[var(--foreground-secondary)]"
                      }`}
                    >
                      生成提示词
                    </button>

                    {promptResult && (
                      <button
                        onClick={handleReset}
                        className="rounded-xl border-2 border-[var(--border)] px-7 py-3 text-base font-semibold text-[var(--foreground-secondary)] transition-all hover:border-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
                      >
                        重置
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {historyMessage && (
                <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] px-4 py-3 text-sm text-[var(--foreground-secondary)]">
                  {historyMessage}
                </div>
              )}

              <PromptEditor promptResult={promptResult} />

              {promptResult && <ImageSiteLinks />}
            </section>
          </div>
        </main>

        <button
          onClick={() => setIsHistoryDrawerOpen(true)}
          className="fixed left-4 top-28 z-40 hidden w-12 flex-col items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] px-2 py-3 text-xs font-semibold text-[var(--foreground)] shadow-[0_14px_40px_rgba(15,23,42,0.16)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] lg:flex"
          aria-label="打开历史方案栏"
        >
          <span className="text-base leading-none">☰</span>
          <span className="leading-4 [writing-mode:vertical-rl]">方案栏</span>
          <span className="rounded-full bg-[var(--accent)]/10 px-1.5 py-1 text-[10px] text-[var(--accent)]">
            {histories.length}
          </span>
        </button>

        {isHistoryDrawerOpen && (
          <div className="fixed inset-0 z-50">
            <button
              aria-label="关闭历史方案栏"
              className="absolute inset-0 bg-black/35"
              onClick={() => setIsHistoryDrawerOpen(false)}
            />
            <div className="absolute inset-y-0 left-0 w-full max-w-[400px]">
              <HistoryPanel
                histories={histories}
                isLoading={isHistoryLoading}
                saveState={saveState}
                activeHistoryId={activeHistoryId}
                onLoad={handleLoadHistory}
                onToggleFavorite={handleToggleFavorite}
                onDelete={handleDeleteHistory}
                mode="drawer"
                onClose={() => setIsHistoryDrawerOpen(false)}
              />
            </div>
          </div>
        )}

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-[var(--background)]/92 px-3 pb-[calc(env(safe-area-inset-bottom)+0.65rem)] pt-2 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur lg:hidden">
          <div className="mx-auto flex max-w-3xl items-center gap-3">
            <button
              onClick={() => setIsHistoryDrawerOpen(true)}
              className="inline-flex min-h-[46px] shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] px-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              方案栏
            </button>

            <button
              onClick={handleGenerate}
              disabled={!isComplete}
              className={`min-h-[46px] flex-1 rounded-2xl px-4 text-base font-semibold transition-all ${
                isComplete
                  ? "bg-[var(--accent)] text-white shadow-lg hover:bg-[var(--accent-hover)]"
                  : "cursor-not-allowed bg-[var(--border)] text-[var(--foreground-secondary)]"
              }`}
            >
              生成提示词
            </button>

            {promptResult && (
              <button
                onClick={handleReset}
                className="inline-flex min-h-[46px] shrink-0 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] px-3 text-sm font-medium text-[var(--foreground-secondary)] transition-colors hover:border-[var(--foreground-secondary)] hover:text-[var(--foreground)]"
              >
                重置
              </button>
            )}
          </div>
        </div>

        <FeedbackWidget source="homepage" />
      </div>
    </ProtectedRoute>
  );
}
