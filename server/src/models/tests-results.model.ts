import { model, Schema } from "mongoose";

export interface TestsResults {
  testId: string;
  userId: string;
  result: number;
}

const TestsResults: Schema = new Schema({
  testId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  result: {
    type: Number,
    required: true,
  }
});

export const TestsResultsModel = model<TestsResults>('tests-results', TestsResults);