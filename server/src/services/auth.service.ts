import { HttpException } from "@exceptions/HttpException";
import { SECRET_KEY } from "@config";
import { User, UserModel } from "@models/users.model";
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import { Service } from "typedi";
export interface DataStoredInToken {
  id: string;
  username: string;
}
const createToken = (user: User): string => {
  const dataStoredInToken = { id: user._id, username: user.username };

  return sign(dataStoredInToken, SECRET_KEY, { expiresIn: "24h" });
};

@Service()
export class AuthService {
  public async signup(userData: User): Promise<{user: User, token: string}> {
    const findUser: User = await UserModel.findOne({ username: userData.username });
    if (findUser) {
      throw new HttpException(409, `User with username ${userData.username} already exists`);
    }

    const hashedPassword = await hash(userData.password, 10);
    const createUserData = await UserModel.create({ ...userData, password: hashedPassword });
    return { user: createUserData, token: createToken(createUserData) };
  }

  public async login(userData: User): Promise<{user: User, token: string}> {
    const findUser: User = await UserModel.findOne({ username: userData.username });
    if (!findUser) {
      throw new HttpException(409, `User with username ${userData.username} was not found`);
    }

    const isPasswordMatching: boolean = await compare(userData.password, findUser.password);
    if (!isPasswordMatching) {
      throw new HttpException(409, "Password is not matching");
    }

    return { user: findUser, token: createToken(findUser) };
  }
}