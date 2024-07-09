import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Contact from "../Pages/Contact/Contact";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Secret from "../Pages/Shared/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import Users from "../Pages/Dashboard/Users";
import AddItem from "../Pages/Dashboard/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order',
                element: <Order></Order>
            },
            {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "/dashboard/cart",
                element: <Cart></Cart>
            },
            // admin route only
            {
                path: "/dashboard/users",
                element: <AdminRoute><Users></Users></AdminRoute>
            },
            {
                path: "/dashboard/add-item",
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: "/dashboard/manage-items",
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: "/dashboard/update-item/:id",
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute> 
            },
        ]
            
    }
]);
