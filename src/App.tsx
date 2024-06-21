import React, {FC, useEffect} from 'react';
import {Outlet} from "react-router-dom";

import './App.css';
import {useAppDispatch} from "./redux/store";
import {userActions} from "./redux/slices/userSlice";
import {postActions} from "./redux/slices/postSlice";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

const App: FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userActions.loadUsers());
        dispatch(postActions.loadPosts());
    }, []);

    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default App;
