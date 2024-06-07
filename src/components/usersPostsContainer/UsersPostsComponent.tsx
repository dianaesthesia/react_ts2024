import React, {useEffect, useMemo, useState} from 'react';

import {useContextProvider} from "../../context/ContextProvider";
import {UserWithPostsType} from "../../models/UserWithPostsType";
import UserPostsComponent from "./UserPostsComponent";

const UsersPostsComponent = () => {
    const {userStore: {allUsers}, postStore: {allPosts}} = useContextProvider();

    const [usersWithPostsState, setUsersWithPostsState] = useState<UserWithPostsType[]>([]);

    const usersWithPostsArray = useMemo(() => {
        return () => {
            return allUsers.map(user => {
                return {...user, posts: allPosts.filter(post => post.userId === user.id)}
            })
        }
    }, [allUsers, allPosts]);

    useEffect(() => {
        setUsersWithPostsState(usersWithPostsArray);
    }, [usersWithPostsArray]);

    return (
        <div>
            {usersWithPostsState.map(userWithPosts => <UserPostsComponent userWithPosts={userWithPosts} key={userWithPosts.id}/>)}
        </div>
    );
};

export default UsersPostsComponent;