import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='flex flex-row justify-between gap-5'>
            <div className='w-72 bg-pink-800 text-white'>
                Sidebar
            </div>
            <div className='flex-1 bg-purple-800'>
                <Outlet/>
            </div>
        </div>
    );
};

export default DashboardLayout;