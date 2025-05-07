import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user,loading } = use(AuthContext);

    if(loading)
        return <Loading></Loading>

    if (user && user?.email)
        return children;

    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;

const Loading = () => {
    return (
        <div>
            <div className='min-h-screen flex justify-center items-center'>
                <span className="loading loading-bars loading-xl"></span>
            </div>
        </div>
    );
};