// import React from 'react';
import React, { useMemo, useState } from 'react';


const FunctionalcompoUseMemo = () => {
    const [nub,setNub] = useState(0)
    const [show,setShow] = useState(true)

    const clicked = () => {
        return setNub(nub+1) 
    }

    
    const countNumber = (num) => {
        for (let i = 0; i < 10000000; i++) {}
        console.log(num);
        return num;
    }

    const checkdata = useMemo(() => {
        return countNumber(nub)

    },[nub])

    return (
        <>
            <button className='btn btn-primary' onClick={clicked}>Counter</button>
            <p>My new Number :{checkdata}</p>
            <button onClick={() => setShow(!show)}>{show ? "Click me" : "Done"} </button>
        </>
    );
};
export default FunctionalcompoUseMemo;

