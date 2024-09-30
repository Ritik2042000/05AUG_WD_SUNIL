'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter()
  // function for the routing
  const navigate = (routes) => {
    router.push(routes)
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-black text-white  pb-20 gap-16 sm:p-2 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Hello First Next JS
        <div className=" flex">
          <div className="">
            <Card data={'rohan'} />
            <Card data={'soham'} />
            <Card data={'mohan'} />
            <Card data={'sonal'} />

          </div>
          <div className="links ms-48">
            <Link className="px-2 text-blue-500 text-[18px]" href='/login'>Login Page</Link>
            <Link className="px-2 text-blue-500 text-[18px]" href='/login/loginUsers' >Login User Page</Link>
            <Link className="px-2 text-blue-500 text-[18px]" href='/login/loginAdmin' >Login Admin Page</Link>
            <Link className="px-2 text-blue-500 text-[18px]" href='/about' >About Page</Link>

          </div>
        </div>

        {/*  Using useRouter */}

        <button className="btn  bg-slate-300 text-black p-4 rounded-lg hover:bg-slate-400" onClick={() => navigate('/login')}>Go To Loging </button>
        <button className="btn  bg-slate-300 text-black p-4 rounded-lg hover:bg-slate-400" onClick={() => navigate('/about')}>Go To About</button>
        <button className="btn  bg-slate-300 text-black p-4 rounded-lg hover:bg-slate-400" onClick={() => navigate('/productlist')}>Go To Products</button>
      </main>
    </div>
  );
}

// same page render the component
// passing props
const Card = ({ data }) => {
  return (
    <div className="animate-pulse text-2xl py-2 cursor-pointer" onClick={() => alert(`Hello ${data}`)}> {data}</div>
  )
}
