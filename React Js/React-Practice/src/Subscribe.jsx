import React, { useState } from 'react';
import './Subscribe.css'
import Header from './headerofsub.jsx'

const Subscribe = () => {
    const [superback, setSuperback] = useState('blue')
    const [premiumback, setPremiumback] = useState('black')
    const [premiumyellow, setPremiumyellow] = useState('clr-chng')

    const changeThemenormal = () => {
        setSuperback((color) => (color = 'blue'));
        setPremiumback((color) => (color = 'black'))
        setPremiumyellow((color)=>(color = 'clr-chng'))
        console.log('blue');
    };
    const changeTheme = () => {
        setSuperback((color) => (color = 'black'));
        setPremiumback((color) => (color = 'blue'))
        // setPremiumyellow((color)=>(color = 'clr-chng'))
        console.log('black');
    };
    return (
        <>
            <Header />
            <div className="container-fluid bg">
                <div className="row">
                    <div className="col ">
                        <h3>Subscribe to watch all content on Disney+ Hotstar</h3>
                        <div className="box">
                            <table>
                                <tr>
                                    <td colSpan={1}></td>
                                    <td className={`mid  ${superback} ${premiumyellow} `} > Super</td>
                                    <td className={`back-chnge mid ${premiumback} ${premiumyellow}`}>Premium</td>
                                </tr>
                                <tr>
                                    <td rowSpan={1} className='lef'>All contect
                                        <br />
                                        <span className='movie'>Movies, live sports, TV, Specials</span>
                                    </td>
                                    <td className={`back-chnge ${superback}`}><i className="fa-solid fa-check"></i></td>
                                    <td className={`back-chnge ${premiumback}`}><i className="fa-solid fa-check"></i></td>
                                </tr>
                                <tr>
                                    <td className='lef'>Watch on TV or Laptop</td>
                                    <td className={`back-chnge ${superback}`}><i className="fa-solid fa-check"></i></td>
                                    <td className={`back-chnge ${premiumback}`}><i className="fa-solid fa-check"></i></td>
                                </tr>
                                <tr>
                                    <td className='lef'>Ads free movies and shows (except sports)</td>
                                    <td className={`back-chnge ${superback}`}><i className="fa-solid fa-xmark"></i></td>
                                    <td className={`back-chnge ${premiumback}`}><i className="fa-solid fa-check"></i></td>
                                </tr>
                                <tr>
                                    <td className='lef'>Number of devices that can be logged in</td>
                                    <td className={`back-chnge ${superback}`}>2</td>
                                    <td className={`back-chnge ${premiumback}`}>4</td>
                                </tr>
                                <tr>
                                    <td className='lef'>Max video quality</td>
                                    <td className={`back-chnge ${superback}`}>Full HD(1080p)</td>
                                    <td className={`back-chnge ${premiumback}`}>4K (2160p)</td>
                                </tr>
                                <tr>
                                    <td className='lef'>Max audio quality</td>
                                    <td className={`back-chnge bor-rad ${superback}`}>Dolby 5.1</td>
                                    <td className={`back-chnge  bor-rad ${premiumback}`}>Dolby 5.1</td>
                                </tr>
                            </table>
                            <div className="plans">
                                <button className={`plans-box poi-rel ${superback}`} onClick={changeThemenormal}>
                                    <p>Super</p>
                                    <p>899/<span>Year</span></p>
                                    <i className="fa-solid fa-check poi-ab check-mark"></i>
                                </button>
                                <button className={`plans-box ${premiumback}`} onClick={changeTheme}>
                                    <p>Premium</p>
                                    <p>1499/<span>Year</span></p>
                                </button>
                                <button className={`plans-box ${premiumback}`} onClick={changeTheme}>
                                    <p>Premium</p>
                                    <p>299/<span>Month</span></p>
                                </button>
                            </div>
                            <button className='btn btn-2'>CONTINUE WITH SUPER <i className="fa-solid fa-chevron-right"></i> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subscribe;