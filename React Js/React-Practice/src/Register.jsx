import React, { useState }  from 'react';
import './register.css'
import Customhook from './CustomHooks/Customhook';

const Register = () => {
    const { inputHandleChange, inps, errors } = Customhook({}, { usernameError: "", passwordError: "" })
    const checkLogin = () => {
        console.log("inp from Hook", inps);
    };

    return (
        <>
            <form action="" id='form'>
                <h2 >Fill The Details</h2>
                <table >
                    <tr >
                        <td>
                            First Name:
                            <input className="form-control" type="text" placeholder="Name" name="usernamename" id="firstname" onChange={inputHandleChange} onBlur={inputHandleChange} /><br />
                        </td>
                    </tr>

                    <tr >
                        <td>
                            Last Name:
                            <input className="form-control" type="text" placeholder="Surname" name="username" onChange={inputHandleChange} onBlur={inputHandleChange} /><br />
                        </td>
                    </tr>

                    <tr >
                        <td>
                            Gender:
                            <input type="radio" name="Gender" />Male
                            <input type="radio" name="Gender" />Female
                            <input type="radio" name="Gender" />Other
                        </td>
                    </tr>

                    <tr >
                        <td>
                            Birth Date:
                            <input className="form-control" type="date" name="birthday" onChange={inputHandleChange} onBlur={inputHandleChange} />
                        </td>
                    </tr>

                    <tr >
                        <td>
                            Email:
                            <input className="form-control" type="email" placeholder="XYZ@mail.com" onChange={inputHandleChange} onBlur={inputHandleChange} /><br />
                        </td>
                    </tr>

                    <tr >
                        <td>
                            Password:
                            <input className="form-control"type="password" placeholder="Password" name='password' onChange={inputHandleChange} onBlur={inputHandleChange} /><br />
                        </td>
                    </tr>

                    <tr >
                        <td>
                            Mobile No. :
                            <input className="form-control" type="tel" placeholder="99321*****"
                                onKeypress="return (event.which >=48 && event.which <=57 )" minLength="10" maxLength="10"
                                name="email" id="tel" onChange={inputHandleChange} onBlur={inputHandleChange} /><br />
                        </td>
                    </tr>

                    <tr >
                        <td >
                            <button onClick={checkLogin} id="save" name="save">Submit</button>
                        </td>
                    </tr>
                </table>
            </form>
        </>
    );
};

export default Register;