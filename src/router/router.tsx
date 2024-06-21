import {createBrowserRouter, RouteObject} from "react-router-dom";

import App from "../App";
import UsersPage from "../pages/users-page/UsersPage";
import PostsPage from "../pages/posts-page/PostsPage";
import UserPage from "../pages/user-page/UserPage";
import PostPage from "../pages/post-page/PostPage";

const routes: RouteObject[] = [
    {
        path: '',
        element: <App/>,
        children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'posts/:id', element: <PostPage/>}
        ]
    }
];

export const router = createBrowserRouter(routes);