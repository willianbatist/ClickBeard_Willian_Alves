import { PrismaClient } from "@prisma/client";
import { IBarber, IBarberModel } from "../interfaces/IBarber";

const prisma = new PrismaClient();

export default class BarberRepository implements IBarberModel {
  async deleteBarber(id: string): Promise<unknown> {
    const del = await prisma.barber.delete({ where: { id } });
    return del;
  }
  async findUnique(id: string): Promise<IBarber | null> {
    const find = await prisma.barber.findUnique({ where: { id } });
    return find;
  }
  async findAll() {
    const find = await prisma.barber.findMany();
    return find;
  }

  async create(data: IBarber) {
    const barber = await prisma.barber.create({ data });
    return barber;
  }
}
