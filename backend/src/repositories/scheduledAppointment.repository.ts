import { PrismaClient } from "@prisma/client";
import {
  IScheduledAppointment,
  IScheduledAppointmentModel,
} from "../interfaces/IScheduledAppointment";

const prisma = new PrismaClient();

export default class ScheduledAppointmentRepository
  implements IScheduledAppointmentModel
{
  async findScheduledBarber(barber_id: string) {
    const find = await prisma.scheduledAppointment.findMany({ where: { barber_id } });
    return find
  }
  
  async create(data: IScheduledAppointment): Promise<IScheduledAppointment | null> {
    const scheduled = await prisma.scheduledAppointment.create({ data });
    return scheduled
  }
}
