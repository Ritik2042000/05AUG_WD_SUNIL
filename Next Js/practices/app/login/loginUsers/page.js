'use client'
import { useRouter } from "next/navigation";

const LoginUser = () => {
    const router = useRouter()
    const navigate = (routes) => {
        router.push(routes)
    }
    return (
        <div>
            <h1 className="text-white">Welcome To The LoginUser</h1>
            <button className="btn  bg-slate-300 p-4 rounded-lg hover:bg-slate-400" onClick={() => navigate('/login')}>Go Back To Login</button>
            <button className="btn  bg-slate-300 p-4 rounded-lg hover:bg-slate-400" onClick={() => navigate('/login/loginUsers/Users')}>Go To Users</button>
        
            <br />
        </div>
    )
}
export default LoginUser;