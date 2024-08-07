import { createBrowserRouter } from "react-router-dom";
import HeaderComponent from "./Component/header"
import Home from "./Home";
import About from "./About";
import Example from "./Example";
import Login from "./Login.jsx";
import Apidata from "./Apidata";
import Register from "./Register";
// import Subscribe from "./Subscribe.jsx";
import React, { Suspense } from "react";
import Checklogin from "./checklogin";
import AdminDashboard from "./Admin/AdminDashboard";
import TimeTrecker from "./TimeTrecker";

const AdminRouter = React.lazy(()=> import('./Admin/AdminRouter'))
// const ClassCompoRouter = React.lazy(()=> import('./Type of Component/Class Component/ClassCompoRouter'))
// const FunctionalCompoRouter = React.lazy(()=> import('./Type of Component/Functional Component/FunctionalcompoRouter'))
const MainRouter = createBrowserRouter([
    {
       
      path: "/",
      element: <><HeaderComponent/><Home/></>,
      },
      {
        path: "/About",
        element:<><HeaderComponent/><About/></>,
      },
      {
        path: "/Apidata",
        element:<><HeaderComponent/><Apidata/></>,
      },
      {
        path: "/TimeTracker",
        element:<><HeaderComponent/><TimeTrecker/></>,
      },
      {
        path: "/Register",
        element:<><Register/></>,
      },
      {
        path: "/Login",
        element:<><Login/></>,
      },
      {  
        path: "/admin/*",
        element: <><Suspense fallback={<h2>Loading...</h2>}><AdminRouter/></Suspense></>,
        
      },
      {
        path: "/Example",
        element:<><HeaderComponent/><Example/></>,
        // children: [
        //   {
        //     path: "classcompo/*",
        //     element:<Suspense fallback={<h3>Loading Please Wait.....</h3>}><ClassCompoRouter/></Suspense>,
        //   },
        //   {
        //     path: "functionalcompo/*",
        //     element:<Suspense fallback={<h3>Loading Please Wait.....</h3>}><FunctionalCompoRouter/></Suspense>
        //   }
        // ]
      }
      
    //   {
    //     path: "/Subscribe",
    //     element:<><Subscribe/></>,
    //   },
    ]);
    export default MainRouter;