import {axiosInstance} from "../helpers/helpers";
import {IPostModel} from "../models/IPostModel";
import {urls} from "../constants/urls";

const postApiService = {
    getAll: async () => axiosInstance.get<IPostModel[]>(urls.posts.base),
    getById: async (postId: string) => axiosInstance.get<IPostModel>(urls.posts.byId(postId))
};