import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";

import {userApiService} from "../../services/api.service";
import {IUserModel} from "../../models/IUserModel";


type UserSliceType = {
    users: IUserModel[],
    isLoaded: boolean,
    user: IUserModel | null
};

const userInitState: UserSliceType = {
    users: [],
    isLoaded: false,
    user: null
};

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await userApiService.getAll();
            // thunkAPI.dispatch(userActions.changeLoadState(true)); //або так як тут, або ж у .addMatcher
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const loadUserById = createAsyncThunk(
    'userSlice/loadUserById',
    async (id: string | undefined, thunkAPI) => {
        try {
            const user = await userApiService.getById(id);
            return thunkAPI.fulfillWithValue(user);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitState,
    reducers: {
        changeLoadState: (state, action: PayloadAction<boolean>) => {
            state.isLoaded = action.payload;
        }
    }, //тут зберігаються всі синхронні операції
    extraReducers: builder =>
        builder
            .addCase(loadUserById.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(loadUserById.rejected, (state, action) => {
                //....
            })
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                //....
            })
            .addMatcher(isFulfilled(loadUsers), (state, action) => {
                state.isLoaded = true;
            })
});

export const userActions = {
    ...userSlice.actions,
    loadUsers,
    loadUserById
};