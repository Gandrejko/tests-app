export type User = {
  id: string;
  username: string;
  password: string;
  createdAt: string;
}

export type CreateUser = {
  username: string;
  password: string;
}