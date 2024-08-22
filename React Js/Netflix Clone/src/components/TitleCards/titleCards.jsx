import React, { useEffect, useRef } from 'react';
import './titleCards.css';
import cardData from '../../assets/cards/Cards_data'


const titleCards = () => {

    const cardsRef = useRef();

    const handleWheel = (e) => {
        e.preventDefault();
        cardsRef.current.scrollLeft += e.deltaY;
    }

    useEffect(() => {
        cardsRef.current.addEventListener('wheel', handleWheel)
    }, [])

    return (
        <div className='title-cards'>
            <h2>Popular on Netflix</h2>
            <div className="card-list" ref={cardsRef}>
                {
                    cardData.map((data, index) => {
                        return <div className="card" key={index}>
                            <img src={data.image} alt={data.name} />
                            <p>{data.name}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default titleCards;