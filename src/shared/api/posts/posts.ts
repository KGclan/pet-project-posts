import { AxiosPromise } from "axios";

import { apiInstance } from "./base";
import { IPost, IPostResponce, ICommentsResponce } from "./models";

export const getPosts = (): AxiosPromise<IPostResponce> => {
    return apiInstance.get('');
};

export const getSinglePost = (id: number): AxiosPromise<IPost> => {
    return apiInstance.get(`/${id}`);
};

type GetSearchedPostsParams = {
    q: string;
};

export const getSearchedPosts = ({...params}: GetSearchedPostsParams): AxiosPromise<IPostResponce> => {
    return apiInstance.get('/search', { params });
};

export const getPostComments = (id: number): AxiosPromise<ICommentsResponce> => {
    return apiInstance.get(`/${id}/comments`);
};

export const addPost = (data: IPost) => {
    return apiInstance.post('/add', data);
};

export const deletePost = (id: number) => {
    return apiInstance.delete(`/${id}`);
};