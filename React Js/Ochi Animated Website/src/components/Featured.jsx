import React from 'react';

const Featured = () => {
    return (
        <div className='w-full py-20 '>
            <div className='w-full px-20 border-b-[1px]  border-zinc-700 pb-20 '>
                <h1 className='text-[4vw] font-["NeueMontreal"] tracking-tight'>Featured Projects</h1>
            </div>
            <div className="px-20">
                <div className="cards w-full flex gap-10 items-center justify-center mt-10">
                    <div className="card-container w-1/2 h-[75vh]  relative">
                        <h2 className='text-white flex items-center gap-2'><span className='bg-green-500 rounded-full h-[15px] w-4 block'></span>CARDBOARD SPACESHIP</h2>
                        <h1 className='absolute w-full z-[9] text-[6vw] text-[#CDEA68] font-[FoundersGrotesk] left-full -translate-x-1/2 top-1/2 -translate-y-1/2'>{'CARDBOARD SPACESHIP'.split().map((item)=> item )}</h1>
                        <div className="w-full h-full rounded-xl overflow-hidden">
                            <img src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="CARDBOARD SPACESHIP" className='w-full h-full' />
                        </div>
                    </div>
                    <div className="card-container w-1/2 h-[75vh]  relative">
                        <h2 className='text-white flex items-center gap-2'><span className='bg-green-500 rounded-full h-[15px] w-4 block'></span>AH2 & MATTHRON</h2>
                        <h1 className='absolute z-[9] text-[6vw] text-[#CDEA68] font-[FoundersGrotesk] right-full -translate-x-1/2 translate-y-1/2 '>{'AH2 & MATTHRON'.split().map((item)=>item)}</h1>
                        <div className="w-full h-full rounded-xl overflow-hidden">
                            <img src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" className='w-full h-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;