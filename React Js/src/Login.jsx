import React from 'react';
import './login.css'
function Login(props) {
    
const change = () =>{
    document.getElementsByClassName('card').classList.toggle('fb');

};
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
                            <button className='btn btn-change' onClick={change}>Have a Facebook/Email account?</button>
                            <div className="or-div">or</div>
                            <div className="phone-nub">
                                <span className='countary-code'>+91</span>
                                <input type="text" name="" id="" className='ph-nu-inp' inputmode="numeric" pattern="[0-9]*" placeholder='Enter your mobile number' />
                            </div>
                        </div>
                        <div className="card fb">
                            <h5 className='sml-text'>Have a Facebook/Email account?</h5>
                            <input type="text" className='ph-nu-inp' placeholder='Enter your email' />
                            <button className='btn btn-con'>CONTINUE <i class="fa-solid fa-chevron-right"></i></button>
                            <div className="or-div">or</div>
                            <button className='btn btn-fb'> <i class="fa-brands fa-square-facebook"></i> LOGIN WITH FACEBOOK</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;