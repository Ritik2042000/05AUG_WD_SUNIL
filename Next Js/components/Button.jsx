'use client'
import React from 'react';

const Button = ({data,btnName,className}) => {
    return (
        <div>
            <button className={className} onClick={() => alert(data)}>{btnName}</button>
        </div>
    );
};

export default Button;