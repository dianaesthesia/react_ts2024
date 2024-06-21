import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IUserModel} from "../../models/IUserModel";

interface IProps {
    user: IUserModel
}

const UserComponent: FC<IProps> = ({user: {id, name, username, email}}) => {
    const navigate = useNavigate();

    return (
        <div>
            <div>{id}: {name}</div>
            <button onClick={() => {
                navigate(`${id}`);
            }}>Details
            </button>
            <hr/>
        </div>
    );
};

export default UserComponent;