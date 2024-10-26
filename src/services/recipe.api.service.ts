import axios from "axios";

import {baseURL, urls} from "../constants/urls";
import {IRecipeModel} from "../models/IRecipeModel";
import {BaseResponseType} from "../models/BaseResponseType";

type RecipesWithBaseResponseType = BaseResponseType & { recipes: IRecipeModel[] }

const axiosInstance = axios.create({
    baseURL,
    headers: {"Content-Type": "application/json; charset=UTF-8"}
});

const recipeApiService = {
    getAll: async (pageNumber: number): Promise<RecipesWithBaseResponseType> => {
        const skip = (pageNumber - 1) * 10;

        const {data} = await axiosInstance.get<RecipesWithBaseResponseType>(urls.recipes.base, {
            params: {
                limit: '10',
                skip: skip
            }
        });
        return data;
    }
};

export {recipeApiService};

