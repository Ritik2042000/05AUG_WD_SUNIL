import React, { useEffect, useState } from 'react';

const Apidata = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
            result.json().then((respon) => {
                console.log(respon);
                setData(respon);
            })
        })
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1>Posts</h1>
                    {
                        data.map((items) =>
                        <div className="col-4   ">
                            <div className="card" >
                                <div className="card-body">
                                    <span>User No:{items.userId}</span>
                                    <h5 className="card-title">{items.title}</h5>
                                    <p className="card-text">{items.body}</p>
                                    <button type="button" className="btn btn-primary">Button</button>
                                    <span>Post No:{items.id}</span>
                                </div>
                            </div>
                        </div>
                            )
                        }
                </div>
            </div>
        </>
    );
};

export default Apidata;