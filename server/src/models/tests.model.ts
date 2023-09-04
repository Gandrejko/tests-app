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
  questions: [{
    name: {
      type: String,
      required: true,
    },
    options: [{
      name: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
      }
    }]
  }]
});

export const TestModel = model<Test>('tests', TestSchema);