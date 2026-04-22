import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminUserFromRequest } from "@/lib/admin";

const allowedStatuses = new Set(["new", "in_review", "done"]);

export async function PATCH(request: NextRequest) {
  try {
    const adminUser = await getAdminUserFromRequest(request);

    if (!adminUser) {
      return NextResponse.json({ error: "你没有权限管理反馈。" }, { status: 403 });
    }

    const body = await request.json();
    const id = Number(body.id);
    const status = typeof body.status === "string" ? body.status : "";
    const adminNote =
      typeof body.adminNote === "string" ? body.adminNote.trim().slice(0, 2000) : "";

    if (!Number.isInteger(id) || id <= 0) {
      return NextResponse.json({ error: "反馈 ID 无效。" }, { status: 400 });
    }

    if (!allowedStatuses.has(status)) {
      return NextResponse.json({ error: "反馈状态无效。" }, { status: 400 });
    }

    const feedback = await prisma.feedback.update({
      where: { id },
      data: {
        status,
        adminNote: adminNote || null,
      },
    });

    return NextResponse.json(
      {
        feedback: {
          id: feedback.id,
          status: feedback.status,
          adminNote: feedback.adminNote,
          updatedAt: feedback.updatedAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin feedback update error:", error);
    return NextResponse.json({ error: "更新反馈失败，请稍后再试。" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const adminUser = await getAdminUserFromRequest(request);

    if (!adminUser) {
      return NextResponse.json({ error: "你没有权限删除反馈。" }, { status: 403 });
    }

    const id = Number(request.nextUrl.searchParams.get("id"));

    if (!Number.isInteger(id) || id <= 0) {
      return NextResponse.json({ error: "反馈 ID 无效。" }, { status: 400 });
    }

    const result = await prisma.feedback.deleteMany({
      where: { id },
    });

    if (result.count === 0) {
      return NextResponse.json({ error: "没有找到这条反馈。" }, { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Admin feedback delete error:", error);
    return NextResponse.json({ error: "删除反馈失败，请稍后再试。" }, { status: 500 });
  }
}
