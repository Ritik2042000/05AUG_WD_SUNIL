import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home/home'
import Login from './pages/Login/login'
import Player from './pages/Player/player'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './auth/firebase'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate('/')
      } else {
        navigate('/login')
      }
    })
  }, [])


  return (
    <>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </>
  )
}

export default App
