import React from 'react';
import Logo from '../assets/images/logo.png';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const Loginpage = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row align-items-center bg-white">
                    <div className="col-lg-8 col-md-6 col-sm-12 bg-login d-flex justify-content-center align-items-center p-15 " >
                        <img src={Logo} alt="Logo" className='logo d-block' />
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                        <form className="form w-75 p-15  " novalidate="novalidate" id="kt_sign_in_form" method="post" action="/">
                            <input type="hidden" name="csrfmiddlewaretoken" value="" />

                            <div className="fv-row mb-10">
                                <label className="form-label fs-6 fw-bolder required">Username</label>
                                <input className="form-control form-control-lg form-control-solid" type="text" name="email" placeholder="Username" autocomplete="off" required="True" />
                                {/* <div id="email-error-message" style={{ color: 'red', display: 'none' }}>Email address is required</div> */}
                            </div>
                            <div className="fv-row mb-10">
                                <label className="form-label fs-6 fw-bolder required py-lg-1 ">Password</label>
                                <input className="form-control form-control-lg form-control-solid" type="password" name="pw" placeholder="Password" autocomplete="off" required="True" />
                                {/* <div id="pw-error-message" style={{ color: 'red', display: 'none' }}>Password is required</div> */}
                            </div>
                            <div className="d-flex justify-content-end align-items-center p-4">
                                <NavLink to='/dashboard'><Button variant="secondary">Log in</Button></NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loginpage;