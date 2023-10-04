import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { AiFillHome, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HiOutlineUsers, HiUsers } from 'react-icons/hi';
import { FaChartSimple } from 'react-icons/fa6';
import { FaRegBell } from 'react-icons/fa';
import { BsFillGearFill, BsFillGridFill } from 'react-icons/bs';
import { RiPagesLine } from 'react-icons/ri';
import { AiOutlinePercentage } from 'react-icons/ai';
import { BsCreditCard } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BsFillTagFill } from 'react-icons/bs';
import { AiOutlineBars } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';
import { FaPersonMilitaryRifle } from 'react-icons/fa6';
import { useState } from 'react';
import Profilepic from '../../assets/images/admin.jpg'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const SideNav = () => {
    const [height, setHeight] = useState('drop-down');

    const dropdown = (height, setStatefunction) => {
        if (height === 'drop-down') {
            setStatefunction((height) => (height = 'abc'))
        } else {
            setStatefunction((height) => (height = 'drop-down'))
        }
    };



    return (
        <>
            <div className="nav-wapper px-3 bg-nav ">
                {/* <button className="menu-button" onClick={openSidebar}>
                    <AiOutlineMenu />
                </button>
                <button className="close-button" onClick={closeSidebar}>
                    <AiOutlineClose />
                </button> */}
                <div className="nav-logo py-4 ">
                    <NavLink to='/'><img src={Logo} alt="company logo" title='Logo' className='p-1' /></NavLink>
                </div>
                <div className="nav-links py-4 ">
                    <ul>
                        <NavLink className='align-items-center d-flex ' to='/dashboard' activeClassname='active'><li><AiFillHome className="icon_size" activeClassname='active' />Dashboard</li></NavLink>
                        <NavLink className=' ' to='/users'><li><HiOutlineUsers className='icon_size' activeClassname='active' />Users </li></NavLink>
                        <li onClick={() => dropdown(height, setHeight)} className='pointer'><FaChartSimple className='icon_size' />Reports</li>
                        <div className={height}>
                            <ul>
                                <NavLink className=' ' to='/userreports'><li><FaChartSimple className='icon_size' />User Reports</li></NavLink>
                                <NavLink className=' ' to='/financereports'><li><FaChartSimple className='icon_size' />Finance Reports</li></NavLink>
                            </ul>
                        </div>
                        <NavLink className='' to='/notification'><li><FaRegBell className='icon_size' />Notifications</li></NavLink>
                        <NavLink className='' to='/categories'><li><BsFillGridFill className='icon_size' />Categories</li></NavLink>
                        <NavLink className='' to='/tempalte'><li><RiPagesLine className='icon_size' />Templates</li></NavLink>
                        <NavLink className='' to='/coupans'><li><AiOutlinePercentage className='icon_size' />Coupons</li></NavLink>
                        <NavLink className='' to='/memberships'><li><BsCreditCard className='icon_size' />Memberships</li></NavLink>
                        <NavLink className='' to='/emailtemplate'><li><HiOutlineMail className='icon_size'/>Email Templates</li></NavLink>
                        <NavLink className='' to='/notifictiontem'><li><HiOutlineMailOpen className='icon_size' />Notification Templates</li></NavLink>
                        <NavLink className='' to='/labels'><li><BsFillTagFill className='icon_size' />Labels</li></NavLink>
                        <NavLink className='' to='/superadmin'><li><FaPersonMilitaryRifle className='icon_size' />Super Admin Users</li></NavLink>
                        <NavLink className='' to='/settings'><li><BsFillGearFill className='icon_size' />Settings</li></NavLink>
                        <NavLink className='' to='/activitylogs'><li><AiOutlineBars className='icon_size' />Activity Logs</li></NavLink>
                        {/* <NavLink className='' to='/activitylogs'><li><AiOutlineBars className='icon_size' />Activity Logs</li></NavLink> */}
                        <NavLink className='' to='/'><li><MdLogout className='icon_size' />Log Out</li></NavLink>
                       
                    </ul>
                </div>
            </div >
            <div className="admin_detalis d-flex align-items-center py-3  ">
                <div className="rounded_img border-radius-50 text-end px-2">
                    <img src={Profilepic} alt='adminprofiepicture' />
                </div>
                <div className="admininfo">
                    <p className=''>Ai Jurist User</p>
                    <span className='text-warning'>Super Admin</span>
                </div>
            </div>

            {/* <online code> */}
            {/* 
            {[false].map((expand) => (
                <div className="nav-wapper px-3 bg-nav">
                <Navbar key={expand} expand={expand} className="w- mb-3">
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <div className="nav-logo py-4 ">
                                        <img src={Logo} alt="company logo" title='Logo' className='p-1' />
                                    </div>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <div className="nav-links py-4">
                                        <ul>
                                            <NavLink className='text-decoration-none text-dark p-1' to='/'><li><AiFillHome className="px-2 fs-1" />Dashboard</li></NavLink>
                                            <NavLink className='text-decoration-none text-dark p-1' to='/users'><li><HiOutlineUsers className='px-2 fs-1' /> Users </li></NavLink>

                                            <NavLink className='text-decoration-none text-dark p-1' to='/reports'><li><FaChartSimple className='px-2 fs-1' />Reports</li></NavLink>


                                            <NavLink className='text-decoration-none text-dark p-1' to='/notification'><li><FaRegBell className='px-2 fs-1' />Notifications</li></NavLink>
                                            <NavLink className='text-decoration-none text-dark p-1' to='/categories'><li><BsFillGridFill className='px-2 fs-1' />Categories</li></NavLink>
                                            <NavLink className='text-decoration-none text-dark p-1' to='/tempalte'><li><RiPagesLine className='px-2 fs-1' />Templates</li></NavLink>
                                            <NavLink className='text-decoration-none text-dark p-1' to='/coupans'><li><AiOutlinePercentage className='px-2 fs-1' />Coupons</li></NavLink>
                                            <NavLink className='text-decoration-none text-dark p-1' to='/memberships'><li><BsCreditCard className='px-2 fs-1' />Memberships</li></NavLink>
                                            <NavLink className='text-decoration-none text-dark p-1' to='/emailtemplate'><li><HiOutlineMail className='px-2 fs-1' l />Email Templates</li></NavLink>
                                            <NavLink className='text-decoration-none text-dark p-1' to='/notifictiontem'><li><HiOutlineMailOpen className='px-2 fs-1' />Notification Templates</li></NavLink>
                                            <NavLink className='text-decoration-none text-dark p-1' to='/labels'><li><BsFillTagFill className='px-2 fs-1' />Labels</li></NavLink>
                                            <NavLink className='text-decoration-none text-dark p-1' to='/superadmin'><li><FaPersonMilitaryRifle className='px-2 fs-1' />Super Admin Users</li></NavLink>
                                            <NavLink className='text-decoration-none text-dark p-1' to='/settings'><li><BsFillGearFill className='px-2 fs-1' />Settings</li></NavLink>
                                            <NavLink className='text-decoration-none text-dark p-1' to='/activitylogs'><li><AiOutlineBars className='px-2 fs-1' />Activity Logs</li></NavLink>
                                            <NavLink className='text-decoration-none text-dark p-1' to='/'><li><MdLogout className='px-2 fs-1' />Log Out</li></NavLink>
                                        </ul>
                                    </div>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`} >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                </Navbar>
                </div>
            ))} */}


        </>
    );
};

export default SideNav;
