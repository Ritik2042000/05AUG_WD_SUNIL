import React, { useEffect, useState } from 'react';

const FunctionalcompoUseEffect = () => {
    const [count, setCounter] = useState(1)
    const [number, setNumber] = useState(2)

    // it called as many times as time state (variable) change
    // useEffect(()=>{
    //     console.log('Clicked');
    // },)

    // when we use empty [](that is second variable of that) it worked like constructor called once when data is loaded. 
    useEffect(() => {
        console.log('Clicked');
    }, [])

    // or if you want that changed when variable data updated you have to write that variable in []  
    useEffect(() => {
        // console.log('Clicked');
        console.log('Clicked number');
    }, [number])

    // if we  done retrun if perfome like Compo did Mount (LifeCycle) 
    //   useEffect(()=>{
    //     console.log('Clicked');
    //     return () => {
    //         console.log('Pls Come back');
    //     }
    // },[])

    const updatecount = () => {
        setCounter(count + 1)
    }
    const updatnumbr = () => {
        setNumber(number * 2)
    }
    return (
        <>
            <p>Button {count} Clicked</p>
            <p>Button {number} Multiply</p>
            <button onClick={updatecount}>Click</button><br />
            <button onClick={updatnumbr}>Click Number</button>
        </>
    );
};

export default FunctionalcompoUseEffect;