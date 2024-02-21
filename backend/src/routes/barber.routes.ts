import { Router } from "express";
import { BarberFactory } from "../factory";
import validateJWT from "../middleware/validateJWT";
import { validateCreateBarber, validateRoleAdm } from "../middleware/barber.middleware";

const barberRouter = Router();

barberRouter.post('/barber', validateJWT, validateRoleAdm, validateCreateBarber, (req, res, next) => {
  BarberFactory().createBarber(req, res, next);
})

barberRouter.get('/barber', validateJWT, (req, res, next) => {
  BarberFactory().findAll(req, res, next);
})

export default barberRouter;