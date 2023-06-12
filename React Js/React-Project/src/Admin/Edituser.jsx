import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';




const Edituser = () => {

    const [loader, setLoader] = useState(false);
    const [data, setData] = useState([])
    let { userId } = useParams();
    const navigate = useNavigate();
    useLayoutEffect(() => {
        fetchUserDataByIdApi()
    }, [loader])



    async function fetchUserDataByIdApi() {
        const fetchData = await axios.get(`http://localhost:3004/posts?id=${userId}`)
            .then(function (response) {
                setLoader(true)
                console.log(response.data[0].username);
                setData(response.data[0])
            });
    }
  
    async function updatedata(e) {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3004/posts/${data.id}&${data.password}`,{
                username: data.username,
                password : data.password,
            });

            console.log(response.data);

            if (response.data.username) {
                navigate('/admin/alluser');
            } else {
                alert('Failed to update data');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while updating data');
        }
    }







return (
    <>
        {JSON.stringify(data)}
        <div className="container-fulid">
            <div className="row mx-0"  >
                <form onSubmit={updatedata} method='post' className='text-center my-3'>
                    <input type="text" placeholder='Enter ur Data' value={data.username} className='form-control w-100' name='username' id='title' onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
                    />
                    <input type="password" placeholder='Enter Your Password' value={data.password} className='form-control w-100' name='password' id='' onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
                    />
                    <div className='row mt-3'>
                        <div className="col-12">
                            <input type="submit" value="Update" className='btn btn-primary' name="btn-update" id="btn-update" />
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </>
);
};

export default Edituser;