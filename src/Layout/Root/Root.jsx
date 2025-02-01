import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/shared/Navbar';
import Footer from '../../Pages/shared/Footer';

const Root = () => {
    return (
        <div className='max-w-[1400px]  mx-auto '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;