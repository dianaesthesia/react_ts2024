import {IPostModel} from "./IPostModel";

export interface IPostsResponseModel {
    posts: IPostModel[],
    total: number,
    skip: number,
    limit: number
}