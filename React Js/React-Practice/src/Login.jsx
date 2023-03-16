import Form from './form/Form.jsx'
import React, { createContext, useState } from 'react';
import Register from './Register.jsx';

export const ThemeContext = createContext(null)

const Login = () => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((color) => (color === 'light' ? 'dark' : 'light'));
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="App" id={theme}>
                <Form />
                <div>
                    <input type="checkbox" style={{display:'none'}} name="" id="themechk" className='switch' onChange={toggleTheme} checked={theme === 'dark'}  />
                    <label>{theme === "light" ? <label htmlFor="themechk" className='fa fa-sun'></label> : <label htmlFor="themechk" className='fa fa-moon'></label>}</label>
                    
                </div>
            </div>
        </ThemeContext.Provider>
    );
};

export default Login;