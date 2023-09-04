import { User } from "@interfaces/users.interface";
import { model, Schema } from 'mongoose';

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
