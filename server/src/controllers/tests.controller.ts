import { Test } from "@interfaces/tests.interface";
import { TestService } from "@services/tests.service";
import { NextFunction, Request, Response } from 'express';
import { Container } from "typedi";

export class TestController {
  public test = Container.get(TestService);

  public getAllTests = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tests: Test[] = await this.test.getAllTests();

      res.status(200).json({ data: tests, message: 'getAll' });
    } catch (error) {
      next(error);
    }
  };

  public getTestById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const testId: string = req.params.id;
      const test: Test = await this.test.getTestById(testId);

      res.status(200).json({ data: test, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createTest = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const testData: Test = req.body;
      const createTestData: Test = await this.test.createTest(testData);

      res.status(201).json({ data: createTestData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateTest = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const testId: string = req.params.id;
      const userData: Test = req.body;
      const updateUserData: Test = await this.test.updateTest(testId, userData);

      res.status(200).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteTest = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const testId: string = req.params.id;
      const deleteUserData: Test = await this.test.deleteTest(testId);

      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
