import React, { useState } from 'react';

const FunctionalcompoUseState = () => {
    
    const [state,setstate]=useState('.......')
    const [counter,setcounter]=useState(1)
    let Username = 'Something'
    let changevalue = () => {
        console.log('clicked');
        setstate('Hello')
    } 
    let increasevalue = () => {
        setcounter(counter*2)
    }
    return (
        <div>
            <p>Simple let Data username:{Username}</p>
            <p>Simple Data of state:{state}</p>
            <button onClick={changevalue} className='btn'>Click to complate the sentance</button>
            <br />
            <br />
            <p>Counter:{counter}</p>
            <button onClick={increasevalue} className='btn'>Count</button>
        </div>
    );
};

export default FunctionalcompoUseState;