import { Router } from "express";
import { ScheduledAppointmentFactory } from "../factory";
import validateJWT from "../middleware/validateJWT";

const ScheduledAppointmentRouter = Router();

ScheduledAppointmentRouter.post("/scheduledAppointment", validateJWT, (req, res, next) => {
  ScheduledAppointmentFactory().create(req, res, next)
})

export default ScheduledAppointmentRouter;