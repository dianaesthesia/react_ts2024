import React, {FC, useEffect, useState} from 'react';

import {IPostModel} from "../../../models/IPostModel";
import {postApiService} from "../../../services/post.api.service";
import PostComponent from "../post/PostComponent";

const PostsComponent: FC = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        postApiService.getAll().then(({data}) => setPosts(data))
    }, []);

    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;