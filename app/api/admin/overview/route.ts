import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminUserFromRequest } from "@/lib/admin";
import { getShanghaiDayRange } from "@/lib/analytics";

const isMissingLoginEventTableError = (error: unknown) =>
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

export async function GET(request: NextRequest) {
  try {
    const adminUser = await getAdminUserFromRequest(request);

    if (!adminUser) {
      return NextResponse.json({ error: "你没有权限查看这个数据面板。" }, { status: 403 });
    }

    const { start, end } = getShanghaiDayRange();

    const [
      totalUsers,
      todayRegistrations,
      totalGenerations,
      todayGenerations,
      totalFeedback,
      todayFeedback,
      recentFeedback,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.user.count({ where: { createdAt: { gte: start, lt: end } } }),
      prisma.promptHistory.count(),
      prisma.promptHistory.count({ where: { createdAt: { gte: start, lt: end } } }),
      prisma.feedback.count(),
      prisma.feedback.count({ where: { createdAt: { gte: start, lt: end } } }),
      prisma.feedback.findMany({
        orderBy: { createdAt: "desc" },
        take: 12,
        include: {
          user: {
            select: {
              username: true,
            },
          },
        },
      }),
    ]);

    let totalLogins = 0;
    let todayLogins = 0;
    let loginTrackingReady = true;

    try {
      [totalLogins, todayLogins] = await Promise.all([
        prisma.loginEvent.count(),
        prisma.loginEvent.count({ where: { createdAt: { gte: start, lt: end } } }),
      ]);
    } catch (error) {
      if (isMissingLoginEventTableError(error)) {
        loginTrackingReady = false;
      } else {
        throw error;
      }
    }

    return NextResponse.json(
      {
        metrics: {
          totalUsers,
          todayRegistrations,
          totalLogins,
          todayLogins,
          totalGenerations,
          todayGenerations,
          totalFeedback,
          todayFeedback,
        },
        setup: {
          loginTrackingReady,
          emailNotificationEnabled: isEmailNotificationEnabled(),
        },
        recentFeedback: recentFeedback.map((item) => ({
          id: item.id,
          username: item.user.username,
          content: item.content,
          contact: item.contact,
          source: item.source,
          createdAt: item.createdAt,
        })),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin overview error:", error);
    return NextResponse.json({ error: "读取数据面板失败，请稍后再试。" }, { status: 500 });
  }
}
