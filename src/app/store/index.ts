import { configureStore } from "@reduxjs/toolkit";

import { postModel } from "entities/post";
import { commentModel } from "entities/comment";



export const store = configureStore({
    reducer: {
      posts: postModel.reducer,
      comments: commentModel.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;