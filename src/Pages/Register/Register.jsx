import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import registrAanimation from '../../assets/registerAnimation.json'
import AuthContext from '../../Contex/AuthContex/AuthContex';
import GoogleLogin from '../shared/GoogleLogin';

const Register = () => {
    const[err,setError] = useState("");
    const{createUser,user} = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        setError('')
        const email = e.target.email.value 
        const password = e.target.password.value 
        console.log(email,password);

        if(password.length<6){
            setError('password will be 6 character 1!')
            return;
        }else if(!/^(?=.*[A-Z])/.test(password)){
            setError('use one uppercase in password ! ')
            return
          }

       createUser(email,password) 
       .then(result => {
        console.log(result.user)
       })  
       .catch((err) => {
        console.log(err.message)
       });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left max-w-[600px]">
                    <Lottie animationData={registrAanimation}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                    <h1 className="text-4xl font-bold my-4">Register Now!</h1>
                        <form onSubmit={handleRegister} className='space-y-4'>
                            <div className='form-control'>
                            <label className="fieldset-label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required/>
                            </div>
                            <div className='form control'>
                            <label className="fieldset-label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" required/>
                            </div>
                            <div>
                            {err && <p className='text-sm text-red-500'>{err}</p>}
                            </div>
                            <button className="btn w-full btn-neutral mt-4">Register</button>
                        </form>
                        <GoogleLogin></GoogleLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;