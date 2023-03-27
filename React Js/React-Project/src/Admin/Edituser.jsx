import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Edituser = () => {
    const [loader, setLoader] = useState(false);
    const [updatedata, setUpdatedata] = useState([]);
    let { userId } = useParams ();
    useLayoutEffect(() => {
        fetchUserDataByIdApi()
    }, [loader])
    async function fetchUserDataByIdApi(params) {
        const fetchData = await axios.put(`https://jsonplaceholder.typicode.com/posts/${userId}`)
            .then(function (response) {
              setLoader(true)
              console.log(response);
              console.log(response.data);
            //   console.log(fetchData);
            //   setUpdatedata(response.data);
           })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <>
          {/* <div className="container">
            <div className="row">
                <div className="col">
                    <h2>hello</h2>
                    {updatedata.map((item) => (
                    <div className="container">

                       <p> {userId}</p>
                        <p>{item.title}</p>
                    </div>
                    ))}
                </div>
            </div>
          </div> */}
        </>
    );
};

export default Edituser;