import {createBrowserRouter, RouteObject} from "react-router-dom";

import MainLayout from "../layouts/main-layout/MainLayout";
import ErrorLayout from "../layouts/error-layout/ErrorLayout";
import UsersPage from "../pages/users-page/UsersPage";
import PostsPage from "../pages/posts-page/PostsPage";
import UsersPostsPage from "../pages/usersPosts-page/UsersPostsPage";
import CommentsPage from "../pages/comments-page/CommentsPage";
import PostsCommentsPage from "../pages/postsComments-page/PostsCommentsPage";

const routes: RouteObject[] = [
    {
        path: '',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'userPosts', element: <UsersPostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'postComments', element: <PostsCommentsPage/>}
        ]
    }
];

export const router = createBrowserRouter(routes);