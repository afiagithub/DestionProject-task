import React from 'react';

const Profile = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-5 p-10'>
            <div className='flex flex-row lg:flex-col items-center gap-5'>
                <div className="flex flex-col justify-center max-w-xs p-6 rounded-xl sm:px-12">
                    <img src="https://i.ibb.co.com/ygwnDwV/face1.jpg" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                    <div className="space-y-4 text-center divide-y">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-semibold sm:text-2xl">Leroy Jenkins</h2>
                            <p className="px-5 text-xs sm:text-base dark:text-gray-600">Full-stack developer</p>
                        </div>
                        <div className="flex justify-center pt-2 space-x-4 align-center">
                            <button className='btn bg-[#124E66] text-white border-2 border-[#124E66] hover:border-[#124E66] 
                        hover:bg-transparent hover:text-[#124E66] rounded-lg'>Follow</button>
                            <button className='btn bg-transparent text-[#124E66] border-2 border-[#124E66] hover:border-[#124E66] 
                        hover:bg-[#124E66] hover:text-white rounded-lg'>Message</button>
                        </div>
                    </div>
                </div>
                <div className="text-left">
                    <div className="w-full my-6 flex justify-between">
                        <div className="space-y-2 font-semibold px-3">
                            <p>Github:</p>
                            <p>LinkedIn:</p>
                            <p>Facebook: </p>
                            <p>Twitter: </p>

                        </div>
                        <div className="font-bold space-y-2 text-[#124E66]">
                            <p>john@github.com</p>
                            <p>john@linkedin.com</p>
                            <p>john@facebook.com</p>
                            <p>john@twitter.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mb-5 lg:mb-0 w-4/5 lg:w-2/5">
                <div className="text-left ml-6 md:ml-10 lg:ml-12">
                    <p className="mt-5 mb-3 text-2xl font-bold">User Information </p>
                    <hr className='w-full mb-5' />
                    <div className="w-full my-6 flex justify-between">
                        <div className="space-y-2 font-semibold px-3">
                            <p>Full Name:</p>
                            <p>Email:</p>
                            <p>Phone: </p>
                            <p>Address: </p>
                            <p>Status: </p>

                        </div>
                        <div className="font-bold space-y-2 text-[#124E66]">
                            <p>John Doe</p>
                            <p>john@gmail.com</p>
                            <p>0123456789</p>
                            <p>Dhaka, Bangladesh</p>
                            <p>Active</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;