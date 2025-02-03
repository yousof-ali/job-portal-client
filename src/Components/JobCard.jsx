import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { BiSolidShoppingBags } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa";
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    const { _id,title, location, jobType, category, salaryRange, description, company, requirements, status, company_logo } = job;

    return (
        <div className="group border bg-[#f2f6ff] hover:bg-white hover:shadow-xl hover:border-blue-500 rounded-xl px-4 py-8 duration-300 transition-transform hover:-translate-y-0.5">

            <div className="flex ml-2 gap-4">
                <div className="max-w-[60px]">
                    <img className="w-full border rounded-2xl" src={company_logo} alt="logo" />
                </div>
                <div>
                    <h2 className="text-lg font-bold">{company}</h2>
                    <div className="flex font-light items-center gap-1">
                        <CiLocationOn />
                        {location}
                    </div>
                </div>
            </div>


            <div>
                <div className=" card-body">
                    <div className="flex items-center gap-2">
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <div className="badge bg-blue-800 text-white">NEW</div>
                    </div>
                    <div className="flex gap-4 mt-1">
                        <div className="flex items-center gap-2 font-light">
                            <BiSolidShoppingBags />
                            <span>{jobType}</span>
                        </div>
                        <div className="flex items-center gap-2 font-light">
                            <span className="w-4 h-4 rounded-full bg-green-400"></span>
                            <span>{status}</span>
                        </div>
                    </div>
                    <p className="py-4 grow">{description}</p>


                    <div className="flex gap-2 flex-wrap mt-4">
                        {requirements.map((single, index) => (
                            <div key={index} className="p-2 cursor-pointer hover:text-blue-400 duration-300 rounded-md bg-gray-200">
                                {single}
                            </div>
                        ))}
                    </div>
                </div>


                <div className="flex items-center justify-between mt-12">
                    <div className='ml-4 flex items-center text-xl font-semibold'>
                        <FaDollarSign /> {
                            salaryRange.min
                        }-{
                            salaryRange.max
                        } {salaryRange.currency}
                    </div>
                    <Link to={`/job-details/${_id}`}>
                        <button className="btn bg-black  text-white px-4 py-2 rounded-md transition-all duration-300  group-hover:bg-blue-700">
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
