import {IRecipeModel} from "./IRecipeModel";

export interface IRecipeResponse {
	recipes: IRecipeModel[];
	total: number;
	skip: number;
	limit: number;
}