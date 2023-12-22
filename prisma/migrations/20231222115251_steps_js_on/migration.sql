-- AlterTable
ALTER TABLE "recipe" ADD COLUMN     "stepsJSON" JSONB NOT NULL DEFAULT '{}';

-- AlterTable
ALTER TABLE "tags" ALTER COLUMN "name" SET DEFAULT 'No Tag';
