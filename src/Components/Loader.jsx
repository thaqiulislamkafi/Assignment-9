import React from 'react';

const Loader = () => {
    return (
        <div>
            <div className=" flex justify-center items-center h-screen">
                <span className="loading loading-dots" style={{ width: '50px' }}></span>
            </div>
        </div>
    );
};

export default Loader;