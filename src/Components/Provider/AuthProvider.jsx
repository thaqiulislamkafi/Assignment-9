import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Authentication';
export const AuthContext = createContext() ;

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null) ;

    useEffect(()=> {

        const unSubscribe = onAuthStateChanged(auth,(user)=>{
            setUser(user);
        });
        return unSubscribe ;
    },[]);

    console.log(user);
    const authData = {
        user,
        setUser,
    };


    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;