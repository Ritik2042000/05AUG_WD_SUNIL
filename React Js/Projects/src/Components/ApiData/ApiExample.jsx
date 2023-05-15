import React, { useEffect, useState } from 'react';

const ApiExample = () => {

    const [data, setData] = useState('')

    useEffect(() => {
        fetch('https://justjayapi.000webhostapp.com/alluser').then((res) => res.json()).then((result) => {
            setData(result)
            console.log(result);
        })
    })
    const MenuData = Object.Entries(data)

    return (
        <>
            {/* <div>
                {data.map((item) => {
                    return (

                        <p>{item.usename}</p>
                    )
                })
                }
            </div> */}
        </>
    )
}
export default ApiExample