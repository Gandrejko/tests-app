import axios, { AxiosResponse } from "axios";
import { Endpoints } from "../constants/endpoints.enum";
import { Test } from "../types/tests";

export const getAllTests = async () => {
    const { data } = await axios.get<void, AxiosResponse<Test[]>>(`${process.env.REACT_APP_API_URL}${Endpoints.TESTS}`);
    return data;
}