import React from 'react';

import PostCard from 'entities/ui/post-card';
import { IPost } from 'shared/api';

import styles from './styles.module.scss';

interface IPostsList {
    posts: IPost[] | null;
}

const PostsList = ({
    posts,
}: IPostsList) => {
    return (
        <div className={styles.wrapper}>
            {
                posts !== null
                    ? posts.map((post, index) => <PostCard key={index} postData={post} />)
                    : <div>Данных нет</div>
            }
        </div>
    );
};

export default PostsList;