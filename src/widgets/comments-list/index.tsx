import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'app/store';
import { Comment } from 'entities/comment';
import { CircularProgress, Stack, Typography } from '@mui/material';

const CommentsLIst = () => {
    const comments = useSelector((state: RootState) => state.comments.all);
    const isCommentsLoading = useSelector((state: RootState) => state.comments.isListLoading);

    if (isCommentsLoading) return <CircularProgress />;

    return (
        <Stack >
            {
                (comments && comments.length)
                    ? comments.map((comment) => <Comment data={comment} />)
                    : <Typography>No data</Typography>
            }
        </Stack>
    );
};

export default CommentsLIst;