"use client";

import { useState } from "react";

interface FeedbackWidgetProps {
  source?: string;
}

export default function FeedbackWidget({ source = "homepage" }: FeedbackWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">("success");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const closeModal = () => {
    if (isSubmitting) {
      return;
    }

    setIsOpen(false);
  };

  const resetForm = () => {
    setContent("");
    setContact("");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, contact, source }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "反馈提交失败");
      }

      setMessageType("success");
      setMessage(data.message || "反馈已收到。");
      resetForm();
      setTimeout(() => setIsOpen(false), 1200);
    } catch (error) {
      setMessageType("error");
      setMessage(error instanceof Error ? error.message : "反馈提交失败，请稍后再试。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-4 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-[1.02] hover:opacity-95 sm:bottom-6 sm:right-6"
      >
        <span>💬</span>
        反馈建议
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/35 p-4 sm:items-center">
          <div className="w-full max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-5 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">告诉我哪里还可以更好</h3>
                <p className="mt-1 text-sm text-[var(--foreground-secondary)]">
                  你可以提 bug、体验问题、想加的功能，或者你最常用的生图流程。
                </p>
              </div>
              <button
                onClick={closeModal}
                className="rounded-lg p-2 text-[var(--foreground-secondary)] transition-colors hover:bg-[var(--background-secondary)] hover:text-[var(--foreground)]"
                aria-label="关闭反馈窗口"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
                  你的建议
                </label>
                <textarea
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                  className="h-32 w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  placeholder="比如：希望支持某个平台的生图格式、某个选项不够细、手机上按钮太小..."
                  required
                  minLength={5}
                  maxLength={1000}
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
                  联系方式（可选）
                </label>
                <input
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  placeholder="微信 / 邮箱 / 其他备注"
                  maxLength={100}
                />
              </div>

              {message && (
                <div
                  className={`rounded-xl px-4 py-3 text-sm ${
                    messageType === "success"
                      ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border border-red-200 bg-red-50 text-red-600"
                  }`}
                >
                  {message}
                </div>
              )}

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-xl border border-[var(--border)] px-4 py-3 text-sm font-medium text-[var(--foreground-secondary)] transition-colors hover:bg-[var(--background-secondary)]"
                >
                  先不提交
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? "提交中..." : "提交反馈"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
