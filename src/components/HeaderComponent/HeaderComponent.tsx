import React from 'react';
import {NavLink} from "react-router-dom";

import styles from './Header.module.css';

const HeaderComponent = () => {
    return (
        <div>
            <ul className={styles.Header}>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'login'}>Authentication</NavLink></li>
                <li><NavLink to={'auth/resources'}>Cars</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export default HeaderComponent;