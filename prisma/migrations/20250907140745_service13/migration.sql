/*
  Warnings:

  - Added the required column `isOnMainPage` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Service" ADD COLUMN     "isOnMainPage" BOOLEAN NOT NULL;
