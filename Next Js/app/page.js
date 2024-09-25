'use client'
import Image from "next/image";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-black text-white p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Hello First Next JS
        <Card data={'rohan'} />
        <Card data={'soham'} />
        <Card data={'mohan'} />
        <Card data={'sonal'} />
      </main>
    </div>
  );
}

const Card = ({data}) => {
    return (
        <div className="animate-pulse text-2xl" onClick={()=>alert(`Hello ${data}`)}> {data}</div>      
    )
}
