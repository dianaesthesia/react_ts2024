import {createBrowserRouter, RouteObject} from "react-router-dom";

import MainLayout from "../layouts/main-layout/MainLayout";
import RecipesPage from "../pages/recipes-page/RecipesPage";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {index: true, path: 'recipes', element: <RecipesPage/>}
        ]
    }
];

export const router = createBrowserRouter(routes);