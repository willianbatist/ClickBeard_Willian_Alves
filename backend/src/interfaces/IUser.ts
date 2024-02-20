export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  created_at?: Date;
}

export interface IUserToken {
  email?: string;
  password?: string;
  role?: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IUserModel {
  findUser(email: string): Promise<IUser | null>;
  createUser(data: IUser): Promise<IUser | null>;
}

export interface IUserService {
  // findUser(email: string): Promise<IUser | null>;
  createUser(data: IUser): Promise<IUser | null>;
  login(data: ILogin): Promise<unknown>;
}