import { z } from "zod";
import { NextFunction, Request, Response } from "express";
import UserRepository from "../repositories/user.repository";

const userRepository = new UserRepository();

const requestBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export async function validateCreateUser(req: Request, res: Response, next: NextFunction) {
  try {
    requestBodySchema.parse(req.body);
    const { email } = req.body;
    const user = await userRepository.findUser(email);
    if (user) return res.status(400).json({ message: 'email already in use' })
    next();
  } catch (error) {
    res.status(400).json({ message: 'invalid data', error });
  }
}