import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

const LandingPage = () => {

    return (
        <div data-scroll data-scroll-section data-scroll-speed='-0.3' className='w-full h-screen bg-zinc-900 pt-1 '>
            <div className="textstructer mt-32 mt px-20">
                {['We Create', 'Eye Opening', 'Presentaions'].map((data, index) => {
                    return <div className="masker" key={index} >
                        <div className="w-fit flex">
                            {index === 1 && (<motion.div initial={{ width: 0 }} animate={{ width: '9vw' }} transition={{ ease: [0.76,0,0.2,1], duration: 0.9 }} className='mr-[1vw] w-[9vw] relative top-[1.1vw] h-[5vw]  rounded-md bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")]' >
                                {/* <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /> */}
                            </motion.div>)}
                            <h1 className='flex items-center h-full uppercase text-[7.7vw] leading-[6.5vw]  font-semibold font-[FoundersGrotesk]'>{data}</h1>
                        </div>
                    </div>
                })}
            </div>

            <div className="border-t-[2px] border-zinc-600 mt-32 flex justify-between items-center py-5 px-20 text-lg">
                {['For public and private companies', 'From the first pitch to IPO'].map((data, index) => {
                    return <p className="text-md font-light tracking-tight leading-none" key={index}>{data}</p>
                })}
                <div className="start flex gap-10">
                    <div className="px-5 py-2 border-[2px] border-zinc-500 font-light rounded-full uppercase text-lg">start the Project</div>
                    <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full"><span className='rotate-[45deg]'>
                        <FaArrowUpLong /></span></div>
                </div>
            </div>
        </div>

    );
};

export default LandingPage;