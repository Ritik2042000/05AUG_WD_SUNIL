
import Layout from './components/layout.tsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import WeatherDashboard from './components/pages/WeatherDashboard'
import CityPage from './components/pages/CityPage'

function App() {

  return (
    <>
     <Layout>
      <Routes>
        <Route path = '/' element={<WeatherDashboard/>} />
        <Route path = '/city/:city' element={<CityPage/>} />
      </Routes>
     </Layout>
    </>
  )
}

export default App
