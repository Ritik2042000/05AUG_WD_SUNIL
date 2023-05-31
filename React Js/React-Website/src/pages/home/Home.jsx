import React from 'react';
import  './home.css';
import MainHeader from '../../component/MainHeader';
import Programs from '../../component/Programs';

const Home = () => {
    return (
        <>
            <MainHeader/>
            {/* <MainHeader/> */}
            <Programs/>
        </>
    );
};

export default Home;