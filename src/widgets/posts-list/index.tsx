import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

import { RootState } from 'app/store';
import { DeleteButton } from 'features/delete-post';
import { PostCard } from 'entities/post';
import { IPost } from 'shared/api';

import styles from './styles.module.scss';

interface IPostsList {
    posts: IPost[] | null;
}

const PostsList = ({ posts }: IPostsList) => {
    const isLoading = useSelector((state: RootState) => state.posts.isListLoading);

    if (!posts || !posts.length) return <div>Данных нет</div>;

    return (
        <div className={styles.wrapper}>
            {
                isLoading
                    ? <CircularProgress />
                    : posts.map((post, index) => (
                        <PostCard
                            key={index}
                            postData={post}
                            buttons={[<DeleteButton id={post.id} />]}
                        />
                    ))
            }
        </div>
    );
};

export default PostsList;