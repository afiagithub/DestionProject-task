import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserDashboard from "../components/UserDashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../components/Profile";
import UpdateProfile from "../components/UpdateProfile";

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
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                index: true,
                element: <UserDashboard/>
            },
            {
                path: 'profile',
                element: <Profile/>
            },
            {
                path: 'update',
                element: <UpdateProfile/>
            }
        ]
    }
]);