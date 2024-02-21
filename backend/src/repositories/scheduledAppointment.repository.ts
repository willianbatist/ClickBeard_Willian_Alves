import { PrismaClient } from "@prisma/client";
import {
  IScheduledAppointment,
  IScheduledAppointmentModel,
} from "../interfaces/IScheduledAppointment";

const prisma = new PrismaClient();

export default class ScheduledAppointmentRepository
  implements IScheduledAppointmentModel
{
  
  async create(data: IScheduledAppointment): Promise<IScheduledAppointment | null> {
    const scheduled = await prisma.scheduledAppointment.create({ data });
    return scheduled
  }
}
