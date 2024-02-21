import { Router } from "express";
import { ScheduledAppointmentFactory } from "../factory";

const ScheduledAppointmentRouter = Router();

ScheduledAppointmentRouter.post("/scheduledAppointment", (req, res, next) => {
  ScheduledAppointmentFactory().create(req, res, next)
})

export default ScheduledAppointmentRouter;