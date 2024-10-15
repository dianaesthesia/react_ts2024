import axios from "axios";

import {baseURL, urls} from "../constants/urls";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";

const axiosInstance = axios.create({
    baseURL,
    headers: {"Content-Type": "application/json; charset=UTF-8"}
});

const userApiService = {
    // getAll: (): Promise<AxiosResponse<IUserModel[]>> => axiosInstance.get(urls.users.base)
    getAll: async (): Promise<IUserModel[]> => (await axiosInstance.get(urls.users.base)).data.users // скорочений варіант
    // !!!У ньому обовʼязково! потрібно взяти await у групу (), оскільки ми не евейтимо .data.users, а тільки наш асинхронний запит

    // axiosInstance.get(urls.users.base).then(res => res.data.users) // ще один спосіб оформлення коду
};

const postApiService = {
    getAll: async (): Promise<IPostModel[]> => {
        let axiosResponse = await axiosInstance.get(urls.posts.base);
        return axiosResponse.data.posts;
    },
    getByUserId: async (userId: number): Promise<IPostModel[]> => (await axiosInstance.get(urls.posts.byUserId(userId))).data.posts
}

export {userApiService, postApiService};