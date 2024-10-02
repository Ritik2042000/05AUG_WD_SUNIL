// 'use client'
// import { useEffect, useState } from "react"

import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
// import {Roboto} from 'next/font/google'
import Loader from "@/components/Loader";
import { Suspense } from "react";
import apiCall from "./apicall";


// font func 
// const roboto = Roboto({
//     weight:500,
//     style:'normal',
//     // display:
// })

// Api with server components




const ProductList = async () => {

    // Api Call Using 'Use Client' As client components

    // const [product, setProduct] = useState([]);

    // const apiCall = async (url) => {
    //     let data = await fetch(url);
    //     data = await data.json();
    //     console.log(data);
    //     setProduct(data.products)
    // }

    // useEffect(() => {
    //     apiCall("https://dummyjson.com/products")
    // }, [])

    let product = await apiCall("https://dummyjson.com/products");



    // console.log(product);



    return (
        <div className="text-white px-12 py-8">
            <h1 className="text-2xl">ProductList </h1>
            <div className="flex items-center w-100 flex-wrap">
                <Suspense fallback={<Loader />}>
                    {

                        product.map((data) => {
                            return <Link href={`/productlist/${data.id}`} className="w-[31%] py-2 m-2  border-gray-200 border-2 rounded-xl " key={data.id} >

                                <p className="pe-6 text-center" >{data.title}</p>
                                <div className="mx-auto w-[40%]">
                                    <div className=" items-center mt-3 mb-2 w-100">
                                        <span className="text-gray-400 pe-4">Category : {data.category}</span>
                                        <Image src={data.thumbnail} width={150} height={150} />
                                        <Button data={data.price} btnName={'Click Me'} className={'bg-lime-700 p-3 rounded-md cursor-pointer mt-2'} />
                                    </div>
                                </div>

                            </Link>
                        })
                    }
                </Suspense>
            </div>
        </div>
    )
}
export default ProductList;


export const generateMetadata = ({ params }) => {
    return {
        title: 'Productlists'
    }

}
