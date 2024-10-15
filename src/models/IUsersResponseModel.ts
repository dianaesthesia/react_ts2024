import {IUserModel} from "./IUserModel";

export interface IUsersResponseModel {
    users: IUserModel[],
    total: number,
    skip: number,
    limit: number
}