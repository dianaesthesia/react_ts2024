import axios, {AxiosResponse} from "axios";

import {IPostModel} from "../models/IPostModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

const postApiService = {
    getAll: (): Promise<AxiosResponse<IPostModel[]>> => axiosInstance.get('/posts')
};

export {postApiService};