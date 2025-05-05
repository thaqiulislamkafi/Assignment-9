import { createBrowserRouter } from "react-router";
import Home from "./Components/Home";
import Body from "./Components/Body";
import EventDetails from "./Components/eventDetails";
import { Suspense } from "react";



const router = createBrowserRouter([
    {
        path : '/',
        Component : Home,
        children : [
            {
                index : true ,
                Component : Body,
                loader : ()=> fetch('../eventData.json')
            },
            {
                path : 'event/:id',
                element : <Suspense fallback={<div className=" flex justify-center items-center h-screen">
                <span className="loading loading-dots" style={{width : '50px' }}></span>
                </div>}><EventDetails></EventDetails></Suspense>,
                loader : ()=> fetch('../eventData.json')
            }
        ]
    }
])

export default router ;