import React, {FC, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {IPostModel} from "../../models/IPostModel";
import {createNewPost, getAllPosts} from "../../services/post.api.service";
import PostsComponent from "../posts/PostsComponent";
import {postValidator} from "../../validators/post.validator";

const PostForm: FC = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<IPostModel>({
        mode: "all",
        resolver: joiResolver(postValidator)
    });

    useEffect(() => {
        getAllPosts().then(({data}) => setPosts(data))
    }, []);


    const createPost = (item: IPostModel) => {
        createNewPost(item).then(({data}) => setPosts(prevState => ([...prevState, data])))
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(createPost)}>
                <input type={"text"} placeholder={"title"} {...register("title")}/>
                {errors.title && <span>{errors.title.message}</span>}
                <br/>
                <input type={"text"} placeholder={"body"} {...register("body")}/>
                {errors.body && <span>{errors.body.message}</span>}
                <br/>
                <button disabled={!isValid}>Post</button>
            </form>
            <hr/>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostForm;