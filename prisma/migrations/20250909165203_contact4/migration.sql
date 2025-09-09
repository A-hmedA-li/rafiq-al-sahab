/*
  Warnings:

  - You are about to drop the column `webSite` on the `ContactUS` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."ContactUS" DROP COLUMN "webSite",
ADD COLUMN     "website" TEXT;
