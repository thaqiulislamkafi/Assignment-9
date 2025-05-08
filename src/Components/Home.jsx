import React from 'react';
import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    const location = useLocation() ;
    const isErrorPage = location.pathname === '/error' || location.pathname === '*';
    console.log(import.meta.env.VITE_base_URL) ;
    return (
        <div>
            <Helmet>
                <title>Eventure | Home</title>
            </Helmet>
           <Navbar></Navbar>
           <Outlet></Outlet>
           {!isErrorPage && <Footer></Footer>}
        </div>
    );
};

export default Home;