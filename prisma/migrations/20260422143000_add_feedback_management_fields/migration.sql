ALTER TABLE "Feedback"
ADD COLUMN "status" TEXT NOT NULL DEFAULT 'new',
ADD COLUMN "adminNote" TEXT,
ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

CREATE INDEX "Feedback_status_createdAt_idx" ON "Feedback"("status", "createdAt");
