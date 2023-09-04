import { NextFunction, Request, Response } from 'express';
import { RequestWithUser } from '@interfaces/auth.interface';

export class AuthController {

  public signUp = async (req: Request, res: Response, next: NextFunction) => {

  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {

  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {

  };
}
