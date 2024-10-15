import React from 'react';

const ProgressCard = ({title, details}) => {
    return (
        <div className="card bg-base-100 w-64 lg:w-96 shadow-xl border-2 border-[#124E66]">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <hr className='my-2' />
                <div className="card-actions flex flex-row items-center justify-between gap-5 lg:gap-0">
                    <button className="btn btn-outline">Oct 15</button>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex -space-x-4">
                            <img alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                                src="https://i.ibb.co.com/2WT9LdJ/dress4.jpg" />
                            <img alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                                src="https://i.ibb.co.com/RH8yNS6/face2.jpg" />
                            <span className="flex items-center justify-center w-12 h-12 font-semibold border rounded-full dark:bg-gray-50 dark:text-gray-800 dark:border-gray-300">+1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressCard;