import React from 'react';
import SideNav from './common Layouts/SideNav';
import DataTable from 'react-data-table-component';

const FinanceReports = () => {
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
        },
        {
            name: 'NAME',
            selector: row => row.name,
        },
        {
            name: 'AMOUNT',
            selector: row => row.amount,
        },
        {
            name: 'DISCOUNT',
            selector: row => row.discount,
        },
        {
            name: 'PAYMENT METHOD',
            selector: row => row.paymentmethod,
        },
        {
            name: 'PURCHASE TYPE',
            selector: row => row.purchasetype,
        },
        {
            name: 'TR ID',
            selector: row => row.trid,
        },
        {
            name: 'PAYMENT STATUS',
            selector: row => row.paymentstatus,
        },
        {
            name: 'REGISTERED DATE',
            selector: row => row.regdate,
        },
    ];
    const data = [

        {
            id: 1,
            name: 'Ghostbusters',
            amount: 'None',
            discount: 'None',
            paymentmethod: 'knte',
            purchasetype: '2',
            trid: 'None',
            paymentstatus: 'None',
            regdate: '10-10-2023',
        },
        {
            id: 2,
            name: 'Ghostbusters',
            amount: 'None',
            discount: 'None',
            paymentmethod: 'knte',
            purchasetype: '2',
            trid: 'None',
            paymentstatus: 'None',
            regdate: '10-10-2023',
        },
        {
            id: 3,
            name: 'Ghostbusters',
            amount: 'None',
            discount: 'None',
            paymentmethod: 'knte',
            purchasetype: '2',
            trid: 'None',
            paymentstatus: 'None',
            regdate: '10-10-2023',
        },
        {
            id: 4,
            name: 'Ghostbusters',
            amount: 'None',
            discount: 'None',
            paymentmethod: 'knte',
            purchasetype: '2',
            trid: 'None',
            paymentstatus: 'None',
            regdate: '10-10-2023',
        },
        {
            id: 5,
            name: 'Ghostbusters',
            amount: 'None',
            discount: 'None',
            paymentmethod: 'knte',
            purchasetype: '2',
            trid: 'None',
            paymentstatus: 'None',
            regdate: '10-10-2023',
        },
        {
            id: 6,
            name: 'Ghostbusters',
            amount: 'None',
            discount: 'None',
            paymentmethod: 'knte',
            purchasetype: '2',
            trid: 'None',
            paymentstatus: 'None',
            regdate: '10-10-2023',
        },
        {
            id: 7,
            name: 'Ghostbusters',
            amount: 'None',
            discount: 'None',
            paymentmethod: 'knte',
            purchasetype: '2',
            trid: 'None',
            paymentstatus: 'None',
            regdate: '10-10-2023',
        },
        {
            id: 8,
            name: 'Ghostbusters',
            amount: 'None',
            discount: 'None',
            paymentmethod: 'knte',
            purchasetype: '2',
            trid: 'None',
            paymentstatus: 'None',
            regdate: '10-10-2023',
        },
        {
            id: 9,
            name: 'Ghostbusters',
            amount: 'None',
            discount: 'None',
            paymentmethod: 'knte',
            purchasetype: '2',
            trid: 'None',
            paymentstatus: 'None',
            regdate: '10-10-2023',
        },
        {
            id: 10,
            name: 'Ghostbusters',
            amount: 'None',
            discount: 'None',
            paymentmethod: 'knte',
            purchasetype: '2',
            trid: 'None',
            paymentstatus: 'None',
            regdate: '10-10-2023',
        },
        {
            id: 11,
            name: 'Ghostbusters',
            amount: 'None',
            discount: 'None',
            paymentmethod: 'knte',
            purchasetype: '2',
            trid: 'None',
            paymentstatus: 'None',
            regdate: '10-10-2023',
        },
        {
            id: 12,
            name: 'Ghostbusters',
            amount: 'None',
            discount: 'None',
            paymentmethod: 'knte',
            purchasetype: '2',
            trid: 'None',
            paymentstatus: 'None',
            regdate: '10-10-2023',
        },
        {
            id: 13,
            name: 'Ghostbusters',
            amount: 'None',
            discount: 'None',
            paymentmethod: 'knte',
            purchasetype: '2',
            trid: 'None',
            paymentstatus: 'None',
            regdate: '10-10-2023',
        },
        {
            id: 14,
            name: 'Ghostbusters',
            amount: 'None',
            discount: 'None',
            paymentmethod: 'knte',
            purchasetype: '2',
            trid: 'None',
            paymentstatus: 'None',
            regdate: '10-10-2023',
        },
        {
            id: 15,
            name: 'Ghostbusters',
            amount: 'None',
            discount: 'None',
            paymentmethod: 'knte',
            purchasetype: '2',
            trid: 'None',
            paymentstatus: 'None',
            regdate: '10-10-2023',
        },
        {
            id: 16,
            name: 'Ghostbusters',
            amount: 'None',
            discount: 'None',
            paymentmethod: 'knte',
            purchasetype: '2',
            trid: 'None',
            paymentstatus: 'None',
            regdate: '10-10-2023',
        },
        {
            id: 17,
            name: 'Ghostbusters',
            amount: 'None',
            discount: 'None',
            paymentmethod: 'knte',
            purchasetype: '2',
            trid: 'None',
            paymentstatus: 'None',
            regdate: '10-10-2023',
        },
        {
            id: 18,
            name: 'Ghostbusters',
            amount: 'None',
            discount: 'None',
            paymentmethod: 'knte',
            purchasetype: '2',
            trid: 'None',
            paymentstatus: 'None',
            regdate: '10-10-2023',
        },
    ];

    return (
        <>
            <SideNav />

            <div className="main-wrapper">
                <div className="container">
                    <div className="page-title">
                        <h1 className="page-heading mb-0">FinanceReports</h1>
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

                                    <div class="text-center" id="total_user">80272.650 KD</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center">
                                        <div class="counted text-center " >Total Revenue</div>
                                    </div>
                                    {/* <!--end::Number--> */}

                                </div>
                                {/* <!--end::Stat--> */}
                                {/* <!--begin::Stat--> */}
                                <div class="col-2 border-das bg-white rounded min-w-125px py-3 px-4 mx-2 mb-3">
                                    {/* <!--begin::Label--> */}
                                    <div class="text-center" id="Individual_Users">0 KD</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center">
                                        <div class="counted text-center" >Basic Package Revenue</div>
                                    </div>
                                    {/* <!--end::Number--> */}

                                </div>
                                {/* <!--end::Stat--> */}
                                {/* <!--begin::Stat--> */}
                                <div class="col-2 border-das bg-white rounded min-w-125px py-3 px-4 mx-2 mb-3">
                                    {/* <!--begin::Label--> */}
                                    <div class="text-center" id="Business_Users">0 KD</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center" >
                                        <div class="counted text-center" >Premium Package Revenue</div>
                                    </div>
                                    {/* <!--end::Number--> */}
                                </div>
                                <div class="col-2 border-das bg-white rounded min-w-125px py-3 px-4 mx-2 mb-3">
                                    {/* <!--begin::Label--> */}
                                    <div class="text-center justify-content-center">51214.300 KD</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center" >
                                        <div class="counted text-center" >Contracts Revenue</div>
                                    </div>
                                    {/* <!--end::Number--> */}
                                </div>
                                <div class="col-2 border-das bg-white rounded min-w-125px py-3 px-4 mx-2 mb-3">
                                    {/* <!--begin::Label--> */}
                                    <div class="text-center justify-content-center">2941.200 KD</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center" >
                                        <div class="counted text-center" >Users Revenue</div>
                                    </div>
                                    {/* <!--end::Number--> */}
                                </div>
                            </div>
                            <div class="row p-2 user_blocks d-flex">
                                <div class="col-2 border-das bg-white rounded min-w-125px py-3 px-4 mx-2 mb-3">
                                    {/* <!--begin::Label--> */}
                                    <div class="text-center justify-content-center" >18.000 KD</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center" >
                                        <div class="counted text-center" >Total Discount</div>
                                    </div>
                                    {/* <!--end::Number--> */}
                                </div>
                                <div class="col-2 border-das bg-white rounded min-w-125px py-3 px-4 mx-2 mb-3">
                                    {/* <!--begin::Label--> */}
                                    <div class="text-center justify-content-center" >0 KD</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center" >
                                        <div class="counted text-center" >Discount on Basic Package</div>
                                    </div>
                                    {/* <!--end::Number--> */}
                                </div>
                                <div class="col-2 border-das bg-white rounded min-w-125px py-3 px-4 mx-2 mb-3">
                                    {/* <!--begin::Label--> */}
                                    <div class="text-center justify-content-center" >0 KD</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center" >
                                        <div class="counted text-center" >Discount on Premium Package</div>
                                    </div>
                                    {/* <!--end::Number--> */}
                                </div>
                                <div class="col-2 border-das bg-white rounded min-w-125px py-3 px-4 mx-2 mb-3">
                                    {/* <!--begin::Label--> */}
                                    <div class="text-center justify-content-center" >0.000 KD</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center" >
                                        <div class="counted text-center" >Discount on Contracts</div>
                                    </div>
                                    {/* <!--end::Number--> */}
                                </div>
                                <div class="col-2 border-das bg-white rounded min-w-125px py-3 px-4 mx-2 mb-3">
                                    {/* <!--begin::Label--> */}
                                    <div class="text-center justify-content-center" id="Platinum">0.000 KD</div>
                                    {/* <!--end::Label--> */}
                                    {/* <!--begin::Number--> */}
                                    <div class="d-flex align-items-center justify-content-center" >
                                        <div class="counted text-center" >Users on Contracts</div>
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

export default FinanceReports;