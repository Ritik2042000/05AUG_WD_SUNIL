import { createBrowserRouter } from "react-router-dom";
import Header from './Componet/header'
// import Homemain from './Home'
import About from './About'

const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
]);

export default Mainrouter;