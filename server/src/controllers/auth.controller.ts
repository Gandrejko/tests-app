import { User } from "@models/users.model";
import { AuthService } from "@services/auth.service";
import { NextFunction, Request, Response } from "express";
import { Container } from "typedi";

export class AuthController {
  public auth = Container.get(AuthService);

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.body;
      const data = await this.auth.signup(userData);

      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  };

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.body;
      const data = await this.auth.login(userData);

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };
}
