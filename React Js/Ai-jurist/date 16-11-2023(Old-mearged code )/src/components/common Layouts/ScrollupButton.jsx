
import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollupButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <button
                className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
                onClick={scrollToTop}>
               <AiOutlineArrowUp/>
            </button>

        </div>
    );
};




export default ScrollupButton;