import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto font-inter'>
            <Outlet/>
        </div>
    );
};

export default MainLayout;