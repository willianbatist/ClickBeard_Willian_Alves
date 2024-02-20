import UserRepository from "../repositories/user.repository";
import UserService from "../services/user.service";
import UserController from "../controllers/user.controller";
import BarberRepository from "../repositories/barber.repository";
import BarberService from "../services/barber.service";
import BarberController from "../controllers/barber.controller";

export const UserFactory = () => {
  const repository = new UserRepository();
  const service = new UserService(repository);
  const controller = new UserController(service);

  return controller;
}

export const BarberFactory = () => {
  const repository = new BarberRepository();
  const service = new BarberService(repository);
  const controller = new BarberController(service);

  return controller;
}