import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from './Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase/Authentication';
import { toast, ToastContainer } from 'react-toastify';

const Navbar = () => {

    const { user } = use(AuthContext);
    const handleSignOut = () => {

        signOut(auth).then(() => {
            toast.success('Logged Out Successfull')
            console.log("Sign Out SuccessFull")
        })
            .catch(error => {
                toast.error('An error Occurred');
                console.log(error);
            })
    }

    return (
        <div>

            <div className="navbar Navbar-three-colomn w-[85.94vw] mx-auto sora-font">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="-ml-6 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4">
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/event"}>Events</NavLink>

                            {user && <NavLink to={"/blog"}>Blog</NavLink>}
                            {user && <NavLink to={"/profile"}>My Profile</NavLink>}
                        </ul>
                    </div>
                    <div className='logo flex items-center gap-1'>
                        <img className='w-10' src="https://i.postimg.cc/rprF9z6y/vecteezy-letter-e-elegant-golden-ratio-modern-monogram-logo-22188510.png" alt="" />
                        <p className='text-2xl poppins'>
                            <span className='font-bold'>Eventure</span>
                        </p>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="">
                        <div className='pageButtton'>
                            <ul className='Nav-mid mt-0.5 poppins'>
                                <NavLink to={"/"}>Home</NavLink>
                                <NavLink to={"/event"}>Events</NavLink>

                                {user && <NavLink to={"/blog"}>Blog</NavLink>}
                                {user && <NavLink to={"/profile"}>My Profile</NavLink>}

                            </ul>
                        </div>
                    </ul>
                </div>
                <div className='Nav-last navbar-end items-center'>
                    {
                        user &&
                        <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                            <div className='rounded-full p-1 bg-base-200'>
                                <img className='rounded-full w-10' src={`${user?.photoURL}`} alt="" />
                            </div>
                        </div>
                    }

                    <div>
                        {
                            user ? <Link to={''}> <button onClick={handleSignOut} className='Button bg-[#23BE0A] text-white'>Sign Out</button> </Link>
                                :
                                <Link to={'/login'}> <button className='Button bg-[#23BE0A] text-white'>Sign In</button> </Link>
                        }

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;