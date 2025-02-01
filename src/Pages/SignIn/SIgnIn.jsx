import React, { useContext, useState } from 'react';
import AuthContext from '../../Contex/AuthContex/AuthContex';
import Lottie from "lottie-react";
import loginAnimation from '../../assets/loginAnimation.json'

const SIgnIn = () => {
    
    const[err,setError] = useState("");
    const{signInUser} = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        setError('')
        const email = e.target.email.value 
        const password = e.target.password.value 
        console.log(email,password);

        signInUser(email,password)
        .then(result => {
            console.log(result.user);
        })
        .catch((err) => {
            setError(err.message)
        })

    
    };
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left mb-4 lg:mb-0 max-w-[700px]">
                        <Lottie animationData={loginAnimation}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold my-4">Sign In Now!</h1>
                            <form onSubmit={handleSignIn} className='space-y-4'>
                                <div className='form-control'>
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" required />
                                </div>
                                <div className='form control'>
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" required />
                                </div>
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                <div>
                                    {err && <p className='text-sm text-red-500'>{err}</p>}
                                </div>
                                <button className="btn w-full btn-neutral mt-4">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SIgnIn;