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
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("两次输入的密码不一致");
      return;
    }

    if (password.length < 6) {
      setError("密码长度至少为6个字符");
      return;
    }

    setIsLoading(true);

    const result = await register(username, password);

    if (result.success) {
      router.push("/login");
    } else {
      setError(result.error || "注册失败");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[var(--accent)] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
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
          <h1 className="text-2xl font-bold text-[var(--foreground)]">
            AI Home Design
          </h1>
          <p className="text-[var(--foreground-secondary)] mt-2">
            全屋定制效果图生成器
          </p>
        </div>

        <div className="bg-[var(--card-bg)] rounded-2xl border border-[var(--border)] p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-[var(--foreground)] mb-6 text-center">
            用户注册
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-1">
                用户名
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder-[var(--foreground-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                placeholder="请输入用户名（3-20个字符）"
                required
                minLength={3}
                maxLength={20}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-1">
                密码
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder-[var(--foreground-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                placeholder="请输入密码（至少6个字符）"
                required
                minLength={6}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-1">
                确认密码
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border)] rounded-lg text-[var(--foreground)] placeholder-[var(--foreground-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all"
                placeholder="请再次输入密码"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-[var(--accent)] text-white rounded-lg font-medium hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? "注册中..." : "注册"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-[var(--foreground-secondary)]">
              已有账号？
              <Link
                href="/login"
                className="text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium transition-colors"
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
