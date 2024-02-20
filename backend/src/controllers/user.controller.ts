import { NextFunction, Request, Response } from 'express';
import { IUserService } from '../interfaces/IUser';

export default class UserController {
  constructor(private service: IUserService) {
    this.service = service;
  }

  async create(req: Request, res: Response, _next: NextFunction) {
    try {
      const createUser = await this.service.createUser(req.body)
      return res.status(201).json(createUser);
    } catch (error) {
      res.status(400).json("error create user em controller");
    }
  }
}
