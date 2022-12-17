import React from 'react';
import { Button } from '@mui/material';

import { useDeletePost } from '../models';

const DeletePost = ({id}: {id: number}) => {
    const { deletePost } = useDeletePost();

    return (
        <Button
            variant='contained'
            color='error'
            onClick={() => deletePost(id)}
        >
            Delete
        </Button>
    );
};

export default DeletePost;