import axios from "axios";

import {baseURL, urls} from "../constants/urls";
import {IRecipeResponse} from "../models/IRecipeResponse";

const axiosInstance = axios.create({
    baseURL,
    headers: {"Content-Type": "application/json; charset=UTF-8"}
});

const recipeApiService = {
    getAll: () => axiosInstance.get<IRecipeResponse>(urls.recipes.base, {params: {skip: '10', limit: '10'}})
};

export {recipeApiService};

