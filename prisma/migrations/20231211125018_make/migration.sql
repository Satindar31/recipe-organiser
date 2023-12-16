/*
  Warnings:

  - You are about to drop the column `stepsId` on the `recipe` table. All the data in the column will be lost.
  - You are about to drop the `steps` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `instructions` to the `recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterSequence
ALTER SEQUENCE "recipe_id_seq" MAXVALUE 9223372036854775807;

-- AlterSequence
ALTER SEQUENCE "tags_id_seq" MAXVALUE 9223372036854775807;

-- DropForeignKey
ALTER TABLE "recipe" DROP CONSTRAINT "recipe_stepsId_fkey";

-- DropIndex
DROP INDEX "recipe_stepsId_key";

-- AlterTable
ALTER TABLE "recipe" DROP COLUMN "stepsId";
ALTER TABLE "recipe" ADD COLUMN     "instructions" STRING NOT NULL;

-- DropTable
DROP TABLE "steps";
