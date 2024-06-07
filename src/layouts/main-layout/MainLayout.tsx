import React, {FC, useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import {Context} from "../../context/ContextProvider";
import {IUserModel} from "../../models/IUserModel";
import {IPostModel} from "../../models/IPostModel";
import {ICommentModel} from "../../models/ICommentModel";
import {commentApiService, postApiService, userApiService} from "../../services/api.service";

const MainLayout: FC = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        userApiService.getAll().then(({data}) => setUsers(data));
        postApiService.getAll().then(({data}) => setPosts(data));
        commentApiService.getAll().then(({data}) => setComments(data));
    }, []);

    return (
        <div>
            <HeaderComponent/>
            <Context.Provider value={
                {
                    userStore: {
                        allUsers: users
                    },
                    postStore: {
                        allPosts: posts
                    },
                    commentStore: {
                        allComments: comments
                    }
                }
            }>
                <Outlet/>
            </Context.Provider>
        </div>
    );
};

export default MainLayout;