import { User } from '@interfaces/users.interface';
import { Service } from "typedi";

@Service()
export class UserService {
  public async findAllUser(): Promise<User[]> {

  }

  public async findUserById(userId: string): Promise<User> {

  }

  public async updateUser(userId: string, userData: User): Promise<User> {

  }

  public async deleteUser(userId: string): Promise<User> {

  }
}