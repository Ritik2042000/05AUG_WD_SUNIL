'use client'
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../reduxToolkit/slice";

const DisplayUsers = () => {
    const dispatch = useDispatch()
    const usersList = useSelector((data) => data.users);
    // console.log(usersList);

    const deleteUser = (id) => {
        dispatch(removeUser(id))        
    }
    return (

        <>
            <div className='text-white px-12 border border-cyan-800'>
                <h3 className='text-white'>User Information</h3>
                {
                    usersList && usersList.map((data) => {
                        return <ul key={data.key} className='flex bg-slate-500 items-center w-fit py-2 my-2 rounded-md'>
                            <li className='text-white px-2' >{data.name}</li>
                            <button onClick={() => deleteUser(data.id)} className='bg-blue-700 p-2 rounded-md mx-4'>DeleteUser</button>
                        </ul>
                    })
                }
            </div>
        </>
    )
}
export default DisplayUsers