import React from "react";

import { useAppDispatch } from "app/store/hooks";
import { postModel } from "entities/post";

export const useDeletePost = () => {
    const dispatch = useAppDispatch();

    const deletePost = (id: number) => {
        dispatch(postModel.deletePost(id));
    };

    return { deletePost };
};