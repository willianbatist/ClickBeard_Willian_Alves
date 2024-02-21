import { IScheduledAppointmentService } from "../interfaces/IScheduledAppointment";
import { NextFunction, Request, Response } from "express";

export default class ScheduledAppointmentController {
  constructor(private service: IScheduledAppointmentService) {
    this.service = service;
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