import React, { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import {retierverUsers} from './actions/users.jsx'
const HomePage = () => {
   
   const dispatch = useDispatch()
   useLayoutEffect(()=>{
       console.log("useLayouteffect")
       getUser()
   })
   async function getUser(){
    let respo = await dispatch(retierverUsers())
   }

    return (
        <div>

        </div>
    );
};


export default HomePage;
