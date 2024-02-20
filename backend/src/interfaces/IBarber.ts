export interface IBarber {
  id?: string;
  name: string;
  age: number;
  dateHire: Date;
  specialties: string[];
  created_at?: Date;
  updated_at?: Date;
}

export interface IBarberModel {
  create(data: IBarber): Promise<IBarber | null>;
}

export interface IBarberService {
  createBarber(data: IBarber): Promise<IBarber | null>;
}