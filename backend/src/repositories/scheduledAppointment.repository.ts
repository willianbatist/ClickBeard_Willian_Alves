import { PrismaClient } from "@prisma/client";
import {
  IScheduledAppointment,
  IScheduledAppointmentModel,
} from "../interfaces/IScheduledAppointment";

const prisma = new PrismaClient();

export default class ScheduledAppointmentRepository
  implements IScheduledAppointmentModel
{
  async findScheduledCustomer(user_id: string): Promise<IScheduledAppointment[] | null> {
    const find = await prisma.scheduledAppointment.findMany({ where: { user_id } });
    return find
  }
  async findScheduledBarber(barber_id: string) {
    const find = await prisma.scheduledAppointment.findMany({ where: { barber_id } });
    return find
  }
  
  async create(data: IScheduledAppointment): Promise<IScheduledAppointment | null> {
    const scheduled = await prisma.scheduledAppointment.create({ data });
    return scheduled
  }
}
