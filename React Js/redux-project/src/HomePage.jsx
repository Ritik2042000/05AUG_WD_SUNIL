import React, { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { retierverUsers } from './actions/users.jsx'
import { Link } from 'react-router-dom';
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
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">

                        <Link to="/getStoreData">Store Data</Link>
                        {/* <Link to="/login">Login</Link> */}
                        HomePage
                    </div>
                </div>
            </div>
        </>
    );
};


export default HomePage;
