'use client'
import Link from "next/link";

const userDetalis = () => {
    const users = ['Rohan','Soham','Mohan','Gopal','Shyam'];
    return (
        <>
        <div className="text-white px-12 py-8">
            <ul>
                {
                    users.map((data,index)=>{
                        return <li key={index} className="text-xl my-2">
                            <Link href={`/login/loginUsers/Users/${data}`}>{data}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
        </>

    )
}

export default userDetalis;