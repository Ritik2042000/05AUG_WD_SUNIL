import { createBrowserRouter } from "react-router-dom";
import HeaderComponent from "./Component/header"
import Home from "./Home";
import About from "./About";
import Example from "./Example";
import Login from "./Login.jsx";
import Subscribe from "./Subscribe.jsx";
import React, { Suspense } from "react";
import Pagination from "./Pagination";
import FileExplorer from "./Fileexplorer.jsx";
import Employ from "./Component/Employ";
import EmpCreate from "./Component/EmpCreate";
import EmpDetalis from "./Component/EmpDetalis";
import EmpEdit from "./Component/EmpEdit";

const ClassCompoRouter = React.lazy(() => import('./Type of Component/Class Component/ClassCompoRouter'))
const FunctionalCompoRouter = React.lazy(() => import('./Type of Component/Functional Component/FunctionalcompoRouter'))
const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <><HeaderComponent /><Home /></>,
    children: [
      //   {
      //     path: "hello/*",
      //     element: <HelloComporoute/>
      //   }
    ]
  },
  {
    path: "/About",
    element: <><HeaderComponent /><About /></>,
  },
  {
    path: "/Example",
    element: <><HeaderComponent /><Example /></>,
    children: [
      {
        path: "classcompo/*",
        element: <Suspense fallback={<h3>Loading Please Wait.....</h3>}><ClassCompoRouter /></Suspense>,
      },
      {
        path: "functionalcompo/*",
        element: <Suspense fallback={<h3>Loading Please Wait.....</h3>}><FunctionalCompoRouter /></Suspense>
      }
    ]
  },
  {
    path: "/Login",
    element: <><Login /></>,
  },
  {
    path: "/Subscribe",
    element: <><Subscribe /></>,
  },
  {
    path: "/Pagination",
    element: <><Pagination /></>,
  },
  {
    path: "/Fileexplorer",
    element: <><FileExplorer /></>,
  },
  {
    path: "/crud",
    element: <><Employ /></>,
  },
  {
    path: '/empcreate',
    element:<><EmpCreate /></>,
  },
  {
    path: "/employedit/:id",
    element: <><EmpEdit/></>,
  },
  {
    path: "/employdetalis/:id",
    element: <><EmpDetalis/></>,
  },
  


]);
export default MainRouter;