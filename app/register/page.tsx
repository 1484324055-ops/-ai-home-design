"use client";

import { useState } from "react";
import { useAuth } from "@/app/AuthProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    if (password !== confirmPassword) {
      setError("两次输入的密码不一致。");
      return;
    }

    if (password.length < 6) {
      setError("密码长度至少需要 6 位。");
      return;
    }

    setIsLoading(true);

    const result = await register(username, password);

    if (result.success) {
      setSuccessMessage(result.message || "注册成功，正在跳转到登录页...");
      setTimeout(() => {
        router.push("/login?registered=1");
      }, 1200);
    } else {
      setError(result.error || "注册失败，请稍后再试。");
    }

    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent)]">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">AI Home Design</h1>
          <p className="mt-2 text-[var(--foreground-secondary)]">全屋定制效果图生成器</p>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-8 shadow-sm">
          <h2 className="mb-6 text-center text-xl font-semibold text-[var(--foreground)]">
            用户注册
          </h2>

          {error && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">用户名</label>
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder-[var(--foreground-secondary)] transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                placeholder="请输入用户名（3-20 个字符）"
                required
                minLength={3}
                maxLength={20}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">密码</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder-[var(--foreground-secondary)] transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                placeholder="请输入密码（至少 6 位）"
                required
                minLength={6}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">确认密码</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] placeholder-[var(--foreground-secondary)] transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                placeholder="请再次输入密码"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-[var(--accent)] py-3 font-medium text-white transition-all hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? "注册中..." : "注册"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-[var(--foreground-secondary)]">
              已有账号？
              <Link
                href="/login"
                className="ml-1 font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
              >
                立即登录
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
