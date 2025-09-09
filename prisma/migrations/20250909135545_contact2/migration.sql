-- CreateTable
CREATE TABLE "public"."ContactUS" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "roleInOrg" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companySize" TEXT,
    "phone" TEXT NOT NULL,
    "webSite" TEXT,
    "annualRevenue" TEXT,
    "projectBudget" TEXT,
    "message" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,

    CONSTRAINT "ContactUS_pkey" PRIMARY KEY ("id")
);
