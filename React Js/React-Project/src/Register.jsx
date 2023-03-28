import React from 'react';
import './register.css'
import Customhook from './CustomHooks/Customhook';

const Register = () => {
    const { inputHandleChange, inps, errors } = Customhook({}, { usernameError: "", passwordError: "", mobileError: "", birthdayError: "", emailError: "" })
    const checkLogin = () => {
        console.log("inp from Hook", inps, errors);
        alert(("inp from Hook", inps,errors))
    };

    return (
        <>
            <form>
                <h2 >Fill The Details</h2>
                <table className='table2'>
                    <tbody>
                        <tr className='tablerow' >
                            <td>
                                First Name:
                                <input className='form-control' type="text" placeholder="Name" name="username" id="firstname" onChange={inputHandleChange} onBlur={inputHandleChange} /><br />
                                {errors.usernameError}
                            </td>
                        </tr>

                        <tr className='tablerow' >
                            <td>
                                Last Name:
                                <input className='form-control' type="text" placeholder="Surname" name="username" onChange={inputHandleChange} onBlur={inputHandleChange} /><br />
                               
                            </td>
                        </tr>

                        <tr className='tablerow' >
                            <td>
                                Gender:
                                <input type="radio" name="Gender" />Male
                                <input type="radio" name="Gender" />Female
                                <input type="radio" name="Gender" />Other
                            </td>
                        </tr>

                        <tr className='tablerow' >
                            <td>
                                Birth Date:
                                <input className='form-control' type="date" name="birthday" onChange={inputHandleChange} onBlur={inputHandleChange} />
                                {errors.birthdayError}
                            </td>
                        </tr>

                        <tr className='tablerow' >
                            <td>
                                Email:
                                <input className='form-control' type="email" name='email' placeholder="XYZ@mail.com" onChange={inputHandleChange} onBlur={inputHandleChange} /><br />
                                {errors.emailError}
                            </td>
                        </tr>

                        <tr className='tablerow' >
                            <td>
                                Password:
                                <input className='form-control' type="password" placeholder="Password" name='password' onChange={inputHandleChange} onBlur={inputHandleChange} /><br />
                                 {errors.passwordError}
                            </td>
                        </tr>

                        <tr className='tablerow' >
                            <td>
                                Mobile No. :
                                <input className='form-control' type="tel" placeholder="99321*****"
                                    minLength="10" maxLength="10"
                                    name="mobile" id="tel" onChange={inputHandleChange} onBlur={inputHandleChange} /><br />
                                     {`${errors.mobileError}`}
                            </td>
                        </tr>

                        <tr className='tablerow'>
                            <td >
                            <button className='submitbtn' onClick={checkLogin} >Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            
        </>
    );
};

export default Register;