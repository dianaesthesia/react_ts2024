import React, {FC, useEffect, useState} from 'react';

import {IUserModel} from "../../../models/IUserModel";
import {userApiService} from "../../../services/api.service";
import UserComponent from "../user/UserComponent";

const UsersComponent: FC = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        userApiService.getAll().then(({data: {users}}) => setUsers(users))
        return () => {
            console.log('UseEffect has been done');
        }
    }, []);

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;

// userApiService.getAll().then(users => setUsers(users));
