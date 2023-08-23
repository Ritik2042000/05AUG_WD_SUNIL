import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import NotFound from './pages/notFound/NotFound';
import About from './pages/about/About';
import Plans from './pages/plans/Plans';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Trainers from './pages/trainers/Trainers';


const App = () => {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path='about' element={ <About />}/>
        <Route path='contact' element={ <Contact />}/>
        <Route path='gallery' element={<Gallery />}/>
        <Route path='plans' element={ <Plans />}/>
        <Route path='trainers' element={<Trainers />}/>
        <Route path='*' element={ <NotFound />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
};

export default App;