import {createBrowserRouter, RouteObject} from "react-router-dom";

import MainLayout from "../layouts/main-layout/MainLayout";
import ErrorLayout from "../layouts/error-layout/ErrorLayout";
import HomePage from "../pages/home-page/HomePage";
import UsersPage from "../pages/users-page/UsersPage";
import UserPage from "../pages/user-page/UserPage";
import PostsPage from "../pages/posts-page/PostsPage";
import PostPage from "../pages/post-page/PostPage";
import CommentsPage from "../pages/comments-page/CommentsPage";
import CommentPage from "../pages/comment-page/CommentPage";
import PostsWithCommentsPage from "../pages/postsWithComments-page/PostsWithCommentsPage";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'posts/:id', element: <PostPage/>},
            {path: 'comments', element: <CommentsPage/>, children: [{path: ':id', element: <CommentPage/>}]},
            {path: 'posts+comments', element: <PostsWithCommentsPage/>}
        ]
    }
];

const router = createBrowserRouter(routes);

export default router;