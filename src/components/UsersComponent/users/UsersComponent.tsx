import React, {FC, useEffect, useState} from 'react';

import {IUserModel} from "../../../models/IUserModel";
import {userApiService} from "../../../services/user.api.service";
import UserComponent from "../user/UserComponent";

const UsersComponent: FC = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        userApiService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;