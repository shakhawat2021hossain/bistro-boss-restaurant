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
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/dashboard/cart",
                element: <Cart></Cart>
            }
        ]
    }
]);
