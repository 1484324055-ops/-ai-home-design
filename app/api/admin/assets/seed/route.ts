import { NextRequest, NextResponse } from "next/server";
import { getAdminUserFromRequest } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { defaultPromptAssets } from "@/lib/assets";

const isMissingAssetTableError = (error: unknown) =>
  typeof error === "object" &&
  error !== null &&
  "code" in error &&
  error.code === "P2021";

export async function POST(request: NextRequest) {
  try {
    const adminUser = await getAdminUserFromRequest(request);

    if (!adminUser) {
      return NextResponse.json({ error: "你没有权限导入资产库。" }, { status: 403 });
    }

    await Promise.all(
      defaultPromptAssets.map(({ id, ...asset }) =>
        prisma.promptAsset.upsert({
          where: { id },
          update: asset,
          create: { id, ...asset },
        })
      )
    );

    return NextResponse.json(
      {
        success: true,
        count: defaultPromptAssets.length,
      },
      { status: 200 }
    );
  } catch (error) {
    if (isMissingAssetTableError(error)) {
      return NextResponse.json({ error: "资产表还没有初始化，请先在 Neon 执行建表 SQL。" }, { status: 400 });
    }

    console.error("Seed assets error:", error);
    return NextResponse.json({ error: "导入默认资产失败。" }, { status: 500 });
  }
}
