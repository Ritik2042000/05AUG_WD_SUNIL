import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';

const About = () => {
    
    const data = {
        name : "Ecommerce App",
    }

    useEffect (()=> {
        window.scrollTo({top:0,behavior:"auto"})
    })
    return (
        <div>
            <HeroSection myData={data}/>
        </div>
    );
};

export default About;