'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter()
  const navigate = (routes) => {
    router.push(routes)
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-black text-white p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Hello First Next JS
        <Card data={'rohan'} />
        <Card data={'soham'} />
        <Card data={'mohan'} />
        <Card data={'sonal'} />
        <Link href='/login' >Login Page</Link>
        <Link href='/login/loginUsers' >Login User Page</Link>
        <Link href='/login/loginAdmin' >Login Admin Page</Link>
        <Link href='/about' >About Page</Link>

        {/*  Using useRouter */}
        <button className="btn  bg-slate-300 text-black p-4 rounded-lg hover:bg-slate-400" onClick={() => navigate('/login')}>Go To Loging </button>
        <button className="btn  bg-slate-300 text-black p-4 rounded-lg hover:bg-slate-400" onClick={() => navigate('/about')}>Go To About</button>
      </main>
    </div>
  );
}

const Card = ({ data }) => {
  return (
    <div className="animate-pulse text-2xl" onClick={() => alert(`Hello ${data}`)}> {data}</div>
  )
}
