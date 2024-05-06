import React, {FC, useEffect, useState} from 'react';

import {IUserModel} from "../../../models/IUserModel";
import UserComponent from "../user/UserComponent";
import {getAllUsers} from "../../../services/user.api.service";

interface IProps {
    getAllPostsOfUser: (userId: number) => void
}

const UsersComponent: FC<IProps> = ({getAllPostsOfUser}) => {
    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        getAllUsers().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user} getAllPostsOfUser={getAllPostsOfUser}/>)}
        </div>
    );
};

export default UsersComponent;