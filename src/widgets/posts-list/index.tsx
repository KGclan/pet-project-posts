import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

import { IPost } from 'shared/api';
import { PostCard } from 'entities/post';

import styles from './styles.module.scss';
import { RootState } from 'app/store';

interface IPostsList {
    posts: IPost[] | null;
}

const PostsList = ({ posts }: IPostsList) => {
    const isLoading = useSelector((state: RootState) => state.posts.isListLoading);

    if (posts === null) return <div>Данных нет</div>;

    return (
        <div className={styles.wrapper}>
            {
                isLoading
                    ? <CircularProgress />
                    : posts.map((post, index) => <PostCard key={index} postData={post} />)
            }
        </div>
    );
};

export default PostsList;