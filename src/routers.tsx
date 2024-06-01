import {createBrowserRouter} from "react-router-dom";

import MainLayout from "./layouts/main-layout/MainLayout";
import ErrorLayout from "./layouts/error-layout/ErrorLayout";
import AuthPage from "./pages/auth-page/AuthPage";
import CarsPage from "./pages/cars-page/CarsPage";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {index: true, element: <AuthPage/>},
            {path: 'cars', element: <CarsPage/>}
        ]
    }
]);