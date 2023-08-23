import React, { useEffect } from 'react';
import Card from '../UI/Card'
const Trainer = ({ image, name, socials, job }) => {



    
    return (
        <Card className='trainer'>
            <div className="trainer__image">
                <img src={image} alt="" />
                <h3>{name}</h3>
                <p>{job}</p>
                <div className="trainer__socials">
                    {
                        socials.map(({ icon, link, }, index) => {
                                return <a href={link} key={index} target='_blank'>{icon}</a>
                        })
                    }
                </div>
            </div>
        </Card>
    );
};

export default Trainer;