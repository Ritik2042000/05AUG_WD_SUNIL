import React from 'react';
import SideNav from './common Layouts/SideNav';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const User = () => {
    return (
        <>
            <SideNav />
            <div className="main-wrapper">
                <div className="container">
                    <div className="page-title">
                        <h1 className="page-heading mb-0">User</h1>
                    </div>
                    <div className="user_blocks d-flex">
                        <div className="bg-white  rounded min-w-125px py-3 px-4 me-6 mb-3">
                            {/* <!--begin::Number--> */}
                            <div className="d-flex align-items-center">
                                <div className=" fw-bold counted" >Total Users</div>
                            </div>
                            {/* <!--end::Number--> */}
                            {/* <!--begin::Label--> */}
                            <div className=" ">436</div>
                            {/* <!--end::Label--> */}
                        </div>
                        {/* <!--end::Stat--> */}
                        {/* <!--begin::Stat--> */}
                        <div className="bg-white  rounded min-w-125px py-3 px-4 me-6 mb-3 mx-2">
                            {/* <!--begin::Number--> */}
                            <div className="d-flex align-items-center">
                                <div className=" fw-bold counted" >Individual Users</div>
                            </div>
                            {/* <!--end::Number--> */}
                            {/* <!--begin::Label--> */}
                            <div className=" ">243</div>
                            {/* <!--end::Label--> */}
                        </div>
                        {/* <!--end::Stat--> */}
                        {/* <!--begin::Stat--> */}
                        <div className="bg-white  rounded min-w-125px py-3 px-4 me-6 mb-3 mx-2">
                            {/* <!--begin::Number--> */}
                            <div className="d-flex align-items-center">
                                <div className=" fw-bold counted" >Business Users</div>
                            </div>
                            {/* <!--end::Number--> */}
                            {/* <!--begin::Label--> */}
                            <div className=" ">87</div>
                            {/* <!--end::Label--> */}
                        </div>
                        <div className="  bg-white  rounded min-w-125px py-3 px-4 me-6 mb-3 mx-2">
                            {/* <!--begin::Number--> */}
                            <div className="d-flex align-items-center">
                                <div className=" fw-bold counted" >Business Admin</div>
                            </div>
                            {/* <!--end::Number--> */}
                            {/* <!--begin::Label--> */}
                            <div className=" ">106</div>
                            {/* <!--end::Label--> */}
                        </div>
                    </div>
                    <div class="card  mt-5">
                        <div class="d-flex row py-3 flex-wrap align-items-center">
                            <div class="align-items-center col-9 cursor-pointer " >
                                <NavLink className="mx-1 text-dark text-hover-primary text-primary" data-filter="All">All</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="A">A</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="B">B</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="C">C</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="D">D</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="E">E</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="F">F</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="G">G</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="H">H</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="I">I</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="J">J</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="K">K</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="L">L</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="M">M</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="N">N</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="O">O</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="P">P</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="Q">Q</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="R">R</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="S">S</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="T">T</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="U">U</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="V">V</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="W">W</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="X">X</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="Y">Y</NavLink>
                                <NavLink className="mx-2 text-dark text-hover-primary" data-filter="Z">Z</NavLink>
                            </div>
                            <div class="col-3 d-flex justify-content-end">
                                <form data-kt-search-element="form" class="d-none d-lg-block mb-5 me-4 mb-lg-0 position-relative" >
                                   
                                    <input type="text" class="form-control form-control-solid h-40px bg-body ps-13 fs-7 w-100 text-center" name="search" value="" placeholder="Search" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between my-5 card">
                        <div className="card-body d-flex">
                            <div className="fv-row  col-8">
                                <Nav variant="underline" defaultActiveKey="/user">
                                    <Nav.Item>
                                        <Nav.Link eventKey="/users/invaliduser">Invalid User</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="link-1">Business User</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="/">Business Admin</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="/">Invited User</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="/">Invited Business</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div className="left_sidebtn col-4 ">
                                <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent  fw-bold text-center d-flex justify-content-end">
                                    <li className="nav-item">
                                       <button className='btn btn-primary'>Invite User</button>
                                    </li>
                                    <li className="nav-item ms-2">
                                       <button className='btn btn-primary'>Invite Business</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default User;