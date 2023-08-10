import React from 'react';

const NavBar = () => {
    return (
        <div className='my-4 h-[60px] bg-white rounded-lg flex items-center justify-center gap-2 text-xl font-medium'>
            <figure>
                <img src="/firebase.svg" alt="logo" />
            </figure>
            <h1>FireBase Contact App</h1>
        </div>
    );
};

export default NavBar;