/*
  Warnings:

  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "gameScore" ALTER COLUMN "ponctuation" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "hits" SET DEFAULT 0,
ALTER COLUMN "mistakes" SET DEFAULT 0;
