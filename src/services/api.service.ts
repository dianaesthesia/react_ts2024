import axios, {AxiosResponse} from "axios";

import {baseURL, urls} from "../constants/urls";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {IUsersResponseModel} from "../models/IUsersResponseModel";

const axiosInstance = axios.create({
    baseURL,
    headers: {"Content-Type": "application/json; charset=UTF-8"}
});

const userApiService = {
    getAll: (): Promise<AxiosResponse<IUsersResponseModel>> => axiosInstance.get(urls.users.base)
};

const postApiService = {
    getAll: (): Promise<IPostModel[]> => axiosInstance.get(urls.posts.base),
    getByUserId: (userId: number): Promise<IPostModel> => axiosInstance.get(urls.posts.byUserId(userId))
}

export {userApiService, postApiService};


// getAll: async (): Promise<IUserModel[]> => (await axiosInstance.get(urls.users.base)).data.users // скорочений варіант
// !!!У ньому обовʼязково! потрібно взяти await у групу (), оскільки ми не евейтимо .data.users, а тільки наш асинхронний запит

// axiosInstance.get(urls.users.base).then(res => res.data.users),

// getById: (id: string): Promise<IUserModel> => axiosInstance.get(urls.users.byId(id))