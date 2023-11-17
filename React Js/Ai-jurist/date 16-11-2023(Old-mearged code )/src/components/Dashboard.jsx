import React, { useState } from 'react';
import SingleLineChart from './chartscomponemts/SingleLineChart';
import DoubleLineCart from './chartscomponemts/DoubleLineCart';
import { MdModeEdit } from 'react-icons/md';
import { Offcanvas } from 'react-bootstrap';
import DateRangeCom from './common Layouts/DateRangeCom';
import { FaFilter } from 'react-icons/fa6';
import SearchableDropdown from './common Layouts/SearchableDropdown';
import SearchableDropdownForRoles from './common Layouts/SearchableDropdownForRoles';
import DataTable from 'react-data-table-component';
import { useForm } from 'react-hook-form';
import CountrySelectInput from './common Layouts/CountrySelectInput';


const Dashboard = () => {
    const [editShow, setEditShow] = useState(false);
    const [addShow, setAddShow] = useState(false);

    const handleEditClose = () => setEditShow(false);
    const handleEditShow = () => setEditShow(true);
    const handlAddClose = () => setAddShow(false);
    const handleAddShow = () => setAddShow(true);

    // react from hook for validation for Add User
    const { register: registerForm1, handleSubmit: handleSubmitForm1, formState: { errors: errorsForm1 }, reset: resetForm1 } = useForm();
    const onSubmitForAddUser = (data) => {
        console.log(data);
        resetForm1();
    };
    // react from hook for validation for Edit User
    const { register: registerForm2, handleSubmit: handleSubmitForm2, formState: { errors: errorsForm2 }, reset: resetForm2 } = useForm();

    const onSubmitForEditUser = (data) => {
        console.log(data);
        resetForm2();
    };

    // table data
    const columns = [
        {
            name: "SR. NO",
            selector: (row) => row.id,
            sortable: true,
            width: "120px",
        },
        {
            name: ' NAME',
            selector: row => row.name,
            sortable: true,
            width: '190px',
        },
        {
            name: 'EMAIL',
            selector: row => row.email,
            sortable: true,
            width: '240px',
        },
        {
            name: 'ROLE',
            selector: row => row.role,
            sortable: true,
            width: '100px',
        },
        {
            name: 'CREATED ',
            selector: row => row.datentime,
            sortable: true,
            width: '120px',
        },
        {
            name: 'STATUS',
            selector: row => row.status,
            // width:'auto',
            width: '100px',
        },
        {
            name: 'ACTION',
            cell: (row) => (
                <MdModeEdit className='edit-icon mx-4' onClick={handleEditShow} />
            ),
            sortable: true,
            width: '98px',
        },
    ]

    const data = [
        {
            id: 1,
            name: 'Bradley Hughes',
            email: 'jekoja2813@in2reach.com',
            role: 'Admin',
            datentime: '31-07-2023 ',
            status: 'Active',
        },
        {
            id: 2,
            name: 'Sehan',
            email: 'sehan@mailinator.com',
            role: 'Admin',
            datentime: '25-09-2023 ',
            status: 'InActive',
        },
        {
            id: 3,
            name: 'Admin',
            email: 'admin@aijurist.com',
            role: 'Admin',
            datentime: '03-10-2023 ',
            status: 'Active',
        },
        {
            id: 4,
            name: 'Aslam',
            email: 'aslam@mailinator.com',
            role: 'Admin',
            datentime: '26-09-2023 ',
            status: 'Inactive',
        },

    ]
    return (
        <>

            <div className="main-wrapper ">
                <div className="container">
                    {/* page title of dashboard */}
                    <div className="page-title">
                        <h1 className="page-heading mb-0">Dashboard</h1>
                    </div>
                    {/* dashboard data */}
                    <div className="row  ">
                        <div className="col-xl-4 col-md-6 col-sm-12 ">
                            <div className="card mb-3  ">
                                <div className="card-header align-items-center border-0 bg-white">
                                    <h3 className="card-title align-items-start flex-column ">
                                        <span className="fw-bolder  text-dark">Individual</span>
                                    </h3>
                                    <div className="row">
                                        <div className="col-xl-12 col-md-12 p-1 col-xxl-12 ms-2">
                                            <div className="mb-0 ml-1">
                                                <label className="form-label fs-label">Start Date To End Date</label>
                                                {/* <input className="form-control form-control-solid" placeholder="Pick date range" id="kt_daterangepicker_5" name="start_datetime" type="date" max="2023-10-05" /> */}
                                                {/* <DateRangePickerComponent/> */}
                                                <DateRangeCom />
                                            </div>
                                        </div>
                                        {/* <div className="col-xl-12 col-md-6 p-1 col-xxl-6">
                                            <div className="">
                                                <label className="form-label">End Date</label>
                                                <input className="form-control form-control-solid" placeholder="Pick date range" id="kt_daterangepicker_6" name="end_datetime" type="date" min="2023-10-06" />
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row  ">
                                        <div className="col-md-6 col-xxl-4">
                                            <div className="ms-1 mb-2 mt-2">
                                                <span className="fw-bolder text-dark">Free</span>
                                            </div>
                                            <div className="border border-3 rounded p-1">
                                                <div className="flex-grow-1">
                                                    <span className="fw-bolder  text-primary">88</span>
                                                </div>
                                                <div className="mixed-widget-7-chart card-rounded-bottom" data-kt-chart-color="primary" style={{ minHeight: "80px" }}>
                                                    <SingleLineChart />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xxl-4">
                                            <div className="ms-1 mb-2 mt-2">
                                                <span className="fw-bolder  text-dark">Basic</span>
                                            </div>
                                            <div className="border border-3 rounded p-1">
                                                <div className="flex-grow-1">
                                                    <span className="fw-bolder  text-primary">32</span>
                                                </div>
                                                <div className="mixed-widget-7-chart card-rounded-bottom" style={{ minHeight: "80px" }}>
                                                    <SingleLineChart />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xxl-4">
                                            <div className="ms-1 mb-2 mt-2">
                                                <span className="fw-bolder   text-dark">Premium</span>
                                            </div>
                                            <div className="border border-3 rounded p-1">
                                                <div className="flex-grow-1">
                                                    <span className="fw-bolder  text-primary">9</span>
                                                </div>
                                                <div className="mixed-widget-7-chart card-rounded-bottom" style={{ minHeight: "80px" }}>
                                                    <SingleLineChart />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xxl-4">
                                            <div className="ms-1 mb-2 mt-2">
                                                <span className="fw-bolder text-dark">Gold</span>
                                            </div>
                                            <div className="border border-3 rounded p-1">
                                                <div className="flex-grow-1">
                                                    <span className="fw-bolder  text-primary">0</span>
                                                </div>
                                                <div className="mixed-widget-7-chart card-rounded-bottom" style={{ minHeight: "80px" }}>
                                                    <SingleLineChart />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xxl-4">
                                            <div className="ms-1 mb-2 mt-2">
                                                <span className="fw-bolder text-dark">Platinum</span>
                                            </div>
                                            <div className="border border-3 rounded p-1">
                                                <div className="flex-grow-1">
                                                    <span className="fw-bolder  text-primary">0</span>
                                                </div>
                                                <div className="mixed-widget-7-chart card-rounded-bottom" style={{ minHeight: "80px" }}>
                                                    <SingleLineChart />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-column w-100 py-3  ">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Free Revenue</h6>
                                                <span className="text-warning fw-bold">68%</span>
                                            </div>
                                            <div className="progress  w-100">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "68%" }} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column w-100 py-2 ">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Basic Revenue</h6>
                                                <span className="text-warning fw-bold">25%</span>
                                            </div>
                                            <div className="progress  w-100">
                                                <div className="progress-bar bg-info" role="progressbar" style={{ width: "25%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column w-100 py-2 ">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Premium Revenue</h6>

                                                <span className="text-warning fw-bold">7%</span>
                                            </div>
                                            <div className="progress  w-100">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "7%" }} aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column w-100 py-2 ">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Gold Revenue</h6>
                                                <span className="text-warning  fw-bold">0%</span>
                                            </div>
                                            <div className="progress  w-100">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "0%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>

                                            </div>
                                        </div>
                                        <div className="d-flex flex-column w-100 py-2">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Platinum Revenue</h6>
                                                <span className="text-warning  fw-bold">0%</span>
                                            </div>
                                            <div className="progress  w-100">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "0%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <----card2----> */}
                            <div className="card mb-2  ">
                                <div className="card-header align-items-center border-0 bg-white">
                                    <h3 className="card-title align-items-start flex-column">
                                        <span className="fw-bolder  text-dark">Business</span>
                                    </h3>
                                    <div className="row ">
                                        <div className="col-xl-12 col-md-12 p-1 col-xxl-12 ms-2">
                                            <div className="mb-0">
                                                <label className="form-label fs-label d-block">Start Date To End Date</label>
                                                {/* <input className="form-control form-control-solid" placeholder="Pick date range" id="kt_daterangepicker_5" name="start_datetime" type="date" max="2023-10-05" /> */}
                                                <DateRangeCom />
                                            </div>
                                        </div>
                                        {/* <div className="col-xl-12 col-md-6 p-1 col-xxl-6">
                                            <div className="">
                                                <label className="form-label">End Date</label>
                                                <input className="form-control form-control-solid" placeholder="Pick date range" id="kt_daterangepicker_6" name="end_datetime" type="date" min="2023-10-06" />
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row  mb-1 p-0 ">
                                        <div className="col-md-6 col-xxl-4">
                                            <div className="ms-1 mb-2 mt-2">
                                                <span className="fw-bolder text-dark">Free</span>
                                            </div>
                                            <div className="border border-3 rounded p-1">
                                                <div className="flex-grow-1">
                                                    <span className="fw-bolder  text-primary">88</span>
                                                </div>
                                                <div className="mixed-widget-7-chart card-rounded-bottom " style={{ minHeight: "80px" }}>
                                                    <SingleLineChart />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xxl-4">
                                            <div className="ms-1 mb-2 mt-2">
                                                <span className="fw-bolder  text-dark">Basic</span>
                                            </div>
                                            <div className="border border-3 rounded p-1">
                                                <div className="flex-grow-1">
                                                    <span className="fw-bolder  text-primary">32</span>
                                                </div>
                                                <div className="mixed-widget-7-chart card-rounded-bottom" style={{ minHeight: "80px" }}>
                                                    <SingleLineChart />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xxl-4">
                                            <div className="ms-1 mb-2 mt-2">
                                                <span className="fw-bolder   text-dark">Premium</span>
                                            </div>
                                            <div className="border border-3 rounded p-1">
                                                <div className="flex-grow-1">
                                                    <span className="fw-bolder  text-primary">9</span>
                                                </div>
                                                <div className="mixed-widget-7-chart card-rounded-bottom" data-kt-chart-color="primary" style={{ minHeight: "80px" }}>
                                                    <SingleLineChart />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xxl-4">
                                            <div className="ms-1 mb-2 mt-2">
                                                <span className="fw-bolder text-dark">Gold</span>
                                            </div>
                                            <div className="border border-3 rounded p-1">
                                                <div className="flex-grow-1">
                                                    <span className="fw-bolder  text-primary">0</span>
                                                </div>
                                                <div className="mixed-widget-7-chart card-rounded-bottom" style={{ minHeight: "80px" }}>
                                                    <SingleLineChart />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xxl-4">
                                            <div className="ms-1 mb-2 mt-2">
                                                <span className="fw-bolder text-dark">Platinum</span>
                                            </div>
                                            <div className="border border-3 rounded p-1">
                                                <div className="flex-grow-1">
                                                    <span className="fw-bolder  text-primary">0</span>
                                                </div>
                                                <div className="mixed-widget-7-chart card-rounded-bottom" style={{ minHeight: "80px" }}>
                                                    <SingleLineChart />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-column w-100 py-3">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Free Revenue</h6>
                                                <span className="text-warning fw-bold">100%</span>
                                            </div>
                                            <div className="progress h-6px w-100">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "100%" }} ></div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column w-100 py-2 ">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Basic Revenue</h6>
                                                <span className="text-warning fw-bold">0%</span>
                                            </div>
                                            <div className="progress  w-100">
                                                <div className="progress-bar bg-info" role="progressbar" style={{ width: "0%" }}></div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column w-100 py-2 ">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Premium Revenue</h6>

                                                <span className="text-warning fw-bold">0%</span>
                                            </div>
                                            <div className="progress  w-100">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "0%" }} ></div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column w-100 py-2 ">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Gold Revenue</h6>

                                                <span className="text-warning  fw-bold">0%</span>
                                            </div>
                                            <div className="progress h-6px w-100">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "0%" }} ></div>

                                            </div>
                                        </div>
                                        <div className="d-flex flex-column w-100 py-2 ">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Platinum Revenue</h6>
                                                <span className="text-warning fw-bold">0%</span>
                                            </div>
                                            <div className="progress h-6px w-100">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "0%" }} ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8  col-md-6">
                            <div className="row  align-items-stretch">
                                <div className="col-md-12 col-xl-8 ">
                                    <div className='row'>
                                        <div className="col-md-6 my-1 flex-md-column d-flex margin-sm-2">
                                            <div className="card card-custom w-100 stretch-50 d-flex flex-column ">
                                                <div className="card-body flex-grow-1">
                                                    <div className='card_of_sales-fs'>
                                                        <p>Sales with coupons</p>
                                                        <p className='fw-bolder '>2342</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 my-1 d-flex margin-sm-2">
                                            <div className="card card-custom w-100 stretch-50 d-flex flex-column">
                                                <div className="card-body flex-grow-1">
                                                    <div className='card_of_sales-fs'>
                                                        <p>Sales without coupons</p>
                                                        <p className='fw-bolder '>2536</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 my-1 d-flex margin-sm-2 mt-2">
                                            <div className="card card-custom w-100 stretch-50 d-flex flex-column">
                                                <div className="card-body flex-grow-1">
                                                    <div className='card_of_sales-fs'>
                                                        <p>Net revenue with coupons</p>
                                                        <p className='fw-bolder '>INR 4536</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 my-1 d-flex margin-sm-2 mt-2">
                                            <div className="card card-custom w-100 stretch-50 d-flex flex-column">
                                                <div className="card-body flex-grow-1">
                                                    <div className='card_of_sales-fs' >
                                                        <p>Discount from  coupons</p>
                                                        {/* <p>coupons</p> */}
                                                        <p className='fw-bolder '>INR 768</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-12 col-xl-4 py-1">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="mb-2">
                                                <span className=" ">Sub Users</span>
                                                <select className="form-select form-select-sm form-select-solid p-2" id="customSelect">
                                                    <option value="">All</option>
                                                    <option value="2">Individual</option>
                                                    <option value="3">Business</option>
                                                </select>
                                            </div>
                                            <div className="">
                                                <span className="">Manager</span>
                                                <select className="form-select form-select-sm form-select-solid">
                                                    <option value="1">All</option>
                                                    <option value="2">Accounting</option>
                                                    <option value="3">Developing</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* chatrs */}
                            <div className="card mt-5 p-3 charts-padding">
                                <div className="card-body p-0 d-flex justify-content-between flex-column  charts-padding" >
                                    <div className="d-flex justify-content-between align-items-center border-0 flex-wrap">
                                        <div className="d-flex">
                                            <div className="d-flex">
                                                <span className="py-0 px-lg-3 px-md-2 px-3 bg-primary me-2 rounded"></span>
                                                <span>
                                                    <h6 className="mt-2">Coupon</h6>
                                                </span>
                                            </div>
                                            <div className="d-flex ms-4">
                                                <span className="py-0 px-3 px-lg-3 px-md-2 me-2 rounded" style={{
                                                    background:
                                                        '#E8E9F1'
                                                }}></span>
                                                <span>
                                                    <h6 className="mt-2">No Coupon</h6>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex mt-2 mt-sm-0 pt-lg-2">
                                            {/* <input type="date" className="form-control form-control-sm form-control-solid" /> */}
                                            <div className=''>
                                                <DateRangeCom />
                                            </div>
                                            <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary " >
                                                <FaFilter className='fs-4' />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mixed-widget-10-chart " data-kt-color="primary" style={{ height: '175px', minHeight: '220px' }}>
                                        <DoubleLineCart />
                                    </div>

                                </div>
                            </div>
                            <div className="card mt-5">
                                <div className="card-header d-flex justify-content-between align-items-center border-0 px-4 py-2 bg-white flex-wrap  ">
                                    <h3 className="card-title align-items-start flex-column">
                                        <span className="fw-bolder mb-2 text-dark">Notification</span>
                                    </h3>
                                    <div className="d-flex flex-wrap align-items-center ">
                                        <div className="pe-3">
                                            {/* <input type="date" className="form-control form-control-sm form-control-solid" /> */}
                                            <DateRangeCom />
                                        </div>
                                        <div className="dashboard_select-width">
                                            <select className="form-select form-select-sm" >
                                                <option value="">Impression</option>
                                                <option value="2">Option 1</option>
                                                <option value="3">Option 2</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body  pt-0">
                                    <div className="row">
                                        <div className="col charts-padding " >
                                            <div className=" p-1 mixed-widget-10-chart" data-kt-color="Secondary" style={{ height: '175px', minHeight: '220px' }}>
                                                <DoubleLineCart />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-5">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between mb-2 align-items-center">
                                        <span className="fw-bolder mb-2 text-dark">Admin User</span>
                                        <button className='btn btn-primary' onClick={handleAddShow}>Add New</button>
                                    </div>
                                    <div className="Admin-user-data-table  ">
                                        <DataTable columns={columns}
                                            data={data}
                                            pagination
                                            striped />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* offcanvas code  for Edit user*/}
            <Offcanvas
                show={editShow}
                onHide={handleEditClose}
                placement="end"
            //   scroll={true}
            >
                <Offcanvas.Body>
                    <Offcanvas.Header closeButton className='px-0'>
                        <Offcanvas.Title className="fw-bold">Edit User</Offcanvas.Title>
                    </Offcanvas.Header>
                    <hr />
                    <form onSubmit={handleSubmitForm2
                        (onSubmitForEditUser)}>
                        <input type="hidden" name="csrfmiddlewaretoken" />
                        <div className="modal-body">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control form-control-solid" placeholder="Edit User Name"  {...registerForm2('UserName', { required: true })} />
                                {errorsForm2.UserName && <p className='text-danger' style={{ fontSize: '10px' }}>This Filed is Required</p>}
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Contact Number</label>
                                <input type="text" maxlength="10" className="form-control form-control-solid" placeholder="Edit Contact Number " />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="email" className="form-control form-control-solid validate-email-update" placeholder="Edit The Email" {...registerForm2('UserEmail', { required: true })} />
                                {errorsForm2.UserEmail && <p className='text-danger' style={{ fontSize: '10px' }}>This Filed is Required</p>}
                            </div>
                            <div className="mb-10">
                                <label for="exampleFormControlInput1" className="form-label">Roles</label>
                                <SearchableDropdownForRoles />
                            </div>
                            {/* <div className="form-check">
                                <input className="form-check-input updateselectall" type="checkbox" value="true" id="flexCheckDefault_templet" />
                                <label className="form-check-label" for="flexCheckDefault_templet">
                                    <strong>Select All</strong>
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label" for="flexCheckDefault_edite">
                                    Able to create template
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label" for="flexCheckDefault_edite">
                                    Able to edit template
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" id="flexCheckDefault_assign" />
                                <label className="form-check-label" >
                                    Able to assign custom package to users
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to activate and block business users
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to edit the label
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to create coupons
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to edit coupons
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to create categories
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to edit categories
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to Invite users
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to Invite business
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to download reports
                                </label>
                            </div> */}
                            <h5>Login Credentials</h5>
                            <div className="form-check mt-1 mb-20">
                                <input className="form-check-input" type="checkbox" defaultChecked="checked" />
                                <label className="form-check-label" >
                                    Generate automatically and send contact person email
                                </label>
                            </div>
                            <div className="pt-3 text-center mt-2">
                                <button type="submit" id="updatesuperuser" className="btn btn-primary me-5 "  >Update</button>
                            </div>
                        </div>
                    </form>

                </Offcanvas.Body>
            </Offcanvas>
            {/* offcanvas for add new user */}
            <Offcanvas

                show={addShow}
                onHide={handlAddClose}
                placement="end"
            //   scroll={true}
            >
                <Offcanvas.Body>
                    <Offcanvas.Header closeButton className='px-0'>
                        <Offcanvas.Title className="fw-bold">Add User</Offcanvas.Title>
                    </Offcanvas.Header>
                    <hr />
                    <form onSubmit={handleSubmitForm1
                        (onSubmitForAddUser)} >

                        <div className="modal-body">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control form-control-solid" placeholder=" Name" {...registerForm1('UserName', { required: true })} />
                                {errorsForm1.UserName && <p className='text-danger' style={{ fontSize: '10px' }}>This Filed is Required</p>}
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Contact Number</label>
                                {/* <input type="number" maxlength="10" className="form-control form-control-solid" placeholder=" Contact Number "  />
                            {errorsForm1.UserName && <p className='text-danger' style={{fontSize : '10px'}}>This Filed is Required</p>} */}
                                <CountrySelectInput {...registerForm1('Email', { required: true })} />
                                {errorsForm1.UserName && <p className='text-danger' style={{ fontSize: '10px' }}>This Filed is Required</p>}
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="email" className="form-control form-control-solid validate-email-update" placeholder="  Email" {...registerForm1('UserEmail', { required: true })} />
                                {errorsForm1.UserEmail && <p className='text-danger' style={{ fontSize: '10px' }}>This Filed is Required</p>}
                            </div>
                            {/* <div className="form-check">
                                <input className="form-check-input updateselectall" type="checkbox" value="true" id="flexCheckDefault_templet" />
                                <label className="form-check-label" for="flexCheckDefault_templet">
                                    <strong>Select All</strong>
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label" for="flexCheckDefault_edite">
                                    Able to create template
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" />
                                <label className="form-check-label" for="flexCheckDefault_edite">
                                    Able to edit template
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" id="flexCheckDefault_assign" />
                                <label className="form-check-label" >
                                    Able to assign custom package to users
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to activate and block business users
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to edit the label
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to create coupons
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to edit coupons
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to create categories
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to edit categories
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to Invite users
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to Invite business
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to download reports
                                </label>
                            </div> */}
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Roles</label>
                                <SearchableDropdownForRoles />
                            </div>
                            <h5>Login Credentials</h5>
                            <div className="form-check mt-1 mb-20">
                                <input className="form-check-input" type="checkbox" defaultChecked='checked' />
                                <label className="form-check-label" >
                                    Generate automatically and send contact person email
                                </label>
                            </div>
                            <div className="pt-3 text-center mt-2">
                                <button type="submit" className="btn btn-primary me-2 "  >Create</button>

                                <button type="submit" className="btn btn-primary me-2 "  >Create & send</button>
                                <button type="reset" className="btn btn-danger me-2 " onClick={resetForm1}>Clear</button>
                            </div>
                        </div>
                    </form>

                </Offcanvas.Body>
            </Offcanvas>

        </>
    );
};

export default Dashboard;