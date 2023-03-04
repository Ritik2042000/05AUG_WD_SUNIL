import React from 'react';
import './login.css'
function Login(props) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col ">
                        <div className="card">
                            <div className="close">
                            <i className="fa-solid fa-xmark"></i>
                            </div>
                            <h4>Login to continue</h4>
                            <button className='btn btn-change'>Have a Facebook/Email account?</button>
                            <div className="or-div">or</div>
                            <div className="phone-nub">
                                <span className='countary-code'>+91</span>
                                <input type="text" name="" id="" className='ph-nu-inp' inputmode="numeric" pattern="[0-9]*" placeholder='Enter your mobile number' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;