import React from 'react';

const Marquee = () => {
    return (
        <div className='w-full  py-20 bg-[#004D43] rounded-t-lg'>
            <div className="text border-t-2 border-b-2 border-zinc-300  flex gap-10 overflow-hidden whitespace-nowrap">
                <h1 className='text-[22vw] leading-none font-["FoundersGrotesk"] uppercase font-semibold mb-[4vw] pt-8'>We are ochi</h1>
                <h1 className='text-[22vw] leading-none font-["FoundersGrotesk"] uppercase font-semibold mb-[4vw] pt-8'>We are ochi</h1>
            </div>
        </div>
    );

};

{/* <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear',repeat:Infinity,duration: 5}} className='text-[17vw] leading-none font-["FoundersGrotesk"] uppercase font-semibold mb-6 pt-8'>We are ochi</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:'linear',repeat:Infinity,duration: 5}} className='text-[17vw] leading-none font-["FoundersGrotesk"] uppercase font-semibold mb-6 pt-8'>We are ochi</motion.h1> */}

export default Marquee;