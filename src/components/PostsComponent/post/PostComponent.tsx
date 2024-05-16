import React, {FC} from 'react';

import {IPostModel} from "../../../models/IPostModel";

interface IProps {
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post: {id, title, body}}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export default PostComponent;