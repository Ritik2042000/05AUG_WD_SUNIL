import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FunctionAddUser } from '../Redux/Action';

const Adduser = () => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [role, setRole] = useState('user');
        const dispatch = useDispatch()
        const navigatae = useNavigate()

        const handlesubmit = (e) => {
            e.preventDefault();
            const userobj = {name, email, phone, role};
            // console.log(userobj);
            dispatch(FunctionAddUser(userobj))
            navigatae('/user/')
        } 
        return (
            <>
                <form onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header" style={{ textAlign: "left" }}>
                            <h2>Add User</h2>
                        </div>
                        <div className="card- body" >
                            <div className="row m-0" >
                                <div className="col-lg-10 m-auto" >
                                    <div className="form-group">
                                        <label htmlFor="">Name</label>
                                        <input value={name} onChange={e => setName(e.target.value)} type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className="col-lg-10 m-auto">
                                    <div className="form-group">
                                        <label htmlFor="">Email</label>
                                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} className='form-control' />
                                    </div>
                                </div>
                                <div className="col-lg-10 m-auto">
                                    <div className="form-group">
                                        <label htmlFor="">Phone</label>
                                        <input type="text" value={phone} onChange={e => setPhone(e.target.value)} className='form-control' />
                                    </div>
                                </div>
                                <div className="col-lg-10 m-auto">
                                    <div className="form-group">
                                        <label htmlFor="">Role</label>
                                        <select value={role} onChange={e => setRole(e.target.value)} className='form-control'>
                                            <option value="admin" className='form-control'>Admin</option>
                                            <option value="user" className='from-control'>User</option>
                                        </select>
                                        {/* <input type="text" className='foem-control' /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer m-auto">
                            <button className='btn btn-primary' type='submit'>Submit</button>
                            <Link className='btn btn-danger' to={'/user/'}>Back</Link>
                        </div>
                    </div>
                </form>
            </>
        );
};

export default Adduser;