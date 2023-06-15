import axios from 'axios';
import React from 'react';
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Alluser = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [loader, setLoader] = useState(false);
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    useLayoutEffect(() => {
        fetchAllPostApi()
        // searchresult()
    }, [loader])

    const editdata = (event) => {
        //   console.log(event.currentTarget.dataset.id);
        navigate(`/admin/edituser/${event.currentTarget.dataset.id}`)
        //   console.log("called edit Data");
    }
    const deletedata = async (event) => {
        const PostId = event.currentTarget.dataset.id
        try {
            const fetchData = await axios.delete(`http://localhost:3004/posts/${PostId}`)
            if (fetchData.status === 200) {
                setLoader(false)
                navigate('/admin/alluser')
            } else {
                alert('Unable to delete data');
            }
        }

        catch (error) {
            console.error(error);
            alert('An error occurred while deleting data');

        }
    }
    async function fetchAllPostApi(params) {

        const fetchData = await axios.get('http://localhost:3004/posts')
            .then(function (response) {
                setLoader(true)
                // console.log(response.data.Data);
                const HTMLList = response.data.map((item, val) => {
                    return <tr key={item.id}> <td>{item.id}</td> <td>{item.username}</td> <td>{item.gender}</td><td>{item.fullname}</td> <td><i className="fas fa-edit" data-id={item.id} onClick={editdata}></i>&nbsp;<i className="fa-sharp fa-solid fa-trash" data-id={item.id} onClick={deletedata}></i></td></tr>
                })
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

    // const searchresult = () => {
    //     axios.get('http://localhost:3004/posts')
    //       .then(function (response) {
    //         const searchValue = search.toLowerCase();
    //         const filteredData = response.data.filter((user) => {
    //           return user && user.username && user.username.toLowerCase().includes(searchValue);
    //         });
    //         setAllPosts(filteredData);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   }
    const searchresult = () => {
        axios
          .get('http://localhost:3004/posts')
          .then(function (response) {
            const searchValue = search.toLowerCase();
            // if (searchValue === '') {
            //   // If search value is empty, set all user data
            //   const HTMLList = response.data.map((item) => (
            //     <tr key={item.id}>
            //       <td>{item.id}</td>
            //       <td>{item.username}</td>
            //       <td>{item.gender}</td>
            //       <td>{item.fullname}</td>
            //       <td>
            //         <i className="fas fa-edit" data-id={item.id} onClick={editdata}></i>&nbsp;
            //         <i className="fa-sharp fa-solid fa-trash" data-id={item.id} onClick={deletedata}></i>
            //       </td>
            //     </tr>
            //   ));
            //   setAllPosts(HTMLList);
             {
              // If search value is not empty, filter user data
              const filteredData = response.data.filter((user) => {
                return user && user.username && user.username.toLowerCase().includes(searchValue);
              });
              const HTMLList = filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.gender}</td>
                  <td>{item.fullname}</td>
                  <td>
                    <i className="fas fa-edit" data-id={item.id} onClick={editdata}></i>&nbsp;
                    <i className="fa-sharp fa-solid fa-trash" data-id={item.id} onClick={deletedata}></i>
                  </td>
                </tr>
              ));
              setAllPosts(HTMLList);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      };        
      
      
    const handlechangedata = (value) => {
        setSearch(value);
        // searchresult();
        if (value === '') {
            // If search value is empty, fetch all posts
            fetchAllPostApi();
          } else {
            // If search value is not empty, perform search
            searchresult();
          }
    }
    return (
        <>

            <h2 className='my-3 text-dark'>User Data</h2>
            {loader ?
                <><div className="container text-center">
                    <div className="row">
                        <div className="col mt-5  ">
                        </div>

                    </div>
                </div><div className="row mx-0">
                        <div className="col-8 offset-2">
                            <div className="col-8 txt-r">
                                <input type="search " className='d-block' value={search} onChange={(e) => handlechangedata(e.target.value)} />
                            </div>
                            <table className='table table-borderd table-striped '>
                                <thead className='bg-dark text-light'>
                                    <tr className="table-row">
                                        <th>User Id</th>
                                        <th className="text-center">Usename</th>
                                        <th className="text-center">Gender</th>
                                        <th className="text-center">Fullname</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="w-100">{allPosts}</tbody>
                            </table>
                        </div>
                    </div></>
                : "Loading..."}
            {/* <Outlet></Outlet> */}
        </>
    );
};

export default Alluser