import React, {FC} from 'react';

import {PostWithCommentsType} from "../../models/PostWithCommentsType";

interface IProps {
    postWithComments: PostWithCommentsType
}

const PostCommentsComponent: FC<IProps> = ({postWithComments: {id, title, comments}}) => {
    return (
        <div>
            <div>post {id}: {title} </div>
            <ul>
                {comments.map(comment => <li key={comment.id}>{comment.body}</li>)}
            </ul>
        </div>
    );
};

export default PostCommentsComponent;