import { NextFunction, Request, Response } from 'express';
import { IBarberService } from '../interfaces/IBarber';

export default class BarberController {
  constructor(private service: IBarberService) {
    this.service = service;
  }

  async findUnique(req: Request, res: Response, _next: NextFunction) {
    try {
      const { id } = req.params;
      console.log(id);
      const find = await this.service.findUnique(id);
      return res.status(200).json(find);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async findAll(req: Request, res: Response, _next: NextFunction) {
    try {
      const find = await this.service.findAll();
      return res.status(200).json(find);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
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