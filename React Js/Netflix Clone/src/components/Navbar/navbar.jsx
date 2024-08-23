import React, { useEffect, useRef, useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profilePic from '../../assets/profile_img.png'
import caretIcon from '../../assets/caret_icon.svg'

const navbar = () => {
    const navRef = useRef();


    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if (window.scrollY >=80) {
                navRef.current.classList.add('nav-dark')
            }else{
                navRef.current.classList.remove('nav-dark')
            }
        })
    },[])

    return (
        <div ref={navRef} className='navbar'>
            <div className="navbar-left">
                <img src={logo} alt="logo img" />
                <ul>
                    <li>Home</li>
                    <li>Tv Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by languages</li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={searchIcon} alt="" className='icons' />
                <p>Children</p>
                <img src={bellIcon} alt="" className='icons' />
                <div className="navbar-profile">
                <img src={caretIcon} alt=""  />
                <img src={profilePic} alt="" className='profile' />
                <div className="dropdown">
                    <p>Sign Out Of Netflix</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default navbar;