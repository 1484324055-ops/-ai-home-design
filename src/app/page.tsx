"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import SpaceSelector from "@/components/generator/SpaceSelector";
import CabinetSelector from "@/components/generator/CabinetSelector";
import StyleSelector from "@/components/generator/StyleSelector";
import MaterialSelector from "@/components/generator/MaterialSelector";
import AdvancedOptions from "@/components/generator/AdvancedOptions";
import PromptEditor from "@/components/generator/PromptEditor";
import {
  Space,
  Cabinet,
  Style,
  Material,
  ResidenceType,
  CameraAngle,
  Lighting,
  getAvailableCabinets,
  getAvailableMaterials,
  residenceTypes,
  cameraAngles,
  lightings,
} from "@/lib/data";
import { generatePrompts, PromptResult } from "@/lib/prompt-generator";
import ProtectedRoute from "@/components/common/ProtectedRoute";

export default function HomePage() {
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);
  const [selectedCabinet, setSelectedCabinet] = useState<Cabinet | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<Style | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);
  const [selectedResidenceType, setSelectedResidenceType] = useState<ResidenceType>(residenceTypes[0]);
  const [selectedCameraAngle, setSelectedCameraAngle] = useState<CameraAngle>(cameraAngles[0]);
  const [selectedLighting, setSelectedLighting] = useState<Lighting>(lightings[0]);
  const [promptResult, setPromptResult] = useState<PromptResult | null>(null);

  const availableCabinets = selectedSpace ? getAvailableCabinets(selectedSpace.id) : [];
  const availableMaterials = selectedStyle ? getAvailableMaterials(selectedStyle.id) : [];

  const handleSpaceSelect = (space: Space) => {
    setSelectedSpace(space);
    setSelectedCabinet(null);
    setPromptResult(null);
  };

  const handleCabinetSelect = (cabinet: Cabinet) => {
    setSelectedCabinet(cabinet);
    setPromptResult(null);
  };

  const handleStyleSelect = (style: Style) => {
    setSelectedStyle(style);
    setSelectedMaterial(null);
    setPromptResult(null);
  };

  const handleMaterialSelect = (material: Material) => {
    setSelectedMaterial(material);
    setPromptResult(null);
  };

  const handleGenerate = () => {
    if (!selectedSpace || !selectedCabinet || !selectedStyle || !selectedMaterial) {
      return;
    }

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
  };

  const handleReset = () => {
    setSelectedSpace(null);
    setSelectedCabinet(null);
    setSelectedStyle(null);
    setSelectedMaterial(null);
    setSelectedResidenceType(residenceTypes[0]);
    setSelectedCameraAngle(cameraAngles[0]);
    setSelectedLighting(lightings[0]);
    setPromptResult(null);
  };

  const isComplete = selectedSpace && selectedCabinet && selectedStyle && selectedMaterial;

  return (
    <ProtectedRoute>
    <div className="min-h-screen bg-[var(--background)]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* 标题 */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[var(--foreground)]">
              AI 全屋定制效果图生成器
            </h1>
            <p className="mt-2 text-[var(--foreground-secondary)]">
              选择空间、柜体、风格和材质，生成专业的AI效果图提示词
            </p>
          </div>

          {/* 选择器区域 */}
          <div className="space-y-6">
            <SpaceSelector
              selectedSpace={selectedSpace}
              onSelect={handleSpaceSelect}
            />

            <CabinetSelector
              cabinets={availableCabinets}
              selectedCabinet={selectedCabinet}
              onSelect={handleCabinetSelect}
            />

            <StyleSelector
              selectedStyle={selectedStyle}
              onSelect={handleStyleSelect}
            />

            <MaterialSelector
              materials={availableMaterials}
              selectedMaterial={selectedMaterial}
              onSelect={handleMaterialSelect}
            />

            <AdvancedOptions
              selectedResidenceType={selectedResidenceType}
              selectedCameraAngle={selectedCameraAngle}
              selectedLighting={selectedLighting}
              onResidenceTypeChange={setSelectedResidenceType}
              onCameraAngleChange={setSelectedCameraAngle}
              onLightingChange={setSelectedLighting}
            />
          </div>

          {/* 生成按钮 */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleGenerate}
              disabled={!isComplete}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
                isComplete
                  ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-lg hover:shadow-xl"
                  : "bg-[var(--border)] text-[var(--foreground-secondary)] cursor-not-allowed"
              }`}
            >
              🎯 生成提示词
            </button>

            {promptResult && (
              <button
                onClick={handleReset}
                className="px-8 py-4 rounded-xl font-semibold text-lg border-2 border-[var(--border)] text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:border-[var(--foreground-secondary)] transition-all"
              >
                🔄 重置
              </button>
            )}
          </div>

          {/* 提示词编辑区 */}
          <PromptEditor promptResult={promptResult} />
        </div>
      </main>
    </div>
    </ProtectedRoute>
  );
}
