/*
  Warnings:

  - You are about to drop the column `done` on the `ContactUS` table. All the data in the column will be lost.
  - Added the required column `isStarred` to the `ContactUS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priority` to the `ContactUS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `ContactUS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ContactUS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."ContactUS" DROP COLUMN "done",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isStarred" BOOLEAN NOT NULL,
ADD COLUMN     "priority" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
