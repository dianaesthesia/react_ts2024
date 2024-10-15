import React, {FC} from 'react';

import {IUserModel} from "../../../models/IUserModel";

interface IProps {
    user: IUserModel
}

const UserComponent: FC<IProps> = ({user: {id, firstName, lastName, age}}) => {
    return (
        <div>
            <div>{id}. {firstName}</div>
        </div>
    );
};

export default UserComponent;