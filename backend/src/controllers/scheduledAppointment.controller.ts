import { IScheduledAppointmentService } from "../interfaces/IScheduledAppointment";
import { NextFunction, Request, Response } from "express";

export default class ScheduledAppointmentController {
  constructor(private service: IScheduledAppointmentService) {
    this.service = service;
  }

  async findScheduledCustomer(req: Request, res: Response, _next: NextFunction) {
    try {
      const { id } = req.params;
      console.log(id);
      const find = await this.service.findScheduledCustomer(id);
      return res.status(200).json(find);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async findScheduledBarber(req: Request, res: Response, _next: NextFunction) {
    try {
      const { id } = req.params;
      const find = await this.service.findScheduledBarber(id);
      return res.status(200).json(find);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async create(req: Request, res: Response, _next: NextFunction) {
    try {
      const scheduled = await this.service.createScheduledAppointment(req.body);
      return res.status(201).json(scheduled);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}