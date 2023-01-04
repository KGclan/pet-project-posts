import React from 'react';
import { Avatar, Typography } from '@mui/material';

import { IComment } from 'shared/api';

import styles from './styles.module.scss';

const Comment = ({data}: {data: IComment}) => {
    const {username} = data.user;
    const {body} = data;

    return (
        <div className={styles.wrapper}>
            <Avatar sx={{ bgcolor: 'lightblue' }}>{username.slice(0, 2).toUpperCase()}</Avatar>
            <div>
                <Typography fontWeight='bold'>{username}</Typography>
                <Typography>{body}</Typography>
            </div>
        </div>
    );
};

export default Comment;