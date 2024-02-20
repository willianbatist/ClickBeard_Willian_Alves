import { Router } from "express";
import { BarberFactory } from "../factory";

const barberRouter = Router();

barberRouter.post('/barber', (req, res, next) => {
  BarberFactory().createBarber(req, res, next);
})

export default barberRouter;