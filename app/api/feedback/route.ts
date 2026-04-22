import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthenticatedUser } from "@/lib/session";

const isMissingFeedbackTableError = (error: unknown) =>
  typeof error === "object" &&
  error !== null &&
  "code" in error &&
  error.code === "P2021";

export async function POST(request: NextRequest) {
  try {
    const authUser = await getAuthenticatedUser(request);

    if (!authUser) {
      return NextResponse.json({ error: "请先登录后再提交反馈。" }, { status: 401 });
    }

    const body = await request.json();
    const content = typeof body.content === "string" ? body.content.trim() : "";
    const contact = typeof body.contact === "string" ? body.contact.trim() : "";
    const source = typeof body.source === "string" ? body.source.trim() : "homepage";

    if (content.length < 5) {
      return NextResponse.json({ error: "反馈内容至少写 5 个字，这样我才更好判断怎么优化。" }, { status: 400 });
    }

    if (content.length > 1000) {
      return NextResponse.json({ error: "反馈内容先控制在 1000 字以内，方便后续整理。" }, { status: 400 });
    }

    if (contact.length > 100) {
      return NextResponse.json({ error: "联系方式太长了，精简一点就行。" }, { status: 400 });
    }

    await prisma.feedback.create({
      data: {
        content,
        contact: contact || null,
        source,
        userId: authUser.userId,
      },
    });

    return NextResponse.json({ message: "反馈已收到，后续优化我会优先参考这类高频建议。" }, { status: 201 });
  } catch (error) {
    if (isMissingFeedbackTableError(error)) {
      return NextResponse.json(
        { error: "反馈表还没有初始化，请先去 Neon 执行一次新的建表 SQL。" },
        { status: 503 }
      );
    }

    console.error("Create feedback error:", error);
    return NextResponse.json({ error: "反馈提交失败，请稍后重试。" }, { status: 500 });
  }
}
