import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API, IComment } from "shared/api";

interface IInitialState {
    all: IComment[] | null;
    isListLoading: boolean;
}

const initialState: IInitialState = {
    all: null,
    isListLoading: false,
};

export const getAllCommentsOfPost = createAsyncThunk(
    'getAllCommentsOfPost',
    async (id: number) => {
        try {
            const response = await API.posts.getPostComments(id);

            return response.data.comments;
        } catch (error) {
            console.log(error);
        }
    },
);

export const commentsModel = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllCommentsOfPost.pending.type]: (state) => {
            state.isListLoading = true;
        },
        [getAllCommentsOfPost.fulfilled.type]: (state, action: PayloadAction<IComment[]>) => {
            state.isListLoading = false;
            state.all = action.payload;
        },
        [getAllCommentsOfPost.rejected.type]: (state) => {
            state.isListLoading = false;
        },
    }
});

export const reducer = commentsModel.reducer;