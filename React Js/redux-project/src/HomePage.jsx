import React, { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { retierverUsers } from './actions/users.jsx'
const HomePage = () => {
    
    const dispatch = useDispatch()
    useLayoutEffect(() => {
        console.log("useLayouteffect")
        getUser()
    })
    async function getUser() {
        dispatch(retierverUsers())
    }

    return (
        <div>
            <h1>HomePage</h1>
        </div>
    );
};


export default HomePage;
