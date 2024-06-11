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
    const [selectedUserState, setSelectedUserState] = useState<IUserModel | null>(null);

    useEffect(() => {
        userApiService.getAll().then(({data}) => setUsers(data));
        postApiService.getAll().then(({data}) => setPosts(data));
        commentApiService.getAll().then(({data}) => setComments(data));
    }, []);

    const selectUser = (selectedUser: IUserModel) => setSelectedUserState(selectedUser);

    return (
        <div>
            <HeaderComponent/>
            <Context.Provider value={
                {
                    userStore: {
                        allUsers: users,
                        setSelectedUser: (selectedUser: IUserModel) => selectUser(selectedUser)
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

            <hr/>
            {selectedUserState && <div>{selectedUserState.email}</div>}
            <hr/>
        </div>
    );
};

export default MainLayout;