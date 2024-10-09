'use client'
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addUser } from "../reduxToolkit/slice";


const AddUsers = () => {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const addUserInfo = () => {
        dispatch(addUser(input))
    }
    return (
        <>
            <div className='text-white px-12 my-5'>
                <h3>User List</h3>
                <input type='text'  placehlder='Add New User' className = 'bg-black text-white border border-cyan-800' onChange={(e) => setInput(e.target.value)} />
                <button className='p-2 m-3 bg-blue-700 rounded-xl' onClick={addUserInfo}>Add New User</button>
            </div>

        </>
    )
}
export default AddUsers;