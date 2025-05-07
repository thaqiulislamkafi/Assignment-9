import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup ,updateProfile} from 'firebase/auth';
import React, { use, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router';
import { auth } from './Firebase/Authentication';
import { AuthContext } from './Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

const SignUp = () => {

    const googleProvider = new GoogleAuthProvider() ;
    const {user,setLoading,setUser} = use(AuthContext) ;
    const [close,setClose] = useState(true) ;
    const navigate = useNavigate();


    const handleToogle = ()=> {
        setClose(!close) ;
    }

    const handleGoogleSignIn = ()=> {

        signInWithPopup(auth,googleProvider)
        .then(result =>{
            toast.success('Signed in successfully',{
                toastId : 'User'
            }) ;
            setLoading(true);
            console.log(result);
        })
        .catch(error => {
            console.error(error);
        })
    }

    const handleSignUpWithEmail = (e)=> {

        e.preventDefault();
        const name = e.target.name.value ;
        const email = e.target.email.value ;
        const photoURL = e.target.photo.value ;
        const password = e.target.password.value ;


        createUserWithEmailAndPassword(auth,email,password)
        .then(res =>{
            toast.success('Account Created Successfully');
            console.log(res) ;
            setLoading(true);

            updateProfile(auth.currentUser ,{
                displayName : name,
                photoURL : photoURL
            })
            .then(()=>{
                setUser({...user,displayName : name, photoURL : photoURL}) ;
                navigate('/');

            })

        })
        .catch(error => {
            console.log(error) ;
        })

    }

    console.log(user);
    return (
        <div>
            <ToastContainer></ToastContainer>
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

                            <form onSubmit={handleSignUpWithEmail} className="fieldset">
                                <label className="label">Name</label>
                                <input type='text' name='name' className="input" placeholder="Name" />
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Photo URL</label>
                                <input type='text' name='photo' className="input" placeholder="Photo URL" />
                                <div className='relative'>
                                <label className="label">Password</label>
                                <input type= {close ? 'password' : 'text'} 
                                name='password' className="input" placeholder="Password" />

                                
                                <p onClick={handleToogle} className='absolute link top-8 right-7'>
                                    {close ? <FaEye /> : <IoMdEyeOff />}
                                    
                                    </p>
                                    
                                    
                                
                                
                                



                                </div>
                                <div><a className="">Already have an account? Please <Link to={'/login'}><span className='link'>Log in</span></Link></a></div>
                                <button className="btn btn-neutral mt-4">Sign Up</button>
                                <div onClick={handleGoogleSignIn} className="btn btn-outline mt-1">
                                    <span><FcGoogle size={20} /></span> <span>SignUp with Google</span></div>
                            </form >

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;