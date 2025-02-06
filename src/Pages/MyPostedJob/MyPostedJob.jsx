import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';
import { Link } from 'react-router-dom';

const MyPostedJob = () => {
    const { user } = useAuth();
    const [mypostedData, setMypostedData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setMypostedData(result)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [user.email])
    return (
        <div>
            <h2 className='text-center font-bold text-3xl'>My Posted Jobs {mypostedData.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Company logo</th>
                                <th>company name</th>
                                <th>Category</th>
                                <th>Applications</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mypostedData.map((job, indx) => <tr>
                                    <td key={indx}>

                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo} />
                                            </div>
                                        </div>

                                    </td>
                                    <td>
                                        {job.company}
                                        
                                    </td>
                                    <td>{job.category}</td>
                                    <th>
                                       <Link to={`/view-applications/${job._id}`}>
                                       <button className="btn btn-primary">view applications</button></Link>
                                    </th>
                                </tr>)

                            }

                        </tbody>


                    </table>
                </div>

            </div>

        </div>
    );
};

export default MyPostedJob;