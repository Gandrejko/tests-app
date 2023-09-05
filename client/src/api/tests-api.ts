import axios from "axios";
import { Endpoints } from "../constants/endpoints.enum";
import { Test } from "../types/tests";

export const getAllTests = async (): Promise<Test[]> => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}${Endpoints.TESTS}`);
    return data.data;
}