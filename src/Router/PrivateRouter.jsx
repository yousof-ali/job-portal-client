import React, { useContext } from 'react';
import AuthContext from '../Contex/AuthContex/AuthContex'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {user,loading} = useContext(AuthContext);
    if(user){
        return children
    }
    if(loading){
        return <p>Loading.....</p>
    }
    return <Navigate to={'/register'} state={location?.pathname}></Navigate>;
};

export default PrivateRouter;