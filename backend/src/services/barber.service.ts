import { IBarber, IBarberModel, IBarberService } from "../interfaces/IBarber";

export default class BarberService implements IBarberService {
  constructor(private repository: IBarberModel) {
    this.repository = repository;
  }

  async findAll(): Promise<[] | IBarber[]> {
    const find = await this.repository.findAll();
    return find
  }

  async createBarber(data: IBarber) {
    const barber = await this.repository.create(data);
    return barber
  }
}