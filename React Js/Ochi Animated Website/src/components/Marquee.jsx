import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed='0.1' className='w-full  py-20 bg-[#004D43] rounded-t-lg'>
            <div className="text border-t-2 border-b-2 border-zinc-300  flex overflow-hidden whitespace-nowrap ">
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{ ease: 'linear', repeat: Infinity, duration: 5 }}
                    className='text-[24vw] leading-none font-["FoundersGrotesk"] uppercase font-semibold mb-8 pt-2 pr-20'>We are ochi</motion.h1>
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{ ease: 'linear', repeat: Infinity, duration: 5 }} className='text-[24vw] leading-none font-["FoundersGrotesk"] uppercase font-semibold mb-8 pt-2 pr-20'>We are ochi</motion.h1>
                
            </div>
        </div>
    );

};

{/* <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear',repeat:Infinity,duration: 5}} className='text-[17vw] leading-none font-["FoundersGrotesk"] uppercase font-semibold mb-6 pt-8'>We are ochi</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear',repeat:Infinity,duration: 5}} className='text-[17vw] leading-none font-["FoundersGrotesk"] uppercase font-semibold mb-6 pt-8'>We are ochi</motion.h1> */}

export default Marquee;