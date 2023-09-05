import axios, { AxiosResponse } from "axios";
import { Endpoints } from "constants/endpoints.enum";
import { CreateUser } from "types/users";

export const login = async (userData: CreateUser) => {
  const { data } = await axios.post<CreateUser, AxiosResponse<string>>(`${process.env.REACT_APP_API_URL}${Endpoints.LOGIN}`, userData);
  return data;
}

export const register = async (userData: CreateUser) => {
  const { data } = await axios.post<CreateUser, AxiosResponse<string>>(`${process.env.REACT_APP_API_URL}${Endpoints.REGISTER}`, userData);
  return data;
}