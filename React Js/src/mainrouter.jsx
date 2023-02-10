import { createBrowserRouter } from "react-router-dom";
import HeaderComponet from './Componet/header'
import Home from './Home'
import About from './About'
import Examples from './Example'
import HelloComporoute from './HelloComporoute.jsx'
import { Suspense } from "react";

const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: <><HeaderComponet/><Home/></>,
    children: [
      {
        path: "hello/*",
        element: <HelloComporoute/>
      }
    ]
  },
  {
    path: "/About",
    element:<><HeaderComponet/><About/></>,
  },
  {
    path: "/Examples",
    element:<><HeaderComponet/><Examples/></>,
    children: [
      {
        path: "classcompo/*",
        element: <classComporoute/>
      }
    ]
  },
  
]);

export default Mainrouter;