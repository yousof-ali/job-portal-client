import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const navigate = useNavigate();
    console.log(user)

    const handleApply = (e) => {
        e.preventDefault();

        const form = e.target 
        const github = form.github.value
        const resume = form.resume.value
        const linked = form.linked.value

        const applayDetails = {
            job_id :id,
            applicant_email : user.email,
            github,
            linked,
            resume
        };

        fetch('https://job-portal-server-two-bice.vercel.app/job-application',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(applayDetails)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                Swal
                .fire({
                    title: "Apply Success",
                    icon: "success",
                    draggable: true
                  });
                  navigate('/my-applications')
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    return (
       <div className='hero bg-base-200 min-h-[80vh]'>
         <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleApply} className="card-body">
                <h2 className='text-center font-bold text-3xl py-4'>Apply</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Linked url</span>
                    </label>
                    <input type="url" name='linked' placeholder="Linked" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github url</span>
                    </label>
                    <input type="url" name='github' placeholder="Github" className="input input-bordered" required />
                    
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume url</span>
                    </label>
                    <input type="url" name='resume' placeholder="Resume" className="input input-bordered" required />
                    
                </div>
                <div className="   mt-6">
                    <button className="btn btn-primary w-full">Apply</button>
                </div>
            </form>
        </div>
       </div>
    );
};

export default JobApply;