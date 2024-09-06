import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';

const Featured = () => {

    const card = [useAnimation(), useAnimation()]

    const handleHover = (index) => {
        card[index].start({ y: '0' })
    }

    const handleHoverEnd = (index) => {
        card[index].start({ y: '100%' })

    }

    return (
        <div className='w-full py-20 '>
            <div className='w-full px-20 border-b-[1px]  border-zinc-700 pb-20 '>
                <h1 className='text-[4vw] font-["NeueMontreal"] tracking-tight'>Featured Projects</h1>
            </div>
            <div className="px-20">
                <div className="relative z-10 cards w-full flex gap-10 items-center justify-center mt-10">
                    <motion.div className=" card-container w-1/2 h-[75vh] " onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)}>
                        <h2 className='text-white flex items-center gap-2'><span className='bg-green-500 rounded-full h-[15px] w-4 block'></span>CARDBOARD SPACESHIP</h2>
                        <h1 className='absolute z-10 flex text-[6vw] text-[#CDEA68] font-[FoundersGrotesk] right-0 -translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden' >
                            {'CARDBOARD SPACESHIP'.split("").map((item, index) => <motion.span initial={{ y: '100%' }} animate={card[0]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }} className='inline-block'>{item}</motion.span>)}
                        </h1>
                        <div className="w-full h-full rounded-xl overflow-hidden">
                            <img src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="CARDBOARD SPACESHIP" className='w-full h-full' />
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className="card-container w-1/2 h-[75vh] relative" >
                        <h2 className='text-white flex items-center gap-2'><span className='bg-green-500 rounded-full h-[15px] w-4 block'></span>AH2 & MATTHRON</h2>
                        <h1 className='absolute text-[6vw] text-[#CDEA68] font-[FoundersGrotesk] left-0  top-32 -translate-x-1/2 translate-y-1/2 overflow-hidden '>{'AH2 & MATTHRON'.split('').map((item, index) => <motion.span initial={{ y: '100%' }} animate={card[1]} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }} className='inline-block' >{item}</motion.span>)}
                        </h1>
                        <div className="w-full h-full rounded-xl overflow-hidden">
                            <img src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" className='w-full h-full' />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Featured;