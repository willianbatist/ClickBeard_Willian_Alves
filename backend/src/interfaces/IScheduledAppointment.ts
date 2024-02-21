export interface IScheduledAppointment {
  id?: string;
  date: Date;
  user_id: string;
  barber_id: string;
}

export interface IScheduledAppointmentModel {
  create(data: IScheduledAppointment): Promise<IScheduledAppointment | null>;
}

export interface IScheduledAppointmentService {
  createScheduledAppointment(data: IScheduledAppointment): Promise<IScheduledAppointment | null>;
}