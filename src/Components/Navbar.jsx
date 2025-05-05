import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className='Navbar-three-colomn w-[85.94vw] mx-auto sora-font'>
                <div className='logo flex items-center gap-1'>
                    <img className='w-10' src="https://i.postimg.cc/rprF9z6y/vecteezy-letter-e-elegant-golden-ratio-modern-monogram-logo-22188510.png" alt="" />
                    <p className='text-2xl poppins'>
                        <span className='font-bold'>Eventure</span>
                    </p>
                </div>
                <div className='pageButtton'>
                    <ul className='Nav-mid mt-0.5 poppins'>
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/listedBooks"}>Blog</NavLink>
                        
                        
                    </ul>
                </div>
                <div className='Nav-last items-center'>
                    <div><button className='Button bg-[#23BE0A] text-white'>Sign In</button></div>
                   
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;