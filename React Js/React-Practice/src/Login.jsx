import React, { useState } from 'react';
import './login.css'
import { Navigate, useNavigate } from 'react-router-dom';

function Login(props) {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate()

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

   
    return (
        <>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col">
                        {!isVisible &&
                            <div className="card" >
                                <div className="close">
                                    <i className="fa-solid fa-xmark"></i>
                                </div>
                                <h4>Login to continue</h4>
                                <button className='btn btn-change' onClick={handleClick}>Have a Facebook/Email account?</button>
                                <div className="or-div">or</div>
                                <div className="phone-nub">
                                    <span className='countary-code'>+91</span>
                                    <input type="text" name="" id="" className='ph-nu-inp' inputMode="numeric" pattern="[0-9]*" placeholder='Enter your mobile number' />
                                </div>
                            </div>
                        }
                        {isVisible &&
                            <div className="card fb" style={{ display: 'block' }} >
                                <div className="back">
                                    <i className="fa-sharp fa-solid fa-arrow-left" onClick={handleClick}></i>
                                    <i className="fa-solid fa-xmark" ></i>
                                </div>
                                <h5 className='sml-text'>Have a Facebook/Email account?</h5>
                                <div className="center">
                                    <input type="text" className='ph-nu-inp' placeholder='Enter your email' />
                                    <button className='btn btn-con'>CONTINUE <i className="fa-solid fa-chevron-right"></i></button>
                                    <div className="or-div">or</div>
                                    <button className='btn btn-fb'> <i className="fa-brands fa-square-facebook"></i> LOGIN WITH FACEBOOK</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;