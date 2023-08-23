import React, { useEffect } from 'react';
import Header from '../../component/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import { trainers } from '../../data'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import Trainer from '../../component/Trainer';
import './trainer.css';

const Trainers = () => {
 
    useEffect (()=> {
        window.scrollTo({top:0,behavior:"auto"})
    })
    return (
        <>
            <Header title='Our Trainers' image={HeaderImage}> Id quisquam alias consectetur libero quia impedit dignissimos, odio in aperiam iusto inventore aut natus reiciendis aliquid doloribus rem aliquam? Cum, itaque?</Header>
            <section className="trainers">
                <div className="container trainers__container">
                    {
                        trainers.map(({id,image,name,job,socials})=> {
                          return  <Trainer key={id} image={image} name={name} job={job} socials={[
                                {icon:<BsInstagram/>,link: socials[0]},
                                {icon:<AiOutlineTwitter/>,link: socials[1]},
                                {icon:<FaFacebookF/>,link: socials[2]},
                                {icon:<FaLinkedinIn/>,link: socials[3]},
                                // {icon:<BsInstagram/>,link: socials[0]},
                            ]}/>                  
                        })
                    }

                </div>
            </section>
        </>
    );
};

export default Trainers;