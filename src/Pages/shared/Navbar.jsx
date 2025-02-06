import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../Contex/AuthContex/AuthContex';

const Navbar = () => {
    const{user,signOutUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const links = <>
    <li>< NavLink to={'/'}>Home</NavLink></li>
    {
      user&& <><li>< NavLink to={'/my-applications'}>My Applications</NavLink></li>
      <li>< NavLink to={'/add-job'}>Add Job</NavLink></li></> 
    }
   
    </>

    const handleSignOut = () => {
        signOutUser()
        .then(() => {
            console.log('sign out')
            navigate('/')
            
        })
        .catch((err) => {
            console.log(err.message);
        })
    };

    return (
        <div className="navbar bg-base-300">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a href='/' className=" px-4 cursor-pointer  text-xl"><img className='w-10' src="/logo.png" alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
        !user?<>
        <Link to={'/register'} className='btn btn-link mr-2'>Register</Link>
        <Link to={'/signIn'} className="btn btn-primary">Sign In</Link>
        </>:<button onClick={handleSignOut} className='btn btn-primary'>Log Out</button>
    }
    
  </div>
</div>
    );
};

export default Navbar;