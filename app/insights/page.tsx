"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/layout/Header";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import { useAuth } from "@/app/AuthProvider";

type MetricPeriodKey = "today" | "last7Days" | "last30Days";
type FeedbackStatus = "new" | "in_review" | "done";

interface RankingItem {
  name: string;
  count: number;
}

interface OverviewResponse {
  metrics: {
    totals: {
      users: number;
      generations: number;
      feedback: number;
    };
    today: {
      registrations: number;
      logins: number;
      generations: number;
      feedback: number;
    };
    last7Days: {
      registrations: number;
      logins: number;
      generations: number;
      feedback: number;
    };
    last30Days: {
      registrations: number;
      logins: number;
      generations: number;
      feedback: number;
    };
  };
  rankings: Record<
    MetricPeriodKey,
    {
      spaces: RankingItem[];
      cabinets: RankingItem[];
      styles: RankingItem[];
    }
  >;
  feedbackSummary: Record<FeedbackStatus, number>;
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
    status: FeedbackStatus;
    adminNote?: string | null;
    createdAt: string;
    updatedAt: string;
  }>;
}

interface FeedbackDraft {
  status: FeedbackStatus;
  adminNote: string;
}

const statusMeta: Record<FeedbackStatus, { label: string; className: string }> = {
  new: {
    label: "未处理",
    className: "bg-rose-50 text-rose-600 border border-rose-200",
  },
  in_review: {
    label: "处理中",
    className: "bg-amber-50 text-amber-600 border border-amber-200",
  },
  done: {
    label: "已处理",
    className: "bg-emerald-50 text-emerald-600 border border-emerald-200",
  },
};

const periodMeta: Record<MetricPeriodKey, { label: string; helper: string }> = {
  today: {
    label: "今天",
    helper: "今天的即时数据",
  },
  last7Days: {
    label: "近 7 天",
    helper: "最近一周的变化趋势",
  },
  last30Days: {
    label: "近 30 天",
    helper: "最近一个月的整体情况",
  },
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("zh-CN", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));

const emptyFeedbackDrafts = (items: OverviewResponse["recentFeedback"]) =>
  Object.fromEntries(
    items.map((item) => [
      item.id,
      {
        status: item.status,
        adminNote: item.adminNote || "",
      } satisfies FeedbackDraft,
    ])
  ) as Record<number, FeedbackDraft>;

export default function InsightsPage() {
  const { user, isLoading: authLoading } = useAuth();
  const [data, setData] = useState<OverviewResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState<MetricPeriodKey>("today");
  const [feedbackFilter, setFeedbackFilter] = useState<"all" | FeedbackStatus>("all");
  const [feedbackDrafts, setFeedbackDrafts] = useState<Record<number, FeedbackDraft>>({});
  const [actionMessage, setActionMessage] = useState("");
  const [savingId, setSavingId] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

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
      setFeedbackDrafts(emptyFeedbackDrafts(payload.recentFeedback));
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

  const activeMetrics = data?.metrics[selectedPeriod];
  const activeRankings = data?.rankings[selectedPeriod];

  const feedbackItems = useMemo(() => {
    if (!data) {
      return [];
    }

    if (feedbackFilter === "all") {
      return data.recentFeedback;
    }

    return data.recentFeedback.filter((item) => item.status === feedbackFilter);
  }, [data, feedbackFilter]);

  const metricCards =
    data && activeMetrics
      ? [
          {
            label: `${periodMeta[selectedPeriod].label}注册`,
            value: activeMetrics.registrations,
            secondary: `累计 ${data.metrics.totals.users} 个账号`,
          },
          {
            label: `${periodMeta[selectedPeriod].label}登录`,
            value: data.setup.loginTrackingReady ? activeMetrics.logins : "-",
            secondary: data.setup.loginTrackingReady ? "登录统计已生效" : "登录统计表还未初始化",
          },
          {
            label: `${periodMeta[selectedPeriod].label}生成`,
            value: activeMetrics.generations,
            secondary: `累计 ${data.metrics.totals.generations} 次生成`,
          },
          {
            label: `${periodMeta[selectedPeriod].label}反馈`,
            value: activeMetrics.feedback,
            secondary: `累计 ${data.metrics.totals.feedback} 条反馈`,
          },
        ]
      : [];

  const rankingGroups =
    activeRankings
      ? [
          { title: "热门空间", items: activeRankings.spaces },
          { title: "热门柜体", items: activeRankings.cabinets },
          { title: "热门风格", items: activeRankings.styles },
        ]
      : [];

  const handleDraftChange = (id: number, patch: Partial<FeedbackDraft>) => {
    setFeedbackDrafts((current) => ({
      ...current,
      [id]: {
        ...current[id],
        ...patch,
      },
    }));
  };

  const handleSaveFeedback = async (id: number) => {
    const draft = feedbackDrafts[id];

    if (!draft) {
      return;
    }

    try {
      setSavingId(id);
      setActionMessage("");

      const response = await fetch("/api/admin/feedback", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          status: draft.status,
          adminNote: draft.adminNote,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "保存反馈失败");
      }

      const updatedStatus = payload.feedback.status as FeedbackStatus;
      const updatedAdminNote = payload.feedback.adminNote as string | null;
      const updatedAt = payload.feedback.updatedAt as string;

      setData((current) => {
        if (!current) {
          return current;
        }

        const nextFeedback = current.recentFeedback.map((item) =>
          item.id === id
            ? {
                ...item,
                status: updatedStatus,
                adminNote: updatedAdminNote,
                updatedAt,
              }
            : item
        );

        const previousStatus =
          (current.recentFeedback.find((item) => item.id === id)?.status ?? updatedStatus) as FeedbackStatus;

        const nextSummary: Record<FeedbackStatus, number> = { ...current.feedbackSummary };

        if (previousStatus !== updatedStatus) {
          nextSummary[previousStatus] = Math.max(0, nextSummary[previousStatus] - 1);
          nextSummary[updatedStatus] += 1;
        }

        return {
          ...current,
          recentFeedback: nextFeedback,
          feedbackSummary: nextSummary,
        };
      });

      setActionMessage("反馈状态和备注已保存。");
    } catch (saveError) {
      setActionMessage(saveError instanceof Error ? saveError.message : "保存反馈失败");
    } finally {
      setSavingId(null);
    }
  };

  const handleDeleteFeedback = async (id: number) => {
    const confirmed = window.confirm("确定要删除这条反馈吗？删除后无法恢复。");

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(id);
      setActionMessage("");

      const response = await fetch(`/api/admin/feedback?id=${id}`, {
        method: "DELETE",
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "删除反馈失败");
      }

      setData((current) => {
        if (!current) {
          return current;
        }

        const target = current.recentFeedback.find((item) => item.id === id);
        const nextFeedback = current.recentFeedback.filter((item) => item.id !== id);
        const nextSummary = { ...current.feedbackSummary };

        if (target) {
          nextSummary[target.status] = Math.max(0, nextSummary[target.status] - 1);
        }

        return {
          ...current,
          recentFeedback: nextFeedback,
          feedbackSummary: nextSummary,
          metrics: {
            ...current.metrics,
            totals: {
              ...current.metrics.totals,
              feedback: Math.max(0, current.metrics.totals.feedback - 1),
            },
            today: {
              ...current.metrics.today,
              feedback: target
                ? Math.max(0, current.metrics.today.feedback - 1)
                : current.metrics.today.feedback,
            },
            last7Days: {
              ...current.metrics.last7Days,
              feedback: target
                ? Math.max(0, current.metrics.last7Days.feedback - 1)
                : current.metrics.last7Days.feedback,
            },
            last30Days: {
              ...current.metrics.last30Days,
              feedback: target
                ? Math.max(0, current.metrics.last30Days.feedback - 1)
                : current.metrics.last30Days.feedback,
            },
          },
        };
      });

      setFeedbackDrafts((current) => {
        const next = { ...current };
        delete next[id];
        return next;
      });

      setActionMessage("反馈已删除。");
    } catch (deleteError) {
      setActionMessage(deleteError instanceof Error ? deleteError.message : "删除反馈失败");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[var(--background)]">
        <Header />

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--card-bg)] shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <div className="border-b border-[var(--border)] bg-[linear-gradient(135deg,rgba(59,130,246,0.08),rgba(15,23,42,0.02))] px-6 py-6">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--foreground-secondary)]">
                      Admin Console
                    </p>
                    <h1 className="mt-3 text-3xl font-bold text-[var(--foreground)]">网站数据面板</h1>
                    <p className="mt-2 text-[var(--foreground-secondary)]">
                      这里不只是看数字，也能直接管理反馈、筛选重点问题，并观察最近 7 天和 30 天的趋势。
                    </p>
                  </div>

                  <button
                    onClick={() => void loadOverview()}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] px-4 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    刷新数据
                  </button>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {(Object.keys(periodMeta) as MetricPeriodKey[]).map((periodKey) => (
                    <button
                      key={periodKey}
                      onClick={() => setSelectedPeriod(periodKey)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                        selectedPeriod === periodKey
                          ? "bg-[var(--accent)] text-white shadow-sm"
                          : "border border-[var(--border)] bg-[var(--card-bg)] text-[var(--foreground-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      }`}
                    >
                      {periodMeta[periodKey].label}
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-sm text-[var(--foreground-secondary)]">
                  当前查看：{periodMeta[selectedPeriod].helper}
                </p>
              </div>

              <div className="p-6">
                {authLoading || isLoading ? (
                  <div className="rounded-2xl border border-dashed border-[var(--border)] px-4 py-10 text-center text-sm text-[var(--foreground-secondary)]">
                    正在加载数据面板...
                  </div>
                ) : !user?.isAdmin ? (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-600">
                    当前账号不是管理员账号，暂时不能查看这个页面。
                  </div>
                ) : error ? (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-600">
                    {error}
                  </div>
                ) : (
                  <>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      {metricCards.map((card) => (
                        <div
                          key={card.label}
                          className="rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] px-5 py-5"
                        >
                          <p className="text-sm text-[var(--foreground-secondary)]">{card.label}</p>
                          <p className="mt-3 text-4xl font-bold tracking-tight text-[var(--foreground)]">
                            {card.value}
                          </p>
                          <p className="mt-3 text-xs text-[var(--foreground-secondary)]">{card.secondary}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-4 xl:grid-cols-[1.2fr_1fr]">
                      <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] p-5">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <h2 className="text-lg font-semibold text-[var(--foreground)]">热门选择排行</h2>
                            <p className="mt-1 text-sm text-[var(--foreground-secondary)]">
                              这里能快速看出最近用户最常生成的空间、柜体和风格。
                            </p>
                          </div>
                        </div>

                        <div className="mt-5 grid gap-4 lg:grid-cols-3">
                          {rankingGroups.map((group) => (
                            <div
                              key={group.title}
                              className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-4"
                            >
                              <h3 className="text-base font-semibold text-[var(--foreground)]">
                                {group.title}
                              </h3>

                              <div className="mt-4 space-y-2">
                                {group.items.length ? (
                                  group.items.map((item, index) => (
                                    <div
                                      key={`${group.title}-${item.name}`}
                                      className="flex items-center justify-between rounded-xl bg-[var(--background-secondary)] px-3 py-2"
                                    >
                                      <div className="flex min-w-0 items-center gap-3">
                                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/10 text-xs font-semibold text-[var(--accent)]">
                                          {index + 1}
                                        </span>
                                        <span className="truncate text-sm text-[var(--foreground)]">
                                          {item.name}
                                        </span>
                                      </div>
                                      <span className="text-xs font-medium text-[var(--foreground-secondary)]">
                                        {item.count}
                                      </span>
                                    </div>
                                  ))
                                ) : (
                                  <div className="rounded-xl border border-dashed border-[var(--border)] px-3 py-6 text-center text-sm text-[var(--foreground-secondary)]">
                                    当前时间范围内还没有数据
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] p-5">
                          <h2 className="text-lg font-semibold text-[var(--foreground)]">反馈池状态</h2>
                          <div className="mt-4 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                            {(Object.keys(statusMeta) as FeedbackStatus[]).map((status) => (
                              <div
                                key={status}
                                className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] px-4 py-3"
                              >
                                <div className="flex items-center justify-between gap-3">
                                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusMeta[status].className}`}>
                                    {statusMeta[status].label}
                                  </span>
                                  <span className="text-xl font-semibold text-[var(--foreground)]">
                                    {data?.feedbackSummary[status] ?? 0}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] p-5">
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
                      </div>
                    </div>

                    <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] p-5">
                      <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-5 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <h2 className="text-lg font-semibold text-[var(--foreground)]">反馈管理</h2>
                          <p className="mt-1 text-sm text-[var(--foreground-secondary)]">
                            你可以直接在这里把反馈标记为处理中、已处理，写备注，或者删除无效内容。
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => setFeedbackFilter("all")}
                            className={`rounded-full px-3 py-2 text-sm font-medium transition-all ${
                              feedbackFilter === "all"
                                ? "bg-[var(--foreground)] text-white"
                                : "border border-[var(--border)] bg-[var(--card-bg)] text-[var(--foreground-secondary)]"
                            }`}
                          >
                            全部
                          </button>
                          {(Object.keys(statusMeta) as FeedbackStatus[]).map((status) => (
                            <button
                              key={status}
                              onClick={() => setFeedbackFilter(status)}
                              className={`rounded-full px-3 py-2 text-sm font-medium transition-all ${
                                feedbackFilter === status
                                  ? "bg-[var(--accent)] text-white"
                                  : "border border-[var(--border)] bg-[var(--card-bg)] text-[var(--foreground-secondary)]"
                              }`}
                            >
                              {statusMeta[status].label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {actionMessage && (
                        <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] px-4 py-3 text-sm text-[var(--foreground-secondary)]">
                          {actionMessage}
                        </div>
                      )}

                      <div className="mt-5 space-y-4">
                        {feedbackItems.length ? (
                          feedbackItems.map((feedback) => {
                            const draft = feedbackDrafts[feedback.id] ?? {
                              status: feedback.status,
                              adminNote: feedback.adminNote || "",
                            };

                            return (
                              <article
                                key={feedback.id}
                                className="rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-4"
                              >
                                <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                                  <div className="min-w-0 flex-1">
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
                                      {feedback.contact && (
                                        <>
                                          <span>·</span>
                                          <span>{feedback.contact}</span>
                                        </>
                                      )}
                                    </div>

                                    <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-[var(--foreground)]">
                                      {feedback.content}
                                    </p>
                                  </div>

                                  <div className="w-full xl:w-[320px]">
                                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--background-secondary)] p-4">
                                      <div className="flex items-center justify-between gap-3">
                                        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusMeta[draft.status].className}`}>
                                          {statusMeta[draft.status].label}
                                        </span>
                                        <span className="text-xs text-[var(--foreground-secondary)]">
                                          更新于 {formatDate(feedback.updatedAt)}
                                        </span>
                                      </div>

                                      <div className="mt-4 space-y-3">
                                        <div>
                                          <label className="mb-1 block text-xs font-medium text-[var(--foreground-secondary)]">
                                            状态
                                          </label>
                                          <select
                                            value={draft.status}
                                            onChange={(event) =>
                                              handleDraftChange(feedback.id, {
                                                status: event.target.value as FeedbackStatus,
                                              })
                                            }
                                            className="w-full rounded-xl border border-[var(--border)] bg-[var(--card-bg)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--accent)]"
                                          >
                                            <option value="new">未处理</option>
                                            <option value="in_review">处理中</option>
                                            <option value="done">已处理</option>
                                          </select>
                                        </div>

                                        <div>
                                          <label className="mb-1 block text-xs font-medium text-[var(--foreground-secondary)]">
                                            管理员备注
                                          </label>
                                          <textarea
                                            value={draft.adminNote}
                                            onChange={(event) =>
                                              handleDraftChange(feedback.id, {
                                                adminNote: event.target.value,
                                              })
                                            }
                                            className="h-28 w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--card-bg)] px-3 py-2.5 text-sm text-[var(--foreground)] outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--accent)]"
                                            placeholder="比如：准备加到下一版、已处理、需要继续观察..."
                                          />
                                        </div>

                                        <div className="grid gap-2 sm:grid-cols-2">
                                          <button
                                            onClick={() => void handleSaveFeedback(feedback.id)}
                                            disabled={savingId === feedback.id}
                                            className="min-h-[44px] rounded-xl bg-[var(--accent)] px-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-60"
                                          >
                                            {savingId === feedback.id ? "保存中..." : "保存处理结果"}
                                          </button>

                                          <button
                                            onClick={() => void handleDeleteFeedback(feedback.id)}
                                            disabled={deletingId === feedback.id}
                                            className="min-h-[44px] rounded-xl border border-red-200 px-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                                          >
                                            {deletingId === feedback.id ? "删除中..." : "删除反馈"}
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            );
                          })
                        ) : (
                          <div className="rounded-2xl border border-dashed border-[var(--border)] px-4 py-10 text-center text-sm text-[var(--foreground-secondary)]">
                            当前筛选下还没有反馈。
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
