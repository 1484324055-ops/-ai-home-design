"use client";

import { useTheme } from "@/app/ThemeProvider";

const themes = [
  { id: "light" as const, name: "日间", icon: "☀️" },
  { id: "dark" as const, name: "深夜", icon: "🌙" },
  { id: "wood" as const, name: "原木", icon: "🪵" },
  { id: "luxury" as const, name: "深色", icon: "🌃" },
  { id: "minimal" as const, name: "黑白", icon: "⬛" },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1 bg-[var(--card-bg)] rounded-lg p-1 border border-[var(--border)]">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`px-2 py-1 rounded-md text-sm transition-all duration-200 ${
            theme === t.id
              ? "bg-[var(--accent)] text-white shadow-sm"
              : "text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--card-hover)]"
          }`}
          title={t.name}
        >
          <span className="mr-1">{t.icon}</span>
          <span className="hidden sm:inline">{t.name}</span>
        </button>
      ))}
    </div>
  );
}
