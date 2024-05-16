import React, {useEffect, useState} from 'react';

import {ICommentModel} from "../../../models/ICommentModel";
import {commentApiService} from "../../../services/comment.api.service";
import CommentComponent from "../comment/CommentComponent";

const CommentsComponent = () => {
    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        commentApiService.getAll().then(({data}) => setComments(data))
    }, []);

    return (
        <div>
            {comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;