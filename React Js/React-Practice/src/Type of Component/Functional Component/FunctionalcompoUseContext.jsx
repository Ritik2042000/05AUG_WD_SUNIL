import React, { createContext, useState } from 'react';
import Form from './form/Form';


export const ThemeContext = createContext(null)

const FunctionalcompoUseContext = () => {       
        const [theme, setTheme] = useState('light')

        const toggleTheme = () => {
                setTheme((color) => (color === 'light' ? 'dark' : 'light'));
        };
        return (
                <ThemeContext.Provider value={{theme, toggleTheme }}>
                        <div className="App" id={theme}>
                                <Form />
                                <div>
                                        <label >{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                                        <input type="checkbox" name="" id="" className='switch ' onChange={toggleTheme} checked={theme === 'dark'} />
                                </div>
                        </div>
                </ThemeContext.Provider>
        )
}
export default FunctionalcompoUseContext;