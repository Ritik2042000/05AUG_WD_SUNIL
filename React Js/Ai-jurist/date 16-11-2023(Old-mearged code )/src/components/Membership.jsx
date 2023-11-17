import React, { useState } from 'react';
import SideNav from './common Layouts/SideNav';
import { Offcanvas } from 'react-bootstrap';

const Membership = () => {
    const tabs = [
        "For Individual",
        "For Business",

    ];
    //for tab state
    const [activeTab, setActiveTab] = useState(tabs[0]);

    // for offcanvas state
    const [addShow, setAddShow] = useState(false);
    const [addShowMain, setAddShowMain] = useState(false);


    // for offcanvas function
    const handlAddCloseMain = () => setAddShowMain(false);
    const handleAddShowMain = () => setAddShowMain(true);
    const handlAddClose = () => setAddShow(false);
    const handleAddShow = () => setAddShow(true);


    // function for tabs
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            {/* <SideNav /> */}
            <div className="main-wrapper">
                <div className="container">
                    <div className="page-title">
                        <h1 className="page-heading mb-0">Membership</h1>
                    </div>
                    <div className="card p-xl-5 p-3">
                        <div className="card-body">
                            <div className="row pb-3">

                                {tabs.map((tab) => (
                                    <div key={tab}
                                        className={`nav-link d-flex col-xl-2 col-6 ${activeTab === tab ? "active-tab" : ""
                                            }`}
                                    >
                                        <li
                                            className="active-tabs "
                                            onClick={() => handleTabClick(tab)}
                                        >
                                            {tab}
                                        </li>
                                    </div>
                                ))}
                            </div>
                            <div className={`${activeTab === tabs[0] ? "fade-in" : "fade-out"}`}>
                                <div className="row pt-2 ">
                                    <div className="col-12 d-flex flex-wrap flex-md-wrap flex-xl-nowrap justify-content-around">
                                        <div className="membership_cards bg-light  px-4  mx-3 position-relative border border-primary rounded   pb-1 pt-xl-5 p-md-4 pt-2 " >
                                            <h2>Free</h2>
                                            <ul className='card-list'>
                                                <li>Free sign up</li>
                                                <li>5 Free contract</li>
                                                <li>Add up to 4 parties per contract</li>
                                                <li>3 templates per month</li>
                                                <li>Free contract templates </li>
                                                <li>Save contact on address book </li>
                                                <li>Create Blank Contract </li>
                                                <li>Upload Contract </li>
                                                <li>Free Contract Storage </li>
                                            </ul>
                                            <button className="position-absolute  membership_btn btn-sm  btn btn-warning text-dark" onClick={handleAddShowMain} >Edit Membership</button>
                                        </div>
                                        <div className=" membership_cards  bg-light  position-relative px-4 mx-3 border border-primary rounded   pb-1 pt-xl-5 p-md-4 pt-2 mb-esm">
                                            <h2>Basic</h2>
                                            <p className="fw-bolder">INR 60.000/Monthly (Pay Yearly)</p>
                                            <p className="">INR 57.000/Monthly</p>
                                            <p className=" text-danger">Discount 5%</p>
                                            <ul className="mt-2 card-list">
                                                <li>5 Free contract</li>
                                                <li>Knet</li>
                                                <li>Credit/Debit Cards</li>
                                                <li>Google Pay</li>
                                                <li>Apple Pay</li>
                                                <li>Add up to 4 parties per contract</li>
                                                <li>7 templates per month</li>
                                                <li>Free contract templates </li>
                                                <li>Save contact on address book </li>
                                                <li>Create Blank Contract </li>
                                                <li>Upload Contract </li>
                                                <li>Free Contract Storage </li>
                                            </ul>
                                            <button className="position-absolute  membership_btn btn-sm  btn btn-warning text-dark " onClick={handleAddShowMain}>Edit Membership</button>
                                        </div>

                                        <div className="membership_cards bg-light  position-relative px-4  mx-3 border border-primary rounded pb-1 pt-xl-5 p-md-4 pt-2 mt-lg-5 mt-md-5 mt-xl-0 mb-esm">
                                            <h2>Premium</h2>
                                            <p className=" fw-bolder">INR 108.000/Monthly (Pay Yearly)</p>
                                            <p className="">INR 102.600/Monthly</p>
                                            <p className=" text-danger">Discount 5%</p>
                                            <ul className="mt-2 card-list">
                                                <li>Free sign up</li>
                                                <li>10 Free contract</li>
                                                <li>Knet</li>
                                                <li>Credit/Debit Cards</li>
                                                <li>Google Pay</li>
                                                <li>Apple Pay</li>
                                                <li>Add up to 10 parties per contract</li>
                                                <li>12 templates per month</li>
                                                <li> Chat between Parties </li>
                                                <li> Basic contract templates </li>
                                                <li> Save contact on address book </li>
                                                <li> Create Blank Contract </li>
                                                <li> Upload Contract </li>
                                                <li> View log </li>
                                                <li> Free Contract Storage </li>
                                            </ul>
                                            <button className="position-absolute  membership_btn btn-sm btn btn-warning text-dark" onClick={handleAddShowMain} >Edit Membership</button>
                                        </div>

                                    </div>
                                </div>
                                {/* row 2 cards for gold and platinium */}
                                <div className="row mt-5 ">
                                    <div className="col-12 d-flex justify-content-around flex-md-wrap flex-xl-nowrap flex-wrap " >
                                        <div className=" membership_cards  bg-light  position-relative px-4 mx-3 border border-primary rounded pb-1 pt-xl-5 p-md-4 pt-2 mb-lg-0">
                                            <h2>Gold</h2>
                                            <p className=" fw-bolder">INR 708.000/Monthly (Pay Yearly)</p>
                                            <p className="">INR 665.000/Monthly</p>
                                            <p className=" text-danger">Discount 5%</p>
                                            <ul className="mt-2 card-list">
                                                <li>Free sign up</li>
                                                <li>30 Free contract</li>
                                                <li>Knet</li>
                                                <li>Credit/Debit Cards</li>
                                                <li>Google Pay</li>
                                                <li>Apple Pay</li>
                                                <li>Add up to 18 parties per contract</li>
                                                <li>18 templates per month</li>
                                                <li> Chat between Parties </li>
                                                <li> Basic contract templates </li>
                                                <li> Save contact on address book </li>
                                                <li> Create Blank Contract </li>
                                                <li> Upload Contract </li>
                                                <li> View log </li>
                                            </ul>

                                            <button className="position-absolute  membership_btn btn-sm btn btn-warning text-dark" onClick={handleAddShowMain}>Edit Membership</button>
                                        </div>
                                        <div className="membership_cards bg-light  position-relative px-4  mx-3 border border-primary rounded pb-1 pt-xl-5 p-md-4 pt-2 mb-esm ">
                                            <h2>Platinum</h2>
                                            <p className=" fw-bolder">INR 1428.000/Monthly (Pay Yearly)</p>
                                            <p className="">INR 1150.000/Monthly</p>
                                            <p className=" text-danger">Discount 5%</p>
                                            <ul className="mt-2 card-list">
                                                <li>Free sign up</li>
                                                <li>45 Free contract</li>
                                                <li>Knet</li>
                                                <li>Credit/Debit Cards</li>
                                                <li>Google Pay</li>
                                                <li>Apple Pay</li>
                                                <li>Add up to 20 parties per contract</li>
                                                <li>25 templates per month</li>
                                                <li> Chat between Parties </li>
                                                <li> Basic contract templates </li>
                                                <li> Save contact on address book </li>
                                                <li> Create Blank Contract </li>
                                                <li> Upload Contract </li>
                                                <li> View log </li>

                                            </ul>
                                            <button className="position-absolute  membership_btn btn-sm btn btn-warning text-dark" onClick={handleAddShowMain} >Edit Membership</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* for Business */}
                            <div className={`${activeTab === tabs[1] ? "fade-in" : "fade-out"}`}>
                                <div className="row pt-2">
                                    <div className="col-12 d-flex flex-wrap  flex-md-wrap flex-xl-nowrap justify-content-around">
                                        <div className=" membership_cards   bg-light  px-4  mx-3 position-relative border border-primary rounded   pb-1 pt-xl-5 p-md-4 pt-2 " >
                                            <h2>Free</h2>
                                            <ul className='card-list'>
                                                <li>Free sign up  </li>
                                                <li>1 Free contract</li>
                                                <li>Knet</li>
                                                <li>Credit/Debit Cards</li>
                                                <li>Google Pay</li>
                                                <li>Apple Pay </li>
                                                <li>Add up to 1 parties per contract </li>
                                                <li>3 templates per month</li>
                                                <li>Chat between Parties </li>
                                                <li>Basic contract templates</li>
                                                <li>Save contact on address book</li>
                                                <li>Create Blank Contract</li>
                                                <li>Upload Contract</li>
                                                <li>View log</li>
                                            </ul>
                                            <button className="position-absolute  membership_btn btn-sm  btn btn-warning text-dark" onClick={handleAddShow}>Edit Membership</button>
                                        </div>
                                        <div className=" membership_cards  bg-light  position-relative px-4 mx-3 border border-primary rounded   pb-1 pt-xl-5 p-md-4 pt-2 mb-esm">
                                            <h2>Basic</h2>
                                            <p className=" fw-bolder">INR 180.000/Monthly (Pay Yearly)</p>
                                            <p className="">INR 171.000/Monthly</p>
                                            <p className=" text-danger">Discount 5%</p>
                                            <ul className="mt-2 card-list">
                                                <li>Free sign up</li>
                                                <li>10 Free contract</li>
                                                <li>Knet</li>
                                                <li>Credit/Debit Cards</li>
                                                <li>Google Pay</li>
                                                <li>Apple Pay</li>
                                                <li>Add up to 5 parties per contract</li>
                                                <li>Basic contract templates </li>
                                                <li>Able to add 2 User </li>
                                                <li>Save contact on address book </li>
                                                <li>Create Blank Contract </li>
                                                <li>Upload Contract </li>
                                                <li>View log </li>
                                            </ul>
                                            <button className="position-absolute  membership_btn btn-sm btn btn-warning text-dark" onClick={handleAddShow}>Edit Membership</button>
                                        </div>
                                        <div className="membership_cards bg-light  position-relative px-4  mx-3 border border-primary rounded pb-1 pt-xl-5 p-md-4 pt-2 mt-lg-5 mt-md-5 mt-xl-0 mb-esm">
                                            <h2>Premium</h2>
                                            <p className=" fw-bolder">INR 348.000/Monthly (Pay Yearly)</p>
                                            <p className="">INR 330.600/Monthly</p>
                                            <p className=" text-danger">Discount 5%</p>
                                            <ul className="mt-2 card-list">
                                                <li>Free sign up</li>
                                                <li>20 Free contract</li>
                                                <li>Knet</li>
                                                <li>Credit/Debit Cards</li>
                                                <li>Google Pay</li>
                                                <li>Apple Pay</li>
                                                <li>Add up to 10 parties per contract</li>
                                                <li>Basic contract templates </li>
                                                <li>Able to add 3 User </li>
                                                <li>Save contact on address book </li>
                                                <li>Create Blank Contract </li>
                                                <li>Upload Contract </li>
                                                <li>View log </li>
                                            </ul>
                                            <button className="position-absolute  membership_btn btn-sm btn btn-warning text-dark" onClick={handleAddShow} >Edit Membership</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5 ">
                                    <div className="col-12 d-flex justify-content-around flex-md-wrap flex-xl-nowrap flex-wrap">
                                        <div className=" membership_cards  bg-light  position-relative px-4 mx-3 border border-primary rounded   pb-1 pt-xl-5 p-md-4 pt-2 ">
                                            <h2>Gold</h2>
                                            <p className=" fw-bolder">INR 708.000/Monthly (Pay Yearly)</p>
                                            <p className="">INR 665.000/Monthly</p>
                                            <p className=" text-danger">Discount 5%</p>
                                            <ul className="mt-2 card-list">
                                                <li>Free sign up</li>
                                                <li>30 Free contract</li>
                                                <li>Knet</li>
                                                <li>Credit/Debit Cards</li>
                                                <li>Google Pay</li>
                                                <li>Apple Pay</li>
                                                <li>Add up to 15 parties per contract</li>
                                                <li>18 templates per month</li>
                                                <li> Basic contract templates </li>
                                                <li> Able to add 5 User </li>
                                                <li> Save contact on address book </li>
                                                <li> Create Blank Contract </li>
                                                <li> Upload Contract </li>
                                                <li> View log </li>
                                            </ul>

                                            <button className="position-absolute  membership_btn btn-sm btn btn-warning text-dark" onClick={handleAddShow}>Edit Membership</button>
                                        </div>
                                        <div className="membership_cards bg-light  position-relative px-4  mx-3 border border-primary rounded pb-1 pt-xl-5 p-md-4 pt-2 mb-esm">
                                            <h2>Platinum</h2>
                                            <p className=" fw-bolder">INR 1428.000/Monthly (Pay Yearly)</p>
                                            <p className="">INR 1150.000/Monthly</p>
                                            <p className=" text-danger">Discount 5%</p>
                                            <ul className="mt-2 card-list">
                                                <li>Free sign up</li>
                                                <li>45 Free contract</li>
                                                <li>Knet</li>
                                                <li>Credit/Debit Cards</li>
                                                <li>Google Pay</li>
                                                <li>Apple Pay</li>
                                                <li>Add up to 20 parties per contract</li>
                                                <li>25 templates per month</li>
                                                <li> Basic contract templates </li>
                                                <li> Able to add 10 User </li>
                                                <li> Save contact on address book </li>
                                                <li> Create Blank Contract </li>
                                                <li> Upload Contract </li>
                                                <li> View log </li>

                                            </ul>
                                            <button className="position-absolute  membership_btn btn-sm btn btn-warning text-dark" onClick={handleAddShow}>Edit Membership</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/*off canvas code  for For-individual */}
            <Offcanvas

                show={addShowMain}
                onHide={handlAddCloseMain}
                placement="end"
            >
                <Offcanvas.Body>
                    <Offcanvas.Header closeButton className='px-0'>
                        <Offcanvas.Title className="fw-bold">Update</Offcanvas.Title>
                    </Offcanvas.Header>
                    <hr />
                    <div className="align-center w-100 ">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" name="if_mem_name" className="form-label">Name </label>
                            <input type="text" className="form-control form-control-solid" min="0" value="Free" readonly="" />
                        </div>
                        {/* <div className="mb-3">
                            <label for="exampleFormControlInput1" name="if_mem_name" className="form-label">Name (عربي)</label>
                            <input type="text" className="form-control form-control-solid arabic_text-style" min="0" value="حر" />
                        </div> */}

                        <div className="mb-3">
                            <label for="dayava" className="form-label">Day Availability</label>
                            <input type="number" id="day-ava" className="day-ava form-control form-control-solid" value="30" />
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Number of Contracts</label>
                            <input type="number" className="form-control form-control-solid" min="0" placeholder='5' />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Number of Parties</label>
                            <input type="number" className="form-control form-control-solid" placeholder='4' />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Number of Templates</label>
                            <input type="number" className="form-control form-control-solid" placeholder='3' />
                        </div>
                        <h5>Other Features</h5>
                        <div className="mb-3 mt-1">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label ms-2" for="flexCheckChecked">
                                Chat between Parties
                            </label>
                        </div>

                        <div className="mb-3">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label ms-2" for="flexCheckChecked">
                                Collaborative editing
                            </label>
                        </div>

                        <div className="mb-3">
                            <input className="form-check-input " type="checkbox" />
                            <label className="form-check-label ms-2" for="flexCheckChecked">
                                Contract templates(limited)
                            </label>
                        </div>
                        <div className="mb-3">
                            <input className="form-check-input" type="checkbox" defaultChecked='checked' />
                            <label className="form-check-label ms-2" for="flexCheckChecked">
                                Address Book
                            </label>
                        </div>
                        <div className="mb-3">
                            <input className="form-check-input" type="checkbox" defaultChecked='checked' />
                            <label className="form-check-label ms-2" for="flexCheckChecked">
                                Create Blank Contract
                            </label>
                        </div>
                        <div className="mb-3">
                            <input className="form-check-input" type="checkbox" defaultChecked='checked' />
                            <label className="form-check-label ms-2" for="flexCheckChecked">
                                Upload Contract
                            </label>
                        </div>
                        <div className="mb-3">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label ms-2" for="flexCheckChecked">
                                View log
                            </label>
                        </div>
                        <div className="mb-3">
                            <input className="form-check-input" type="checkbox" defaultChecked='checked' />
                            <label className="form-check-label ms-2" for="flexCheckChecked">
                                Free Contract Storage
                            </label>
                        </div>
                        <div className="mb-3">
                            <input className="form-check-input" type="checkbox" defaultChecked='checked' />
                            <label className="form-check-label ms-2" for="flexCheckChecked">
                                Free Sign Up
                            </label>
                        </div>
                        <div className="mb-3">
                            <input className="form-check-input" type="checkbox" name="if_f_rh" value="true" />
                            <label className="form-check-label ms-2" for="flexCheckChecked">
                                Revision history
                            </label>
                        </div>
                        <div className="form-check form-check-solid form-switch p-0 d-flex align-items-end" >
                            <label className="form-check-label ms-2 fw-bolder " for="allowmarketing">Display to Users : </label>
                            <input className="form-check-input ms-2 ps-4 pe-4 pt-3 pb-2" type="checkbox" defaultChecked='checked' />
                        </div>
                        <div className="btn_for-update text-center mt-4">
                            <button className='btn btn-primary'>Update</button>
                        </div>
                    </div>

                </Offcanvas.Body>
            </Offcanvas>

            {/* off canvas code for For-business*/}
            <Offcanvas

                show={addShow}
                onHide={handlAddClose}
                placement="end"
            //   scroll={true}
            >
                <Offcanvas.Body>
                    <Offcanvas.Header closeButton className='px-0'>
                        <Offcanvas.Title className="fw-bold">Update</Offcanvas.Title>
                    </Offcanvas.Header>
                    <hr />
                    <form>
                        <div className="modal-body">
                            <div className="align-center w-100 ">

                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label"> Name  </label>
                                    <input type="text" className="form-control form-control-solid" />
                                </div>

                                {/* <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Name (عربي)</label>
                                    <input type="text" className="form-control form-control-solid text-right" />
                                </div> */}

                                <div className="mb-3">
                                    <label for="dayava" className="form-label">Day Availability</label>
                                    <input type="number" className=" form-control form-control-solid" value="0" />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Number of Contracts</label>
                                    <input type="number" className="form-control form-control-solid" min="0" value="1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Number of Parties</label>
                                    <input type="number" className="form-control form-control-solid" value="1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Number of Templates</label>
                                    <input type="number" className="form-control form-control-solid" value="3" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Number of Users</label>
                                    <input type="number" className="form-control form-control-solid" value="0" />
                                </div>
                                <h5>Other Features</h5>
                                <div className="mb-3 mt-5">
                                    <input className="form-check-input" type="checkbox" defaultChecked='' />
                                    <label className="form-check-label ms-2" for="flexCheckChecked">
                                        Chat between Parties
                                    </label>
                                </div>

                                <div className="mb-3">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label ms-2" for="flexCheckChecked">
                                        Collaborative editing
                                    </label>
                                </div>


                                <div className="mb-3">
                                    <input className="form-check-input mainCheckbox" type="checkbox" name="if_ct"defaultChecked='checked' />
                                    <label className="form-check-label ms-2" for="flexCheckChecked">
                                        Contract templates(limited)
                                    </label>
                                </div>

                                <div className="inner-subcheckbox subCheckboxes" >

                                    <div className="mb-3">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label ms-2" for="flexCheckChecked">
                                            Free contract templates
                                        </label>
                                    </div>

                                    <div className="mb-3">
                                        <input className="form-check-input" type="checkbox" defaultChecked='checked' />
                                        <label className="form-check-label ms-2" for="flexCheckChecked">
                                            Basic contract templates
                                        </label>
                                    </div>

                                    <div className="mb-3">
                                        <input className="form-check-input" type="checkbox" />
                                        <label className="form-check-label ms-2" for="flexCheckChecked">
                                            Premium contract templates
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <input className="form-check-input" type="checkbox" name="if_ab" defaultChecked='checked' />
                                <label className="form-check-label ms-2" for="flexCheckChecked">
                                    Address Book
                                </label>
                            </div>
                            <div className="mb-3">
                                <input className="form-check-input" type="checkbox" defaultChecked='checked' />
                                <label className="form-check-label ms-2" for="flexCheckChecked">
                                    Create Blank Contract
                                </label>
                            </div>
                            <div className="mb-3">
                                <input className="form-check-input" type="checkbox" defaultChecked='checked' />
                                <label className="form-check-label ms-2" for="flexCheckChecked">
                                    Upload Contract
                                </label>
                            </div>
                            <div className="mb-3">
                                <input className="form-check-input" type="checkbox" defaultChecked='checked' />
                                <label className="form-check-label ms-2" for="flexCheckChecked">
                                    View log
                                </label>
                            </div>
                            <div className="mb-3">
                                <input className="form-check-input" type="checkbox" defaultChecked='' />
                                <label className="form-check-label ms-2" for="flexCheckChecked">
                                    Free Contract Storage
                                </label>
                            </div>
                            <div className="mb-3">
                                <input className="form-check-input" type="checkbox" defaultChecked='checked' />
                                <label className="form-check-label ms-2" for="flexCheckChecked">
                                    Free Sign Up
                                </label>
                            </div>
                            <div className="mb-3">
                                <input className="form-check-input" type="checkbox" defaultChecked=''/>
                                <label className="form-check-label ms-2" for="flexCheckChecked">
                                    Revision history
                                </label>
                            </div>
                            <div className="form-check form-check-solid form-switch switch d-flex p-0 align-items-center" >
                                <label className="form-check-label ms-2  " for="allowmarketing" >Display to Users : </label>
                                <input className="form-check-input ms-2 ps-4 pe-4 pt-3 pb-2" type="checkbox" defaultChecked="checked" />
                            </div>
                            <div className="btn_for-update text-center mt-4">
                                <button className='btn btn-primary'>Update</button>
                            </div>
                        </div>
                    </form>

                </Offcanvas.Body>
            </Offcanvas>

        </>
    );
};

export default Membership;