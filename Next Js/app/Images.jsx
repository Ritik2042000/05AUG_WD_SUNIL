'use client'
import { useEffect } from 'react';
import { useState } from 'react';

const Images = () => {

    const [apiData, setApiData] = useState([])
    const fetchData = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos');
            const data = await res.json();
            console.log(data)
            setApiData(data)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            
            {apiData.filter((curElm,index) => {
                if (curElm.albumId == index+1) {
                    return curElm
                }
            }).map((data)=>{
                <div className='text-white' >{data}</div>
            })}
        </div>
    );
};

export default Images;