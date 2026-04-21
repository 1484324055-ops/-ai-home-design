"use client";

import { useEffect, useState } from "react";
import { PromptResult, copyToClipboard } from "@/lib/prompt-generator";

interface PromptEditorProps {
  promptResult: PromptResult | null;
}

type CopyTarget =
  | ""
  | "chinese"
  | "english"
  | "negativeChinese"
  | "negativeEnglish"
  | "bundle";

export default function PromptEditor({ promptResult }: PromptEditorProps) {
  const [editedChinese, setEditedChinese] = useState("");
  const [editedEnglish, setEditedEnglish] = useState("");
  const [editedChineseNegative, setEditedChineseNegative] = useState("");
  const [editedEnglishNegative, setEditedEnglishNegative] = useState("");
  const [copySuccess, setCopySuccess] = useState<CopyTarget>("");

  useEffect(() => {
    if (promptResult) {
      setEditedChinese("");
      setEditedEnglish("");
      setEditedChineseNegative("");
      setEditedEnglishNegative("");
      setCopySuccess("");
    }
  }, [promptResult]);

  if (!promptResult) {
    return (
      <div className="bg-[var(--card-bg)] rounded-xl border border-[var(--border)] p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--background-secondary)] flex items-center justify-center">
          <svg
            className="w-8 h-8 text-[var(--foreground-secondary)]"
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
          选择完整参数后，点击“生成提示词”，这里会展示完整的中英提示词方案。
        </p>
      </div>
    );
  }

  const chinesePrompt = editedChinese || promptResult.chinese;
  const englishPrompt = editedEnglish || promptResult.english;
  const chineseNegative = editedChineseNegative || promptResult.chineseNegative;
  const englishNegative = editedEnglishNegative || promptResult.englishNegative;

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
      "",
      "中文反向提示词：",
      chineseNegative,
      "",
      "英文反向提示词：",
      englishNegative,
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
        <span className="px-2 py-1 text-xs font-medium bg-[var(--accent)]/10 text-[var(--accent)] rounded">
          {badge}
        </span>
        <label className="text-sm font-medium text-[var(--foreground-secondary)]">
          {label}
        </label>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-32 p-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="bg-[var(--card-bg)] rounded-xl border border-[var(--border)] overflow-hidden shadow-sm">
        <div className="p-4 bg-[var(--background-secondary)] border-b border-[var(--border)] flex items-center gap-2">
          <svg
            className="w-5 h-5 text-[var(--accent)]"
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
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            生成结果
          </h3>
        </div>

        <div className="p-4 space-y-6">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] p-4">
            <p className="text-xs uppercase tracking-wide text-[var(--foreground-secondary)]">
              Current Plan
            </p>
            <h4 className="mt-1 text-lg font-semibold text-[var(--foreground)]">
              {promptResult.title}
            </h4>
            <p className="mt-2 text-sm text-[var(--foreground-secondary)]">
              下面给你的是可直接复制使用的中英文提示词，以及一组常见的反向提示词。
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {renderEditor(
              "中文",
              "正向提示词（可编辑）",
              chinesePrompt,
              setEditedChinese,
              "中文提示词..."
            )}

            {renderEditor(
              "English",
              "Positive prompt (editable)",
              englishPrompt,
              setEditedEnglish,
              "English prompt..."
            )}

            {renderEditor(
              "中文反向",
              "反向提示词（可编辑）",
              chineseNegative,
              setEditedChineseNegative,
              "中文反向提示词..."
            )}

            {renderEditor(
              "Negative",
              "Negative prompt (editable)",
              englishNegative,
              setEditedEnglishNegative,
              "English negative prompt..."
            )}
          </div>

          <div className="pt-4 border-t border-[var(--border)]">
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-4 h-4 text-[var(--foreground-secondary)]"
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
              <span className="text-sm font-medium text-[var(--foreground-secondary)]">
                参数摘要
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {promptResult.sections.map((section) => (
                <span
                  key={section.label}
                  className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--background-secondary)] text-[var(--foreground)] border border-[var(--border)]"
                  title={section.valueEn}
                >
                  <span className="text-[var(--foreground-secondary)] mr-1">
                    {section.label}:
                  </span>
                  {section.value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => copyWithFeedback("chinese", chinesePrompt)}
          className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all ${
            copySuccess === "chinese"
              ? "bg-[var(--success)] text-white"
              : "bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--card-hover)]"
          }`}
        >
          {copySuccess === "chinese" ? "已复制中文" : "复制中文提示词"}
        </button>

        <button
          onClick={() => copyWithFeedback("english", englishPrompt)}
          className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all ${
            copySuccess === "english"
              ? "bg-[var(--success)] text-white"
              : "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]"
          }`}
        >
          {copySuccess === "english" ? "已复制英文" : "复制英文提示词"}
        </button>

        <button
          onClick={() => copyWithFeedback("negativeChinese", chineseNegative)}
          className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all ${
            copySuccess === "negativeChinese"
              ? "bg-[var(--success)] text-white"
              : "bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--card-hover)]"
          }`}
        >
          {copySuccess === "negativeChinese" ? "已复制反向中文" : "复制中文反向提示词"}
        </button>

        <button
          onClick={() => copyWithFeedback("negativeEnglish", englishNegative)}
          className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all ${
            copySuccess === "negativeEnglish"
              ? "bg-[var(--success)] text-white"
              : "bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--card-hover)]"
          }`}
        >
          {copySuccess === "negativeEnglish" ? "已复制反向英文" : "复制英文反向提示词"}
        </button>

        <button
          onClick={handleCopyBundle}
          className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all ${
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
