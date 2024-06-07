import React, {FC} from 'react';

import {UserWithPostsType} from "../../models/UserWithPostsType";

interface IProps {
    userWithPosts: UserWithPostsType
}

const UserPostsComponent: FC<IProps> = ({userWithPosts: {name, posts}}) => {
    return (
        <div>
            {name}
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );
};

export default UserPostsComponent;