import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import DateRangeCom from './common Layouts/DateRangeCom';

const FinanceReports = () => {
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
            name: 'Admin',
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
            name: 'Rohan',
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
            name: 'Jurist',
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
            name: 'company',
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
            name: 'webcompany',
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
            name: 'unknow',
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
            paymentstatus: 'Pending',
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
            paymentstatus: 'Pending',
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
            paymentstatus: 'Pending',
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
            paymentstatus: 'Pending',
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
            paymentstatus: 'Pending',
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
            paymentstatus: 'Pending',
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
            paymentstatus: 'Pending',
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
            paymentstatus: 'Pending',
            regdate: '10-10-2023',
        },
    ];

    // search functionality code
    // function for input changes
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };
    // filter function 
    const filteredData = data.filter((row) =>
        row.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <>
            <div className="main-wrapper">
                <div className="container">
                    <div className="page-title">
                        <h1 className="page-heading mb-0">Finance Reports</h1>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-xl-end justify-content-md-center align-items-center flex-wrap ">
                                <div className="mb-0 p-md-3">
                                    {/* <label className="form-label p-2">Start Date</label> */}
                                    {/* <input className="form-control form-control-solid " placeholder="Pick start date" name="start_datetime" type="date" /> */}
                                    <label className="form-label py-2 me-2  ">Start Date To End Date </label>
                                    <div>
                                        <DateRangeCom/>
                                    </div>
                                </div>
                                {/* <div className="mb-0 p-md-3">
                                    <label className="form-label p-2">End Date</label>
                                    <input className="form-control form-control-solid " placeholder="Pick end date" type="date" />
                                </div> */}
                                <div className="mb-0 p-md-3 ms-2 ms-md-0 ms- mt-2">
                                    <button className="btn  btn-primary">Submit</button>
                                </div>
                            </div>
                            <div className="row user_blocks p-2 mt-5  d-flex justify-content-xl-start justify-content-md-center justify-content-sm-center ">
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3" >
                                    <div className="text-center" >80272.65 INR</div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="counted text-center " >Total Revenue</div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3">
                                    <div className="text-center" >0 INR</div>

                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="counted text-center" >Basic Package Revenue</div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3">
                                    <div className="text-center" >0 INR</div>
                                    <div className="d-flex align-items-center justify-content-center" >
                                        <div className="counted text-center" >Premium Package Revenue</div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3">
                                    <div className="text-center justify-content-center">51214.300 INR</div>
                                    <div className="d-flex align-items-center justify-content-center" >
                                        <div className="counted text-center" >Contracts Revenue</div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3">
                                    <div className="text-center justify-content-center">2941.200 INR</div>
                                    <div className="d-flex align-items-center justify-content-center" >
                                        <div className="counted text-center" >Users Revenue</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2 user_blocks d-flex justify-content-xl-start justify-content-md-center justify-content-sm-center">
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3">
                                    <div className="text-center justify-content-center" >18.000 INR</div>
                                    <div className="d-flex align-items-center justify-content-center" >
                                        <div className="counted text-center" >Total Discount</div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3">
                                    <div className="text-center justify-content-center" >0 INR</div>
                                    <div className="d-flex align-items-center justify-content-center" >
                                        <div className="counted text-center" >Discount on Basic Package</div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3">
                                    <div className="text-center justify-content-center" >0 INR</div>
                                    <div className="d-flex align-items-center justify-content-center" >
                                        <div className="counted text-center" >Discount on Premium Package</div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3">
                                    <div className="text-center justify-content-center" >0.000 INR</div>
                                    <div className="d-flex align-items-center justify-content-center" >
                                        <div className="counted text-center" >Discount on Contracts</div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-2 col-sm-5 border-das bg-white rounded  py-3 px-4 spaceing-rep mb-3">
                                    <div className="text-center justify-content-center" >0.000 INR</div>
                                    <div className="d-flex align-items-center justify-content-center" >
                                        <div className="counted text-center" >Users on Contracts</div>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-between">

                                <div className="col-md-5 col-lg-6 col-sm-8 pd-2">
                                    <input type="text" className="form-control  " value={searchText} onChange={handleSearch} placeholder="Search by name" />
                                </div>

                                <div className="col-md-4 col-sm-3 text-end">
                                    <button className='btn btn btn-primary '>Download</button>
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

export default FinanceReports;