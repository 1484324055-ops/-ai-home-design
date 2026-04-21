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
      <div className="flex items-center gap-2">
        <button
          onClick={() => router.push("/login")}
          className="px-4 py-2 text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors"
        >
          登录
        </button>
        <button
          onClick={() => router.push("/register")}
          className="px-4 py-2 text-sm bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
        >
          注册
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-[var(--foreground-secondary)]">
        {user.username}
      </span>
      <button
        onClick={handleLogout}
        className="px-3 py-1.5 text-sm border border-[var(--border)] rounded-lg text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--card-hover)] transition-colors"
      >
        退出
      </button>
    </div>
  );
}
