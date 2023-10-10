import React, { useState } from 'react';
import SideNav from './common Layouts/SideNav';
import SingleLineChart from './chartscomponemts/SingleLineChart';
import DoubleLineCart from './chartscomponemts/DoubleLineCart';
import {MdModeEdit} from 'react-icons/md';
import { Offcanvas } from 'react-bootstrap';

const Dashboard = () => {
    const [editShow, setEditShow] = useState(false);
    const [addShow, setAddShow] = useState(false);

    const handleEditClose = () => setEditShow(false);
    const handleEditShow = () => setEditShow(true);
    const handlAddClose = () => setAddShow(false);
    const handleAddShow = () => setAddShow(true);
    return (
        <>
            <SideNav />
            <div className="main-wrapper">
                <div className="container">
                    {/* page title of dashboard */}
                    <div className="page-title">
                        <p className='dashboard_title'>Dashboard <span>Ai-Jurist Admin</span></p>
                    </div>
                    {/* dashboard data */}
                    <div className="row  ">
                        <div className="col-xl-4 col-md-6 col-sm-12 ">
                            <div className="card mb-3 ">
                                <div className="card-header align-items-center border-0 bg-white">
                                    <h3 className="card-title align-items-start flex-column ">
                                        <span className="fw-bolder  text-dark">Individual</span>
                                    </h3>
                                    <div className="row">
                                        <div className="col-xl-12 col-md-6 p-1 col-xxl-6">
                                            <div className="mb-0 ml-1">
                                                <label className="form-label">Start Date</label>
                                                <input className="form-control form-control-solid" placeholder="Pick date range" id="kt_daterangepicker_5" name="start_datetime" type="date" max="2023-10-05" />
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-md-6 p-1 col-xxl-6">
                                            <div className="">
                                                <label className="form-label">End Date</label>
                                                <input className="form-control form-control-solid" placeholder="Pick date range" id="kt_daterangepicker_6" name="end_datetime" type="date" min="2023-10-06" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row  mb-10">
                                        <div className="col-md-6 col-xxl-4">
                                            <div className="ms-1 mb-2 mt-2">
                                                <span className="fw-bolder text-dark">Free</span>
                                            </div>
                                            <div className="border border-3 rounded p-1">
                                                <div className="flex-grow-1">
                                                    <span className="fw-bolder fs-6 text-primary">88</span>
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
                                                    <span className="fw-bolder fs-6 text-primary">32</span>
                                                </div>
                                                <div className="mixed-widget-7-chart card-rounded-bottom" data-kt-chart-color="primary" style={{ minHeight: "80px" }}>
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
                                                    <span className="fw-bolder fs-6 text-primary">9</span>
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
                                                    <span className="fw-bolder fs-6 text-primary">0</span>
                                                </div>
                                                <div className="mixed-widget-7-chart card-rounded-bottom" data-kt-chart-color="primary" style={{ minHeight: "80px" }}>
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
                                                    <span className="fw-bolder fs-6 text-primary">0</span>
                                                </div>
                                                <div className="mixed-widget-7-chart card-rounded-bottom" data-kt-chart-color="primary" style={{ minHeight: "80px" }}>
                                                    <SingleLineChart />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-column w-100 py-1  ">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Free Revenue</h6>
                                                <span className="text-warning fw-bold">68%</span>
                                            </div>
                                            <div className="progress  w-100">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "68%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column w-100 py-1 ">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Basic Revenue</h6>
                                                <span className="text-warning fw-bold">25%</span>
                                            </div>
                                            <div className="progress  w-100">
                                                <div className="progress-bar bg-info" role="progressbar" style={{ width: "25%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column w-100 py-1 ">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Premium Revenue</h6>

                                                <span className="text-warning fw-bold">7%</span>
                                            </div>
                                            <div className="progress  w-100">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "7%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column w-100 py-1 ">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Gold Revenue</h6>
                                                <span className="text-warning  fw-bold">0%</span>
                                            </div>
                                            <div className="progress  w-100">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "0%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>

                                            </div>
                                        </div>
                                        <div className="d-flex flex-column w-100 py-1">
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
                                        <div className="col-xl-12 col-md-6 p-1 col-xxl-6">
                                            <div className="mb-0">
                                                <label className="form-label">Start Date</label>
                                                <input className="form-control form-control-solid" placeholder="Pick date range" id="kt_daterangepicker_5" name="start_datetime" type="date" max="2023-10-05" />
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-md-6 p-1 col-xxl-6">
                                            <div className="">
                                                <label className="form-label">End Date</label>
                                                <input className="form-control form-control-solid" placeholder="Pick date range" id="kt_daterangepicker_6" name="end_datetime" type="date" min="2023-10-06" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row  mb-1">
                                        <div className="col-md-6 col-xxl-4">
                                            <div className="ms-1 mb-2 mt-2">
                                                <span className="fw-bolder text-dark">Free</span>
                                            </div>
                                            <div className="border border-3 rounded p-1">
                                                <div className="flex-grow-1">
                                                    <span className="fw-bolder fs-6 text-primary">88</span>
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
                                                    <span className="fw-bolder fs-6 text-primary">32</span>
                                                </div>
                                                <div className="mixed-widget-7-chart card-rounded-bottom" data-kt-chart-color="primary" style={{ minHeight: "80px" }}>
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
                                                    <span className="fw-bolder fs-6 text-primary">9</span>
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
                                                    <span className="fw-bolder fs-6 text-primary">0</span>
                                                </div>
                                                <div className="mixed-widget-7-chart card-rounded-bottom" data-kt-chart-color="primary" style={{ minHeight: "80px" }}>
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
                                                    <span className="fw-bolder fs-6 text-primary">0</span>
                                                </div>
                                                <div className="mixed-widget-7-chart card-rounded-bottom" data-kt-chart-color="primary" style={{ minHeight: "80px" }}>
                                                    <SingleLineChart />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-column w-100 py-1 ">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Free Revenue</h6>
                                                <span className="text-warning fw-bold">100%</span>
                                            </div>
                                            <div className="progress h-6px w-100">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "100%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column w-100 py-1 ">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Basic Revenue</h6>
                                                <span className="text-warning fw-bold">0%</span>
                                            </div>
                                            <div className="progress  w-100">
                                                <div className="progress-bar bg-info" role="progressbar" style={{ width: "0%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column w-100 py-1 ">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Premium Revenue</h6>

                                                <span className="text-warning fw-bold">0%</span>
                                            </div>
                                            <div className="progress  w-100">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "0%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column w-100 py-1 ">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Gold Revenue</h6>

                                                <span className="text-warning  fw-bold">0%</span>
                                            </div>
                                            <div className="progress h-6px w-100">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "0%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>

                                            </div>
                                        </div>
                                        <div className="d-flex flex-column w-100 py-1 ">
                                            <div className="d-flex flex-stack mb-2 justify-content-between">
                                                <h6>Platinum Revenue</h6>
                                                <span className="text-warning fw-bold">0%</span>
                                            </div>
                                            <div className="progress h-6px w-100">
                                                <div className="progress-bar bg-primary" role="progressbar" style={{ width: "0%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8  col-md-6">
                            <div className="row">
                                <div className="col-md-12 col-xl-8">
                                    <div className='row'>
                                        <div className="col-md-6 my-1 flex-md-column d-flex margin-sm-2">
                                            <div className="card card-custom w-100 stretch-50 d-flex flex-column ">
                                                <div className="card-body flex-grow-1">
                                                    <div className='card_of_sales-fs'>
                                                        <p>Sales with coupons</p>
                                                        <p className='fw-bolder fs-6'>2342</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 my-1 d-flex margin-sm-2">
                                            <div className="card card-custom w-100 stretch-50 d-flex flex-column">
                                                <div className="card-body flex-grow-1">
                                                    <div className='card_of_sales-fs'>
                                                        <p>Sales without Coupons</p>

                                                        <p className='fw-bolder fs-6'>2536</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 my-1 d-flex margin-sm-2">
                                            <div className="card card-custom w-100 stretch-50 d-flex flex-column">
                                                <div className="card-body flex-grow-1">
                                                    <div className='card_of_sales-fs'>
                                                        <p>Net revenue with Net coupons</p>

                                                        <p className='fw-bolder fs-6'>KD 4536</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 my-1 d-flex margin-sm-2">
                                            <div className="card card-custom w-100 stretch-50 d-flex flex-column">
                                                <div className="card-body flex-grow-1">
                                                    <div className='card_of_sales-fs' >
                                                        <p>Discount from  coupons</p>
                                                        {/* <p>coupons</p> */}
                                                        <p className='fw-bolder fs-6'>KD 768</p>
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
                                                <select className="form-select form-select-sm form-select-solid p-2">
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
                            <div className="card mt-5 p-4">
                                <div className="card-body p-0 d-flex justify-content-between flex-column overflow-hidden" >
                                    <div className="d-flex justify-content-between align-items-center border-0 flex-wrap">
                                        <div className="d-flex">
                                            <div className="d-flex">
                                                <span className="py-0 px-lg-3 px-md-2 px-3 bg-primary me-2 rounded"></span>
                                                <span>
                                                    <h6 className="mt-2">Coupon</h6>
                                                </span>
                                            </div>
                                            <div className="d-flex ms-4">
                                                <span className="py-0 px-3 px-lg-3 px-md-2 bg-secondary me-2 rounded"></span>
                                                <span>
                                                    <h6 className="mt-2">No Coupon</h6>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <input type="date" className="form-control form-control-sm form-control-solid" />
                                            <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" fdprocessedid="518lle">
                                                <i className="fas fa-filter fs-4"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mixed-widget-10-chart" data-kt-color="primary" style={{ height: '175px', minHeight: '220px' }}>
                                        <DoubleLineCart />
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-5">
                                <div className="card-header d-flex justify-content-between align-items-center border-0 px-4 py-2 bg-white flex-wrap">
                                    <h3 className="card-title align-items-start flex-column">
                                        <span className="fw-bolder mb-2 text-dark">Notification</span>
                                    </h3>
                                    <div className="d-flex">
                                        <div className="pe-3">
                                            <input type="date" className="form-control form-control-sm form-control-solid" />
                                        </div>
                                        <div className="">
                                            <select className="form-select form-select-sm" fdprocessedid="be9y4">
                                                <option value="">Impression</option>
                                                <option value="2">Option 1</option>
                                                <option value="3">Option 2</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-5 pt-0">
                                    <div className="row">
                                        <div className="col" >
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
                                        <h3>Admin Internal Users</h3>
                                       <button className='btn btn-primary'  onClick={handleAddShow}>Add New</button>
                                    </div>
                                    <div className="table-responsive ">
                                        {/* <!--begin::Table--> */}
                                        <table className="table table-row-dashed table-striped table-row-gray-300 align-middle gs-0 gy-4">
                                            {/* <!--begin::Table head--> */}
                                            <thead>
                                                <tr className="fw-bolder text-muted">
                                                    <th className="">Name</th>
                                                    <th className="">Email Address</th>
                                                    <th className="">Role</th>
                                                    <th className="">Created</th>
                                                    <th className="">Status</th>
                                                    <th className=" ">Actions</th>
                                                </tr>
                                            </thead>
                                            {/* <!--end::Table head-->
                                            <!--begin::Table body--> */}
                                            <tbody>

                                                <tr>
                                                    <td>Bradley Hughes</td>
                                                    <td>jekoja2813@in2reach.com</td>
                                                    <td>admin</td>
                                                    <td>31-07-2023</td>
                                                    <td>active</td>
                                                    <td>
                                                    <MdModeEdit className='edit-icon mx-4'   onClick={handleEditShow}/>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>Sehan</td>
                                                    <td>sehan@mailinator.com</td>
                                                    <td>admin</td>
                                                    <td>25-09-2023</td>
                                                    <td>inactive</td>
                                                    <td c>
                                                   <MdModeEdit className='edit-icon mx-4'  onClick={handleEditShow}/>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>Aijurist admin</td>
                                                    <td>admin@aijurist.com</td>
                                                    <td>admin</td>
                                                    <td>3-10-2023</td>
                                                    <td>active</td>
                                                    <td>
                                                   <MdModeEdit className='edit-icon mx-4'   onClick={handleEditShow}/>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>Aslam</td>
                                                    <td>aslam@mailinator.com</td>
                                                    <td>admin</td>
                                                    <td>26-09-2023</td>
                                                    <td>inactive</td>
                                                    <td>
                                                        <MdModeEdit className='edit-icon mx-4' onClick={handleEditShow}/>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* offcanvas code */}
            <Offcanvas
                className="offCanvas py-5 px-5"
                show={editShow}
                onHide={handleEditClose}
                placement="end"
            //   scroll={true}
            >
                <Offcanvas.Body>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="fw-bold">Edit User</Offcanvas.Title>
                    </Offcanvas.Header>
                    <hr />
                    <form method="post" action="">
                        <input type="hidden" name="csrfmiddlewaretoken" />
                        <div className="modal-body">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control form-control-solid" placeholder="Edit User Name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Contact Number</label>
                                <input type="text" maxlength="10" className="form-control form-control-solid" placeholder="Edit Contact Number "  />
                            </div>
                            <div className="mb-10">
                                <label for="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="text"className="form-control form-control-solid validate-email-update" placeholder="Edit The  Email"  />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input updateselectall" type="checkbox" value="true" id="flexCheckDefault_templet" />
                                <label className="form-check-label" for="flexCheckDefault_templet">
                                    <strong>Select All</strong>
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_edite" />
                                <label className="form-check-label" for="flexCheckDefault_edite">
                                    Able to create template
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_edite" />
                                <label className="form-check-label" for="flexCheckDefault_edite">
                                    Able to edit template
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_assign" />
                                <label className="form-check-label" >
                                    Able to assign custom package to users
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input updateallcheck" type="checkbox" value="true"  />
                                <label className="form-check-label" >
                                    Able to activate and block business users
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input updateallcheck" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to edit the label
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input updateallcheck" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to create coupons
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input updateallcheck" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to edit coupons
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input updateallcheck" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to create categories
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input updateallcheck" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to edit categories
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input updateallcheck" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to Invite users
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input updateallcheck" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to Invite business
                                </label>
                            </div>
                            <div className="form-check my-3">
                                <input className="form-check-input updateallcheck" type="checkbox" value="true" />
                                <label className="form-check-label" >
                                    Able to download reports
                                </label>
                            </div>
                            <h5>Login Credentials</h5>
                            <div className="form-check mt-1 mb-20">
                                <input className="form-check-input" type="checkbox" value=""  checked="checked" />
                                <label className="form-check-label" >
                                    Generate automatically and send contact person email
                                </label>
                            </div>
                            <div className="pt-3 text-center mt-2">
                                <button type="submit" id="updatesuperuser" className="btn btn-primary me-5 " value="2" >Update</button>
                            </div>
                        </div>
                    </form>

                </Offcanvas.Body>
            </Offcanvas>
            {/* offcanvas for add new user */}
            <Offcanvas
                className="offCanvas py-5 px-5"
                show={addShow}
                onHide={handlAddClose}
                placement="end"
            //   scroll={true}
            >
                <Offcanvas.Body>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="fw-bold">Add User</Offcanvas.Title>
                    </Offcanvas.Header>
                    <hr />
                    <form method="post" action="">
                        <input type="hidden" name="csrfmiddlewaretoken" />
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" className="form-control form-control-solid" placeholder=" Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                                <input type="text" maxlength="10" className="form-control form-control-solid" placeholder=" Contact Number "  />
                            </div>
                            <div class="mb-10">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input type="text"className="form-control form-control-solid validate-email-update" placeholder="  Email"  />
                            </div>
                            <div class="form-check">
                                <input class="form-check-input updateselectall" type="checkbox" value="true" id="flexCheckDefault_templet" />
                                <label class="form-check-label" for="flexCheckDefault_templet">
                                    <strong>Select All</strong>
                                </label>
                            </div>
                            <div class="form-check my-3">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_edite" />
                                <label class="form-check-label" for="flexCheckDefault_edite">
                                    Able to create template
                                </label>
                            </div>
                            <div class="form-check my-3">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_edite" />
                                <label class="form-check-label" for="flexCheckDefault_edite">
                                    Able to edit template
                                </label>
                            </div>
                            <div class="form-check my-3">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" id="flexCheckDefault_assign" />
                                <label class="form-check-label" >
                                    Able to assign custom package to users
                                </label>
                            </div>
                            <div class="form-check my-3">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true"  />
                                <label class="form-check-label" >
                                    Able to activate and block business users
                                </label>
                            </div>
                            <div class="form-check my-3">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" />
                                <label class="form-check-label" >
                                    Able to edit the label
                                </label>
                            </div>
                            <div class="form-check my-3">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" />
                                <label class="form-check-label" >
                                    Able to create coupons
                                </label>
                            </div>
                            <div class="form-check my-3">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" />
                                <label class="form-check-label" >
                                    Able to edit coupons
                                </label>
                            </div>
                            <div class="form-check my-3">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" />
                                <label class="form-check-label" >
                                    Able to create categories
                                </label>
                            </div>
                            <div class="form-check my-3">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" />
                                <label class="form-check-label" >
                                    Able to edit categories
                                </label>
                            </div>
                            <div class="form-check my-3">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" />
                                <label class="form-check-label" >
                                    Able to Invite users
                                </label>
                            </div>
                            <div class="form-check my-3">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" />
                                <label class="form-check-label" >
                                    Able to Invite business
                                </label>
                            </div>
                            <div class="form-check my-3">
                                <input class="form-check-input updateallcheck" type="checkbox" value="true" />
                                <label class="form-check-label" >
                                    Able to download reports
                                </label>
                            </div>
                            <h5>Login Credentials</h5>
                            <div class="form-check mt-1 mb-20">
                                <input class="form-check-input" type="checkbox" value=""  checked="checked" />
                                <label class="form-check-label" >
                                    Generate automatically and send contact person email
                                </label>
                            </div>
                            <div class="pt-3 text-center mt-2">
                                <button type="submit" className="btn btn-primary me-2 " value="2" >Create</button>
                                <button type="submit" className="btn btn-primary me-2 " value="2" >Create & send</button>
                                <button type="submit" className="btn btn-primary me-2 " value="2" >Clear</button>
                            </div>
                        </div>
                    </form>

                </Offcanvas.Body>
            </Offcanvas>

        </>
    );
};

export default Dashboard;

