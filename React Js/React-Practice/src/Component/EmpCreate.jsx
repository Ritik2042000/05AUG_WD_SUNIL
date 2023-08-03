import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EmpCreate = () => {
    const [updateData, setUpdateData] = useState({
        'id': '',
        'phone': '',
        'email': '',
        'isactive': 'true',
        'name': '',
    });
    const navigate = useNavigate()
    
    
    const changeData = (e) => {
        const { name, value, type, checked } = e.target;
        setUpdateData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    
    const handleSubmit = (e) => {
        const emptyFields = Object.keys(updateData).filter((key) => {
            const value = updateData[key];
            return key !== 'id'&& typeof value === 'string' && value.trim() === ''; 
        });
    
        if (emptyFields.length > 0) {
            
            alert(`Please fill in the following fields: ${emptyFields.join(', ')}`);
            return; 
        }
        e.preventDefault();
        fetch('http://localhost:5000/employee', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateData)
        }).then((res) =>{
        alert('submit successfuly')
        navigate('/crud')})
        .catch((err)=> {console.log(err.message);})

        console.log(updateData);
    };

    return (
        <div>
            <div className="row" style={{ '--mdb-gutter-x': ' 0' }}>
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{ 'textAlign': 'left' }}>
                            <div className="card-title" style={{ 'textAlign': 'center' }}>
                                <h2>Employ Edit</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label >ID</label>
                                            <input value={updateData.id} name='id' disabled type="text" className='form-control' onChange={changeData} />
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label >Name</label>
                                            <input type="text" name='name' value={updateData.name} className='form-control' onChange={changeData} />
                                            <span> </span>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label >Phone</label>
                                            <input type="text" name='phone' value={updateData.phone} className='form-control' onChange={changeData} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label >Email</label>
                                            <input type="text" name='email' value={updateData.email} className='form-control' onChange={changeData} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input type="checkbox" className='form-check-input' value={updateData} onChange={changeData} />
                                            <label className='form-check-label'>Is Active</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button type='submit' className='btn btn-success'>Save</button>
                                            <Link to='/crud' className='btn btn-danger '>back</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmpCreate;