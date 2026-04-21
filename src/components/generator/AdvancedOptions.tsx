"use client";

import { useState } from "react";
import {
  ResidenceType,
  residenceTypes,
  CameraAngle,
  cameraAngles,
  Lighting,
  lightings,
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

  return (
    <div className="space-y-3">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
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
        <div className="space-y-4 p-4 bg-[var(--card-bg)] rounded-xl border border-[var(--border)]">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--foreground)]">
              住宅类型
            </label>
            <div className="flex flex-wrap gap-2">
              {residenceTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => onResidenceTypeChange(type)}
                  className={`px-4 py-2 rounded-lg border-2 text-sm transition-all ${
                    selectedResidenceType.id === type.id
                      ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                      : "border-[var(--border)] text-[var(--foreground-secondary)] hover:border-[var(--accent)]/50"
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--foreground)]">
              镜头
            </label>
            <div className="flex flex-wrap gap-2">
              {cameraAngles.map((angle) => (
                <button
                  key={angle.id}
                  onClick={() => onCameraAngleChange(angle)}
                  className={`px-4 py-2 rounded-lg border-2 text-sm transition-all ${
                    selectedCameraAngle.id === angle.id
                      ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                      : "border-[var(--border)] text-[var(--foreground-secondary)] hover:border-[var(--accent)]/50"
                  }`}
                >
                  {angle.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--foreground)]">
              光影
            </label>
            <div className="flex flex-wrap gap-2">
              {lightings.map((lighting) => (
                <button
                  key={lighting.id}
                  onClick={() => onLightingChange(lighting)}
                  className={`px-4 py-2 rounded-lg border-2 text-sm transition-all ${
                    selectedLighting.id === lighting.id
                      ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                      : "border-[var(--border)] text-[var(--foreground-secondary)] hover:border-[var(--accent)]/50"
                  }`}
                >
                  {lighting.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
