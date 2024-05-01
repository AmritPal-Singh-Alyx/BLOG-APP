import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppLayout } from './src/components/index';

import { Authors, AuthorsPosts, CategoryPosts, CreatePosts, Dashboard, DeletePost, EditPost, ErrorPage, Home, Login, Logout, PostDetails, Register, UserProfile } from "./src/pages/index";

import ErrorPage from './src/pages/ErrorPage.js'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const router = createBrowserRouter([

    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: "posts/:id", element: <PostDetails /> },
            { path: "register", element: <Register /> },
            { path: "login", element: <Login /> },
            { path: "profile/:id", element: <UserProfile /> },
            { path: "authors", element: <Authors /> },
            { path: "create", element: <CreatePosts /> },
            { path: "posts/categories/:category", element: <CategoryPosts /> },
            { path: "posts/users/:id", element: <AuthorsPosts /> },
            { path: "mypost/:id", element: <Dashboard /> },
            { path: "posts/:id/edit", element: <EditPost /> },
            { path: "logout", element: <Logout /> },
            {
                path: "posts/:id/delete", element: <DeletePost />
            },

        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <RouterProvider router={router} />
);
