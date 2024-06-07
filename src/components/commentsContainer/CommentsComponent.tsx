import React from 'react';

import {useContextProvider} from "../../context/ContextProvider";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {
    const {commentStore: {allComments}} = useContextProvider();

    return (
        <div>
            {allComments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default CommentsComponent;