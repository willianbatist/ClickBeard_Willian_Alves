import { Router } from "express";
import { BarberFactory } from "../factory";
import validateJWT from "../middleware/validateJWT";
import { validateRoleAdm } from "../middleware/barber.middleware";

const barberRouter = Router();

barberRouter.post('/barber', validateJWT, validateRoleAdm, (req, res, next) => {
  BarberFactory().createBarber(req, res, next);
})

export default barberRouter;