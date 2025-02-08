import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const { id } = useParams()
    const [applications, setApplications] = useState([]);
    useEffect(() => {
        fetch(`https://job-portal-server-two-bice.vercel.app/job-applications/${id}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setApplications(result)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [id])

    const handleUpdateStatus = (e, _id) => {
        console.log(e.target.value)
        const data = {status:e.target.value}
        fetch(`https://job-portal-server-two-bice.vercel.app/setStatus/${_id}`,{
            method:"PATCH",
            headers:{
                'Content-Type': 'application/json'

            },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    Swal
                        .fire({
                            title: "Staus updated",
                            icon: "success",
                            draggable: true
                        });
                }
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <div>
            <h2 className='text-3xl font-bold  text-center'>view applications {applications.length} </h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Applicant Email</th>
                            <th>Github</th>
                            <th>Status</th>
                            <th>updade Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            applications.map((single, indx) => <tr key={indx}>

                                <td>
                                    {single?.applicant_email}
                                </td>

                                <td>
                                    <button className='btn btn-link'>{single.github}</button>
                                </td>
                                <td>
                                    {single?.status ? single.status : 'not set'}
                                </td>
                                <td>
                                    <select onChange={(e) => handleUpdateStatus(e, single._id)} defaultValue={single.status ? single.status : 'change status'} className="select select-bordered select-sm w-full max-w-xs">
                                        <option disabled >Change Status</option>
                                        <option>Under Review</option>
                                        <option>Set Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default ViewApplications;