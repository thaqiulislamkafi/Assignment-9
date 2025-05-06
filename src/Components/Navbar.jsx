import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from './Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase/Authentication';
import { toast, ToastContainer } from 'react-toastify';

const Navbar = () => {

    const {user} = use(AuthContext) ;
    const handleSignOut = ()=> {

        signOut(auth).then(()=> {
            toast.success('Logged Out Successfull')         
            console.log("Sign Out SuccessFull")
        })
        .catch(error =>{
            toast.error('An error Occurred') ;
            console.log(error);
        })
    }

    return (
        <div>
            <ToastContainer></ToastContainer>
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
                        <NavLink to={"/kab"}>Blog</NavLink>
                        
                        
                    </ul>
                </div>
                <div className='Nav-last items-center'>
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