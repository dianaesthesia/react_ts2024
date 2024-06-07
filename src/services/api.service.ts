import axios, {AxiosResponse} from "axios";

import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}
});

const userApiService = {
    getAll: async (): Promise<AxiosResponse<IUserModel[]>> => axiosInstance.get('/users')
};

const postApiService = {
    getAll: async (): Promise<AxiosResponse<IPostModel[]>> => axiosInstance.get('/posts')
};

const commentApiService = {
    getAll: async (): Promise<AxiosResponse<ICommentModel[]>> => axiosInstance.get('/comments')
}

export {userApiService, postApiService, commentApiService};