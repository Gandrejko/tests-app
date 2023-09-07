import { model, Schema } from 'mongoose';

export interface Option {
  name: string;
  isCorrect: boolean;
}

export interface Question {
  name: string;
  options: Option[];
}

export interface Test {
  name: string;
  description: string;
  questions: Question[];
  creatorId: string;
}

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