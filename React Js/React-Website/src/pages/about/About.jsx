import React, { useEffect } from 'react';
import Header from '../../component/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import './about.css';


const About = () => {
   
    useEffect (()=> {
        window.scrollTo({top:0,behavior:"auto"})
    })
   
   
    return (
        <>
            <Header title='About Us' image={HeaderImage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur culpa, provident quo fugit ullam quia cumque magnam maxime qui reiciendis iure aut non vitae, doloribus voluptates, aliquam quos accusantium obcaecati!
            </Header>
            <section className="about__story">
                <div className="container about__story-container">
                    <div className="about__section-image">
                        <img src={StoryImage} alt="" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Story</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, maiores, ut tempore nostrum dignissimos sint dolores non quis explicabo quaerat nisi laboriosam aliquid quod? Explicabo nihil ea harum impedit deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sed.</p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, aliquid veniam. Dolorum unde est omnis nesciunt ipsam debitis quam, dolor voluptatibus similique iure repellendus impedit adipisci, laboriosam molestias vel sunt.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate unde voluptatem cum numquam. Doloremque?
                        </p>
                    </div>
                </div>
            </section>


            <section className="about__vision">
                <div className="container about__vision-container">
                    <div className="about__section-content">
                        <h1>Our Vision</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, maiores, ut tempore nostrum dignissimos sint dolores non quis explicabo quaerat nisi laboriosam aliquid quod? Explicabo nihil ea harum impedit deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sed.</p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, aliquid veniam. Dolorum unde est omnis nesciunt ipsam debitis quam, dolor voluptatibus similique iure repellendus impedit adipisci, laboriosam molestias vel sunt.
                        </p>
                    </div>
                    <div className="about__section-image">
                        <img src={VisionImage} alt="" />
                    </div>
                </div>
            </section>

            <section className="about__mission">
                <div className="container about__mission-container">
                        <div className="about__section-image">
                            <img src={MissionImage} alt="" />
                        </div>
                    <div className="about__section-content">
                        <h1>Our Mission</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, maiores, ut tempore nostrum dignissimos sint dolores non quis explicabo quaerat nisi laboriosam aliquid quod? Explicabo nihil ea harum impedit deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sed.</p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, aliquid veniam. Dolorum unde est omnis nesciunt ipsam debitis quam, dolor voluptatibus similique iure repellendus impedit adipisci, laboriosam molestias vel sunt.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate unde voluptatem cum numquam. Doloremque?
                        </p>
                    </div>
                </div>
            </section>


        </>
    );
};

export default About;