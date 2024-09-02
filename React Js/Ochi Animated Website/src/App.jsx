
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
const  App = () => {
  return (
    <>
      <h1 className='w-full h-screen bg-zinc-900 text-white'>
        <Navbar/>
        <LandingPage/>
      </h1>
    </>
  )
}

export default App
