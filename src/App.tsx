import React, {useState} from 'react';

import UsersComponent from "./components/usersContainer/users/UsersComponent";
import PostsComponent from "./components/postsContainer/posts/PostsComponent";
import styles from "./App.module.css";
import {IPostModel} from "./models/IPostModel";
import {getAllPostsByUserId} from "./services/user.api.service";

const App = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);

    const getAllPostsOfUser = (userId: number) => {
        getAllPostsByUserId(userId).then(({data}) => setPosts(data));
        console.log('.');
    };

    return (
        <div className={styles.App}>
            <UsersComponent getAllPostsOfUser={getAllPostsOfUser}/>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default App;
