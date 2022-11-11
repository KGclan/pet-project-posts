import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API, IPost } from "shared/api";

interface IInitialState {
    all: IPost[] | null;
    isListLoading: boolean;
}

const initialState: IInitialState = {
    all: null,
    isListLoading: false,
};

export const getAllPosts = createAsyncThunk(
    'getAllPosts',
    async () => {
        try {
            const response = await API.posts.getPosts();

            return response.data.posts;
        } catch (error) {
            console.log(error);
        }
    },
);

export const postModel = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllPosts.pending.type]: (state) => {
            state.isListLoading = true;
        },
        [getAllPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.isListLoading = false;
            state.all = action.payload;
        },
        [getAllPosts.rejected.type]: (state) => {
            state.isListLoading = false;
        },
    }
});

// export const {  } = postModel.actions;
export const reducer = postModel.reducer;