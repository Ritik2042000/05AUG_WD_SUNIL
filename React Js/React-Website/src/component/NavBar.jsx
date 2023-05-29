import { Link,NavLink } from 'react-router-dom';
import React from 'react';
import Logo from '../images/logo.png'
import { links } from '../data';
import { GoThreeBars } from 'react-icons/go' 
import './navBar.css'



const NavBar = () => {
    return (
       
            <nav>
                <div className="container nav_container">
                    <Link to='/' className='logo'><img src={Logo} alt="" /></Link>
                    <ul className="nav__links">
                        {
                            links.map(({name,path},index)=>{
                                return(
                                    <li>
                                        <NavLink to={path}>{name}</NavLink>
                                    </li>
                                )
                                
                            })
                        }
                    </ul>
                    <button className="nav__toggle-btn">{ GoThreeBars }</button>
                </div>
            </nav>
     
    );
};

export default NavBar;