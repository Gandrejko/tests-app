import { TestController } from "@controllers/tests.controller";
import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';

export class TestRoute implements Routes {
  public path = '/tests';
  public router = Router();
  public test = new TestController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.test.getAllTests);
    this.router.get(`${this.path}/user-tests`, this.test.getUserTests);
    this.router.get(`${this.path}/:id`, this.test.getTestById);
    this.router.post(`${this.path}`, this.test.createTest);
    this.router.put(`${this.path}/:id`, this.test.updateTest);
    this.router.delete(`${this.path}/:id`, this.test.deleteTest);
  }
}