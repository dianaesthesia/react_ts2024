import axios, {AxiosResponse} from "axios";

import {IUserModel} from "../models/IUserModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

const userApiService = {
    getAll: (): Promise<AxiosResponse<IUserModel[]>> => axiosInstance.get('/users')
};

export {userApiService};