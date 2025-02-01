import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/team/team1.webp'
import team2 from '../../assets/team/team2.webp'
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="hero bg-base-200 px-2 min-h-96">
            <div className="flex flex-col py-8 lg:flex-row-reverse items-center justify-between ">
                <div className='lg:w-[40%] hidden lg:block relative'>
                    <motion.img
                        src={team1}
                        animate={{ y: [0, 50, 0] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm lg:w-70 w-48 rounded-t-[40px] border-l-4 border-blue-700 border-b-4 rounded-br-[40px] shadow-2xl" />
                    <motion.img
                        src={team2}
                        animate={{ x: [200, 150, 200] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm lg:w-70 w-48  rounded-t-[40px] border-l-4 border-blue-700 border-b-4 rounded-br-[40px] shadow-2xl" />
                    <div className='absolute top-20 lg:right-20 md:right-4'>
                        <motion.img
                            animate={{ y: [8, 0, 8] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            src='/trust.png' alt="" />
                    </div>
                    <div className='absolute bottom-12 left-8'>
                        <motion.img
                            animate={{ y: [8, 0, 8] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            src='/job.png' alt="" />
                    </div>
                </div>
                <div className='lg:max-w-[50%] max-w-[700px]  '>
                    <h1 className="text-5xl  font-bold">Latest <motion.span animate={{ color: ['#3af146', '#3af1db', '#f13aee'] }}
                        transition={{ duration: 2, repeat: Infinity }}>Jobs</motion.span> For You</h1>
                    <p className="py-6   ">
                        Each month, more than 3 million job seekers turn to
                        website in their search for work, making over 140,000
                        applications every single day
                    </p>
                    <div className='bg-white shadow-xl md:w-[90%] flex justify-between p-4 rounded-xl'>
                        <div className='flex'>
                        <select
                            onChange=''
                            className="p-2 border-0 outline-0 "

                            name=""
                            id=""
                        >
                            <option value="Industry">Industry</option>
                            <option value="Software"> Software</option>
                            <option value="Finance"> Finance</option>
                            <option value="Development"> Development</option>
                            <option value="Management"> Management</option>
                            <option value="Advertising"> Advertising</option>
                            <option value="Content Writer"> Advertising</option>
                        </select>
                        <select
                            onChange=''
                            className="p-2 lg:ml-4 outline-0 border-0 "

                            name=""
                            id=""
                        >
                            <option value="Location">Location</option>
                            <option value="Bangladesh"> Bangladesh</option>
                            <option value="India"> India</option>
                            <option value="America"> America</option>
                            <option value="China"> China</option>
                            <option value="UAE"> UAE</option>
                        </select>
                        </div>
                        <div>
                        <button className="btn btn-primary">Search</button>
                        </div>
                    </div>

                    <p className='mt-6'>Popular Search : <Link className='btn btn-link px-1'>Development</Link> <Link className='btn btn-link px-1'>Software</Link><Link className='btn btn-link px-1'>Advertising</Link></p>
                    

                    
                </div>
            </div>
        </div>
    );
};

export default Banner;