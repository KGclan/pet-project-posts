import React, { ReactNode, useState } from 'react';
import { Card, CardActions, Chip, Collapse,Stack, Tooltip, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { IPost } from 'shared/api';
import { commentModel } from 'entities/comment';
import { useAppDispatch } from 'app/store/hooks';
import { ExpandMore } from 'shared/ui';
import CommentsList from 'widgets/comments-list';

import styles from './styles.module.scss';

interface IPostCard {
    postData: IPost;
    buttons: ReactNode[];
}

const PostCard = ({ postData, buttons }: IPostCard) => {
    const { title, body, tags } = postData;
    const dispatch = useAppDispatch();
    const [expanded, setExpanded] = useState(false);

    return (
        <Card
            className={styles.card}
            variant='outlined'
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
                <CardActions>
                    <div className={styles.buttonsWrapper}>
                        { buttons.map((button) => button) }
                    </div>
                    <ExpandMore
                      expand={expanded}
                      onClick={() => {
                        dispatch(commentModel.getAllCommentsOfPost(postData.id));
                        setExpanded(!expanded);
                      }}
                      aria-expanded={expanded}
                    >
                        <Tooltip color='primary' title="Show comments">
                            <ExpandMoreIcon />
                        </Tooltip>
                    </ExpandMore>
                </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CommentsList />
            </Collapse>
        </Card>
    );
};

export default PostCard;