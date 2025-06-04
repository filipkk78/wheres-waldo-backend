/*
  Warnings:

  - You are about to drop the column `finishedAt` on the `Leaderboard` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Leaderboard" DROP COLUMN "finishedAt",
ADD COLUMN     "completionTime" INTEGER NOT NULL DEFAULT 0;
