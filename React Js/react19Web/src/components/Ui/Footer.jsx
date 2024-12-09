import React from 'react';
import footerData from '../../api/footerData.json'
import { MdPlace } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';
import { TbMailPlus } from 'react-icons/tb';
const Footer = () => {
    const footerIcon = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />
    }
    return (
        <footer className='footer-section'>
            <div className="container grid grid-three-cols">
                {footerData.map((data) => {
                    return <div className="footer-contact" key={data.title}>
                        <div className="icon">
                            {footerIcon[data.icon]}
                        </div>
                        <div className="footer-contact-text">
                            <p>{data.title}</p>
                            <p>{data.details}</p>

                        </div>
                    </div>
                })}
            </div>
            <div className="cpoyright-area">
                <div className="container">
                    <div className="grid grid-two-col">
                        <div className="cpoyright-text ">
                            <p>
                                Copyright &copy; 2024,All Right Reseved.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;