import { Link,NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Logo from '../images/logo.png'
import { links } from '../data';
import { MdOutlineClose } from "react-icons/md";
import { GoGrabber } from "react-icons/go";
import './navBar.css';


const NavBar = () => {
    const [toggele,setToggle] = useState(false)


    return (
       
            <nav>
                <div className="container nav_container">
                    <Link to='/' className='logo' onClick={() => setToggle(false)}><img src={Logo} alt="" /></Link>
                    <ul className={`nav__links ${toggele ? 'show_nav': 'hide_nav'}`}>
                        {
                            links.map(({name,path},index)=>{
                                return(
                                    <li>
                                        <NavLink to={path} key={index} className={({isActive})=> isActive ? 'active-nav': ''} onClick={()=> setToggle(prev => !prev)} >{name}</NavLink>
                                    </li>
                                )
                                
                            })
                        }
                    </ul>
                    <button className="nav__toggle-btn" onClick={()=> setToggle(prev => !prev)}>{
                        toggele ? <MdOutlineClose/> : <GoGrabber/>
                    } </button>
                </div>
            </nav>
     
    );
};

export default NavBar;