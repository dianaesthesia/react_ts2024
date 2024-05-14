import axios, {AxiosResponse} from "axios";

import {IPostModel} from "../models/IPostModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

const getAllPosts = (): Promise<AxiosResponse<IPostModel[]>> => {
    return axiosInstance.get('/posts')
};

const createNewPost = (data: IPostModel): Promise<AxiosResponse<IPostModel>> => {
    return axiosInstance.post('/posts', data)
};

export {getAllPosts, createNewPost};