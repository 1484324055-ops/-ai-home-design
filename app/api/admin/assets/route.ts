import { NextRequest, NextResponse } from "next/server";
import { getAdminUserFromRequest } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import {
  assetCategoryOrder,
  buildAssetLibrary,
  defaultPromptAssets,
  PromptAssetRecord,
  type AssetCategory,
} from "@/lib/assets";

const categorySet = new Set<AssetCategory>(assetCategoryOrder);

const isMissingAssetTableError = (error: unknown) =>
  typeof error === "object" &&
  error !== null &&
  "code" in error &&
  error.code === "P2021";

const normalizeList = (value: unknown) =>
  Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string").map((item) => item.trim()).filter(Boolean)
    : [];

const cleanAssetPayload = (body: Record<string, unknown>, isCreate: boolean) => {
  const category = String(body.category || "").trim() as AssetCategory;

  if (!categorySet.has(category)) {
    throw new Error("请选择有效的资产分类。");
  }

  const id = String(body.id || "").trim();
  const name = String(body.name || "").trim();
  const nameEn = String(body.nameEn || "").trim();
  const promptZh = String(body.promptZh || "").trim();
  const promptEn = String(body.promptEn || "").trim();

  if (isCreate && !id) {
    throw new Error("资产 ID 不能为空。");
  }

  if (id && !/^[a-z0-9][a-z0-9-]*$/.test(id)) {
    throw new Error("资产 ID 只能使用小写英文、数字和连字符，例如 dining-room。");
  }

  if (!name || !nameEn || !promptZh || !promptEn) {
    throw new Error("中文名称、英文名称、中文提示词和英文提示词都需要填写。");
  }

  return {
    id,
    category,
    name,
    nameEn,
    promptZh,
    promptEn,
    applicableSpaceIds: normalizeList(body.applicableSpaceIds),
    applicableStyleIds: normalizeList(body.applicableStyleIds),
    enabled: Boolean(body.enabled),
    sortOrder: Number.isFinite(Number(body.sortOrder)) ? Number(body.sortOrder) : 0,
  };
};

const sortAssets = (assets: PromptAssetRecord[]) =>
  [...assets].sort((left, right) => left.sortOrder - right.sortOrder || left.name.localeCompare(right.name, "zh-CN"));

export async function GET(request: NextRequest) {
  try {
    const adminUser = await getAdminUserFromRequest(request);

    if (!adminUser) {
      return NextResponse.json({ error: "你没有权限管理资产库。" }, { status: 403 });
    }

    const assets = (await prisma.promptAsset.findMany({
      orderBy: [{ category: "asc" }, { sortOrder: "asc" }, { name: "asc" }],
    })) as PromptAssetRecord[];

    return NextResponse.json(
      {
        assets: assets.length > 0 ? sortAssets(assets) : defaultPromptAssets,
        library: assets.length > 0 ? buildAssetLibrary(assets.filter((item) => item.enabled)) : buildAssetLibrary(defaultPromptAssets),
        source: assets.length > 0 ? "database" : "default",
        needsSetup: false,
        needsSeed: assets.length === 0,
      },
      { status: 200 }
    );
  } catch (error) {
    if (isMissingAssetTableError(error)) {
      return NextResponse.json(
        {
          assets: defaultPromptAssets,
          library: buildAssetLibrary(defaultPromptAssets),
          source: "default",
          needsSetup: true,
          needsSeed: true,
          message: "资产表还没有初始化。",
        },
        { status: 200 }
      );
    }

    console.error("Admin assets GET error:", error);
    return NextResponse.json({ error: "读取资产库失败。" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const adminUser = await getAdminUserFromRequest(request);

    if (!adminUser) {
      return NextResponse.json({ error: "你没有权限管理资产库。" }, { status: 403 });
    }

    const body = await request.json();
    const data = cleanAssetPayload(body, true);

    const asset = await prisma.promptAsset.create({ data });

    return NextResponse.json({ asset }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.error("Admin assets POST error:", error);
    return NextResponse.json({ error: "新增资产失败。" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const adminUser = await getAdminUserFromRequest(request);

    if (!adminUser) {
      return NextResponse.json({ error: "你没有权限管理资产库。" }, { status: 403 });
    }

    const body = await request.json();
    const id = String(body.id || "").trim();

    if (!id) {
      return NextResponse.json({ error: "缺少资产 ID。" }, { status: 400 });
    }

    const data = cleanAssetPayload({ ...body, id }, false);
    const asset = await prisma.promptAsset.update({
      where: { id },
      data: {
        category: data.category,
        name: data.name,
        nameEn: data.nameEn,
        promptZh: data.promptZh,
        promptEn: data.promptEn,
        applicableSpaceIds: data.applicableSpaceIds,
        applicableStyleIds: data.applicableStyleIds,
        enabled: data.enabled,
        sortOrder: data.sortOrder,
      },
    });

    return NextResponse.json({ asset }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.error("Admin assets PATCH error:", error);
    return NextResponse.json({ error: "保存资产失败。" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const adminUser = await getAdminUserFromRequest(request);

    if (!adminUser) {
      return NextResponse.json({ error: "你没有权限管理资产库。" }, { status: 403 });
    }

    const id = request.nextUrl.searchParams.get("id")?.trim();

    if (!id) {
      return NextResponse.json({ error: "缺少资产 ID。" }, { status: 400 });
    }

    await prisma.promptAsset.delete({ where: { id } });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Admin assets DELETE error:", error);
    return NextResponse.json({ error: "删除资产失败。" }, { status: 500 });
  }
}
