import React, { useEffect } from 'react';
import { FeatchUserList } from '../Redux/Action';
import { connect } from 'react-redux';

const Userlist = (props) => {
    useEffect (()=>{
        props.loaduser();
    },[])
    return (
        <>
            <div className="card">

                <div className="card-header tect-center">
                    <h2>User Listing</h2>
                </div>

                <div className="card-body"> 
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Code</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Role</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
};

const mapStoreToprops = (state) =>{
    return {
        user: state.user
    }
}
const mapDispatchToprops = (dispatch) =>{
    return {
        loaduser :()=> dispatch(FeatchUserList())
    }
}

export default  connect(mapStoreToprops,mapDispatchToprops) (Userlist);
