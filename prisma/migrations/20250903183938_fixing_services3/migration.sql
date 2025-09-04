/*
  Warnings:

  - You are about to drop the column `IsActive` on the `Service` table. All the data in the column will be lost.
  - Added the required column `isActive` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Service" DROP COLUMN "IsActive",
ADD COLUMN     "isActive" BOOLEAN NOT NULL;
