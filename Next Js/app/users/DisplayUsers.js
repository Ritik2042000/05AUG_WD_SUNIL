'use client'
import { useSelector } from "react-redux"

const DisplayUsers = () => {
    const usersList = useSelector((data) => data.users);
    console.log(usersList);

    return (

        <>
            <div className='text-white px-12 border border-cyan-800'>
                <h3 className='text-white'>User Information</h3>
                {
                    usersList && usersList.map((data) => {
                        return <ul key={data.key}>
                            <li className='text-white'>{data.name}</li>
                        </ul>
                    })
                }
            </div>
        </>
    )
}
export default DisplayUsers