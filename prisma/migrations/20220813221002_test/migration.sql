/*
  Warnings:

  - You are about to drop the column `countryCorrect` on the `territoriesQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `countryFive` on the `territoriesQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `countryFour` on the `territoriesQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `countryThree` on the `territoriesQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `countryTwo` on the `territoriesQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `territory` on the `territoriesQuiz` table. All the data in the column will be lost.
  - Added the required column `country` to the `territoriesQuiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `territoriesQuiz` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "territoriesQuiz" DROP COLUMN "countryCorrect",
DROP COLUMN "countryFive",
DROP COLUMN "countryFour",
DROP COLUMN "countryThree",
DROP COLUMN "countryTwo",
DROP COLUMN "territory",
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
