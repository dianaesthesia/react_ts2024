import axios from "axios";

import {baseURL, urls} from "../constants/urls";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";

const axiosInstance = axios.create({
    baseURL,
    headers: {}
});

const userApiService = {
    getAll: async (): Promise<IUserModel[]> => {
        const response = await axiosInstance.get<IUserModel[]>(urls.users.base);
        return response.data;
    },
    getById: async (id: string | undefined): Promise<IUserModel> => {
        const response = await axiosInstance.get<IUserModel>(urls.users.byId(id));
        return response.data;
    }
};

const postApiService = {
    getAll: async (): Promise<IPostModel[]> => {
        const response = await axiosInstance.get<IPostModel[]>(urls.posts.base);
        return response.data;
    },
    getById: async (id: string | undefined): Promise<IPostModel> => {
        const response = await axiosInstance.get<IPostModel>(urls.posts.byId(id));
        return response.data;
    }
};

export {userApiService, postApiService};