import React, { useState } from 'react';
import './login.css';
import logo from '../../assets/logo.png';
import { logIn, signup } from '../../auth/firebase';
import { useForm } from 'react-hook-form';
import Loader from '../../assets/netflix_spinner.gif'

const login = () => {

    const [signState, setSignState] = useState("Sign In")
    const [isLoading, setIsLoading] = useState(false)

    const {
        register: userregister,
        handleSubmit: userSubmit,
        formState: { errors: usererrors },
        reset: resetuserDetalis,
        watch,
        setValue,
        control,
    } = useForm();

    const handleUserForm = async (data) => {
        // console.log(data);
        setIsLoading(true)
        if (signState === 'Sign In') {
            await logIn(data.email, data.password)
        } else {
            await signup(data.name, data.email, data.password)
        }
        setIsLoading(false)
        resetuserDetalis()
    }

    return (
        <>
            {
                isLoading ? <div className="login-spinner">
                    <img src={Loader} alt="" />
                </div> : <div className='login'>
                    <img src={logo} alt="logo" className='login-logo' />
                    <div className="login-form">
                        <h1>{signState}</h1>
                        <form onSubmit={userSubmit(handleUserForm)}>
                            {signState === 'Sign Up' ? <input type="text" name='name' placeholder='Your Name'  {...userregister("name", { required: true })}
                            /> : null}
                            {usererrors.name && (
                                <p className="errors">
                                    Username filed is empty
                                </p>
                            )}

                            <input type="email" name="" id="" placeholder='Your Email' {...userregister("email", { required: true })} />
                            {usererrors.email && (
                                <p className="errors">
                                    Email filed is empty
                                </p>
                            )}
                            <input type="password" name="" id="" placeholder='Password'  {...userregister("password", { required: true })} />
                            {usererrors.password && (
                                <p className="errors">
                                    Password filed is empty
                                </p>
                            )}
                            <button type="submit" >{signState}</button>
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
                                    <p>New to Netflix? <span onClick={() => { setSignState('Sign Up'), resetuserDetalis() }}>Sign Up Now</span></p>
                                </> : <p>Already Have Account?<span onClick={() => { setSignState('Sign In'), resetuserDetalis() }}>Sign In Now</span></p>
                            }
                        </div>
                    </div>
                </div>
            }

        </>
    );
};

export default login;

