import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import About from './About';
import HeroSection from '../components/Ui/HeroSection';

const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
        </>
    );
};

export default Home;