import { Router } from "express";
import { ScheduledAppointmentFactory } from "../factory";
import validateJWT from "../middleware/validateJWT";
import { validateCreateScheduledAppointment } from "../middleware/scheduledAppointment.middleware";

const ScheduledAppointmentRouter = Router();

ScheduledAppointmentRouter.post("/scheduledAppointment", validateJWT, validateCreateScheduledAppointment, (req, res, next) => {
  ScheduledAppointmentFactory().create(req, res, next)
})

ScheduledAppointmentRouter.get("/scheduledAppointment/:id", validateJWT, (req, res, next) => {
  ScheduledAppointmentFactory().findScheduledBarber(req, res, next)
})

ScheduledAppointmentRouter.get("/scheduledAppointment/customer/:id", validateJWT, (req, res, next) => {
  ScheduledAppointmentFactory().findScheduledCustomer(req, res, next)
})

export default ScheduledAppointmentRouter;