import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<h2 className="text-center text-5xl font-bold">Page Not Found</h2>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
    ]
  },
]);

export default router;