import React, { useEffect } from 'react';
import  './../plans/plans.css';
import { plans } from '../../data';
import Header from '../../component/Header';
import HeaderImage from '../../images/header_bg_4.jpg';
import Card from '../../UI/Card';

const Plans = () => {
   
    useEffect (()=> {
        window.scrollTo({top:0,behavior:"auto"})
    })
   
   
    return (
        <>
          <Header title='Membership plans' image={HeaderImage}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis accusamus a labore corrupti, rerum, maiores voluptate perspiciatis exercitationem magni quas consequatur! Incidunt, dolores sapiente ex illo ad omnis quia atque?
          </Header>
          <section className='plans'>
            <div className="container plans__container">
                    {
                        plans.map(({id,name,desc,price,features})=>{
                            return <Card key={id} className='plan'>
                                <h3>{name}</h3>
                                <small>{desc}</small>
                                <h1>{`$${price}`}</h1><h2>/mo</h2>
                                <h4>Feature</h4>
                                {
                                    features.map(({feature,available},index) => {
                                        return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                                    })
                                }

                                <button className='btn lg'>Choose Plan</button>
                            </Card>
                        })
                    }
            </div>
          </section>
        </>
    );
};

export default Plans;