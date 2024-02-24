import {
  IScheduledAppointment,
  IScheduledAppointmentModel,
  IScheduledAppointmentService,
} from "../interfaces/IScheduledAppointment";

export default class ScheduledAppointmentService
  implements IScheduledAppointmentService
{
  constructor(private repository: IScheduledAppointmentModel) {
    this.repository = repository;
  }
  async findScheduledBarber(id: string): Promise<IScheduledAppointment[] | null> {
    const find = await this.repository.findScheduledBarber(id);
    return find
  }

  async createScheduledAppointment(
    data: IScheduledAppointment
  ): Promise<IScheduledAppointment | null> {
    const createScheduled = await this.repository.create(data);
    return createScheduled
  }
}
