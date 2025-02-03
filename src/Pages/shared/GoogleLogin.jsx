import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import AuthContext from '../../Contex/AuthContex/AuthContex';
import { useLocation, useNavigate } from 'react-router-dom';


const GoogleLogin = () => {
    const location = useLocation();
    const from = location.state || "/";
    const navigate = useNavigate();
    const {googleLogin} = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result.user);
            navigate(from);
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