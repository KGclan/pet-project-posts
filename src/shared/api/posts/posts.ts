import { AxiosPromise } from "axios";

import { apiInstance } from "./base";
import { Post, Comment } from "./models";

export const getPosts = (): AxiosPromise<Post[]> => {
    return apiInstance.get('');
};

export const getSinglePost = (id: number): AxiosPromise<Post> => {
    return apiInstance.get(`/${id}`);
};

type GetSearchedPostsParams = {
    q: string;
};

export const getSearchedPosts = ({...params}: GetSearchedPostsParams): AxiosPromise<Post[]> => {
    return apiInstance.get('/search', { params });
};

export const getPostComments = (id: number): AxiosPromise<Comment> => {
    return apiInstance.get(`/${id}/comments`);
};

export const postPost = (data: Post) => {
    return apiInstance.post('/add', data);
};

export const deletePost = (id: number) => {
    return apiInstance.delete(`/${id}`);
};