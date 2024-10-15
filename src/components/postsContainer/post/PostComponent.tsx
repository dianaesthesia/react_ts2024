import React, {FC} from 'react';

import {IPostModel} from "../../../models/IPostModel";

interface IProps {
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post}) => {
    const {id, title, body} = post;

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default PostComponent;