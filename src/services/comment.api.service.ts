import {axiosInstance} from "../helpers/helpers";
import {urls} from "../constants/urls";

const commentApiService = {
    getAll: async () => axiosInstance.get(urls.comments.base),
    getById: async (commentId: string) => axiosInstance.get(urls.comments.byId(commentId))
};