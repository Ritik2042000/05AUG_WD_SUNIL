import React from 'react';
import './home.css'
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
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
                    <p className='caption'>Discovering his ties to a secret ancient order, a young man thing in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
                    <div className="hero-btns">
                        <button className='btn'><img src={playIcon} alt="" />Play</button>
                        <button className='btn dark-btn'><img src={infoIcon} alt="" />More Info</button>
                    </div>
                    <TitleCards />
                </div>
            </div>

            <div className="more-cards">
                <TitleCards title={'Blockbluster Movies'}  category={'top_rated'}/>
                <TitleCards  title={'Only on Netflix'} category={'popular'}/>
                <TitleCards title={'Upcoming'} category={'upcoming'}/>
                <TitleCards  title={'Top Pic For You'} category={'now_playing'}/>
            </div>
            <Footer/>
        </div>
    );
};

export default home;