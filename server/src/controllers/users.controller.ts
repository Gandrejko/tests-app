import { User } from "@interfaces/users.interface";
import { UserService } from "@services/users.service";
import { NextFunction, Request, Response } from 'express';
import { Container } from "typedi";

export class UserController {
  public user = Container.get(UserService);

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {

  };

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {

  };

  public updateUser = async (req: Request, res: Response, next: NextFunction) => {

  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {

  };
}
