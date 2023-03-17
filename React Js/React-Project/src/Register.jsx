import React from 'react';
import './register.css'
import Customhook from './CustomHooks/Customhook';

const Register = () => {
    const { inputHandleChange, inps, errors } = Customhook({}, { usernameError: "", passwordError: "" })
    const checkLogin = () => {
        console.log("inp from Hook", inps,errors);
    };

    return (
        <>
            <form action="" id='form'>
                <h2 >Fill The Details</h2>
                <table >
                    <tr >
                        <td>
                            First Name:
                            <input  type="text" placeholder="Name" name="username" id="firstname" onChange={inputHandleChange} onBlur={inputHandleChange} /><br />
                        </td>
                    </tr>

                    <tr >
                        <td>
                            Last Name:
                            <input  type="text" placeholder="Surname" name="username" onChange={inputHandleChange} onBlur={inputHandleChange} /><br />
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
                            <input  type="date" name="birthday" onChange={inputHandleChange} onBlur={inputHandleChange} />
                        </td>
                    </tr>

                    <tr >
                        <td>
                            Email:
                            <input  type="email" name='email' placeholder="XYZ@mail.com" onChange={inputHandleChange} onBlur={inputHandleChange} /><br />
                        </td>
                    </tr>

                    <tr >
                        <td>
                            Password:
                            <input  type="password" placeholder="Password" name='password' onChange={inputHandleChange} onBlur={inputHandleChange} /><br />
                        </td>
                    </tr>

                    <tr >
                        <td>
                            Mobile No. :
                            <input  type="tel" placeholder="99321*****"
                                 minLength="10" maxLength="10"
                                name="email" id="tel" onChange={inputHandleChange} onBlur={inputHandleChange} /><br />
                        </td>
                    </tr>

                    <tr >
                        <td >
                            <button onClick={checkLogin} >Submit</button>
                        </td>
                    </tr>
                </table>
            </form>
        </>
    );
};

export default Register;