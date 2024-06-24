import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../redux/store";
import {userActions} from "../../redux/slices/userSlice";

const ChosenUserComponent = () => {
    const {id} = useParams();

    const user = useAppSelector(state => state.userSliceState.user);

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id) {
            dispatch(userActions.loadUserById(id));
        } else {
            throw new Error('id is undefined');
        }
    }, [id, dispatch]);

    return (
        <div>
            {user &&
                <div>
                    <div>username: {user.username}</div>
                    <div>email: {user.email}</div>
                </div>}
        </div>
    );
};

export default ChosenUserComponent;