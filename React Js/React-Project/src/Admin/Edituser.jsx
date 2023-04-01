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
        const fetchData = await axios.get(`http://justjayapi.000webhostapp.com/userdatabyidgetmethod?id=${userId}`)
            .then(function (response) {
                setLoader(true)
                console.log(response.data.Data[0]);
                setData(response.data.Data[0])
            });
    }
    function updatedata(e) {
        e.preventDefault()
        console.log(data);
        fetch(`http://justjayapi.000webhostapp.com/userdatabyidgetmethod?id=${data.id}&username=${data.username}&password=${data.password}&gender=${data.gender}&email=${data.email}`).then((res) => res.json()).then((response) => {
                console.log(response.Data[0]);
                if (response.Data[0] === 1) {
                navigate('/admin/alluser')

                } else {
                    alert('fali to update data')
                }
            })
    }


    // fetch(`https://jsonplaceholder.typicode.com/posts/${data}`,{
    //     method:'PUT',
    //     body:JSON.stringify({
    //         id:data.id,
    //         title:data.title,
    //         body:data.body,
    //         userId:data.userId,
    //     })
    //     // headers: {
    //     //     'Content-type': 'application/json',
    //     // },
    // }).then((res) => res.json()).then((json)=> {
    //     console.log(json ,'called res');
    //     navigate('/admin/alluser')
    // })


    return (
        <>
            {JSON.stringify(data)}
            <div className="container-fulid">
                <div className="row mx-0"  >
                    <form onSubmit={updatedata} method='post' className='text-center my-3'>
                        <input type="text" placeholder='Enter ur Data' value={data.username} className='form-control w-100' name='username' id='title' onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
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