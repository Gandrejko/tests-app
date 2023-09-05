import { User } from "@interfaces/users.interface";
import { AuthService } from "@services/auth.service";
import { NextFunction, Request, Response } from "express";
import { Container } from "typedi";

export class AuthController {
  public auth = Container.get(AuthService);

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.body;
      const token = await this.auth.signup(userData);

      res.status(201).json(token);
    } catch (error) {
      next(error);
    }
  };

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.body;
      const token = await this.auth.login(userData);

      res.status(200).json(token);
    } catch (error) {
      next(error);
    }
  };
}
