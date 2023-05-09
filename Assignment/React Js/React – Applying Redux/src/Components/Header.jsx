import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="header">
                <Link className='link' to={'/'}>Home</Link>
                <Link className='link' to={'/user'}>User</Link>
            </div>
        </>
    );
};

export default Header;