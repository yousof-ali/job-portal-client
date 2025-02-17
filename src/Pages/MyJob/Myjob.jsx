
import { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';
import axios from 'axios';
import useAxiosSecure from '../../Hook/useAxiosSecure';

const Myjob = () => {
    const { user } = useAuth()
    const [data, setData] = useState([])
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        // fetch(`https://job-portal-server-two-bice.vercel.app/application?email=${user?.email}`)
        //     .then(res => res.json())
        // axios.get(`https://job-portal-server-two-bice.vercel.app/application?email=${user?.email}`,{withCredentials:true})
        //     .then(result => {
        //         setData(result.data)
        //     })
        axiosSecure.get(`/application?email=${user?.email}`)
            .then(result => {
                setData(result.data);
                console.log(result);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [user])
    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>My job Applications{data.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Logo</th>
                                <th>Name</th>
                                <th>Job Type</th>
                                <th>company & location</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                data.map(single => <tr key={single._id}>

                                    <td>
                                        <div className="">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={single.company_logo} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>{single?.title}</td>
                                    <th>
                                        <div className="font-bold">
                                            {single?.company}
                                        </div>
                                        <div className="text-sm opacity-50">{single?.location}</div>
                                    </th>
                                    <td><button className='btn btn-primary'>X</button></td>
                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Myjob;