import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  buildAssetLibrary,
  defaultAssetLibrary,
  defaultPromptAssets,
  PromptAssetRecord,
} from "@/lib/assets";

const isMissingAssetTableError = (error: unknown) =>
  typeof error === "object" &&
  error !== null &&
  "code" in error &&
  error.code === "P2021";

const normalizeAssets = (assets: PromptAssetRecord[]) =>
  [...assets].sort((left, right) => left.sortOrder - right.sortOrder || left.name.localeCompare(right.name, "zh-CN"));

export async function GET() {
  try {
    const assets = (await prisma.promptAsset.findMany({
      orderBy: [{ category: "asc" }, { sortOrder: "asc" }, { name: "asc" }],
    })) as PromptAssetRecord[];

    if (assets.length === 0) {
      return NextResponse.json(
        {
          library: defaultAssetLibrary,
          assets: defaultPromptAssets,
          source: "default",
          needsSetup: false,
          needsSeed: true,
          message: "资产表已创建，但还没有导入默认资产。",
        },
        { status: 200 }
      );
    }

    const enabledAssets = assets.filter((item) => item.enabled);

    return NextResponse.json(
      {
        library: buildAssetLibrary(enabledAssets),
        assets: normalizeAssets(assets),
        source: "database",
        needsSetup: false,
        needsSeed: false,
      },
      { status: 200 }
    );
  } catch (error) {
    if (isMissingAssetTableError(error)) {
      return NextResponse.json(
        {
          library: defaultAssetLibrary,
          assets: defaultPromptAssets,
          source: "default",
          needsSetup: true,
          needsSeed: true,
          message: "资产表还没有初始化，当前先使用内置资产库。",
        },
        { status: 200 }
      );
    }

    console.error("Load assets error:", error);
    return NextResponse.json(
      {
        library: defaultAssetLibrary,
        assets: defaultPromptAssets,
        source: "default",
        needsSetup: false,
        needsSeed: true,
        message: "读取资产库失败，当前先使用内置资产库。",
      },
      { status: 200 }
    );
  }
}
