import React from 'react';
import { Link } from 'react-router-dom';

const CateCard = ({data}) => {
    return (
        <Link className=''>
        <div
            
            className="flex my-4 hover:-translate-y-1 transition-transform duration-300 ease-in-out flex-row items-center gap-4 border bg-white rounded-2xl hover:border-blue-500 shadow-xl p-4 mx-4"
        >
            <div className="text-4xl bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center">
                {data?.icon}
            </div>
            <div>
                <h2 className="text-xl font-semibold hover:text-blue-600 transition duration-200">
                    {data?.job_name}
                </h2>
                <p className="text-gray-600  hover:text-blue-600 transition duration-200">{data?.jobs} Jobs Available</p>
            </div>
        </div>
        </Link>
    );
};

export default CateCard;