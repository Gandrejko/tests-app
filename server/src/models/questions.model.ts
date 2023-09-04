import { Question } from "@interfaces/questions.interface";
import { model, Schema } from 'mongoose';

const QuestionSchema: Schema = new Schema({
  testId: {
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
  options: {
    type: Array<{
      name: string,
      isCorrect: boolean,
    }>,
  }
});

export const QuestionModel = model<Question>('questions', QuestionSchema);