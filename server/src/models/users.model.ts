import { model, Schema } from 'mongoose';

export interface User {
  _id: string;
  username: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const UserModel = model<User>('users', UserSchema);
