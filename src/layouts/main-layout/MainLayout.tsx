import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterPage from "../../pages/footer-page/FooterPage";

const MainLayout: FC = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterPage/>
        </div>
    );
};

export default MainLayout;