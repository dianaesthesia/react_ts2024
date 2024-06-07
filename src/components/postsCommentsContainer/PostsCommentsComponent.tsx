import React, {useEffect, useMemo, useState} from 'react';

import {useContextProvider} from "../../context/ContextProvider";
import {PostWithCommentsType} from "../../models/PostWithCommentsType";
import PostCommentsComponent from "./PostCommentsComponent";

const PostsCommentsComponent = () => {
    const {postStore: {allPosts}, commentStore: {allComments}} = useContextProvider();

    const [postsWithCommentsState, setPostsWithCommentsState] = useState<PostWithCommentsType[]>([]);

    const postsWithCommentsArray = useMemo(() => {
        return allPosts.map(post => {
            return {...post, comments: allComments.filter(comment => comment.postId === post.id)}
        })
    }, [allPosts, allComments])

    useEffect(() => {
        setPostsWithCommentsState(postsWithCommentsArray);
    }, [postsWithCommentsArray]);

    return (
        <div>
            {postsWithCommentsState.map(postWithComments => <PostCommentsComponent postWithComments={postWithComments} key={postWithComments.id}/>)}
        </div>
    );
};

export default PostsCommentsComponent;