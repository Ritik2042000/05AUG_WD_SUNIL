'use client'

import { useRouter } from "next/navigation"

const Login = () => {
    const router = useRouter()
    const navigate = (routes) => {
        router.push(routes)
    }
    return (
        <>
            <h1 className="text-white">Welocom TO Login Page</h1>

            <button className="btn  bg-slate-300 p-4 rounded-lg ms-3 mt-3 hover:bg-slate-400" onClick={() => navigate('/')}>Go Back To Home</button>
            <br />
            <button className="btn  bg-slate-300 p-4 rounded-lg ms-3 mt-3 hover:bg-slate-400" onClick={() => navigate('/login/loginUsers')}>Go Back To Loging User</button>
            <br />
            <button className="btn  bg-slate-300 p-4 rounded-lg ms-3 mt-3 hover:bg-slate-400" onClick={() => navigate('/login/loginAdmin')}>Go Back To Login Admin</button>
            <br />


        </>
    )
}
export default Login