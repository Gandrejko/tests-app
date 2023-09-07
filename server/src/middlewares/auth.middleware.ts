import { SECRET_KEY } from "@config";
import { UserModel } from "@models/users.model";
import { DataStoredInToken } from "@services/auth.service";
import { HttpException } from "@exceptions/HttpException";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const AuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
      const { id } = verify(token, SECRET_KEY) as DataStoredInToken;
      const findUser = await UserModel.findById(id);

      if (findUser) {
        next();
      } else {
        next(new HttpException(401, 'User unauthorized'));
      }
    } else {
      next(new HttpException(401, 'User unauthorized'));
    }
  } catch (error) {
    next(new HttpException(401, 'User unauthorized'));
  }
};