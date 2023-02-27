import { useState, useEffect, useLayoutEffect } from "react";
import React from 'react';

const FunctionalcompoUseLayoutEffect = () => {
    const [count, setCounter] = useState(1)
    const [number, setNumber] = useState(2)

    useLayoutEffect(() => {
        // console.log('Clicked');
        console.log('LayoutEffect is Called');
    }, [])

    useEffect(() => {
        // console.log('LayoutEffect is Called');
        console.log('Effect is Called');
    }, [])
    const updatecount = () => {
        setCounter(count + 1)
    }
    const updatnumbr = () => {
        setNumber(number * 2)
    }
    return (
        <>
            <p> In useLayoutEffect and useEffect <b> 'useLayoutEffect'</b> is called first so we use it as a (constructor like) with empty [] when we have requried of both type of process work with chnage with variable and change once when data is loaded </p>
            <p>Button {count} Clicked</p>
            <p>Button {number} Multiply</p>
            <button onClick={updatecount}>Click</button><br />
            <button onClick={updatnumbr}>Click Number</button>

        </>
    );
};

export default FunctionalcompoUseLayoutEffect;