import React from "react";

import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";
import Home from "../pages/Site/Home/Home";
import Shop from "../pages/Site/Shop/Shop";
import PostDetail from "../pages/Site/PostDetail/PostDetail"
import PostDetailAdmin from "../pages/Admin/PostDetail/PostDetail"
import Add from "../pages/Admin/Add/Add";

import AdminRoot from "../pages/Admin/AdminRoot/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Posts from "../pages/Admin/Posts/Posts";

import Error from "../pages/error/Error";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "posts/:id",
        element: <PostDetail />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "posts/:id",
        element: <PostDetailAdmin />,
      },
      {
        path: "posts/add",
        element: <Add />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
];
