import { createBrowserRouter } from "react-router-dom";
import HeaderComponet from './Componet/header'
import Home from './Home'
import About from './About'
import Examples from './Example'

const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: <><HeaderComponet/><Home/></>,
  },
  {
    path: "/About",
    element:<><HeaderComponet/><About/></> ,
  },
  {
    path: "/Examples",
    element:<><HeaderComponet/><Examples/></> ,
  },
  
]);

export default Mainrouter;