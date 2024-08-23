import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Login from './pages/Login/login'
import Player from './pages/Player/player'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </>
  )
}

export default App
