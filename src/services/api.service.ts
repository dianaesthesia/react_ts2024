import axios, {AxiosError} from "axios";

import {AuthDataModel} from "../models/AuthDataModel";
import {ITokenObtainPairModel} from "../models/ITokenObtainPairModel";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {retrieveLocalStorageData} from "../helpers/helpers";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
});

axiosInstance.interceptors.request.use((request) => {
    if (localStorage.getItem('tokenPair') && request.url !== '/auth/refresh')
        request.headers.set('Authorization', 'Bearer ' + retrieveLocalStorageData<ITokenObtainPairModel>('tokenPair').access);
    return request;
})

const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {
        let response;
        try {
            response = await axiosInstance.post<ITokenObtainPairModel>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data));
        } catch (e) {
            console.log(e);
        }

        return !!(response?.data?.access && response.data?.refresh);
    },
    refresh: async (refreshToken: string) => {
        const response = await axiosInstance.post<ITokenObtainPairModel>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
    }
};

const carService = {
    getAll: async (): Promise<ICarPaginatedModel | null> => {
        try {
            const response = await axiosInstance.get<ICarPaginatedModel>('/cars');
            return response.data;
        } catch (e) {
            let axiosError = e as AxiosError;
            console.log(axiosError);
            if (axiosError?.response?.status === 401) {
                const refreshToken = retrieveLocalStorageData<ITokenObtainPairModel>('tokenPair').refresh;
                await authService.refresh(refreshToken);
                return await carService.getAll(); //await не вплине у цьому рядку на результат відпрацювання
            }
        }

        return null;

    }
};

export {authService, carService};