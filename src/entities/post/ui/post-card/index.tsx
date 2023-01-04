import React, { ReactNode } from 'react';
import { Card, Chip, Stack, Typography } from '@mui/material';

import { IPost } from 'shared/api';
import { commentModel } from 'entities/comment';
import { useAppDispatch } from 'app/store/hooks';

import styles from './styles.module.scss';

interface IPostCard {
    postData: IPost;
    buttons: ReactNode[];
}

const PostCard = ({ postData, buttons }: IPostCard) => {
    const { title, body, tags } = postData;
    const dispatch = useAppDispatch();

    return (
        <Card
            className={styles.card}
            variant='outlined'
            onClick={() => dispatch(commentModel.getAllCommentsOfPost(postData.id))}
        >
            <Typography variant='h6'>{title}</Typography>
            <Typography variant='body1'>{body}</Typography>
            <Stack direction="row" spacing={1}>
                {
                    tags.length
                    ? tags.map((tag) => (
                        <Chip
                            size='small'
                            label={tag}
                            variant="outlined"
                        />
                    )) : null
                }
            </Stack>
            <Stack>
                { buttons.map((button) => button) }
            </Stack>
        </Card>
    );
};

export default PostCard;