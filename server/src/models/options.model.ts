import { Option } from "@interfaces/options.interface";
import { model, Schema } from 'mongoose';

const OptionSchema: Schema = new Schema({
  questionId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export const OptionModel = model<Option>('options', OptionSchema);