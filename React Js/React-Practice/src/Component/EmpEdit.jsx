import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EmpEdit = () => {

    const { id } = useParams()
    // const [empdata, setEmpData] = useState({})



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

    const featchData = () => {
        fetch('http://localhost:5000/employee/' + id).then((res) => res.json()).then((res) => {
            setUpdateData((res))
            console.log(res)
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        featchData()
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/employee/'+id, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateData)
        }).then((res) => {
            alert('submit successfuly')
            navigate('/crud')
        })
            .catch((err) => { console.log(err.message); })

        console.log(updateData);
    };





    return (
        <div>
            <div className="row" style={{ '--mdb-gutter-x': ' 0' }}>
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{ 'textAlign': 'left' }}>
                            <div className="card-title" style={{ 'textAlign': 'center' }}>
                                <h2>Employ Create</h2>
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

export default EmpEdit;