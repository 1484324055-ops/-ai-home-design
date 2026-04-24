"use client";

import { useAuth } from "@/app/AuthProvider";
import { useRouter } from "next/navigation";

export default function UserMenu() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  if (!user) {
    return (
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          onClick={() => router.push("/login")}
          className="px-3 py-2 text-sm text-[var(--foreground-secondary)] transition-colors hover:text-[var(--foreground)] sm:px-4"
        >
          登录
        </button>
        <button
          onClick={() => router.push("/register")}
          className="rounded-lg bg-[var(--accent)] px-3 py-2 text-sm text-white transition-colors hover:bg-[var(--accent-hover)] sm:px-4"
        >
          注册
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-w-0 flex-wrap items-center justify-end gap-1.5 sm:gap-3">
      {user.isAdmin && (
        <>
          <button
            onClick={() => router.push("/assets")}
            className="rounded-lg border border-[var(--border)] px-2.5 py-1.5 text-xs text-[var(--foreground-secondary)] transition-colors hover:bg-[var(--card-hover)] hover:text-[var(--foreground)] sm:px-3 sm:text-sm"
          >
            资产库
          </button>
          <button
            onClick={() => router.push("/insights")}
            className="rounded-lg border border-[var(--border)] px-2.5 py-1.5 text-xs text-[var(--foreground-secondary)] transition-colors hover:bg-[var(--card-hover)] hover:text-[var(--foreground)] sm:px-3 sm:text-sm"
          >
            <span className="sm:hidden">数据</span>
            <span className="hidden sm:inline">数据面板</span>
          </button>
        </>
      )}
      <span className="hidden max-w-[86px] truncate text-sm text-[var(--foreground-secondary)] sm:inline">
        {user.username}
      </span>
      <button
        onClick={handleLogout}
        className="rounded-lg border border-[var(--border)] px-2.5 py-1.5 text-xs text-[var(--foreground-secondary)] transition-colors hover:bg-[var(--card-hover)] hover:text-[var(--foreground)] sm:px-3 sm:text-sm"
      >
        退出
      </button>
    </div>
  );
}
