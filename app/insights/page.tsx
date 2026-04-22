"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import { useAuth } from "@/app/AuthProvider";

interface OverviewResponse {
  metrics: {
    totalUsers: number;
    todayRegistrations: number;
    totalLogins: number;
    todayLogins: number;
    totalGenerations: number;
    todayGenerations: number;
    totalFeedback: number;
    todayFeedback: number;
  };
  setup: {
    loginTrackingReady: boolean;
    emailNotificationEnabled: boolean;
  };
  recentFeedback: Array<{
    id: number;
    username: string;
    content: string;
    contact?: string | null;
    source?: string | null;
    createdAt: string;
  }>;
}

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("zh-CN", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));

export default function InsightsPage() {
  const { user, isLoading: authLoading } = useAuth();
  const [data, setData] = useState<OverviewResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const loadOverview = async () => {
    try {
      setIsLoading(true);
      setError("");

      const response = await fetch("/api/admin/overview");
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "读取数据失败");
      }

      setData(payload);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "读取数据失败");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!authLoading && user?.isAdmin) {
      void loadOverview();
    }
  }, [authLoading, user?.isAdmin]);

  const cards = data
    ? [
        {
          label: "今日注册",
          value: data.metrics.todayRegistrations,
          secondary: `累计 ${data.metrics.totalUsers} 个账号`,
        },
        {
          label: "今日登录",
          value: data.setup.loginTrackingReady ? data.metrics.todayLogins : "-",
          secondary: data.setup.loginTrackingReady
            ? `累计 ${data.metrics.totalLogins} 次登录`
            : "登录统计表还未初始化",
        },
        {
          label: "今日生成",
          value: data.metrics.todayGenerations,
          secondary: `累计 ${data.metrics.totalGenerations} 次生成`,
        },
        {
          label: "今日反馈",
          value: data.metrics.todayFeedback,
          secondary: `累计 ${data.metrics.totalFeedback} 条反馈`,
        },
      ]
    : [];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[var(--background)]">
        <Header />

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card-bg)] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--foreground-secondary)]">
                    Admin Overview
                  </p>
                  <h1 className="mt-2 text-3xl font-bold text-[var(--foreground)]">网站数据面板</h1>
                  <p className="mt-2 text-[var(--foreground-secondary)]">
                    这里给你看每天的基础数据，包括注册、登录、生成和反馈情况。
                  </p>
                </div>

                <button
                  onClick={() => void loadOverview()}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  刷新数据
                </button>
              </div>

              {authLoading || isLoading ? (
                <div className="mt-6 rounded-2xl border border-dashed border-[var(--border)] px-4 py-8 text-center text-sm text-[var(--foreground-secondary)]">
                  正在加载数据面板...
                </div>
              ) : !user?.isAdmin ? (
                <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-600">
                  当前账号不是管理员账号，暂时不能查看这个页面。
                </div>
              ) : error ? (
                <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-600">
                  {error}
                </div>
              ) : (
                <>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {cards.map((card) => (
                      <div
                        key={card.label}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] px-5 py-4"
                      >
                        <p className="text-sm text-[var(--foreground-secondary)]">{card.label}</p>
                        <p className="mt-2 text-3xl font-bold text-[var(--foreground)]">{card.value}</p>
                        <p className="mt-2 text-xs text-[var(--foreground-secondary)]">{card.secondary}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] p-4">
                      <h2 className="text-lg font-semibold text-[var(--foreground)]">当前配置状态</h2>
                      <div className="mt-4 space-y-3 text-sm">
                        <div className="flex items-center justify-between gap-3 rounded-xl bg-[var(--card-bg)] px-4 py-3">
                          <span className="text-[var(--foreground-secondary)]">反馈邮件通知</span>
                          <span className={data?.setup.emailNotificationEnabled ? "text-emerald-600" : "text-amber-600"}>
                            {data?.setup.emailNotificationEnabled ? "已启用" : "未配置"}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-3 rounded-xl bg-[var(--card-bg)] px-4 py-3">
                          <span className="text-[var(--foreground-secondary)]">登录统计</span>
                          <span className={data?.setup.loginTrackingReady ? "text-emerald-600" : "text-amber-600"}>
                            {data?.setup.loginTrackingReady ? "已启用" : "待初始化"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] p-4">
                      <h2 className="text-lg font-semibold text-[var(--foreground)]">你会怎么收到反馈</h2>
                      <div className="mt-4 space-y-3 text-sm leading-6 text-[var(--foreground-secondary)]">
                        <p>现在的反馈会先保存到数据库，你在这个页面里就能看到最近反馈内容。</p>
                        <p>如果你后面补好邮箱发信配置，新的反馈也可以自动推送到你的邮箱。</p>
                        <p>所以最稳的方式是：站内数据面板负责查看全量记录，邮箱负责第一时间提醒你有新反馈。</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h2 className="text-lg font-semibold text-[var(--foreground)]">最近反馈</h2>
                        <p className="mt-1 text-sm text-[var(--foreground-secondary)]">
                          这里会显示最近提交上来的反馈内容，方便你快速判断下一步优化方向。
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      {data?.recentFeedback.length ? (
                        data.recentFeedback.map((feedback) => (
                          <article
                            key={feedback.id}
                            className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-4"
                          >
                            <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--foreground-secondary)]">
                              <span>{feedback.username}</span>
                              <span>·</span>
                              <span>{formatDate(feedback.createdAt)}</span>
                              {feedback.source && (
                                <>
                                  <span>·</span>
                                  <span>{feedback.source}</span>
                                </>
                              )}
                            </div>
                            <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-[var(--foreground)]">
                              {feedback.content}
                            </p>
                            {feedback.contact && (
                              <p className="mt-3 text-xs text-[var(--foreground-secondary)]">
                                联系方式：{feedback.contact}
                              </p>
                            )}
                          </article>
                        ))
                      ) : (
                        <div className="rounded-2xl border border-dashed border-[var(--border)] px-4 py-8 text-center text-sm text-[var(--foreground-secondary)]">
                          还没有收到反馈。
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
