export interface IScheduledAppointment {
  id?: string;
  date: Date;
  user_id: string;
  barber_id: string;
}

export interface IScheduledData {
  user_id: string;
  barber_id: string;
}

export interface IScheduledAppointmentModel {
  create(data: IScheduledAppointment): Promise<IScheduledAppointment | null>;
  findScheduledBarber(id:string): Promise<IScheduledAppointment[] | null>;
  findScheduledCustomer(id:string): Promise<IScheduledAppointment[] | null>;
  deleteScheduled(id: string): Promise<unknown>;
}

export interface IScheduledAppointmentService {
  createScheduledAppointment(data: IScheduledAppointment): Promise<IScheduledAppointment | null>;
  findScheduledBarber(id:string): Promise<IScheduledAppointment[] | null>;
  findScheduledCustomer(id:string): Promise<IScheduledAppointment[] | null>;
  deleteScheduled(id: string): Promise<unknown>;
}