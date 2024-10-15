import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import DashboardMenu from '../components/shared/DashboardMenu';

const DashboardLayout = () => {
    const [show, setShow] = useState(false);
    const handleCollaspe = () => {
        setShow(!show)
    }
    return (
        <div className='flex flex-row gap-5 relative'>
            {/* Button to show/hide menubar in mobile and laptop view */}
            <div className="fixed md:hidden text-2xl pl-4 pt-5" onClick={handleCollaspe}>
                {
                    show ? <IoIosCloseCircleOutline /> :
                        <IoMdMenu />
                }
            </div>

            {/* Menubar for mobile and laptop view */}
            <div className={show ?
                'min-w-44 fixed md:hidden translate-y-12 bg-[#124E66] text-[#D3D9D4] pt-4 pb-6 px-4 transition-all duration-200 z-10'
                : 'fixed translate-y-12 md:hidden bg-[#124E66] text-[#D3D9D4] pt-4 pb-6 px-4 -translate-x-72 transition-all duration-200'}>
                <DashboardMenu/>
            </div>
            
            {/* Menubar for pc view */}
            <div className="min-w-56 hidden md:flex min-h-screen bg-[#124E66] text-[#D3D9D4] pt-4 pb-6 px-4">
                <DashboardMenu/>
            </div>
            
            {/* Dynamic Content */}
            <div className='flex-1 bg-purple-800'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;