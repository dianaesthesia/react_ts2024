import {createBrowserRouter} from "react-router-dom";

import MainLayout from "../layouts/main-layout/MainLayout";
import ErrorLayout from "../layouts/error-layout/ErrorLayout";
import AuthPage from "../pages/auth-page/AuthPage";
import CarsPage from "../pages/cars-page/CarsPage";
import HomePage from "../pages/home-page/HomePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'login', element: <AuthPage/>},
            {path: 'auth/resources', element: <CarsPage/>}
        ]
    }
]);