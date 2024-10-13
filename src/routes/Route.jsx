import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserDashboard from "../pages/UserDashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: '/dashboard',
                element: <UserDashboard/>
            }
        ]
    },
]);