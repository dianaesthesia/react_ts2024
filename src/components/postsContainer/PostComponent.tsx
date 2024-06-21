import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IPostModel} from "../../models/IPostModel";

interface IProps {
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post: {id, title, body}}) => {
    const navigate = useNavigate();

    return (
        <div>
            post{id}: {title} <button onClick={() => {
                navigate(`${id}`);
            }}>Show
            </button>
            <hr/>
        </div>
    );
};

export default PostComponent;