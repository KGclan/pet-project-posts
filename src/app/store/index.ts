import { configureStore } from "@reduxjs/toolkit";

import { postModel } from "entities/post";



export const store = configureStore({
    reducer: {
      posts: postModel.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;