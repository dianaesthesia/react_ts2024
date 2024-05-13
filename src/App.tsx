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
    };

    return (
        <div className={styles.App}>
            <div className={styles.users}><UsersComponent getAllPostsOfUser={getAllPostsOfUser}/></div>
            <div className={styles.posts}><PostsComponent posts={posts}/></div>
        </div>
    );
};

export default App;
