'use client'
import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';

const Images = () => {

    const [apiData, setApiData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const [images, setImages] = useState([])

    const fetchData = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos');
            const data = await res.json();
            // console.log(data)
            setApiData(data)

            const uniqueAlbums = data.filter((item, index, self) => {
                console.log({i:index,item:item.albumId});
                
                return index === self.findIndex((t) => t.albumId === item.albumId);
            });

            setFilterData(uniqueAlbums)

        } catch (error) {
            console.error("Error fetching data:", error);
        }


        // console.log(apiData,'filterd');
    };

    const showPhotos = (id) => {
        console.log(id, 'albumid');
        setIsOpen(true)
        let data = apiData.filter((curElem) => {
            if (curElem.albumId == id) {
                return curElem
            }
        })
        setImages(data)
        // console.log(data, 'images');

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className='flex flex-wrap px-12'>
                {filterData.map((data) => {
                    return <div className='text-white flex p-4 cursor-pointer mx-3 items-center  justify-center' key={data?.id} onClick={() => showPhotos(data.albumId)}>
                        <p> {data?.albumId}</p>
                        <img src={data?.thumbnailUrl} alt={data.title} className='w-11' />
                    </div>

                })}
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center"
                    onClick={() => setIsOpen(false)} // Close popup when clicking outside
                >
                    <div
                        className="bg-white rounded-lg shadow-lg  w-[80%] overflow-y-scroll h-[80vh]  "
                        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
                    >
                        <div className='flex flex-wrap '>
                            {

                                images.map((data) => {
                                    return <div key={data.id} className='p-4 ' >
                                        <Image src={data.thumbnailUrl} alt={data.title} width={100} height={100} />
                                    </div>
                                })

                            }
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                            >
                                Close Popup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Images;