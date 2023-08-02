import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EmpDetalis = () => {
   
   const {empid} = useParams()
   const [empdata,setEmpData] = useState({}) 
   const featchData = () => {
    fetch('http://localhost:5000/employee/'+ empid).then((res)=>res.json()).then((res)=>{
            setEmpData(res);
    }).catch((error)=>{
        console.log(error);
    })
}

useEffect(()=>{
    featchData()
},[])

   
    return (
        <div>
            <h1>{empdata.name}</h1>
            
        </div>
    );
};

export default EmpDetalis;