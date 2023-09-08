import { TestController } from "@controllers/tests.controller";
import { Router } from 'express';
import { AuthMiddleware } from "@middlewares/auth.middleware";
import { Routes } from "server";

export class TestRoute implements Routes {
  public path = '/tests';
  public router = Router();
  public test = new TestController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.test.getAllTests);
    this.router.get(`${this.path}/user-tests`, AuthMiddleware, this.test.getUserTests);
    this.router.get(`${this.path}/:id`, AuthMiddleware, this.test.getTestById);
    this.router.post(`${this.path}`, AuthMiddleware, this.test.createTest);
    this.router.put(`${this.path}/:id`, AuthMiddleware, this.test.updateTest);
    this.router.delete(`${this.path}/:id`, AuthMiddleware, this.test.deleteTest);
  }
}