'use client'

const Lecture = ({ params }) => {
    console.log(params);
    // to making deep nested dynamic routes make folder like this[...foldername] and name of routes using params array
    return (
        <>
            <div className="text-white">
                <p>  Collage Day : {params.lecture[0]}</p>
                <p> Lecture : {params.lecture[1]} </p>
            </div>
        </>
    )
}
export default Lecture;