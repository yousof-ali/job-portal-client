import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BiSolidShoppingBags } from "react-icons/bi";
import { MdOutlineWork } from "react-icons/md";
import { MdFactory } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { GrStatusWarning } from "react-icons/gr";
import { details } from 'motion/react-client';


const JobDetails = () => {
    const data = useLoaderData();
    const { _id, title, location, jobType,applicationDeadline, category, salaryRange, description, company,hr_email,hr_name, responsibilities,requirements, status, company_logo } = data;
    return (
        <div className='px-2 '>
            <div className='h-[350px] py-8 '>
                <img className='w-full rounded-2xl h-full' src={'https://i.ibb.co.com/sJ6Mq84Z/d1.webp'} alt="" />
            </div>
            <div className='flex flex-col gap-4 md:flex-row justify-between'>
                <div>
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <div className="flex text-xl mt-2 text-gray-500 items-center gap-2 font-light">
                        <BiSolidShoppingBags />
                        <span>{jobType}</span>
                    </div>
                </div>
                <div>
                    <button className='btn btn-primary duration-300 hover:bg-black hover:text-white transition-transform hover:-translate-y-1'> Apply Now</button>
                </div>
            </div>
            <div className='divider '></div>
            <div className='grid grid-cols-1 gap-6 items-start my-8 lg:grid-cols-3'>
            <div className='border lg:col-span-2 rounded-md border-gray-300 p-4 '>
                <h2 className='text-2xl  font-bold'>Employment Information</h2>
                <div className='divider py-2'></div>
                <div className='space-y-4'>
                    <div className='flex gap-6'>
                        <div className='flex flex-1 text-xl gap-6'>
                            <p className='flex items-center text-gray-500 gap-1'><span><MdFactory /></span><span>Company</span></p>
                            <p>{company}</p>
                        </div>
                        <div className='flex flex-1 text-xl gap-6'>
                            <p className='flex items-center text-gray-500 gap-1'><span><MdOutlineWork /></span><span>Category</span></p>
                            <p >{category}</p>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex flex-1 text-xl gap-6'>
                            <p className='flex items-center text-gray-500 gap-1'><span><CiDollar /></span><span>Salary
                            </span></p>
                            <p>{salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                        </div>
                        <div className='flex flex-1 text-xl gap-6'>
                            <p className='flex items-center text-gray-500 gap-1'><span><IoTimeOutline /></span><span>Deadline</span></p>
                            <p >{applicationDeadline}</p>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div className='flex flex-1 text-xl gap-6'>
                            <p className='flex items-center text-gray-500 gap-1'><span><CiLocationOn /></span><span>Location</span></p>
                            <p>{location}</p>
                        </div>
                        <div className='flex flex-1 text-xl gap-6'>
                            <p className='flex items-center text-gray-500 gap-1'><span><GrStatusWarning /></span><span>Job Type</span></p>
                            <p >{status}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='border lg:col-span-1 rounded-md border-gray-300 p-4'>
                 <div className='flex gap-2'>
                    <img className='w-16 border rounded-md' src={company_logo} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>{company}</h2>
                        <p className='flex items-center gap-1 text-gray-400'><CiLocationOn />{location}</p>
                    </div>
                    
                    
                 </div>
                 <div className='mt-4 space-y-1 text-gray-400'>
                        <li>Name : {hr_name}</li>
                        <li>Email : {hr_email}</li>
                        <li>Phone : +880** ***</li>
                    </div>
            </div>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Welcome to {company}</h2>
                <p className='text-gray-500 mt-2'>{description}</p>
            </div>
            <div className='my-6'>
                <h2 className='text-2xl font-bold'>Essential Knowledge, Skills, and Experience</h2>
                <div className='mt-2 space-y-1'>
                {
                        requirements.map((single,indx) => <li key={indx} className='text-gray-500'> {single}</li> )
                    }
                </div>
                    
                
                
            </div>
            <div className='my-6'>
                <h2 className='text-2xl font-bold'>Responsibilities</h2>
                <div className='mt-2 ml-2 space-y-1'>
                {
                        responsibilities.map((single,indx) => <p  key={indx} className='text-gray-500'> {single}</p> )
                    }
                </div>
                    
                
                
            </div>
        </div>
    );
};

export default JobDetails; 