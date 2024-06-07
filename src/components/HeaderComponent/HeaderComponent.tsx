import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={''}>Home</NavLink></li>
                <li><NavLink to={'users'}>Users</NavLink></li>
                <li><NavLink to={'posts'}>Posts</NavLink></li>
                <li><NavLink to={'userPosts'}>Users with Posts</NavLink></li>
                <li><NavLink to={'comments'}>Comments</NavLink></li>
                <li><NavLink to={'postComments'}>Posts with Comments</NavLink></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;