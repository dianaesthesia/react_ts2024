import React, {FC} from 'react';

import {IUserModel} from "../../models/IUserModel";
import {useContextProvider} from "../../context/ContextProvider";

interface IProps {
    user: IUserModel
}

const UserComponent: FC<IProps> = ({user}) => {
    const {userStore: {setSelectedUser}} = useContextProvider();

    return (
        <div>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <button onClick={() => setSelectedUser(user)}>Select user</button>
            <hr/>
        </div>
    );
};

export default UserComponent;