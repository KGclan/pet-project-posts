export interface IPost {
    id: number;
    title: string;
    body: string;
    userId: number;
    tags: string[];
    reactions: number;
}

export interface IPostResponce {
    limit: number;
    posts: IPost[];
    skip: number;
    total: number;
}

export interface ICommentsResponce {
    limit: number;
    comments: IComment[];
    skip: number;
    total: number;
}

export interface IComment {
    id: number,
    body: string;
    postId: number;
    user: {
        id: number;
        username: string;
    };
}