import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import DateRangeCom from './common Layouts/DateRangeCom';

const UsersReports = () => {
    //state for search function
    const [searchText, setSearchText] = useState('');
    // columns for table 
    const columns = [
        {
            name: "SR. NO",
            selector: (row) => row.id,
            sortable: true,
            width: "120px",
          },
        {
            name: 'NAME',
            selector: row => row.title,
        },
        {
            name: 'EMAIL',
            selector: row => row.email,
        },
        {
            name: 'MOBILE NUMBER',
            selector: row => row.mbnumber,
        },
       
        {
            name: 'CREATED CONTRACTS',
            selector: row => row.year,
        },
        {
            name: 'REMAINING CONTRACTS',
            selector: row => row.year,
        },
        {
            name: 'REMAINING CONTRACTS',
            selector: row => row.year,
        },
        {
            name: 'REGISTERED DATE',
            selector: row => row.year,
        },
    ];
    const data = [
        {
            id:1,
            title: 'Ghostbusters',
            email:'test@test.com',
            mbnumber:'9999999999',
            year: '1984',
        },
        {
            id: 2,
            title: 'admin',
            email:'test@test.com',
            mbnumber:'9999999999',
            year: '1984',
        },
        {
            id: 3,
            title: 'jurist',
            email:'test@test.com',
            mbnumber:'9999999999',
            year: '1984',
        },
    ];

    // search functionality code
    // function for input changes
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };
    // filter function 
    const filteredData = data.filter((row) =>
        row.title.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
        <>
            <div className="main-wrapper">
                <div className="container">
                    <div className="page-title">
                        <h1 className="page-heading mb-0">User Reports</h1>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-xl-end justify-content-md-center flex-wrap">
                                <div className="mb-0 p-md-3 ">
                                    <label className="form-label py-2 me-2 fs-label">Start Date To End Date </label>
                                    {/* <label className="form-label p-2 ">End Date</label> */}
                                    {/* <input className="form-control form-control-solid " placeholder="Pick start date" name="start_datetime" type="date" /> */}
                                    <div>
                                    <DateRangeCom />
                                    </div>
                                </div>
                                {/* <div className="mb-0 p-md-3">
                                    <input className="form-control form-control-solid " placeholder="Pick end date" type="date" />
                                </div> */}
                                <div className="mb-0 p-md-3">
                                    <button id="filterButton" className="btn  btn-primary"  >Submit</button>
                                </div>
                            </div>
                            <div className="row user_blocks p-2 mt-5  d-flex flex-wrap justify-content-xl-start justify-content-sm-center ">
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3" >
                                    <div className="text-center" id="total_user">460</div>
                                    <div className="d-flex align-items-center justify-content-center text-center">
                                        <div className="counted " >Total Users</div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3">
                                    <div className="text-center" id="Individual_Users">251</div>

                                    <div className="d-flex align-items-center justify-content-center text-center">
                                        <div className="counted" >Individual Users</div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3">

                                    <div className="text-center" id="Business_Users">87</div>

                                    <div className="d-flex align-items-center justify-content-center text-center" >
                                        <div className="counted" >Business Users</div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3">
                                    <div className="text-center justify-content-center">106</div>
                                    <div className="d-flex align-items-center justify-content-center text-center" >
                                        <div className="counted" >Business Admin</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2 user_blocks d-flex justify-content-xl-start justify-content-sm-center">
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3">
                                    <div className="text-center justify-content-center" >29</div>
                                    <div className="d-flex align-items-center justify-content-center text-center" >
                                        <div className="counted" >Free Users</div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3">
                                    <div className="text-center justify-content-center" >44</div>
                                    <div className="d-flex align-items-center justify-content-center text-center" >
                                        <div className="counted" >Basic Users</div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3">
                                    <div className="text-center justify-content-center" >14</div>
                                    <div className="d-flex align-items-center justify-content-center text-center" >
                                        <div className="counted">Premium Users</div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3">
                                    <div className="text-center justify-content-center" >0</div>
                                    <div className="d-flex align-items-center justify-content-center text-center" >
                                        <div className="counted">Gold Users</div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3">
                                    <div className="text-center justify-content-center" id="Platinum">0</div>
                                    <div className="d-flex align-items-center justify-content-center text-center" >
                                        <div className="counted">Platinum Users</div>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-between flex-wrap">
                                <div className="col-sm-6 col-12 d-flex flex-wrap ">
                                    <div className=" col-lg-12 col-xl-5 col-12 me-2 mt-1">
                                        <select className="form-select form-select-sm form-select-solid d-block w-100" name="discount_for_user" >
                                            <option defaultValue='' >Select User Type</option>
                                            <option value="1">All Users</option>
                                            <option value="2">Individual Users</option>
                                            <option value="3">Business Users</option>
                                            <option value="4">Business Admin</option>
                                        </select>
                                    </div>
                                    <div className=" col-lg-12 col-xl-6 col-12  mt-1">
                                        <select className="form-select form-select-sm form-select-solid w-100 "  id="membership" >
                                            <option defaultValue=''>Select Membership</option>
                                            <option value="1">All</option>
                                            <option value="2">Free Users</option>
                                            <option value="3">Basic Users</option>
                                            <option value="4">Premium Users</option>
                                            <option value="5">Gold Users</option>
                                            <option value="6">Platinum Users</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-12 d-flex flex-wrap  justify-content-lg-between align-items-center">
                                    <div className=" col-md-12 col-lg-6 col-sm-8 pd-2 mt-1 me-3">
                                        <input type="text" className="form-control mx-xl-5 " value={searchText}
                                            onChange={handleSearch} placeholder="Search by name" />
                                    </div>

                                    <div className="col-md-12 col-lg-4 col-sm-3  text-end mt-2">
                                        <button className='btn btn btn-primary '>Download</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2">
                                <DataTable
                                    columns={columns}
                                    data={filteredData}
                                    pagination
                                    striped
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default UsersReports;