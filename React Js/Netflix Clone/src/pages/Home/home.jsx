import React from 'react';
import './home.css'
import Navbar from '../../components/Navbar/navbar';
import heroBanner from '../../assets/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png'
import playIcon from '../../assets/Play_icon.png'
import infoIcon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/titleCards';



const home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="hero">
                <img src={heroBanner} alt="" className='banner-img' />
                <div className="hero-caption">
                    <img src={heroTitle} alt="" className='caption-img' />
                    <p>Discovering his ties to a secret ancient order, a young man thing in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
                    <div className="hero-btns">
                        <button className='btn'><img src={playIcon} alt="" />Play</button>
                        <button className='btn dark-btn'><img src={infoIcon} alt="" />More Info</button>
                    </div>
                    <TitleCards />
                </div>
            </div>

            <div className="more-cards">
                <TitleCards />
                <TitleCards />
                <TitleCards />
                <TitleCards />
            </div>
        </div>
    );
};

export default home;