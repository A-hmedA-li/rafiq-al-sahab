-- CreateTable
CREATE TABLE "public"."healthcheck" (
    "id" SERIAL NOT NULL,
    "ts" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "healthcheck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."test_table" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "test_table_pkey" PRIMARY KEY ("id")
);
