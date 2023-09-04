import { Test } from "@interfaces/tests.interface";
import { model, Schema } from 'mongoose';

const TestSchema: Schema = new Schema({
  creatorId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export const TestModel = model<Test>('tests', TestSchema);