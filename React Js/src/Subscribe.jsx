import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Subscribe to watch all content on Disney+ Hotstar</h3>
                        <div className="box">
                            <table>
                                <tr>
                                    {/* <td></td> */}
                                    <td colSpan={1}></td>
                                    <td className='mid back-chnge clr-chng'> Super</td>
                                    <td className='mid'>Premium</td>
                                </tr>
                                <tr>
                                    <td rowSpan={1} className='lef'>All contect
                                        <br />
                                        <span className='movie'>Movies, live sports, TV, Specials</span>
                                    </td>
                                    <td className='back-chnge'><i class="fa-solid fa-check"></i></td>
                                    <td ><i class="fa-solid fa-check"></i></td>
                                </tr>
                                <tr>
                                    <td className='lef'>Watch on TV or Laptop</td>
                                    <td className='back-chnge'><i class="fa-solid fa-check"></i></td>
                                    <td ><i class="fa-solid fa-check"></i></td>
                                </tr>
                                <tr>
                                    <td className='lef'>Ads free movies and shows (except sports)</td>
                                    <td className='back-chnge'><i class="fa-solid fa-xmark"></i></td>
                                    <td ><i class="fa-solid fa-check"></i></td>
                                </tr>
                                <tr>
                                    <td className='lef'>Number of devices that can be logged in</td>
                                    <td className='back-chnge'>2</td>
                                    <td >4</td>
                                </tr>
                                <tr>
                                    <td className='lef'>Max video quality</td>
                                    <td className='back-chnge'>Full HD(1080p)</td>
                                    <td >4K (2160p)</td>
                                </tr>
                                <tr>
                                    <td className='lef'>Max audio quality</td>
                                    <td className='back-chnge bor-rad'>Dolby 5.1</td>
                                    <td >Dolby 5.1</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subscribe;