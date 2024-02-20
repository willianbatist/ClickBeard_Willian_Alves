import { Router } from "express";
import { UserFactory } from "../factory";
import { validateCreateUser } from "../middleware/user.middleware";

const userRouter = Router();

userRouter.post('/user', validateCreateUser, (req, res, next) => {
  UserFactory().create(req, res, next);
});

export default userRouter;