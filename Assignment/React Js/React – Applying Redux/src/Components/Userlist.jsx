import React, { useEffect } from 'react';
import { FeatchUserList, RemoveUser } from '../Redux/Action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Userlist = (props) => {
    useEffect (()=>{
        props.loaduser();
    },[])

    const handleclickdelete = (code) => {
        if(window.confirm ('Do You Want Delete?')) {
            props.removeuser(code);
            props.loaduser();
            toast.success('User removed successfully.')
        }
    }
    return (
        props.user.loading?<div><h2>Loading.....</h2></div>:
        props.user.errmessage?<div><h2></h2>{props.user.errmessage}</div>:
        <>
            <div className="card">

                <div className="card-header text-end">
                    <Link  to={'/user/Adduser'}className='btn btn-success'>Add User +</Link>
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
                                {
                                    props.user.userlist && props.user.userlist.map((item)=>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.role}</td>
                                        <td>
                                            <Link to={'/user/edit/'+item.id}className='btn btn-primary' >Edit</Link>|
                                            <button onClick={()=> {handleclickdelete(item.id)}} className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                    )
                                }
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
        loaduser :()=> dispatch(FeatchUserList()),
        removeuser :(code)=> dispatch(RemoveUser(code))
    }
}

export default  connect(mapStoreToprops,mapDispatchToprops) (Userlist);
