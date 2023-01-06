import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState } from "app/store";
import { postModel } from "entities/post";
import { useAppDispatch } from "app/store/hooks";
import PostsList from "widgets/posts-list";
import SearchAppBar from "widgets/search-app-bar";
import { SpeedDialTooltip } from "shared/ui";

import styles from './styles.module.scss';

const MainPage = () => {
    const dispatch = useAppDispatch();
    const posts = useSelector((state: RootState) => state.posts.all);

    useEffect(() => {
        dispatch(postModel.getAllPosts());
    }, []);

    return (
        <div className={styles.wrapper}>
            <SearchAppBar />
            <PostsList posts={posts} />
            <SpeedDialTooltip />
        </div>
    );
};

export default MainPage;