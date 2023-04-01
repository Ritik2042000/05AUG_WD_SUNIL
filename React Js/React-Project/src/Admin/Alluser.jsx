import axios from 'axios';
import React from 'react';
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Alluser = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        fetchAllPostApi()
    }, [loader])

    const editdata = (event) => {
        //   console.log(event.currentTarget.dataset.id);
        navigate(`/admin/edituser/${event.currentTarget.dataset.id}`)
        //   console.log("called edit Data");
    }
     const deletedata = (event) => {
          axios.get(`https://jsonplaceholder.typicode.com/${event.currentTarget.dataset.id}`)
            .then(function (response) {
                console.log(response.data.id);
    
            })       
            

            
        
    }

    async function fetchAllPostApi(params) {

        const fetchData = await axios.get('http://justjayapi.000webhostapp.com/allusers')
            .then(function (response) {
                setLoader(true)
                // console.log(response.data.Data);
                const HTMLList = response.data.Data.map((item, val) => {
                    return <tr key={item.id}> <td>{item.id}</td> <td>{item.username}</td> <td>{item.gender}</td><td>{item.fullname}</td> <td><i className="fas fa-edit" data-id={item.id} onClick={editdata}></i> &nbsp; <i className="fa-sharp fa-solid fa-trash" data-id={item.id} onClick={deletedata}></i></td></tr>

                }).slice(0, 20)
                setAllPosts(HTMLList)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    return (
        <>
            <h2 className='my-3 text-dark'>User Data</h2>
            {loader ?
                <div className="row mx-0">
                    <div className="col-8 offset-2">
                        <table className='table table-borderd table-striped '>
                            <thead className='bg-dark text-light'>
                                <tr className="table-row">
                                    <th>User Name</th>
                                    <th className="text-center">Usename</th>
                                    <th className="text-center">Gender</th>
                                    <th className="text-center">Fullname</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="w-100">
                                {allPosts}
                            </tbody>
                        </table>
                    </div>
                </div>
                : "Loading..."}
                {/* <Outlet></Outlet> */}
        </>
    );
};

export default Alluser