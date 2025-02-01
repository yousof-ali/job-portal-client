import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/team/team1.webp'
import team2 from '../../assets/team/team2.webp'


const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className='w-[40%] relative'>
                <motion.img
                    src={team1}
                    animate={{y: [0,50,0]}}
                    transition={{duration:10,repeat:Infinity}}
                    className="max-w-sm w-70  rounded-t-[40px] border-l-4 border-blue-700 border-b-4 rounded-br-[40px] shadow-2xl" />
                <motion.img
                    src={team2}
                    animate={{x: [200,150,200]}}
                    transition={{duration:10,repeat:Infinity}}
                    className="max-w-sm w-70  rounded-t-[40px] border-l-4 border-blue-700 border-b-4 rounded-br-[40px] shadow-2xl" />
                    <div className='absolute  top-20 lg:right-20 md:right-4'>
                        <motion.img 
                        animate={{y:[8,0,8]}}
                        transition={{duration:2,repeat:Infinity}}
                        src='/trust.png' alt="" />
                    </div>
                    <div className='absolute bottom-12 left-8'>
                        <motion.img 
                        animate={{y:[8,0,8]}}
                        transition={{duration:2,repeat:Infinity}}
                        src='/job.png' alt="" />
                    </div>
                </div>
                <div className='w-[50%] '>
                    <h1 className="text-5xl  font-bold">Latest <motion.span animate={{color:['#3af146','#3af1db','#f13aee']}}
                    transition={{duration:2,repeat:Infinity}}>Jobs</motion.span> For You</h1>
                    <p className="py-6   ">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;