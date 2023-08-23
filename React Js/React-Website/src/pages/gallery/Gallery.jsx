import React, { useEffect } from 'react';
import Header from '../../component/Header';
import HeaderImage from '../../images/header_bg_3.jpg';
import  './gallery.css';

const Gallery = () => {
    
    useEffect (()=> {
        window.scrollTo({top:0,behavior:"auto"})
    })
    
    
    const galleryLength = 15;
    const images = []

    for (let index = 1; index <= galleryLength; index++) {
        images.push(require(`../../images/gallery${index}.jpg`));
        // console.log(images);``
    }

    return (
        <>
            <Header title='Our Gallery' image={HeaderImage}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis vero consectetur ipsam? Ratione optio temporibus repudiandae sapiente maxime eos culpa officia quasi
            </Header>
            <section className="gallery">
                <div className="container gallery__container">
                    {
                        images.map ((images,index)=>{
                            return <article key={index}>
                                <img src={images} alt={`Gallery Image ${index+1}`} />
                            </article>
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Gallery; 