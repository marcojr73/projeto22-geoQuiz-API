-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "hits" INTEGER NOT NULL,
    "mistakes" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gameScore" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "ponctuation" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "gameScore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "capitalsQuiz" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "capital" TEXT NOT NULL,
    "cityTwo" TEXT NOT NULL,
    "cityThree" TEXT NOT NULL,
    "cityFour" TEXT NOT NULL,
    "cityFive" TEXT NOT NULL,
    "levelQuizId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "capitalsQuiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "territoriesQuiz" (
    "id" SERIAL NOT NULL,
    "territory" TEXT NOT NULL,
    "countryCorrect" TEXT NOT NULL,
    "countryTwo" TEXT NOT NULL,
    "countryThree" TEXT NOT NULL,
    "countryFour" TEXT NOT NULL,
    "countryFive" TEXT NOT NULL,
    "levelQuizId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "territoriesQuiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flagsQuiz" (
    "id" SERIAL NOT NULL,
    "flag" TEXT NOT NULL,
    "countryCorrect" TEXT NOT NULL,
    "countryTwo" TEXT NOT NULL,
    "countryThree" TEXT NOT NULL,
    "countryFour" TEXT NOT NULL,
    "countryFive" TEXT NOT NULL,
    "levelQuizId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "flagsQuiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "levels" (
    "id" SERIAL NOT NULL,
    "level" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "levels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "levelsQuizzes" (
    "id" SERIAL NOT NULL,
    "quizId" INTEGER NOT NULL,
    "levelId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "levelsQuizzes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "levelsQuizzes_quizId_key" ON "levelsQuizzes"("quizId");

-- CreateIndex
CREATE UNIQUE INDEX "levelsQuizzes_levelId_key" ON "levelsQuizzes"("levelId");

-- AddForeignKey
ALTER TABLE "gameScore" ADD CONSTRAINT "gameScore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "capitalsQuiz" ADD CONSTRAINT "capitalsQuiz_levelQuizId_fkey" FOREIGN KEY ("levelQuizId") REFERENCES "levelsQuizzes"("levelId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "territoriesQuiz" ADD CONSTRAINT "territoriesQuiz_levelQuizId_fkey" FOREIGN KEY ("levelQuizId") REFERENCES "levelsQuizzes"("levelId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flagsQuiz" ADD CONSTRAINT "flagsQuiz_levelQuizId_fkey" FOREIGN KEY ("levelQuizId") REFERENCES "levelsQuizzes"("levelId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "levelsQuizzes" ADD CONSTRAINT "levelsQuizzes_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
