import React from 'react';
import { Link } from 'react-router-dom';

const Adduser = () => {
    return (
        <>
            <div className="card">
                <div className="card-header" style={{textAlign:"left"}}>
                    <h2>Add User</h2>
                </div>
                <div className="card-body" >
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label htmlFor="">Name</label>
                                <input type="text" className='foem-control' />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="text" className='foem-control' />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label htmlFor="">Phone</label>
                                <input type="text" className='foem-control' />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label htmlFor="">Role</label>
                                <input type="text" className='foem-control' />
                            </div>
                        </div>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    </div>
                </div>
                <div className="card-footer"    >
                    <button className='btn btn-primary' type='button'>Submit</button>
                    <Link className='btn btn-danger' to={'/user/'}>Back</Link>
                </div>
            </div>
        </>
    );
};

export default Adduser;