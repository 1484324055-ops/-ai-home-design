import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthenticatedUser } from "@/lib/session";
import type { HistoryPayload } from "@/lib/history";

const requiredStringFields: (keyof HistoryPayload)[] = [
  "title",
  "englishPrompt",
  "chinesePrompt",
  "englishNegative",
  "chineseNegative",
  "spaceId",
  "spaceName",
  "cabinetId",
  "cabinetName",
  "styleId",
  "styleName",
  "materialId",
  "materialName",
  "residenceTypeId",
  "residenceTypeName",
  "cameraAngleId",
  "cameraAngleName",
  "lightingId",
  "lightingName",
];

const ensureAuthenticated = async (request: NextRequest) => {
  const authUser = await getAuthenticatedUser(request);

  if (!authUser) {
    return null;
  }

  return authUser;
};

const isMissingHistoryTableError = (error: unknown) =>
  typeof error === "object" &&
  error !== null &&
  "code" in error &&
  error.code === "P2021";

export async function GET(request: NextRequest) {
  try {
    const authUser = await ensureAuthenticated(request);

    if (!authUser) {
      return NextResponse.json({ error: "请先登录后再查看历史记录。" }, { status: 401 });
    }

    const histories = await prisma.promptHistory.findMany({
      where: { userId: authUser.userId },
      orderBy: [{ isFavorite: "desc" }, { createdAt: "desc" }],
      take: 50,
    });

    return NextResponse.json({ histories }, { status: 200 });
  } catch (error) {
    if (isMissingHistoryTableError(error)) {
      return NextResponse.json(
        {
          histories: [],
          needsSetup: true,
          message: "历史记录表还没有初始化，先去 Neon 执行一次建表 SQL 就可以启用这项功能。",
        },
        { status: 200 }
      );
    }

    console.error("Get history error:", error);
    return NextResponse.json({ error: "读取历史记录失败，请稍后再试。" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const authUser = await ensureAuthenticated(request);

    if (!authUser) {
      return NextResponse.json({ error: "请先登录后再保存历史记录。" }, { status: 401 });
    }

    const body = (await request.json()) as Partial<HistoryPayload>;

    for (const field of requiredStringFields) {
      if (typeof body[field] !== "string" || body[field]?.trim() === "") {
        return NextResponse.json({ error: `缺少必要字段：${field}` }, { status: 400 });
      }
    }

    const history = await prisma.promptHistory.create({
      data: {
        title: body.title!.trim(),
        englishPrompt: body.englishPrompt!.trim(),
        chinesePrompt: body.chinesePrompt!.trim(),
        englishNegative: body.englishNegative!.trim(),
        chineseNegative: body.chineseNegative!.trim(),
        spaceId: body.spaceId!.trim(),
        spaceName: body.spaceName!.trim(),
        cabinetId: body.cabinetId!.trim(),
        cabinetName: body.cabinetName!.trim(),
        styleId: body.styleId!.trim(),
        styleName: body.styleName!.trim(),
        materialId: body.materialId!.trim(),
        materialName: body.materialName!.trim(),
        residenceTypeId: body.residenceTypeId!.trim(),
        residenceTypeName: body.residenceTypeName!.trim(),
        cameraAngleId: body.cameraAngleId!.trim(),
        cameraAngleName: body.cameraAngleName!.trim(),
        lightingId: body.lightingId!.trim(),
        lightingName: body.lightingName!.trim(),
        userId: authUser.userId,
      },
    });

    return NextResponse.json({ history }, { status: 201 });
  } catch (error) {
    if (isMissingHistoryTableError(error)) {
      return NextResponse.json(
        { error: "历史记录表还没有初始化，请先去 Neon 执行一次建表 SQL。" },
        { status: 503 }
      );
    }

    console.error("Create history error:", error);
    return NextResponse.json({ error: "保存历史记录失败，请稍后再试。" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const authUser = await ensureAuthenticated(request);

    if (!authUser) {
      return NextResponse.json({ error: "请先登录后再操作收藏。" }, { status: 401 });
    }

    const body = await request.json();
    const historyId = Number(body.id);
    const isFavorite = Boolean(body.isFavorite);

    if (!Number.isInteger(historyId) || historyId <= 0) {
      return NextResponse.json({ error: "历史记录 ID 无效。" }, { status: 400 });
    }

    const history = await prisma.promptHistory.findFirst({
      where: { id: historyId, userId: authUser.userId },
    });

    if (!history) {
      return NextResponse.json({ error: "没有找到这条历史记录。" }, { status: 404 });
    }

    const updatedHistory = await prisma.promptHistory.update({
      where: { id: historyId },
      data: { isFavorite },
    });

    return NextResponse.json({ history: updatedHistory }, { status: 200 });
  } catch (error) {
    if (isMissingHistoryTableError(error)) {
      return NextResponse.json(
        { error: "历史记录表还没有初始化，请先去 Neon 执行一次建表 SQL。" },
        { status: 503 }
      );
    }

    console.error("Update history error:", error);
    return NextResponse.json({ error: "更新收藏状态失败，请稍后再试。" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const authUser = await ensureAuthenticated(request);

    if (!authUser) {
      return NextResponse.json({ error: "请先登录后再删除历史记录。" }, { status: 401 });
    }

    const historyId = Number(request.nextUrl.searchParams.get("id"));

    if (!Number.isInteger(historyId) || historyId <= 0) {
      return NextResponse.json({ error: "历史记录 ID 无效。" }, { status: 400 });
    }

    const deleteResult = await prisma.promptHistory.deleteMany({
      where: { id: historyId, userId: authUser.userId },
    });

    if (deleteResult.count === 0) {
      return NextResponse.json({ error: "没有找到这条历史记录。" }, { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (isMissingHistoryTableError(error)) {
      return NextResponse.json(
        { error: "历史记录表还没有初始化，请先去 Neon 执行一次建表 SQL。" },
        { status: 503 }
      );
    }

    console.error("Delete history error:", error);
    return NextResponse.json({ error: "删除历史记录失败，请稍后再试。" }, { status: 500 });
  }
}
