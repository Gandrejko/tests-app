import { Router } from 'express';
import { AuthController } from '@controllers/auth.controller';
import { Routes } from "server";

export class AuthRoute implements Routes {
  public path = '/';
  public router = Router();
  public auth = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}register`, this.auth.signUp);
    this.router.post(`${this.path}login`, this.auth.login);
  }
}
