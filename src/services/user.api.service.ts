import {axiosInstance} from "../helpers/helpers";
import {urls} from "../constants/urls";
import {IUserModel} from "../models/IUserModel";


const userApiService = {
    getAll: async () => axiosInstance.get<IUserModel[]>(urls.users.base),
    getById: async (userId: string) => axiosInstance.get<IUserModel>(urls.users.byId(userId))
};


