'use client'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addUser } from "../reduxToolkit/slice";

const AddUsers = () => {
    const [input, setInput] = useState()
    const dispatch = useDispatch()
    const addUserInfo = (e) => {
        if (input !== '' && input !== undefined) {
            if (e.type === 'click' || (e.type === 'keydown' && e.key === 'Enter')) {
                dispatch(addUser(input))
                setInput('')
            }
        }
    }
    const usersList = useSelector((data) => data.users);
    console.log(usersList);

    const getUserData = (e) => {
        setInput(e.target.value)

    }
    return (
        <>
            <div className='text-white px-12 my-5'>
                <h3>User List</h3>
                <input type='text' placehlder='Add New User' value={input} className='bg-black text-white border border-cyan-800' onChange={(e) => getUserData(e)} onKeyDown={addUserInfo} />
                <button className='p-2 m-3 bg-blue-700 rounded-xl' onClick={addUserInfo} >Add New User</button>
            </div>

        </>
    )
}
export default AddUsers;