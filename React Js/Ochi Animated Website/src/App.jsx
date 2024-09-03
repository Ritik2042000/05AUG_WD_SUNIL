
import About from './components/About'
import EyeTracking from './components/EyeTracking'
import Featured from './components/Featured'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
      <div className='w-full min-h-screen text-white bg-zinc-900'>
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <EyeTracking/>
        <Featured/>
      </div>
    </>
  )
}

export default App
