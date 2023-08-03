import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const EmpDetalis = () => {

    const { id } = useParams()
    const [empdata, setEmpData] = useState({})
    const featchData = () => {
        fetch('http://localhost:5000/employee/' + id).then((res) => res.json()).then((res) => {
            setEmpData(res);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        featchData()
    }, [])

    console.log('detalis page');

    return (
        <div style={{ textAlign: 'left', margin: '100px 0px' }}>
            <div className="card">
                <div className="card-title">
                    <h2>Employee Create</h2>
                </div>
                <div className="card-body" style={{ fontWeight: 700 }}>
                    <h1 style={{ textAlign: 'left', }}>{empdata.name}</h1>
                    <h4>Contact Detalis</h4>
                    <p>Employee Number is :{empdata.phone}</p>
                    <p>Employee Email is : {empdata.email}</p>
                    <p>{empdata.isActive}</p>
                        <Link to='/crud' className='btn btn-danger'>Back To List</Link>
                </div>
            </div>

        </div>
    );
};

export default EmpDetalis;