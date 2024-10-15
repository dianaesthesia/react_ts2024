import React, {FC} from 'react';

import {IUserModel} from "../../../models/IUserModel";

interface IProps {
    user: IUserModel,
    getAllPostsOfUser: (userId: number) => void
}

const UserComponent: FC<IProps> = ({user: {id, firstName, lastName, age}, getAllPostsOfUser}) => {
    return (
        <div>
            <div>{id}. {firstName} {lastName}. Age: {age}</div>
            <button onClick={() => getAllPostsOfUser(id)}>Show posts of current user</button>
            <hr/>
        </div>
    );
};

export default UserComponent;