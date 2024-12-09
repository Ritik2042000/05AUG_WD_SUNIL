
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Country from './pages/Country'
import AppLayout from './components/Layout/AppLayout'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      // {
      //   path: "country/:id",
      //   element: <CountryDetails />,
      // },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
return <RouterProvider router={router}></RouterProvider>
}

export default App
