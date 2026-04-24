"use client";

import ThemeSwitcher from "./ThemeSwitcher";
import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-3 py-2 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-2 sm:h-16 sm:flex-nowrap sm:py-0">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]">
              <svg
                className="h-5 w-5 text-white"
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
            <h1 className="truncate text-base font-bold text-[var(--foreground)] sm:text-lg">
              AI Home Design
            </h1>
          </div>

          <div className="flex w-full min-w-0 flex-wrap items-center justify-between gap-2 sm:w-auto sm:justify-end sm:gap-4">
            <ThemeSwitcher />
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
