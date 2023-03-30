import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Edituser = () => {
    const [loader, setLoader] = useState(false);
    const [data, setData] = useState({})
    let { userId } = useParams();
    useLayoutEffect(() => {
        fetchUserDataByIdApi()
    }, [loader])
    async function fetchUserDataByIdApi() {
        const fetchData = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
            .then(function (response) {
                setLoader(true)
                console.log(response.data);
                // console.log("Data",userId);
                setData(response.data)
            });
    }
    async function updatedata(e){
        e.preventDefault()
        console.log(data);
    }


    return (
        <>
            {/* {JSON.stringify(data)} */}
            <form  onSubmit={updatedata} method='post'>
                <input type="text" placeholder='Enter  ur Data' value={data.title} className='form-control' name='title' id='title' onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
                />
                <div className='row mt-3'>
                    <div className="col-6">
                        <input type="submit" value="Update" className='btn btn-primary' name="btn-update" id="btn-update" />
                    </div>
                </div>
            </form>

        </>
    );
};

export default Edituser;