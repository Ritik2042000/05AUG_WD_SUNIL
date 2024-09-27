import Link from "next/link";


const NotFound = () => {

    // using not-found we can make our custom 404 page
    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-sky-200 animate-bounce">404</h1>
                <p className="mt-4 text-lg text-slate-400 animate-fade-in">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <p className="text-md text-gray-300 animate-fade-in mt-2">
                    But don't worry, you can find plenty of other things on our homepage.
                </p>
                <Link href="/" className="mt-6 inline-block px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300 ease-in-out">

                    Go Back Home

                </Link>
            </div>
        </div>
    )
}
export default NotFound;