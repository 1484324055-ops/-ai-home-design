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
    <div className="flex max-w-[190px] items-center gap-1 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-1 sm:max-w-none">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`shrink-0 rounded-md px-2 py-1 text-sm transition-all duration-200 ${
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
