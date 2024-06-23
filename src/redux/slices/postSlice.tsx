import {AxiosError} from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postApiService} from "../../services/api.service";
import {IPostModel} from "../../models/IPostModel";


type PostSliceType = {
    posts: IPostModel[],
    post: IPostModel | null
};

const postInitState: PostSliceType = {
    posts: [],
    post: null
};

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await postApiService.getAll();
            return posts; //можна і через thunkAPI.fulfillWithValues(posts)
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const loadPostById = createAsyncThunk(
    'postSlice/loadPostById',
    async (id: string | undefined, thunkAPI) => {
        try {
            const post = await postApiService.getById(id);
            return thunkAPI.fulfillWithValue(post);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

export const postSlice = createSlice({
    name: "postSlice",
    initialState: postInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(loadPosts.rejected, (state, action) => {
                //.....
            })
            .addCase(loadPostById.fulfilled, (state, action) => {
                state.post = action.payload;
            })
            .addCase(loadPostById.rejected, (state, action) => {
                //.....
            })
});

export const postActions = {
    ...postSlice.actions,
    loadPosts,
    loadPostById
};