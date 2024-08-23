import React, { useEffect, useRef, useState } from 'react';
import './titleCards.css';
import cardData from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


const titleCards = ({title,category}) => {

    const [apiData,setApiData] =useState([])

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
            <h2>{title ? title : 'Popular on Netflix'}</h2>
            <div className="card-list" ref={cardsRef}>
                {
                    cardData.map((data, index) => {
                        return <Link to={`/player/${data.id}`} className="card" key={index}>
                            <img src={data.image} alt={data.name} />
                            <p>{data.name}</p>
                        </Link>
                    })
                }
            </div>
        </div>
    );
};

export default titleCards;