import { NextFunction, Request, Response } from 'express';
import { IBarberService } from '../interfaces/IBarber';

export default class BarberController {
  constructor(private service: IBarberService) {
    this.service = service;
  }

  async createBarber(req: Request, res: Response, _next: NextFunction) {
    try {
      const create = await this.service.createBarber(req.body);
      return res.status(201).json(create);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}