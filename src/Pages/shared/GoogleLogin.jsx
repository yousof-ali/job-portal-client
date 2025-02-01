import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import AuthContext from '../../Contex/AuthContex/AuthContex';


const GoogleLogin = () => {
    const {googleLogin} = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result.user);
        })
        .catch((err) => {
            console.log(err.message);
        })
    };
    return (
        <div>
           <div className="divider divider-neutral">Or</div>
           <button onClick={handleGoogleLogin} className='btn w-full'><FaGoogle /> Google
           </button>
        </div>
    );
};

export default GoogleLogin;