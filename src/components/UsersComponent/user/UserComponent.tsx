import React, {FC} from 'react';

import {IUserModel} from "../../../models/IUserModel";

interface IProps {
    user: IUserModel
}

const UserComponent: FC<IProps> = ({user: {id, name, username, email}}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <hr/>
        </div>
    );
};

export default UserComponent;