import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SIgnIn from "../Pages/SignIn/SIgnIn";
import JobDetails from "../Pages/jobDetails/JobDetails";
import PrivateRouter from "./PrivateRouter";
import JobApply from "../Pages/JobApply/JobApply";
import Myjob from "../Pages/MyJob/Myjob";
import Addjob from "../Pages/AddJob/Addjob";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import ViewApplications from "../Pages/vewApplication/ViewApplications";


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
        },
        {
            path:'/signIn',
            element:<SIgnIn></SIgnIn>
        },
        {
            path:'/job-apply/:id',
            element:<PrivateRouter><JobApply></JobApply></PrivateRouter>
        },
        {
           path:'/my-applications',
           element:<PrivateRouter><Myjob></Myjob></PrivateRouter>
        },
        {
          path:'/my-posted-jobs',
          element:<PrivateRouter><MyPostedJob></MyPostedJob></PrivateRouter>
        },
        {
          path:'/view-applications/:id',
          element:<PrivateRouter><ViewApplications></ViewApplications></PrivateRouter>
          
        },
        {
          path:'/add-job',
          element:<PrivateRouter><Addjob></Addjob></PrivateRouter>
        },
        {
          path:'/job-details/:id',
          element:<PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
          loader:({params}) => fetch(`https://job-portal-server-two-bice.vercel.app/jobs/${params.id}`)
        }
    ]
  },
]);

export default router;