import React from 'react';
import { useLocation, useNavigate, useRouteError } from 'react-router';

const DynamicError = () => {

    const error = useRouteError() ;
    const location = useLocation() ;

    const invalidPath = error?.pathname || window.location.pathname ;

    const navigate = useNavigate() ;
    const handleDynamicErr =()=> {
        navigate('/') ;
    }
    return (
        <div className='flex justify-center items-center h-screen text-center'>
             <div className='sora-font '>
                <p className='text-4xl my-3 font-bold'>No Event Found !</p>
                <p className='text-xl my-3 text-gray-800'>No Event Found with this Id - </p>
                <p className='my-2 text-gray-900'>{location.pathname}</p>
                <div><button onClick={handleDynamicErr} className='Button text-white bg-gray-800 my-3'>View All</button></div>
            </div>
        </div>
    );
};

export default DynamicError;

