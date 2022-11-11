import { AxiosPromise } from "axios";

import { apiInstance } from "./base";
import { IPost, IComment, IPostResponce } from "./models";

export const getPosts = (): AxiosPromise<IPostResponce> => {
    return apiInstance.get('');
};

export const getSinglePost = (id: number): AxiosPromise<IPost> => {
    return apiInstance.get(`/${id}`);
};

type GetSearchedPostsParams = {
    q: string;
};

export const getSearchedPosts = ({...params}: GetSearchedPostsParams): AxiosPromise<IPost[]> => {
    return apiInstance.get('/search', { params });
};

export const getPostComments = (id: number): AxiosPromise<IComment> => {
    return apiInstance.get(`/${id}/comments`);
};

export const postPost = (data: IPost) => {
    return apiInstance.post('/add', data);
};

export const deletePost = (id: number) => {
    return apiInstance.delete(`/${id}`);
};