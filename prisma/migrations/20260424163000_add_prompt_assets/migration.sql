CREATE TABLE "PromptAsset" (
  "id" TEXT NOT NULL,
  "category" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "nameEn" TEXT NOT NULL,
  "promptZh" TEXT NOT NULL,
  "promptEn" TEXT NOT NULL,
  "applicableSpaceIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "applicableStyleIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "enabled" BOOLEAN NOT NULL DEFAULT true,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "PromptAsset_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "PromptAsset_category_sortOrder_idx" ON "PromptAsset"("category", "sortOrder");
CREATE INDEX "PromptAsset_enabled_category_idx" ON "PromptAsset"("enabled", "category");
