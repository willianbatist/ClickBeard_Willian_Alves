import { IBarber, IBarberModel, IBarberService } from "../interfaces/IBarber";

export default class BarberService implements IBarberService {
  constructor(private repository: IBarberModel) {
    this.repository = repository;
  }
  async deleteBarber(id: string): Promise<unknown> {
    const del = await this.repository.deleteBarber(id);
    return del;
  }
  async findUnique(id: string): Promise<IBarber | null> {
    const find = await this.repository.findUnique(id);
    return find;
  }

  async findAll(): Promise<[] | IBarber[]> {
    const find = await this.repository.findAll();
    return find;
  }

  async createBarber(data: IBarber) {
    const barber = await this.repository.create(data);
    return barber;
  }
}
