export type User = {
  _id: string;
  username: string;
  password: string;
}

export type CreateUser = {
  username: string;
  password: string;
}