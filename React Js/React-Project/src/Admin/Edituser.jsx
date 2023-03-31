import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edituser = () => {
    const [loader, setLoader] = useState(false);
    const [data, setData] = useState({})
    let { userId } = useParams();
    const navigate = useNavigate();
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
  async function updatedata(e) {
        e.preventDefault()
        console.log(data);
        await fetch(`https://jsonplaceholder.typicode.com/posts/${data}`,{
            method:'put'


            
            // headers:

            // 'Content-type': 'application/json;
        }
          
        ).then((res) => res.json()).then((response)=> {
            console.log(response);
            navigate('/admin/alluser')
        })
    }


    return (
        <>
            {/* {JSON.stringify(data)} */}
            <div className="container-fulid">
                <div className="row mx-0"  >
                    <form onSubmit={updatedata} method='post' className='text-center my-3'>
                        <input type="text" placeholder='Enter ur Data' value={data.title} className='form-control w-100'   name='title' id='title' onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
                        />
                        <div className='row mt-3'>
                            <div className="col-12">
                                <input type="submit" value="Update" className='btn btn-primary ' name="btn-update" id="btn-update" />
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

export default Edituser;