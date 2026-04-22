import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminUserFromRequest } from "@/lib/admin";
import { getShanghaiDayRange, getTrailingShanghaiDayRange } from "@/lib/analytics";

type MetricPeriodKey = "today" | "last7Days" | "last30Days";
type RankingItem = { name: string; count: number };

const FEEDBACK_STATUS_ORDER = ["new", "in_review", "done"] as const;

const isMissingPrismaTableError = (error: unknown) =>
  typeof error === "object" &&
  error !== null &&
  "code" in error &&
  error.code === "P2021";

const isEmailNotificationEnabled = () =>
  Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.SMTP_FROM &&
      process.env.FEEDBACK_NOTIFY_EMAIL
  );

const countByName = (items: Array<{ name: string }>): RankingItem[] => {
  const counts = new Map<string, number>();

  for (const item of items) {
    counts.set(item.name, (counts.get(item.name) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((left, right) => right.count - left.count || left.name.localeCompare(right.name, "zh-CN"))
    .slice(0, 6);
};

const buildPeriodRanges = () => {
  const today = getShanghaiDayRange();
  const last7Days = getTrailingShanghaiDayRange(7);
  const last30Days = getTrailingShanghaiDayRange(30);

  return {
    today,
    last7Days,
    last30Days,
  } satisfies Record<MetricPeriodKey, { start: Date; end: Date }>;
};

const getMetricCounts = async (ranges: Record<MetricPeriodKey, { start: Date; end: Date }>) => {
  const [userCounts, promptCounts, feedbackCounts] = await Promise.all([
    Promise.all(
      Object.entries(ranges).map(([key, range]) =>
        prisma.user
          .count({
            where: { createdAt: { gte: range.start, lt: range.end } },
          })
          .then((count) => [key, count] as const)
      )
    ),
    Promise.all(
      Object.entries(ranges).map(([key, range]) =>
        prisma.promptHistory
          .count({
            where: { createdAt: { gte: range.start, lt: range.end } },
          })
          .then((count) => [key, count] as const)
      )
    ),
    Promise.all(
      Object.entries(ranges).map(([key, range]) =>
        prisma.feedback
          .count({
            where: { createdAt: { gte: range.start, lt: range.end } },
          })
          .then((count) => [key, count] as const)
      )
    ),
  ]);

  return {
    registrations: Object.fromEntries(userCounts) as Record<MetricPeriodKey, number>,
    generations: Object.fromEntries(promptCounts) as Record<MetricPeriodKey, number>,
    feedback: Object.fromEntries(feedbackCounts) as Record<MetricPeriodKey, number>,
  };
};

const getLoginCounts = async (ranges: Record<MetricPeriodKey, { start: Date; end: Date }>) => {
  try {
    const entries = await Promise.all(
      Object.entries(ranges).map(([key, range]) =>
        prisma.loginEvent
          .count({
            where: { createdAt: { gte: range.start, lt: range.end } },
          })
          .then((count) => [key, count] as const)
      )
    );

    return {
      ready: true,
      counts: Object.fromEntries(entries) as Record<MetricPeriodKey, number>,
    };
  } catch (error) {
    if (isMissingPrismaTableError(error)) {
      return {
        ready: false,
        counts: {
          today: 0,
          last7Days: 0,
          last30Days: 0,
        } satisfies Record<MetricPeriodKey, number>,
      };
    }

    throw error;
  }
};

const getRankings = async (ranges: Record<MetricPeriodKey, { start: Date; end: Date }>) => {
  const entries = await Promise.all(
    Object.entries(ranges).map(async ([key, range]) => {
      const records = await prisma.promptHistory.findMany({
        where: { createdAt: { gte: range.start, lt: range.end } },
        select: {
          spaceName: true,
          cabinetName: true,
          styleName: true,
        },
      });

      return [
        key,
        {
          spaces: countByName(records.map((record) => ({ name: record.spaceName }))),
          cabinets: countByName(records.map((record) => ({ name: record.cabinetName }))),
          styles: countByName(records.map((record) => ({ name: record.styleName }))),
        },
      ] as const;
    })
  );

  return Object.fromEntries(entries) as Record<
    MetricPeriodKey,
    {
      spaces: RankingItem[];
      cabinets: RankingItem[];
      styles: RankingItem[];
    }
  >;
};

export async function GET(request: NextRequest) {
  try {
    const adminUser = await getAdminUserFromRequest(request);

    if (!adminUser) {
      return NextResponse.json({ error: "你没有权限查看这个数据面板。" }, { status: 403 });
    }

    const ranges = buildPeriodRanges();

    const [
      totalUsers,
      totalGenerations,
      totalFeedback,
      metrics,
      loginMetrics,
      rankings,
      feedbackStatusGroups,
      recentFeedback,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.promptHistory.count(),
      prisma.feedback.count(),
      getMetricCounts(ranges),
      getLoginCounts(ranges),
      getRankings(ranges),
      prisma.feedback.groupBy({
        by: ["status"],
        _count: {
          status: true,
        },
      }),
      prisma.feedback.findMany({
        orderBy: [{ status: "asc" }, { createdAt: "desc" }],
        take: 30,
        include: {
          user: {
            select: {
              username: true,
            },
          },
        },
      }),
    ]);

    const feedbackStatusCounts = Object.fromEntries(
      FEEDBACK_STATUS_ORDER.map((status) => [
        status,
        feedbackStatusGroups.find((item) => item.status === status)?._count.status ?? 0,
      ])
    ) as Record<(typeof FEEDBACK_STATUS_ORDER)[number], number>;

    return NextResponse.json(
      {
        metrics: {
          totals: {
            users: totalUsers,
            generations: totalGenerations,
            feedback: totalFeedback,
          },
          today: {
            registrations: metrics.registrations.today,
            logins: loginMetrics.counts.today,
            generations: metrics.generations.today,
            feedback: metrics.feedback.today,
          },
          last7Days: {
            registrations: metrics.registrations.last7Days,
            logins: loginMetrics.counts.last7Days,
            generations: metrics.generations.last7Days,
            feedback: metrics.feedback.last7Days,
          },
          last30Days: {
            registrations: metrics.registrations.last30Days,
            logins: loginMetrics.counts.last30Days,
            generations: metrics.generations.last30Days,
            feedback: metrics.feedback.last30Days,
          },
        },
        rankings,
        feedbackSummary: feedbackStatusCounts,
        setup: {
          loginTrackingReady: loginMetrics.ready,
          emailNotificationEnabled: isEmailNotificationEnabled(),
        },
        recentFeedback: recentFeedback.map((item) => ({
          id: item.id,
          username: item.user.username,
          content: item.content,
          contact: item.contact,
          source: item.source,
          status: item.status,
          adminNote: item.adminNote,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        })),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin overview error:", error);
    return NextResponse.json({ error: "读取数据面板失败，请稍后再试。" }, { status: 500 });
  }
}
