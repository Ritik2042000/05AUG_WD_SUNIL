import React from 'react';

const About = () => {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-t-3xl text-black'>
            <h1 className='font-["NeueMontreal"] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
            <div className="w-full flex gap-5 border-t-[2px] pt-10 mt-20 border-[#b6cd64]">
                <div className='w-1/2 '>
                    <h1 className='text-[3.5vw]'>Our approach:</h1>
                    <button className='flex uppercase gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
                        <div className="w-5 h-5 bg-zinc-300 rounded-full"></div>
                    </button>
                </div>
                <div className='w-1/2 '>
                    <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" className='rounded-3xl' />
                </div>
            </div>
        </div>
    );
};

export default About;