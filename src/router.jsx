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
import Dashboard from "./Components/Dashboard";
import Blog from "./Components/Blog";
import Loader from "./Components/Loader";


const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        errorElement: <Suspense fallback={<Loader />}><DynamicError></DynamicError></Suspense>,
        children: [
            {
                index: true,
                Component: Body,
                loader: () => fetch('../eventData.json')
            },
            {
                path: 'event/:id',
                element: <PrivateRoute>
                    <Suspense fallback={<Loader />}><EventDetails></EventDetails></Suspense>
                </PrivateRoute>,
                loader: () => fetch('../eventData.json'),
                // errorElement: <DynamicError></DynamicError>
            },
            {
                path: 'blog',
                element: <Suspense fallback={<Loader />}><PrivateRoute><Blog></Blog></PrivateRoute></Suspense>,
                loader: () => fetch('../blog.json'),

            },
            {
                path: 'login',
                element: <Suspense fallback={<Loader />}><LogIn></LogIn>
                </Suspense>
            },
            {
                path: 'signup',
                element: <Suspense>
                    <SignUp fallback={<Loader />}></SignUp>
                </Suspense>
            },
            {
                path: 'profile',
                element: <Suspense fallback={<Loader />}>
                    <PrivateRoute><Profile></Profile></PrivateRoute>
                </Suspense>
            },
            {
                path: 'resetPassword',
                element: <Suspense fallback={<Loader />}><ResetPassword></ResetPassword></Suspense>
            },
            {
                path: 'dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },

        ]
    },
    {
        path: '*',
        element: <Suspense fallback={
            <div className="flex items-center justify-center h-screen"><span className="loading loading-dots" style={{ width: '50px' }}></span></div>
        }
        ><Error></Error></Suspense>
    }
])

export default router;