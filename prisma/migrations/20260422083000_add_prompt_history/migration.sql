CREATE TABLE "PromptHistory" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "englishPrompt" TEXT NOT NULL,
    "chinesePrompt" TEXT NOT NULL,
    "englishNegative" TEXT NOT NULL,
    "chineseNegative" TEXT NOT NULL,
    "spaceId" TEXT NOT NULL,
    "spaceName" TEXT NOT NULL,
    "cabinetId" TEXT NOT NULL,
    "cabinetName" TEXT NOT NULL,
    "styleId" TEXT NOT NULL,
    "styleName" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "materialName" TEXT NOT NULL,
    "residenceTypeId" TEXT NOT NULL,
    "residenceTypeName" TEXT NOT NULL,
    "cameraAngleId" TEXT NOT NULL,
    "cameraAngleName" TEXT NOT NULL,
    "lightingId" TEXT NOT NULL,
    "lightingName" TEXT NOT NULL,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PromptHistory_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "PromptHistory_userId_createdAt_idx" ON "PromptHistory"("userId", "createdAt");

ALTER TABLE "PromptHistory"
ADD CONSTRAINT "PromptHistory_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "User"("id")
ON DELETE CASCADE ON UPDATE CASCADE;
