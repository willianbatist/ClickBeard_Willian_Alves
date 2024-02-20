import { PrismaClient } from '@prisma/client';
import { IBarber, IBarberModel } from '../interfaces/IBarber';

const prisma = new PrismaClient();

export default class BarberRepository implements IBarberModel {

  async create(data: IBarber) {
    const barber = await prisma.barber.create({ data });
    return barber
  }
}