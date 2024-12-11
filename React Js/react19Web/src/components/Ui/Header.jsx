import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [isHemOpen,setIsHemOpen] = useState(false)

    const handleButtonToggle = () => {
        setIsHemOpen(!isHemOpen)
    }

    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="logo">
                        <NavLink to='/'>
                            <h1>WorldAtlas</h1>
                        </NavLink>
                    </div>
                    <nav className={isHemOpen ? 'menu-mobile' :'menu-web'}>
                        <ul>
                            <li>
                                <NavLink to='/'>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/country'>
                                    Country
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="ham-menu">
                        <button onClick={handleButtonToggle}>
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;