/*
  Warnings:

  - You are about to drop the column `levelQuizId` on the `capitalsQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `levelQuizId` on the `flagsQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `levelQuizId` on the `territoriesQuiz` table. All the data in the column will be lost.
  - You are about to drop the `levelsQuizzes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `levelId` to the `capitalsQuiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `levelId` to the `flagsQuiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `levelId` to the `territoriesQuiz` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "capitalsQuiz" DROP CONSTRAINT "capitalsQuiz_levelQuizId_fkey";

-- DropForeignKey
ALTER TABLE "flagsQuiz" DROP CONSTRAINT "flagsQuiz_levelQuizId_fkey";

-- DropForeignKey
ALTER TABLE "levelsQuizzes" DROP CONSTRAINT "levelsQuizzes_levelId_fkey";

-- DropForeignKey
ALTER TABLE "territoriesQuiz" DROP CONSTRAINT "territoriesQuiz_levelQuizId_fkey";

-- AlterTable
ALTER TABLE "capitalsQuiz" DROP COLUMN "levelQuizId",
ADD COLUMN     "levelId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "flagsQuiz" DROP COLUMN "levelQuizId",
ADD COLUMN     "levelId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "territoriesQuiz" DROP COLUMN "levelQuizId",
ADD COLUMN     "levelId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "levelsQuizzes";

-- AddForeignKey
ALTER TABLE "capitalsQuiz" ADD CONSTRAINT "capitalsQuiz_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "territoriesQuiz" ADD CONSTRAINT "territoriesQuiz_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flagsQuiz" ADD CONSTRAINT "flagsQuiz_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
