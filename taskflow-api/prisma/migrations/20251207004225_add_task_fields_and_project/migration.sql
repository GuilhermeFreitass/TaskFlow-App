-- CreateEnum
CREATE TYPE "TaskPriority" AS ENUM ('Alta', 'Media', 'Normal');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('Pendente', 'EmProgresso', 'Concluido', 'Cancelado');

-- AlterTable
ALTER TABLE "task" ADD COLUMN     "dueDate" TIMESTAMP(3),
ADD COLUMN     "isImportant" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priority" "TaskPriority" NOT NULL DEFAULT 'Normal',
ADD COLUMN     "projectId" INTEGER,
ADD COLUMN     "status" "TaskStatus" NOT NULL DEFAULT 'Pendente',
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- Migrate existing data: Update status for completed tasks
UPDATE "task" SET "status" = 'Concluido' WHERE "done" = true;

-- CreateTable
CREATE TABLE "project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
