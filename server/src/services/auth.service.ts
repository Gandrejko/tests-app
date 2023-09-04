import { HttpException } from "@/exeptions/HttpExeption";
import { SECRET_KEY } from "@config";
import { User } from "@interfaces/users.interface";
import { UserModel } from "@models/users.model";
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import { Service } from "typedi";

const createToken = (user: User): string => {
  const dataStoredInToken = { username: user.username };
  const expiresIn: number = 60 * 60;

  return sign(dataStoredInToken, SECRET_KEY, { expiresIn });
}

@Service()
export class AuthService {
  public async signup(userData: User): Promise<string> {
    const findUser: User = await UserModel.findOne({ username: userData.username });
    if (findUser) throw new HttpException(409, `User with username ${userData.username} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData = await UserModel.create({ ...userData, password: hashedPassword });

    return createToken(createUserData);
  }

  public async login(userData: User): Promise<string> {
    const findUser: User = await UserModel.findOne({ username: userData.username });
    if (!findUser) throw new HttpException(409, `User with username ${userData.username} was not found`);

    const isPasswordMatching: boolean = await compare(userData.password, findUser.password);
    if (!isPasswordMatching) throw new HttpException(409, "Password is not matching");

    return createToken(findUser);
  }
}