import React from "react";
import {Navigate} from 'react-router-dom'
import Login from '../pages/login/login'
import Admin from "../pages/admin/admin"
import Home from "../pages/home/home";
import Category from "../pages/category/category";
import Product from "../pages/product/product";
import User from "../pages/user/user";
import Role from "../pages/role/role";
import Bar from "../pages/charts/bar"
import Line from "../pages/charts/line"
import Pie from "../pages/charts/pie"

export default [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <Navigate to='/home'/>
    },
    {
        path: '/',
        element: <Admin />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'category',
                element: <Category />
            },
            {
                path: 'product',
                element: <Product />
            },
            {
                path: 'user',
                element: <User />
            },
            {
                path: 'role',
                element: <Role />
            },
            {
                path: 'charts/bar',
                element: <Bar />
            },
            {
                path: 'charts/line',
                element: <Line />
            },
            {
                path: 'charts/pie',
                element: <Pie />
            }
        ]
    },

]
