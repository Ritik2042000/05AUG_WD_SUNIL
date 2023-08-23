import React, { useState } from 'react';
import SectionOfPrograms from "./CommonSection";
import Card from '../UI/Card';
import { ImQuotesLeft } from 'react-icons/im';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { testimonials } from '../data';



const Testimonials = () => {

    const [index, setIndex] = useState(0)
    const { name, quote, job, avatar } = testimonials[index];

    const PrevslideBtn = () => {
        setIndex(prev => prev - 1);
        if (index <= 0) {
            setIndex(testimonials.length - 1)
        }
    }
    const NextslideBtn = () => {
        setIndex(prev => prev + 1);

        if (index >= testimonials.length - 1) {
            setIndex(0)
        }
    }



    return (
        <section className="testimonials">
            <div className="container testimonials__container">
                <SectionOfPrograms icon={<ImQuotesLeft />} title='Testimonials' className='testimonials__head' />.
                <Card className='testimonial'>
                    <div className="testimonial__avatar">
                        <img src={avatar} alt={name} />
                    </div>
                    <p className="testimoai__quote">
                        {`${quote}`}
                    </p>
                    <h5>{name}</h5>
                    <small className='testimonal__title'>{job}</small>
                </Card>
                <div className="testimonals__btn-container">
                    <button className="testimonials__btn" onClick={PrevslideBtn}>
                        <IoIosArrowDropleftCircle />
                    </button>
                    <button className="testimonials__btn" onClick={NextslideBtn}>
                        <IoIosArrowDroprightCircle />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;