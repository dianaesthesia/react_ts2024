import React from 'react';
import {Outlet} from "react-router-dom";

import PaginationComponent from "../../components/paginationContainer/PaginationComponent";

const MainLayout = () => {
    return (
        <div>
            <Outlet/>
            <PaginationComponent/>
        </div>
    );
};

export default MainLayout;