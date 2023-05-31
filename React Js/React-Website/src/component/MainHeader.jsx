import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../images/main_header.png'

const MainHeader = () => {
    return (
            <header className='main__header'>
                <div className="container main__header_container">
                    <div className="main__header_left">
                        <h4>#100DaysWorkOut</h4>
                        <h1>Join The Legends of The Fitness World</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ex animi dolores quas similique nisi harum! Culpa alias nemo ullam, enim quaerat saepe labore quod praesentium nobis quasi earum blanditiis.</p>
                        <Link to='/plans' className='btn lg'>Get Started</Link>
                    </div>
                    <div className="main__header_right">
                        <div className="main__header-circle"></div>
                        <div className="main__header-image">
                            <img src={Image} alt="Header" />
                        </div>
                    </div>
                </div>
            </header>
    );
};

export default MainHeader;