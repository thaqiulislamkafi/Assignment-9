import { createBrowserRouter } from "react-router";
import Home from "./Components/Home";
import Body from "./Components/Body";


const router = createBrowserRouter([
    {
        path : '/',
        Component : Home,
        children : [
            {
                index : true ,
                Component : Body
            }
        ]
    }
])

export default router ;