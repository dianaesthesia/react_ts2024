import axios, {AxiosResponse} from "axios";

import {ICommentModel} from "../models/ICommentModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
});

const commentApiService = {
    getAll: (): Promise<AxiosResponse<ICommentModel[]>> => axiosInstance.get('comments')
};

export {commentApiService};