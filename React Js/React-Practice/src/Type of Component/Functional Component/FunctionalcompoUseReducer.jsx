import React, { useReducer } from 'react';

const initialstate = 0;

const reducer = (state,action) => {
    // console.log(state,action.type);
    if (action.type === 'INCREMENT') {
        return state + 1
    }
    if (action.type === "DECREMENT") {
        return state - 1
        
    }
    return state;
}

const FunctionalcompoUseReducer = () => {
    
    const [state,dispatch] = useReducer(reducer,initialstate);
    
    return (
        <>
          <p> <b>{state}</b></p>
          <button className='btn btn-secondary' onClick={() => dispatch({type:'INCREMENT'})}>Inc</button><br/>
          <button className='btn btn-secondary' onClick={() => dispatch({type:'DECREMENT'})}>Dec</button>  
        </>
    );
};

export default FunctionalcompoUseReducer;