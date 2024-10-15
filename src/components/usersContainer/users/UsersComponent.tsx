import React, {FC, useEffect, useState} from 'react';

import {IUserModel} from "../../../models/IUserModel";
import {userApiService} from "../../../services/api.service";
import UserComponent from "../user/UserComponent";

interface IProps {
    getAllPostsOfUser: (userId: number) => void
}

const UsersComponent: FC<IProps> = ({getAllPostsOfUser}) => {
    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        userApiService.getAll().then(users => setUsers(users))
        return () => {
            console.log('UseEffect has been done');
        }
    }, []);

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user} getAllPostsOfUser={getAllPostsOfUser}/>)}
        </div>
    );
};

export default UsersComponent;