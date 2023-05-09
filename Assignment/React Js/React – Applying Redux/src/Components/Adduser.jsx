import React from 'react';
import { Link } from 'react-router-dom';

const Adduser = () => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h2>Add User</h2>
                </div>
                <div className="card-body">

                </div>
                <div className="card-footer">
                    <button className='btn btn-primary' type='button'>Submit</button>
                    <Link className='btn btn-danger' to={'/user/'}>Back</Link>
                </div>
            </div>
        </>
    );
};

export default Adduser;