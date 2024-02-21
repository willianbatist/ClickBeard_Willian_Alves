import { Router } from "express";
import { ScheduledAppointmentFactory } from "../factory";
import validateJWT from "../middleware/validateJWT";
import { validateCreateScheduledAppointment } from "../middleware/scheduledAppointment.middleware";

const ScheduledAppointmentRouter = Router();

ScheduledAppointmentRouter.post("/scheduledAppointment", validateJWT, validateCreateScheduledAppointment, (req, res, next) => {
  ScheduledAppointmentFactory().create(req, res, next)
})

export default ScheduledAppointmentRouter;