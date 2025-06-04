/*
  Warnings:

  - You are about to drop the column `completionTime` on the `Leaderboard` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Leaderboard" DROP COLUMN "completionTime",
ADD COLUMN     "completionInterval" TEXT NOT NULL DEFAULT '0',
ADD COLUMN     "completionTimeMs" INTEGER NOT NULL DEFAULT 0;
