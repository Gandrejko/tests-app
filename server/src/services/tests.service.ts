import { HttpException } from "@/exeptions/HttpExeption";
import { Test } from "@interfaces/tests.interface";
import { TestModel } from "@models/tests.model";
import { Service } from "typedi";

@Service()
export class TestService {
  public async getAllTests(): Promise<Test[]> {
    return TestModel.find();
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
    console.log(testData)
    const updateTestById: Test = await TestModel.findByIdAndUpdate(testId, { testData }, { new: true });
    if (!updateTestById) throw new HttpException(409, "Test doesn't exist");

    return updateTestById;
  }

  public async deleteTest(testId: string): Promise<Test> {
    const deleteTestById: Test = await TestModel.findByIdAndDelete(testId);
    if (!deleteTestById) throw new HttpException(409, "Test doesn't exist");

    return deleteTestById;
  }
}