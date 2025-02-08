import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true
});

const useAxiosSecure = () => {
    const {signOutUser} = useAuth();
    const navigate = useNavigate()
    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        } ,err => {
            console.log('error caught in interceptor',err)
            if(err.status === 401 || err.status ===403){
                console.log('need to logout user');
                signOutUser()
                .then(() => {
                    navigate('/signIn')

                })
            }
            return Promise.reject(err);

        })
    } ,[])
    return axiosInstance
};

export default useAxiosSecure;