import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Employ = () => {
    const [data, setData] = useState();
    const navigate = useNavigate()

    const featchData = () => {
        fetch('http://localhost:5000/employee').then((res) => res.json()).then((res) => {
            setData(res);
        }).catch((error) => {
            console.log(error);
        })
    }


    const editData = (id) => {
        navigate('/employedit/' + id)
    }
    const showData = (id) => {
        navigate('/employdetalis/' + id)
    }
    const deleteData = (id) => {
        if (window.confirm('Do You Want To Delete?')) {
            fetch('http://localhost:5000/employee/' + id, {
                method: 'DELETE',
            }).then((res) => {
                alert('Deleted successfully')
            })
            .catch((err) => { console.log(err.message); })
        }
    }
    useEffect(() => {
        featchData()
    }, [deleteData])
    return (
        <div className='container'>
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    <div>
                        <Link to='/empcreate' className='btn btn-primary'>Add New(+)</Link>
                    </div>
                    <table className='table table-bordered'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data &&
                                Object(data).map((curElem, id) => {
                                    return <tr key={id}>
                                        <td>{curElem.id}</td>
                                        <td>{curElem.name}</td>
                                        <td>{curElem.email}</td>
                                        <td>{curElem.phone}</td>
                                        <td><a onClick={() => {editData(curElem.id) }} className='btn btn-success'>Edit</a> |
                                            <a onClick={() => {showData(curElem.id) }} className='btn btn-primary'>Detalis</a> |
                                            <a href="" onClick={() => {deleteData(curElem.id)}} className='btn btn-danger'>delete</a>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Employ;