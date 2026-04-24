"use client";

import { useEffect, useState } from "react";
import { PromptResult, copyToClipboard } from "@/lib/prompt-generator";

interface PromptEditorProps {
  promptResult: PromptResult | null;
}

type CopyTarget = "" | "chinese" | "english" | "bundle";

export default function PromptEditor({ promptResult }: PromptEditorProps) {
  const [editedChinese, setEditedChinese] = useState("");
  const [editedEnglish, setEditedEnglish] = useState("");
  const [showEnglish, setShowEnglish] = useState(false);
  const [copySuccess, setCopySuccess] = useState<CopyTarget>("");

  useEffect(() => {
    if (promptResult) {
      setEditedChinese("");
      setEditedEnglish("");
      setShowEnglish(false);
      setCopySuccess("");
    }
  }, [promptResult]);

  if (!promptResult) {
    return (
      <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--background-secondary)]">
          <svg
            className="h-8 w-8 text-[var(--foreground-secondary)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
        <p className="text-[var(--foreground-secondary)]">
          选完整套参数后，点“生成提示词”，这里会出现可直接使用的中英文提示词方案。
        </p>
      </div>
    );
  }

  const chinesePrompt = editedChinese || promptResult.chinese;
  const englishPrompt = editedEnglish || promptResult.english;

  const copyWithFeedback = async (target: CopyTarget, text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopySuccess(target);
      setTimeout(() => setCopySuccess(""), 2000);
    }
  };

  const handleCopyBundle = async () => {
    const bundle = [
      `方案标题：${promptResult.title}`,
      "",
      "中文提示词：",
      chinesePrompt,
      "",
      "英文提示词：",
      englishPrompt,
    ].join("\n");

    await copyWithFeedback("bundle", bundle);
  };

  const renderEditor = (
    badge: string,
    label: string,
    value: string,
    onChange: (value: string) => void,
    placeholder: string
  ) => (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="rounded bg-[var(--accent)]/10 px-2 py-1 text-xs font-medium text-[var(--accent)]">
          {badge}
        </span>
        <label className="text-sm font-medium text-[var(--foreground-secondary)]">{label}</label>
      </div>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-36 w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--background)] p-3 text-sm text-[var(--foreground)] transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card-bg)] shadow-sm">
        <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--background-secondary)] p-4">
          <svg
            className="h-5 w-5 text-[var(--accent)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="text-lg font-semibold text-[var(--foreground)]">生成结果</h3>
        </div>

        <div className="space-y-6 p-4">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] p-4">
            <p className="text-xs uppercase tracking-wide text-[var(--foreground-secondary)]">
              Current Plan
            </p>
            <h4 className="mt-1 text-lg font-semibold text-[var(--foreground)]">
              {promptResult.title}
            </h4>
            <p className="mt-2 text-sm text-[var(--foreground-secondary)]">
              这里保留的是可直接用于生图的正向提示词，你可以复制后直接去外部平台继续出图。
            </p>
          </div>

          <div className="space-y-4">
            {renderEditor(
              "中文",
              "中文正向提示词（可编辑）",
              chinesePrompt,
              setEditedChinese,
              "中文提示词..."
            )}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background-secondary)]">
              <button
                onClick={() => setShowEnglish((current) => !current)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
              >
                <span className="text-sm font-medium text-[var(--foreground)]">
                  英文提示词备用版本
                </span>
                <span className="text-xs text-[var(--foreground-secondary)]">
                  {showEnglish ? "收起" : "展开"}
                </span>
              </button>
              {showEnglish && (
                <div className="border-t border-[var(--border)] p-4">
                  {renderEditor(
                    "English",
                    "English positive prompt (editable)",
                    englishPrompt,
                    setEditedEnglish,
                    "English prompt..."
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-[var(--border)] pt-4">
            <div className="mb-3 flex items-center gap-2">
              <svg
                className="h-4 w-4 text-[var(--foreground-secondary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <span className="text-sm font-medium text-[var(--foreground-secondary)]">参数摘要</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {promptResult.sections.map((section) => (
                <span
                  key={section.label}
                  className="inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--background-secondary)] px-2.5 py-1 text-xs font-medium text-[var(--foreground)]"
                  title={section.valueEn}
                >
                  <span className="mr-1 text-[var(--foreground-secondary)]">{section.label}:</span>
                  {section.value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:flex sm:flex-wrap">
        <button
          onClick={() => copyWithFeedback("chinese", chinesePrompt)}
          className={`min-h-[48px] rounded-lg px-5 py-3 font-medium transition-all ${
            copySuccess === "chinese"
              ? "bg-[var(--success)] text-white"
              : "border border-[var(--border)] bg-[var(--card-bg)] text-[var(--foreground)] hover:bg-[var(--card-hover)]"
          }`}
        >
          {copySuccess === "chinese" ? "已复制中文" : "复制中文提示词"}
        </button>

        {showEnglish && (
          <button
          onClick={() => copyWithFeedback("english", englishPrompt)}
          className={`min-h-[48px] rounded-lg px-5 py-3 font-medium transition-all ${
            copySuccess === "english"
              ? "bg-[var(--success)] text-white"
              : "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]"
          }`}
        >
          {copySuccess === "english" ? "已复制英文" : "复制英文提示词"}
          </button>
        )}

        <button
          onClick={handleCopyBundle}
          className={`min-h-[48px] rounded-lg px-5 py-3 font-medium transition-all ${
            copySuccess === "bundle"
              ? "bg-[var(--success)] text-white"
              : "bg-[var(--foreground)] text-white hover:opacity-90"
          }`}
        >
          {copySuccess === "bundle" ? "已复制完整方案" : "复制完整方案"}
        </button>
      </div>
    </div>
  );
}
