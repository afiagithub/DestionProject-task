import React from 'react';
import ProgressCard from './shared/ProgressCard';

const UserDashboard = () => {
    return (
        <div className='p-10 flex flex-row justify-around'>
            <div className='space-y-3'>
                <h2 className='font-nun text-xl font-semibold'>In Progress</h2>
                <hr className='border-t-8 border-green-600' />
                <ProgressCard title={'Project Planning'} details={'Plan the project timeline and color palette'}/>
                <ProgressCard title={'Design Review'} details={'Review the design for coffe shop app'}/>
                <ProgressCard title={'Deploy Project'} details={'Deploy the new project'}/>
            </div>

            <div className='space-y-3'>
                <h2 className='font-nun text-xl font-semibold'>To do</h2>
                <hr className='border-t-8 border-yellow-600' />
                <ProgressCard title={'Social Media Post'} details={'Post about new learnings on Next.js'}/>
                <ProgressCard title={'Implement Payment'} details={'Implement online payment for coffe shop app'}/>
            </div>
        </div>
    );
};

export default UserDashboard;