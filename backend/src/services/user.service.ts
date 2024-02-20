import { IUser, IUserModel, IUserService } from "../interfaces/IUser";
import bcrypt from "bcrypt";

export default class UserService implements IUserService {
  constructor(private repository: IUserModel) {
    this.repository = repository;
  }

  async createUser(data: IUser): Promise<IUser | null> {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(data.password, salt);
    const createdUser = await this.repository.createUser({
      name: data.name,
      email: data.email,
      password: hashPassword,
      role: "customer",
    });
    return createdUser;
  }
  
}