-- CreateTable
CREATE TABLE "barbers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "dateHire" TIMESTAMP(3) NOT NULL,
    "specialties" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "barbers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scheduled_appointment" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "barber_id" TEXT NOT NULL,

    CONSTRAINT "scheduled_appointment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "scheduled_appointment" ADD CONSTRAINT "scheduled_appointment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduled_appointment" ADD CONSTRAINT "scheduled_appointment_barber_id_fkey" FOREIGN KEY ("barber_id") REFERENCES "barbers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
