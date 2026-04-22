"use client";

import { useState } from "react";
import {
  ResidenceType,
  residenceTypes,
  CameraAngle,
  cameraAngles,
  Lighting,
  lightings,
  recommendedAdvancedOptions,
} from "@/lib/data";

interface AdvancedOptionsProps {
  selectedResidenceType: ResidenceType;
  selectedCameraAngle: CameraAngle;
  selectedLighting: Lighting;
  onResidenceTypeChange: (type: ResidenceType) => void;
  onCameraAngleChange: (angle: CameraAngle) => void;
  onLightingChange: (lighting: Lighting) => void;
}

export default function AdvancedOptions({
  selectedResidenceType,
  selectedCameraAngle,
  selectedLighting,
  onResidenceTypeChange,
  onCameraAngleChange,
  onLightingChange,
}: AdvancedOptionsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderOption = (
    label: string,
    isSelected: boolean,
    isRecommended: boolean,
    onClick: () => void
  ) => (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 text-sm transition-all ${
        isSelected
          ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
          : "border-[var(--border)] text-[var(--foreground-secondary)] hover:border-[var(--accent)]/50"
      }`}
    >
      <span>{label}</span>
      {isRecommended && (
        <span className="rounded-full bg-[var(--accent)]/15 px-2 py-0.5 text-[10px] font-semibold text-[var(--accent)]">
          推荐
        </span>
      )}
    </button>
  );

  return (
    <div className="space-y-3">
      <button
        onClick={() => setIsExpanded((current) => !current)}
        className="flex items-center gap-2 text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors"
      >
        <svg
          className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <span className="text-sm font-medium">高级选项</span>
      </button>

      {isExpanded && (
        <div className="space-y-4 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-4">
          <div className="rounded-lg bg-[var(--background-secondary)] px-3 py-2 text-xs text-[var(--foreground-secondary)]">
            默认推荐：商品房 + 广角全景 + 明亮自然光
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--foreground)]">住宅类型</label>
            <div className="flex flex-wrap gap-2">
              {residenceTypes.map((type) =>
                renderOption(
                  type.name,
                  selectedResidenceType.id === type.id,
                  type.id === recommendedAdvancedOptions.residenceTypeId,
                  () => onResidenceTypeChange(type)
                )
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--foreground)]">镜头</label>
            <div className="flex flex-wrap gap-2">
              {cameraAngles.map((angle) =>
                renderOption(
                  angle.name,
                  selectedCameraAngle.id === angle.id,
                  angle.id === recommendedAdvancedOptions.cameraAngleId,
                  () => onCameraAngleChange(angle)
                )
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--foreground)]">光影</label>
            <div className="flex flex-wrap gap-2">
              {lightings.map((lighting) =>
                renderOption(
                  lighting.name,
                  selectedLighting.id === lighting.id,
                  lighting.id === recommendedAdvancedOptions.lightingId,
                  () => onLightingChange(lighting)
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
