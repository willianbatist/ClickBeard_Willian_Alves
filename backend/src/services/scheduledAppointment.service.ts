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
  async findAll(): Promise<IScheduledAppointment[] | null> {
    const find = await this.repository.findAll();
    return find;
  }
  async deleteScheduled(id: string): Promise<unknown> {
    const del = await this.repository.deleteScheduled(id);
    return del;
  }
  async findScheduledCustomer(
    user_id: string
  ): Promise<IScheduledAppointment[] | null> {
    const find = await this.repository.findScheduledCustomer(user_id);
    return find;
  }
  async findScheduledBarber(
    barber_id: string
  ): Promise<IScheduledAppointment[] | null> {
    const find = await this.repository.findScheduledBarber(barber_id);
    return find;
  }

  async createScheduledAppointment(
    data: IScheduledAppointment
  ): Promise<IScheduledAppointment | null> {
    const createScheduled = await this.repository.create(data);
    return createScheduled;
  }
}
