import { Test } from "@models/tests.model";
import { TestService } from "@services/tests.service";
import { NextFunction, Request, Response } from "express";
import { Container } from "typedi";
import jwt_decode from "jwt-decode";

export interface DataStoredInToken {
  id: string;
  username: string;
}

export class TestController {
  public test = Container.get(TestService);

  public getAllTests = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tests: Test[] = await this.test.getAllTests();

      res.status(200).json(tests);
    } catch (error) {
      next(error);
    }
  };

  public getUserTests = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      const { id }: DataStoredInToken = jwt_decode(token);

      const tests: Test[] = await this.test.getUserTests(id);

      res.status(200).json(tests);
    } catch (error) {
      next(error);
    }
  };

  public getTestById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const testId: string = req.params.id;
      const test: Test = await this.test.getTestById(testId);

      res.status(200).json(test);
    } catch (error) {
      next(error);
    }
  };

  public createTest = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const testData: Test = req.body;
      const token = req.headers.authorization?.split(' ')[1];
      const { id }: DataStoredInToken = jwt_decode(token);
      const createTestData: Test = await this.test.createTest({ ...testData, creatorId: id });

      res.status(201).json(createTestData);
    } catch (error) {
      next(error);
    }
  };

  public updateTest = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const testId: string = req.params.id;
      const userData: Test = req.body;
      const updateUserData: Test = await this.test.updateTest(testId, userData);

      res.status(200).json(updateUserData);
    } catch (error) {
      next(error);
    }
  };

  public deleteTest = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const testId: string = req.params.id;
      const deleteUserData: Test = await this.test.deleteTest(testId);

      res.status(200).json(deleteUserData);
    } catch (error) {
      next(error);
    }
  };
}
