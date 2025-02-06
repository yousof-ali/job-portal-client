
import React from 'react';
import useAuth from '../../Hook/useAuth';
import Swal from 'sweetalert2';

const Addjob = () => {
    const { user } = useAuth();
    const handleAddJOb = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries())
        const { min, max, currency, ...newjob } = initialData;
        newjob.salaryRange = { min, max, currency };
        newjob.requirements = newjob.requirements.split('\n')
        newjob.responsibilities = newjob.responsibilities.split('\n')

        fetch('http://localhost:5000/add-job', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newjob)
        }).then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    Swal
                        .fire({
                            title: "Added a new job",
                            icon: "success",
                            draggable: true
                        });
                    navigate('/my-applications')
                }
            })
            .catch((err) => {
                console.log(err.message)
            })
    };
    return (
        <div className='hero hero-content min-h-[70vh]'>
            <div className="card   bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleAddJOb} className="card-body">
                    {/* title  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="title" className="input input-bordered" required />
                    </div>
                    {/* location  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" name='location' placeholder="Location" className="input input-bordered" required />
                    </div>
                    {/* type  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Type</span>
                        </label>
                        <select name="jobType" defaultValue="Select job type" className="select select-bordered w-full max-w-xs" required>
                            <option disabled>Select job type</option>
                            <option>Remote</option>
                            <option>Part-Time</option>
                            <option>Contractual</option>
                            <option>Intern</option>
                            <option>Hybrid</option>
                            <option>Full-Time</option>
                        </select>
                    </div>
                    {/* category  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job Category</span>
                        </label>
                        <select defaultValue={'Select job category'} name='category' className="select select-bordered w-full max-w-xs">
                            <option disabled >Select job category</option>
                            <option>Data Science</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>Marketing</option>
                            <option>Teaching</option>
                            <option>Management</option>
                            <option>Design</option>
                            <option>Development</option>
                        </select>
                    </div>
                    {/* salary  */}
                    <p>Salary Range</p>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Min</span>
                            </label>
                            <input name='min' type="number" placeholder="Min" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Max</span>
                            </label>
                            <input name='max' type="number" placeholder="Max" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Currency</span>
                            </label>
                            <select defaultValue={'select currency'} name='currency' className="select select-bordered w-full max-w-xs ">
                                <option disabled >select currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>INR</option>
                            </select>
                        </div>
                    </div>
                    {/* company  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company</span>
                        </label>
                        <input name='company' type="text" placeholder="Company" className="input input-bordered" required />
                    </div>
                    {/* date  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input name='applicationDeadline' type="date" placeholder="Deadline" className="input input-bordered" required />
                    </div>
                    {/* description  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered" required placeholder="Description"></textarea >
                    </div>
                    {/* requirements  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Requirements</span>
                        </label>
                        <textarea name='requirements' className="textarea textarea-bordered" required placeholder="Each reqquirements in new line"></textarea >
                    </div>
                    {/* responsibilities  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Responsibilities</span>
                        </label>
                        <textarea name='responsibilities' className="textarea textarea-bordered" required placeholder="Each Responsibilities in new line"></textarea >
                    </div>
                    {/* status  */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <select defaultValue={"select status"} name='status' className="select select-bordered w-full max-w-xs ">
                            <option disabled >select status</option>
                            <option>Active</option>
                            <option>offline</option>
                        </select>
                    </div>
                    {/* name      */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR Name</span>
                        </label>
                        <input name='hr_name' defaultValue={user?.displayName} type="text" placeholder="Name" className="input input-bordered" required readOnly />
                    </div>
                    {/* email      */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">HR Email</span>
                        </label>
                        <input defaultValue={user?.email} name='hr_email' type="email" placeholder="Email" className="input input-bordered" required readOnly />
                    </div>
                    {/*logo*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company logo</span>
                        </label>
                        <input name='company_logo' type="url" placeholder="logo URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">submit</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Addjob;