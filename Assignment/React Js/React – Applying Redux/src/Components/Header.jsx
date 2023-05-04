import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="header">
                <Link to={'/'}>Home</Link>
                <Link to={'/user'}>User</Link>
            </div>
        </>
    );
};

export default Header;