'use client'
const User = ({ params }) => {
    console.log(params);
    // Dynamic Routing Page data show using params and then folder name of dynamic routes 
    return (
        <>
            <h1 className="text-white">
                Users Name : {params.user}
            </h1>
        </>
    )
}
export default User;