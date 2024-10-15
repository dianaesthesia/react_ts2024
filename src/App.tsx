import React, {FC, useState} from 'react';

import './App.css';
import UsersComponent from "./components/usersContainer/users/UsersComponent";
import {IPostModel} from "./models/IPostModel";
import {postApiService} from "./services/api.service";
import PostsComponent from "./components/postsContainer/posts/PostsComponent";

const App: FC = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);

    const getAllPostsOfUser = async (userId: number) => {
        setPosts(await postApiService.getByUserId(userId));
    };

    return (
        <div>
            <UsersComponent getAllPostsOfUser={getAllPostsOfUser}/>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default App;