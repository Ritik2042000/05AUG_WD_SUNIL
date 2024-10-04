'use client'
import React from 'react';
import { useState } from 'react';


const Button = ({data,btnName,className}) => {
    const [abc,setAbc] = useState()


    return (
        <div>
            <button className={className} onClick={() => alert(data)}>{btnName}</button>
        </div>
    );
};

export default Button;