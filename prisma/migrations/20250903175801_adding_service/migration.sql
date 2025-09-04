-- CreateTable
CREATE TABLE "public"."Service" (
    "number" SERIAL NOT NULL,
    "id" TEXT,
    "title" TEXT,
    "description" TEXT,
    "features" TEXT[],
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("number")
);
