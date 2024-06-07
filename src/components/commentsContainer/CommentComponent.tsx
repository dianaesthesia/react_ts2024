import React, {FC} from 'react';

import {ICommentModel} from "../../models/ICommentModel";

interface IProps {
    comment: ICommentModel
}

const CommentComponent: FC<IProps> = ({comment: {id, name, email, body}}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export default CommentComponent;