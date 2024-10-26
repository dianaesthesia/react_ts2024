import {createBrowserRouter, RouteObject} from "react-router-dom";

import MainLayout from "../layouts/main-layout/MainLayout";
import RecipesPage from "../pages/recipes-page/RecipesPage";
import HomePage from "../pages/home-page/HomePage";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'recipes', element: <RecipesPage/>}
        ]
    }
];

export const router = createBrowserRouter(routes);