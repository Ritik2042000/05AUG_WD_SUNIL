import React from 'react';
import './home.css';
import MainHeader from '../../component/MainHeader';
import Programs from '../../component/Programs';
import Values from '../../component/Values';
import FAQs from '../../component/FAQs';
import Testimonials from '../../component/Testimonials';
import Footer from '../../component/Footer';

const Home = () => {
    return (
        <>
            <MainHeader />
            <Programs />
            <Values />
            <FAQs />
            <Testimonials />
            <Footer />
        </>
    );
};

export default Home;