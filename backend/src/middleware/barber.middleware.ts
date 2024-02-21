import { z } from "zod";
import * as jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

interface CustomRequest extends Request {
  payload?: jwt.JwtPayload;
}

export async function validateRoleAdm(req: CustomRequest, res: Response, next: NextFunction) {
  try {
    const data = req.payload;
    if (data?.payload.role !== "admin") {
      return res.status(400).json({ message: 'access denied' });
    }
    next();
  } catch (error) {
    res.status(400).json({ message: 'invalid data', error });
  }
}