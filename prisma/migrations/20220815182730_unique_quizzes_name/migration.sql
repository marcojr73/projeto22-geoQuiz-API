/*
  Warnings:

  - A unique constraint covering the columns `[country]` on the table `capitalsQuiz` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[country]` on the table `flagsQuiz` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[level]` on the table `levels` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[country]` on the table `territoriesQuiz` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "picture" SET DEFAULT 'http://neoleader.com.br/wp-content/uploads/2015/05/geral_adulto-300x300.png';

-- CreateIndex
CREATE UNIQUE INDEX "capitalsQuiz_country_key" ON "capitalsQuiz"("country");

-- CreateIndex
CREATE UNIQUE INDEX "flagsQuiz_country_key" ON "flagsQuiz"("country");

-- CreateIndex
CREATE UNIQUE INDEX "levels_level_key" ON "levels"("level");

-- CreateIndex
CREATE UNIQUE INDEX "territoriesQuiz_country_key" ON "territoriesQuiz"("country");
