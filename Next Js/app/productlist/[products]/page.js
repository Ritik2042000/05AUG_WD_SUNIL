// 'use client'
const ProductsDetalis = () => {

}
export default ProductsDetalis


export const generateMetadata = ({params}) => {
    console.log(params);
    return {
        title:params.products
    }
}