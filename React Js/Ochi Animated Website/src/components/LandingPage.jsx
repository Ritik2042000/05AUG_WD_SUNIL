import React from 'react';

const LandingPage = () => {
    return (
        <div className='w-full h-screen bg-zinc-900 pt-1 '>
            <div className="textstructer mt-64 mt px-20">
                {['We Create', 'Eye Opening', 'Presentaions'].map((data, index) => {
                    return <div className="masker font-[FoundersGrotesk] " key={index}>
                        <h1 className='uppercase text-[7.7vw] leading-[5.5vw]  font-semibold'>{data}</h1>
                    </div>
                })}
            </div>

            <div className="border-t-[2px] border-zinc-600 mt-32 flex justify-between items-center py-5 px-20">
                {['For public and private companies', 'From the first pitch to IPO'].map((data, index) => {
                    return <p className="text-md font-light tracking-tight leading-none" key={index}>{data}</p>
                })}
            </div>
            <div className="start">
                <div className="px-5">start the Project</div>
            </div>
        </div>

    );
};

export default LandingPage;