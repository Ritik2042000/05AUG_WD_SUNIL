// 'use client'

import apiCall from "../apicall";

const ProductsDetalis = async ({ params }) => {
    let product = await apiCall("https://dummyjson.com/products");
    console.log(product, 'indise dynamic');

    let data = product.filter((curElem) => {
        if (curElem.id == params.products) {
            return curElem
        }
    })
    console.log(data);

    return (
        <div
            key={data[0].id}
            className="bg-gray-800 text-white mt-5 px-6 py-4 rounded-lg shadow-lg max-w-md mx-auto"
        >
            <h2 className="text-2xl font-semibold mb-2">Product Name: {data[0].title}</h2>
            <p className="text-lg font-medium mb-1">Brand Name: {data[0].brand}</p>
            <p className="text-sm text-gray-300 mb-3">Product Description: {data[0].description}</p>

            <div className="flex items-center space-x-2 mb-2">
                <p className="font-medium">Rating:</p>
                <p className="text-yellow-400 font-semibold">{data[0].rating} ★</p>
            </div>

            <div className="flex justify-between items-center mb-4">
                <p className="font-semibold text-lg">Final Price:</p>
                <p className="text-xl text-green-500">${data[0].price}</p>
            </div>

            <p className="text-sm text-gray-400">Available Stock: {data[0].stock}</p>
        </div>
    )

}
export default ProductsDetalis


export const generateMetadata = ({ params }) => {
    // console.log(params);
    return {
        title: params.products
    }
}

// to make statics page Data 
export const generateStaticParams = async () => {
    let product = await apiCall("https://dummyjson.com/products");
    return product.map((data) => ({
        products: data.id.toString()
    }))
}