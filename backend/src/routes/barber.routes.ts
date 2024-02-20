import { Router } from "express";
import { BarberFactory } from "../factory";
import validateJWT from "../middleware/validateJWT";

const barberRouter = Router();

barberRouter.post('/barber', validateJWT, (req, res, next) => {
  BarberFactory().createBarber(req, res, next);
})

export default barberRouter;