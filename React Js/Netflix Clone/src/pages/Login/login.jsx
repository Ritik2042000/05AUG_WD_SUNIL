import React, { useState } from 'react';
import './login.css'
import logo from '../../assets/logo.png'

const login = () => {

    const [signState, setSignState] = useState("Sign In")



    return (
        <div className='login'>
            <img src={logo} alt="logo" className='login-logo' />
            <div className="login-form">
                <h1>{signState}</h1>
                <form>
                    {signState === 'Sign Up' ? <input type="text" placeholder='Your Name' /> : null}

                    <input type="email" name="" id="" placeholder='Your Email' />
                    <input type="password" name="" id="" placeholder='Password' />
                    <button type="submit">{signState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type="checkbox" name="remember" id="" />
                            <label htmlFor="remember">Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {
                        signState === 'Sign In' ? <>
                            <p>New to Netflix? <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span></p>
                        </> : <p>Already Have Account?<span onClick={() => { setSignState('Sign In') }}>Sign In Now</span></p>
                    }
                </div>
            </div>
        </div>
    );
};

export default login;

