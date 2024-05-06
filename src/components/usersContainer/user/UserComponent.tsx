import React, {FC} from 'react';

import {IUserModel} from "../../../models/IUserModel";

interface IProps {
    user: IUserModel,
    getAllPostsOfUser: (userId: number) => void
}

const UserComponent: FC<IProps> = ({user, getAllPostsOfUser}) => {
    const {id, name, username} = user;

    const onClickHandler = () => {
        getAllPostsOfUser(id);
    };

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <button onClick={onClickHandler}>Show posts of current user
            </button>
            <hr/>
        </div>
    );
};

export default UserComponent;