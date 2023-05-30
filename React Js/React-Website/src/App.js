import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import NotFound from './pages/notFound/NotFound';
import About from './pages/about/About';
import Trainer from './pages/trainers/Trainer';
import Plans from './pages/plans/Plans';
import NavBar from './component/NavBar';


const App = () => {
  return (

    <BrowserRouter>
      <NavBar />
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <Trainer />
      <NotFound />
    </BrowserRouter>

  );
};

export default App;