/*
  Warnings:

  - You are about to drop the column `countryCorrect` on the `flagsQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `countryFive` on the `flagsQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `countryFour` on the `flagsQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `countryThree` on the `flagsQuiz` table. All the data in the column will be lost.
  - You are about to drop the column `countryTwo` on the `flagsQuiz` table. All the data in the column will be lost.
  - Added the required column `country` to the `flagsQuiz` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "flagsQuiz" DROP COLUMN "countryCorrect",
DROP COLUMN "countryFive",
DROP COLUMN "countryFour",
DROP COLUMN "countryThree",
DROP COLUMN "countryTwo",
ADD COLUMN     "country" TEXT NOT NULL;
