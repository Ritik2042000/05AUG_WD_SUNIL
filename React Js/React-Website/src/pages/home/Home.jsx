import React, { useEffect } from 'react';
import './home.css';
import MainHeader from '../../component/MainHeader';
import Programs from '../../component/Programs';
import Values from '../../component/Values';
import FAQs from '../../component/FAQs';
import Testimonials from '../../component/Testimonials';
import Footer from '../../component/Footer';

const Home = () => {
    
    useEffect (()=> {
        window.scrollTo({top:0,behavior:"auto"})
    })
    
    return (
        <>
            <MainHeader />
            <Programs />
            <Values />
            <FAQs />
            <Testimonials />
            {/* <Footer /> */}
        </>
    );
};

export default Home;