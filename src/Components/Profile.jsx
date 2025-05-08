import React, { use, useState } from 'react';
import { AuthContext } from './Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from './Firebase/Authentication';
import { Helmet } from 'react-helmet-async';

const Profile = () => {

    const { user,setUser } = use(AuthContext);
    const [edit, setEdit] = useState(false);

    const handleEdit = ()=> {
        setEdit(true);
    }

    const  handleSubmit = (e)=> {
        e.preventDefault();
        setEdit(false);
        const name = e.target.name.value ;
        // const email = e.target.email.value ;
        const photoURL = e.target.photo.value ;

        updateProfile(auth.currentUser ,{
            displayName : name,
            photoURL : photoURL,

        })
        .then(()=>{
            setUser({...user,displayName : name, photoURL : photoURL}) ;
        })
        
    }

    return (
        <div>
            <Helmet>
                <title>Profile | {user.displayName}</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen sora-font">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold my-5">My Profile</h1>
                    </div>
                    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                        <div className="card-body">

                            {
                                edit ?
                                    <form onSubmit={handleSubmit} className="fieldset text-base font-medium lg:w-110">
                                        <p className='poppins text-xl font-medium text-center underline'>Update Profile</p>

                                        <div className='border-t-2 border-dashed border-gray-200 my-5'></div>

                                        <div className='flex items-center gap-3 my-2'>
                                            <label className="label md:mr-11">Name</label>
                                            <input type="text"
                                            name='name' className="input rounded-4xl" placeholder="Update Your Name" />

                                        </div>

                                        <div className='flex items-center gap-3 my-2'>
                                            <label className="label md:mr-11">Email</label>
                                            <input type="email"
                                            name='email' className="input rounded-4xl" placeholder="Update Your Email" />
                                        </div>

                                        <div className='flex items-center gap-3 my-2'>
                                            <label className="label md:mr-2">PhotoURL</label>
                                            <input type="text"
                                            name='photo' className="input rounded-4xl" placeholder="Update Your photoURL" />
                                        </div>

                                        <button className="btn rounded-4xl mt-4 ">Submit</button>
                                    </form>
                                    :
                                    <div>
                                        <div className='sora-font text-base space-y-3 lg:w-110'>
                                            <div className='rounded-full  my-5 text-center flex justify-center'><img className='rounded-full w-14' src={user?.photoURL} alt="" /></div>
                                            <div className='border-t-2 border-dashed border-gray-200 my-8'></div>
                                            <p>Name : {user?.displayName}</p>
                                            <p>Email : {user?.email}</p>
                                            <p>Photo URL : {user?.photoURL}</p>
                                            <div className='text-center my-6'>
                                                <button onClick={handleEdit} className='btn  rounded-4xl'>Edit Profile</button>
                                            </div>
                                        </div>
                                    </div>
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;