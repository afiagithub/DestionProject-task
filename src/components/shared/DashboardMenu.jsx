import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoLogInOutline } from "react-icons/io5";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const DashboardMenu = () => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        toast.info("Logged Out")
        navigate('/')
    }
    return (
        <div className="flex flex-col">
            <div>
                <h2 className="text-2xl font-bold mb-5">Welcome Back, User</h2>
                <hr />
                <ul className="font-semibold space-y-2 font-nun my-4">
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/dashboard/profile'>User Profile</Link></li>
                    <li><Link to='/dashboard/update'>Update Profile</Link></li>
                </ul>
            </div>
            <div>
                <hr />
                <ul className="font-semibold space-y-2 font-nun my-4">
                    <li><button onClick={handleLogOut} className="flex flex-row items-center gap-2">
                        LogOut <IoLogInOutline className="text-xl" /></button></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardMenu;