import {createBrowserRouter} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/home-page/HomePage";
import UsersPage from "./pages/users-page/UsersPage";
import PostsPage from "./pages/posts-page/PostsPage";
import CommentsPage from "./pages/comments-page/CommentsPage";
import ErrorPage from "./pages/error-page/ErrorPage";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>}
        ]
    }
]);