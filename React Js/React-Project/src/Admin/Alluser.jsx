import axios from 'axios';
import React from 'react';
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Alluser = () => {
    const [allPosts, setAllPosts] = useState({});
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        fetchAllPostApi()
    }, [loader])

    const editdata = (event) => {
        // console.log(event);  
    //   console.log(event.currentTarget);
    //   console.log(event.currentTarget.dataset);
    //   console.log(event.currentTarget.dataset.id);
      navigate(`/admin/edituser/${event.currentTarget.dataset.id}`)
    //   console.log("called edit Data");
    }
    // const HTMLList =""
    async function fetchAllPostApi(params) {

        const fetchData = await axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                setLoader(true)
                const HTMLList = response.data.map((item, val) => {
                    return <tr> <td>{item.id}</td> <td>{item.title}</td> <td> <i class="fas fa-edit" data-id={item.id} onClick={editdata}> </i> &nbsp; <i class="fa-sharp fa-solid fa-trash"></i></td> </tr>
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
                                    <th className="text-center">Titles</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="w-100">
                                {allPosts}
                                <input type="text" placeholder={allPosts.title} />
                            </tbody>
                        </table>
                    </div>
                </div>
                : "Loading..."}

        </>
    );
};

export default Alluser