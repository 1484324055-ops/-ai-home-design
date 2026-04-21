"use client";

import { useState, useEffect } from "react";
import { PromptResult, copyToClipboard } from "@/lib/prompt-generator";

interface PromptEditorProps {
  promptResult: PromptResult | null;
}

export default function PromptEditor({ promptResult }: PromptEditorProps) {
  const [editedChinese, setEditedChinese] = useState("");
  const [editedEnglish, setEditedEnglish] = useState("");
  const [copySuccess, setCopySuccess] = useState<"" | "chinese" | "english">("");

  // 当生成新的提示词时，重置编辑内容
  useEffect(() => {
    if (promptResult) {
      setEditedChinese("");
      setEditedEnglish("");
    }
  }, [promptResult?.chinese, promptResult?.english]);

  if (!promptResult) {
    return (
      <div className="bg-[var(--card-bg)] rounded-xl border border-[var(--border)] p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--background-secondary)] flex items-center justify-center">
          <svg className="w-8 h-8 text-[var(--foreground-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <p className="text-[var(--foreground-secondary)]">
          选择所有选项后，点击"生成提示词"按钮
        </p>
      </div>
    );
  }

  const handleCopyChinese = async () => {
    const textToCopy = editedChinese || promptResult.chinese;
    const success = await copyToClipboard(textToCopy);
    if (success) {
      setCopySuccess("chinese");
      setTimeout(() => setCopySuccess(""), 2000);
    }
  };

  const handleCopyEnglish = async () => {
    const textToCopy = editedEnglish || promptResult.english;
    const success = await copyToClipboard(textToCopy);
    if (success) {
      setCopySuccess("english");
      setTimeout(() => setCopySuccess(""), 2000);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-[var(--card-bg)] rounded-xl border border-[var(--border)] overflow-hidden shadow-sm">
        <div className="p-4 bg-[var(--background-secondary)] border-b border-[var(--border)] flex items-center gap-2">
          <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            生成结果
          </h3>
        </div>

        <div className="p-4 space-y-4">
          {/* 中文提示词 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs font-medium bg-[var(--accent)]/10 text-[var(--accent)] rounded">
                中文
              </span>
              <label className="text-sm font-medium text-[var(--foreground-secondary)]">
                提示词（可编辑）
              </label>
            </div>
            <textarea
              value={editedChinese || promptResult.chinese}
              onChange={(e) => setEditedChinese(e.target.value)}
              className="w-full h-32 p-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
              placeholder="中文提示词..."
            />
          </div>

          {/* 英文提示词 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs font-medium bg-[var(--accent)]/10 text-[var(--accent)] rounded">
                English
              </span>
              <label className="text-sm font-medium text-[var(--foreground-secondary)]">
                Prompt (Editable)
              </label>
            </div>
            <textarea
              value={editedEnglish || promptResult.english}
              onChange={(e) => setEditedEnglish(e.target.value)}
              className="w-full h-32 p-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
              placeholder="English prompt..."
            />
          </div>

          {/* 参数摘要 */}
          <div className="pt-4 border-t border-[var(--border)]">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-[var(--foreground-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="text-sm font-medium text-[var(--foreground-secondary)]">参数摘要</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {promptResult.sections.map((section) => (
                <span
                  key={section.label}
                  className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--background-secondary)] text-[var(--foreground)] border border-[var(--border)]"
                >
                  <span className="text-[var(--foreground-secondary)] mr-1">{section.label}:</span>
                  {section.value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleCopyChinese}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
            copySuccess === "chinese"
              ? "bg-[var(--success)] text-white"
              : "bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--card-hover)]"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          {copySuccess === "chinese" ? "已复制中文" : "复制中文提示词"}
        </button>

        <button
          onClick={handleCopyEnglish}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
            copySuccess === "english"
              ? "bg-[var(--success)] text-white"
              : "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          {copySuccess === "english" ? "已复制英文" : "复制英文提示词"}
        </button>
      </div>
    </div>
  );
}
