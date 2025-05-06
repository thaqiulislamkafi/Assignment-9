import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router';


const SignUp = () => {



    return (
        <div>
            <div className="hero bg-base-200 min-h-screen sora-font">
                <div className="hero-content flex-col lg:w-[500px] my-20">
                    <div className="text-center lg:text-left">
                        <div className='logo flex items-center gap-1 justify-center md:justify-start'>
                            <img className='w-8 lg:w-15' src="https://i.postimg.cc/rprF9z6y/vecteezy-letter-e-elegant-golden-ratio-modern-monogram-logo-22188510.png" alt="" />
                            <p className='text-3xl lg:text-5xl poppins'>
                                <span className='font-bold'>Eventure</span>
                            </p>
                        </div>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <p className='font-medium text-center text-base'>Create an Account</p>
                            <div className='border-t-2 border-dashed border-gray-200 my-4'></div>

                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type='text' className="input" placeholder="Name" />
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">Photo URL</label>
                                <input type='text' className="input" placeholder="Photo URL" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="">Already have an account? Please <Link to={'/login'}><span className='link'>LogIn</span></Link></a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <div className="btn btn-outline mt-1">
                                    <span><FcGoogle size={20} /></span> <span>SignIn with Google</span></div>
                            </fieldset>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;