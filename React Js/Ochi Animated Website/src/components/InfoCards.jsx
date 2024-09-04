import React from 'react';

const InfoCards = () => {
    return (
        <div className='w-full h-screen bg-zinc- flex items-center gap-5 px-32 '>
            <div className="cardcontainer h-[50vh] w-1/2">
                <div className="card w-full h-full  bg-[#004d43] flex items-center justify-center relative">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-3 py-2 text-sm rounded-full border-2 left-5 bottom-5'>&copy;2019-24</button>
                </div>
            </div>
            <div className="cardcontainer h-[50vh] flex w-1/2 gap-5 ">
                <div className="relative card flex items-center justify-center w-full h-full  bg-[#192826]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute px-3 text-sm py-2 rounded-full border-2 left-5 bottom-5'>RATING 5.0 ON CLUTCH</button>
                </div>
                <div className="relative card w-full h-full flex justify-center items-center  bg-[#192826]">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute px-3 py-2 text-sm rounded-full border-2 left-5 bottom-5'>BUSINEES BOTCAME ALUMNI</button>
                </div>
            </div>
        </div>
    );
};

export default InfoCards;