import React, { useEffect, useState } from 'react';
import JobCard from '../../Components/JobCard';



const HotJobs = () => {
    const [jobs,setJobs] = useState([])

    useEffect(()=>{
        fetch('https://job-portal-server-two-bice.vercel.app/jobs')
        .then(res => res.json())
        .then(result => {
            setJobs(result)
        })
        .catch((err) => {
            console.log(err.message);
        });
    },[]);
    return (
        <div className='py-8 px-2 bg-gray-50'>
            <div>
                <h2 className='text-center font-bold text-3xl'>Recent Jobs</h2>
            </div>
            <div className='grid  grid-cols-1 py-6 gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {
                  jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;