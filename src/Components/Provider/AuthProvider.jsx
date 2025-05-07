import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Authentication';
export const AuthContext = createContext() ;

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null) ;
    const [loading,setLoading] = useState(true);

    useEffect(()=> {

        const unSubscribe = onAuthStateChanged(auth,(user)=>{
            setUser(user);
            setLoading(false);
        });
        return unSubscribe ;
    },[]);

    console.log(user?.photoURL);
    const authData = {
        user,
        setUser,
        loading,
        setLoading,
    };


    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;