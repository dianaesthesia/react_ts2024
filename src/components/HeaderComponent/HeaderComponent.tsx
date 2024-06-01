import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={'/'}>Authentication</NavLink></li>
                <br/>
                <li><NavLink to={'cars'}>Cars</NavLink></li>
            </ul>

            <hr/>
        </div>
    );
};

export default HeaderComponent;