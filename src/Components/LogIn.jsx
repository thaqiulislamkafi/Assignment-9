import React, { use } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router';
import { AuthContext } from './Provider/AuthProvider';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from './Firebase/Authentication';
import { toast, ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet-async';


const LogIn = () => {

    const {user,setLoading,setEmailValue} = use(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate() ;

    const handleGoogleSignin = () => {

        signInWithPopup(auth, googleProvider)
            .then(res => {
                toast.success('Logged In Successfull',{
                    toastId : 'login-google'
                });
                setLoading(false);
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSigninWithEmail = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                toast.success('Logged In SuccesFull',
                    {
                        toastId: 'LogIn Success'
                    });
                setLoading(false);
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleForgot = ()=> {
            navigate('/resetPassword')
    }

    return (
        <div>
            
            <Helmet>
                <title>Log In</title>
            </Helmet>

            <div className="hero bg-base-200 min-h-screen sora-font">
                <div className="hero-content flex-col gap-10 lg:flex-row my-12">
                    <div className="text-center lg:text-left">

                        <div className='logo flex items-center gap-1 justify-center md:justify-start'>
                            <img className='w-12 lg:w-20' src="https://i.postimg.cc/rprF9z6y/vecteezy-letter-e-elegant-golden-ratio-modern-monogram-logo-22188510.png" alt="" />
                            <p className='text-4xl lg:text-6xl poppins'>
                                <span className='font-bold'>Eventure</span>
                            </p>
                        </div>
                        <h1 className="text-lg lg:text-2xl font-medium sora-font my-5">Eventure helps you connect and share event with the people in your life</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">

                            <form onSubmit={handleSigninWithEmail} className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email'
                                onChange={(e)=>setEmailValue(e.target.value)}
                                className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a onClick={handleForgot} className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>

                                <div onClick={handleGoogleSignin} className="btn btn-outline mt-1">
                                    <span><FcGoogle size={20} /></span> <span>SignIn with Google</span></div>

                                <div className='text-center mt-8 font-medium'>
                                    <Link to={'/signup'}><p className='link'>Create an Account</p></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;