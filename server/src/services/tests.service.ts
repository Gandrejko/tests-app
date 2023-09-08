import { HttpException } from "@exceptions/HttpException";
import { Test, TestModel } from "@models/tests.model";
import { Service } from "typedi";

@Service()
export class TestService {
  public async getAllTests(): Promise<Test[]> {
    return TestModel.find().select('-questions');
  }

  public async getUserTests(userId: string): Promise<Test[]> {
    return TestModel.find({ creatorId: userId }).select('-questions');
  }

  public async getTestById(testId: string): Promise<Test> {
    const test: Test = await TestModel.findOne({ _id: testId });
    if (!test) throw new HttpException(409, "Test doesn't exist");

    return test;
  }

  public async createTest(testData: Test): Promise<Test> {
    return TestModel.create({ ...testData });
  }

  public async updateTest(testId: string, testData: Test): Promise<Test> {
    const updateTestById: Test = await TestModel.findByIdAndUpdate(testId, testData, { new: true });
    if (!updateTestById) throw new HttpException(409, "Test doesn't exist");

    return updateTestById;
  }

  public async deleteTest(testId: string): Promise<Test> {
    const deleteTestById: Test = await TestModel.findByIdAndDelete(testId);
    if (!deleteTestById) throw new HttpException(409, "Test doesn't exist");

    return deleteTestById;
  }
}