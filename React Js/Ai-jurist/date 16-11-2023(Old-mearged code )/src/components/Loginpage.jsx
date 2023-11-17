import React from 'react';
import Logo from '../assets/images/logo.png';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Loginpage = () => {
    return (
        <>
            <div className="container-fluid bg-white login_wrapper ">
                <div className="row align-items-center ">
                    <div className="col-lg-7  col-md-6 col-sm-12 bg-login d-flex flex-column justify-content-center align-items-center p-15 " >
                        <img src={Logo} alt="Logo" className='logo d-block' />
                        <p className="logingpage_logo-title">end-to-end contract management solution</p>
                    </div>
                    
                        <div className="login_page-form-wrapper col-lg-5 col-md-6 col-sm-12 d-flex  flex-column align-items-center bg-white">
                            <div className="title">
                            <h4 className='text-center w-100'>Welocome To Admin panel</h4>
                            </div>
                            <form className="form login_page-form mt-2"  >
                                <div className=" ">
                                    <label className="form-label fs-6 fw-bolder required">Username</label>
                                    <input className="form-control form-control-lg form-control-solid" type="text" name="email" placeholder="Username"  required="True" />
                                   
                                </div>
                                <div className=" ">
                                    <label className="form-label fs-6 fw-bolder required pt-lg-1 mt-2 ">Password</label>
                                    <input className="form-control form-control-lg form-control-solid" type="password" name="pw" placeholder="Password"  required="True" />
                                    {/* <div id="pw-error-message" style={{ color: 'red', display: 'none' }}>Password is required</div> */}
                                </div>
                                <div className="d-flex justify-content-end align-items-center p-btn">
                                    <NavLink to='/dashboard'><Button variant="primary">Log in</Button></NavLink>
                                </div>
                            </form>
                        </div>
                     
                </div>

            </div>

        </>
    );
};

export default Loginpage;