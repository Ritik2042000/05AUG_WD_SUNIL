import React from 'react';
import Image from '../images/values.jpg'
import { GiCutDiamond } from 'react-icons/gi'
import { values } from '../data';
import Card from '../UI/Card';
import CommonSection from './CommonSection';


const Values = () => {
    return (
        <section className="values">
            <div className="container values__container">
                <div className="values__left">
                    <div className="values__image">
                        <img src={Image} alt="Values Image" />
                    </div>
                </div>
                <div className="values__right">
                    <CommonSection icon={<GiCutDiamond />} title='values' />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem est quod quia eaque, ex maxime quam soluta tenetur ratione  explicabo et fuga consectetur unde necessitatibus quaerat voluptate voluptatem quos culpa.
                    </p>
                <div className="values__wrapper">
                        {
                            values.map(({id,icon,title,desc}) => {
                                return <Card className='values__value' key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>

                                </Card>
                            })
                        }
                </div>
            </div>
                </div>
        </section>
    );
};

export default Values;