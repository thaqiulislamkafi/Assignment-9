import { createBrowserRouter } from "react-router";
import Home from "./Components/Home";
import Body from "./Components/Body";
import EventDetails from "./Components/EventDetails";
import { Suspense } from "react";
import Error from "./Components/Error";
import DynamicError from "./Components/DynamicError";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import PrivateRoute from "./Components/Provider/PrivateRoute";
import Profile from "./Components/Profile";
import ResetPassword from "./Components/ResetPassword";


const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        children: [
            {
                index: true,
                Component: Body,
                loader: () => fetch('../eventData.json')
            },
            {
                path: 'event/:id',
                element: <PrivateRoute>
                    <Suspense fallback={<div className=" flex justify-center items-center h-screen">
                        <span className="loading loading-dots" style={{ width: '50px' }}></span>
                    </div>}><EventDetails></EventDetails></Suspense>
                </PrivateRoute>,
                loader: () => fetch('../eventData.json'),
                errorElement: <DynamicError></DynamicError>
            },
            {
                path: 'login',
                element: <LogIn></LogIn>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path : 'profile',
                element : <Profile></Profile>
            },
            {
                path : 'resetPassword',
                element : <ResetPassword></ResetPassword>
            },
            {
                path: '*',
                element: <Suspense fallback={
                    <div className="flex items-center justify-center h-screen"><span className="loading loading-dots" style={{ width: '50px' }}></span></div>
                }
                ><Error></Error></Suspense>
            }
        ]
    }
])

export default router;