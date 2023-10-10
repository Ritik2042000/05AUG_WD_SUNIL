import React from 'react';
import SideNav from './common Layouts/SideNav';
import DataTable from 'react-data-table-component';

const UsersReports = () => {
    const columns = [
        {
            name: 'ID',
            selector: row => row.title,
        },
        {
            name: 'NAME',
            selector: row => row.year,
        },
        {
            name: 'EMAIL',
            selector: row => row.year,
        },
        {
            name: 'MOBILE NUMBER',
            selector: row => row.year,
        },
        {
            name: 'CIVIL ID',
            selector: row => row.year,
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
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ];
    return (
        <>
            <SideNav />
            <div className="main-wrapper">
                <div className="container">
                    <div className="page-title">
                        <h1 className="page-heading mb-0">UserReports</h1>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-end">
                                <div class="mb-0 p-3">
                                    <label class="form-label p-2">Start Date</label>
                                    <input class="form-control form-control-solid bg-white" placeholder="Pick start date" name="start_datetime" type="date" />
                                </div>
                                <div class="mb-0 p-3">
                                    <label class="form-label p-2">End Date</label>
                                    <input class="form-control form-control-solid bg-white" placeholder="Pick end date" type="date" />
                                </div>
                                <div class="mb-0 p-3">
                                    <button id="filterButton" class="btn  btn-primary" onclick="filterTableByDate()" >Submit</button>
                                </div>
                            </div>
                            <div class="row user_blocks p-2 mt-5  d-flex">
                                <div class="col-2 border-das bg-white rounded min-w-125px py-3 px-4 mx-2 mb-3" >
                                    {/* <!--begin::Label--> */}

                                    <div class="text-center" id="total_user">460</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center">
                                        <div class="counted " >Total Users</div>
                                    </div>
                                    {/* <!--end::Number--> */}

                                </div>
                                {/* <!--end::Stat--> */}
                                {/* <!--begin::Stat--> */}
                                <div class="col-2 border-das bg-white rounded min-w-125px py-3 px-4 mx-2 mb-3">
                                    {/* <!--begin::Label--> */}
                                    <div class="text-center" id="Individual_Users">251</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center">
                                        <div class="counted" >Individual Users</div>
                                    </div>
                                    {/* <!--end::Number--> */}

                                </div>
                                {/* <!--end::Stat--> */}
                                {/* <!--begin::Stat--> */}
                                <div class="col-2 border-das bg-white rounded min-w-125px py-3 px-4 mx-2 mb-3">
                                    {/* <!--begin::Label--> */}
                                    <div class="text-center" id="Business_Users">87</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center" >
                                        <div class="counted" >Business Users</div>
                                    </div>
                                    {/* <!--end::Number--> */}
                                </div>
                                <div class="col-2 border-das bg-white rounded min-w-125px py-3 px-4 mx-2 mb-3">
                                    {/* <!--begin::Label--> */}
                                    <div class="text-center justify-content-center">106</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center" >
                                        <div class="counted" >Business Admin</div>
                                    </div>
                                    {/* <!--end::Number--> */}
                                </div>
                            </div>
                            <div class="row p-2 user_blocks d-flex">
                                <div class="col-2 border-das bg-white rounded min-w-125px py-3 px-4 mx-2 mb-3">
                                    {/* <!--begin::Label--> */}
                                    <div class="text-center justify-content-center" >29</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center" >
                                        <div class="counted" >Free Users</div>
                                    </div>
                                    {/* <!--end::Number--> */}
                                </div>
                                <div class="col-2 border-das bg-white rounded min-w-125px py-3 px-4 mx-2 mb-3">
                                    {/* <!--begin::Label--> */}
                                    <div class="text-center justify-content-center" >44</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center" >
                                        <div class="counted" >Basic Users</div>
                                    </div>
                                    {/* <!--end::Number--> */}
                                </div>
                                <div class="col-2 border-das bg-white rounded min-w-125px py-3 px-4 mx-2 mb-3">
                                    {/* <!--begin::Label--> */}
                                    <div class="text-center justify-content-center" >14</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center" >
                                        <div class="counted" >Premium Users</div>
                                    </div>
                                    {/* <!--end::Number--> */}
                                </div>
                                <div class="col-2 border-das bg-white rounded min-w-125px py-3 px-4 mx-2 mb-3">
                                    {/* <!--begin::Label--> */}
                                    <div class="text-center justify-content-center" >0</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center" >
                                        <div class="counted" >Gold Users</div>
                                    </div>
                                    {/* <!--end::Number--> */}
                                </div>
                                <div class="col-2 border-das bg-white rounded min-w-125px py-3 px-4 mx-2 mb-3">
                                    {/* <!--begin::Label--> */}
                                    <div class="text-center justify-content-center" id="Platinum">0</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center" >
                                        <div class="counted" >Platinum Users</div>
                                    </div>
                                    {/* <!--end::Number--> */}
                                </div>
                            </div>

                            <div class="row justify-content-end">
                                <div class="col-md-2 col-12   pd-2">
                                    <select class="form-select form-select-sm form-select-solid" name="discount_for_user" >
                                        <option selected="" disabled="">Select User Type</option>
                                        <option value="1">All Users</option>
                                        <option value="2">Individual Users</option>
                                        <option value="3">Business Users</option>
                                        <option value="4">Business Admin</option>
                                    </select>
                                </div>
                                <div class="col-md-2 col-12 pd-2">
                                    <select class="form-select form-select-sm form-select-solid" style={{ width: "200px" }} id="membership" >
                                        <option selected="" disabled="">Select User Membership</option>
                                        <option value="1">All</option>
                                        <option value="2">Free Users</option>
                                        <option value="3">Basic Users</option>
                                        <option value="4">Premium Users</option>
                                        <option value="5">Gold Users</option>
                                        <option value="6">Platinum Users</option>
                                    </select>
                                </div>
                                <div class=" col-md-2 col-12 pd-2"> </div>
                                <div class=" col-md-2 col-12 pd-2"> </div>
                                <div class=" col-md-2 col-12 pd-2">
                                    <input type="text" class="form-control mx-5 " onkeyup="searchFunction()" placeholder="Search" />
                                </div>

                                <div class="col-md-2 col-12">
                                    <div class="d-flex  justify-content-end ">
                                        <button className='btn btn- btn-primary '>Download</button>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <DataTable
                                    columns={columns}
                                    data={data}
                                    pagination
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