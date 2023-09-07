import axios, { AxiosResponse } from "axios";
import { Endpoints } from "constants/endpoints.enum";
import { CreateTest, Test } from "types/tests";

export const getAllTests = async () => {
    const { data } = await axios.get<void, AxiosResponse<Test[]>>(`${process.env.REACT_APP_API_URL}${Endpoints.TESTS}`);
    return data;
};

export const getUserTests = async () => {
    const { data } = await axios.get<void, AxiosResponse<Test[]>>(`${process.env.REACT_APP_API_URL}${Endpoints.USER_TESTS}`);
    return data;
};

export const createTest = async (testData: CreateTest) => {
    const { data } = await axios.post<CreateTest, AxiosResponse<Test>>(`${process.env.REACT_APP_API_URL}${Endpoints.TESTS}`, testData);
    return data;
};

export const getTestById = async (testId: string) => {
    const { data } = await axios.get<string, AxiosResponse<Test>>(`${process.env.REACT_APP_API_URL}${Endpoints.TESTS}/${testId}`);
    return data;
};

export const deleteTest = async (testId: string) => {
    const { data } = await axios.delete<string, AxiosResponse<Test>>(`${process.env.REACT_APP_API_URL}${Endpoints.TESTS}/${testId}`);
    return data;
};