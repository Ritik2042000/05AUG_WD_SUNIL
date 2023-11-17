import React, { useState } from 'react';
import { BiSolidEdit, BiSolidUser } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineCheck, AiOutlineCheckCircle } from 'react-icons/ai';
import { FaBan, FaEnvelopeOpenText, FaMobile, FaPencil } from 'react-icons/fa6';
import { BsFillEyeFill } from 'react-icons/bs';
import { FaBuildingColumns } from "react-icons/fa6";
import DefaultImg from '../../assets/images/img_default.jpeg'

const BusinessAdminDetalis = () => {

    const [customPackageQty, setCustomPackageQty] = useState('');
    const [customPackageQtyUser, setCustomPackageQtyUser] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalAmountForUser, setTotalAmountForUser] = useState(0);

    const tabs = [
        "General",
        "Payment History",
        "Custom Package",
    ];
    // fot tabs 
    const [activeTab, setActiveTab] = useState(tabs[0]);
    // function for tabs
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    // Function to handle changes in the input field
    const handleQtyChange = (e) => {
        const value = parseInt(e.target.value, 10) || 0; // Parse input as an integer
        setCustomPackageQty(value);
        setTotalAmount(value * 500); // Calculate the total amount
    };
    const handleUserQtyChange = (e) => {
        const value = parseInt(e.target.value, 10) || 0; // Parse input as an integer
        setCustomPackageQtyUser(value);
        setTotalAmountForUser(value * 200); // Calculate the total amount
    };

    // Function to enable the "Send Package" button
    const isSubmitDisabled = customPackageQty === '' || customPackageQty === 0;
    // Function to enable the "Send Package" button
    const isSubmitDisabledForUser = customPackageQtyUser === '' || customPackageQtyUser === 0;

    return (
        <>
            <div className="main-wrapper">
                <div className="container">
                    <div className="page-title">
                        <h1 className="page-heading mb-0">Business Detail</h1>
                    </div>
                    <div className="kt_content_containe_inr d-flex justify-content-between  card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-end mb-10 flex-wrap">
                                <div className="text-primary">
                                    <p className=" user-detalis-username fs-6">
                                        <FaBuildingColumns className=''/> Business Admin</p>
                                </div>
                                <div className=''>
                                    <button className="btn btn-danger btn-sm me-2 mt-2" >InActivate Business Account</button>
                                    <button className="btn btn-outline  btn-outline-danger btn-active-light-danger btn-sm mt-2">Block Business Account
                                    </button>
                                </div>
                            </div>


                            <div className="mb-10 row flex-wrap">
                                <div className="col-12 col-md-3 col-lg-12 col-xl-5 mt-3">
                                    <div className="row flex-wrap justify-content-center align-items-center">
                                        <div className="col-12  col-lg-5 user-detalis-icon">
                                            <FaUserCircle className='border border-2 d-block' />
                                        </div>

                                        <div className="col-12  col-lg-7 user_detalis-personal">
                                            <div className=" w-100 d-flex">
                                                <p className='user_detalis-profile--name'>Business Admin</p>
                                                <AiOutlineCheckCircle className='text-success ms-1' />
                                            </div>
                                            <div className=" w-100 user-detalis-info">
                                                <p><FaEnvelopeOpenText className=
                                                    'text-dark' />user5455jhh@gmail.com
                                                </p>
                                                <p><FaMobile />
                                                    6155566656</p>
                                                <p>Extension Number : None</p>
                                            </div>
                                            <h5 className="user-detalis-username">free Membership</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-9 col-lg-12 col-xl-7">
                                    <div className="row g-3 g-lg-3 g-xxl-3 m-0">
                                        <div className="col-xl-6 col-md-6">
                                            <div className="card mb-xl-0">
                                                <div className="card-body p-2 " style={{
                                                    backgroundColor: '#ff009980'
                                                }}>
                                                    <div className="d-flex align-items-center user_detalis-boxes ">
                                                        < p > <BiSolidEdit /></p>
                                                        <p>Draft</p></div>
                                                    <div className="fs-4 fw-bolder d-flex justify-content-end text-dark">
                                                        0</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-6">
                                            <div className="card mb-xl-0">
                                                <div className="card-body p-2" style={{ backgroundColor: '#1E90FF80' }}>
                                                    <div className="d-flex align-items-center user_detalis-boxes "> <p><BsFillEyeFill /></p>
                                                        <p>Review</p>
                                                    </div>
                                                    <div className=" fs-4 fw-bolder d-flex justify-content-end text-dark ">0</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-6">
                                            <div className="card mb-xl-0">
                                                <div className="card-body p-2  bg-opacity-25" style={{ backgroundColor: '#6A5ACD80' }}>
                                                    <div className="d-flex align-items-center user_detalis-boxes "><p><AiOutlineCheck className='text-dark' /></p>
                                                        <p>Ready</p></div>
                                                    <div className=" fs-4 fw-bolder d-flex justify-content-end text-dark">
                                                        0</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-6">
                                            <div className="card mb-xl-0">
                                                <div className="card-body p-2 " style={{ backgroundColor: '#3CB37180' }}>
                                                    <div className="d-flex align-items-center user_detalis-boxes ">
                                                        <p><FaPencil className='text-primary' /></p>
                                                        <p>Signed</p>
                                                    </div>
                                                    <div className=" fs-4 fw-bolder d-flex justify-content-end text-dark">
                                                        0</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="card mb-xl-0">
                                                <div className="card-body p-2" style={{
                                                    backgroundColor: '#FF634780'
                                                }}>
                                                    <div className="d-flex align-items-center user_detalis-boxes" >
                                                        <p><FaBan className='text-danger' /></p>
                                                        <p>Deleted/Cancelled/Rejected</p>
                                                    </div>
                                                    <div className="fs-4 fw-bolder d-flex justify-content-end text-dark">
                                                        0</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="card my-4">
                        <div className="card-body d-flex">
                            {tabs.map((tab) => (
                                <div key={tab}
                                    className={`nav-link d-flex  ${activeTab === tab ? "active-tab" : ""
                                        }`}
                                >
                                    <li
                                        className="active-tabs  my-2 me-3 me-lg-5"
                                        onClick={() => handleTabClick(tab)}
                                    >
                                        {tab}
                                    </li>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card ">
                        <div className={`${activeTab === tabs[0] ? "fade-in" : "fade-out"}`}>
                            <div className="card-body">
                                <div className="tab_2_heading ">
                                    <h3 className="user_detalis-innerpage--title">General</h3>
                                </div>
                                <div className="row flex-wrap">
                                    <div className="col-sm-4 col-12 mt-2">
                                        <p className=' business_admin-detalis '>Business Address</p>
                                        <p className='business_admin-detalis pt-2'>None,None,None,<br />None,None<br />
                                        </p>
                                        <p className="business_admin-detalis pt-3">Licence Number</p>
                                        <p className='business_admin-detalis'>123-123-12ASD-2345</p>
                                        <p className="business_admin-detalis pt-3">Licence Expiry Date</p>
                                        <p></p>
                                    </div>
                                    <div className="col-sm-8 col-12 mt-2">
                                        <h3 className="fs-6">Business Registration Document</h3>
                                        <div className="row flex-wrap">
                                            <div className="col-sm-6 col-12 mt-2 mb-2 business_licences-img">
                                                <p className='business_admin-detalis pt-1 pb-1'>Licence Image</p>
                                                <img src={DefaultImg} alt="Maintenance Mode Image" className="border border-dashed d-block business" />
                                            </div>
                                            <div className="col-sm-6  col-12 mt-2 mb-2 business_licences-img">
                                                <p className='business_admin-detalis pt-1 pb-1'>Authorized Signatory Image</p>
                                                <img src={DefaultImg} alt="Maintenance Mode Image" className="border border-dashed d-block " />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card ">
                        <div className={`${activeTab === tabs[1] ? "fade-in" : "fade-out"}`}>
                            <div className="card-body">
                                <div className="tab-panel">
                                    <div className="tab_2_heading p-6">
                                        <h3 className="user_detalis-innerpage--title">Payment History</h3>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-12 g-4 mx-0">
                                        <div className="col px-5 p-2 mb-2">
                                            <div className="card border border-2">
                                                <div className="card-body p-0">
                                                    <div className="row mx-0">
                                                        <div className="col-12 text-center p-2">
                                                            <p>No payment history data available</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card ">
                        <div className={`${activeTab === tabs[2] ? "fade-in" : "fade-out"}`}>
                            <div className=" card-body">
                                <form >
                                    <h3 className="user_detalis-innerpage--title">Custom Package</h3>
                                    <div className="table-responsive">
                                        <table className=" w-100 border border-gray-400 mb-20">
                                            <tbody><tr className="fw-bolder  border-bottom  border-gray-400 ">
                                                <th className="border-end  border-gray-400 ps-2">Particular</th>
                                                <th className="border-end  border-gray-400 ">Qty</th>
                                                <th className="border-end  border-gray-400 "></th>
                                                <th className="border-end  border-gray-400 ">Per Contract</th>
                                                <th className="border-end  border-gray-400 "></th>
                                                <th className="border-end  border-gray-400 ">Total</th>
                                            </tr>
                                                <tr className="border-bottom  border-gray-400 ">
                                                    <td className="border-end  border-gray-400 ps-2">Contracts</td>
                                                    <td className="border-end  border-gray-400 "> <input type="number" className="border-0 contractinput" placeholder="Enter Qty" value={customPackageQty}
                                                        onChange={handleQtyChange}
                                                        name="custompackageinput"

                                                        required /></td>
                                                    <td className="border-end  border-gray-400 text-center ">X</td>
                                                    <td className="border-end  border-gray-400 ">INR <span id="cp_value">500.000</span></td>
                                                    <input type="hidden" name="percontract" value="500.000" />

                                                    <td className="border-end  border-gray-400 text-center">=</td>
                                                    <td className="border-end  border-gray-400 ">INR <span className="totalcontract" name="totalprice"> {totalAmount.toFixed(3)}</span></td>
                                                </tr>
                                                <tr className="border-bottom  border-gray-400 ">
                                                    <td className="border-end  border-gray-400 "></td>
                                                    <td className="border-end  border-gray-400 "></td>
                                                    <td className="border-end  border-gray-400 "></td>
                                                    <td className="border-end  border-gray-400 "></td>
                                                    <td className="border-end  border-gray-400 "></td>
                                                    <td className="border-end  border-gray-400 ">Total Amount</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="d-flex justify-content-end ">
                                        <button type="submit" className="btn btn-outline btn-outline-danger btn-active-light-danger btn-sm mt-3" disabled={isSubmitDisabled}>Send Package</button>

                                    </div>
                                </form>
                                <div className='custom_package-usertable mt-4'>
                                    <form >
                                        {/* <h3 className="user_detalis-innerpage--title">Custom Package</h3> */}
                                        <div className="table-responsive">
                                            <table className=" w-100 border border-gray-400 mb-20">
                                                <tbody><tr className="fw-bolder  border-bottom  border-gray-400 ">
                                                    <th className="border-end  border-gray-400 ps-2">Particular</th>
                                                    <th className="border-end  border-gray-400 ">Qty</th>
                                                    <th className="border-end  border-gray-400 "></th>
                                                    <th className="border-end  border-gray-400 ">Per User</th>
                                                    <th className="border-end  border-gray-400 "></th>
                                                    <th className="border-end  border-gray-400 ">Total</th>
                                                </tr>
                                                    <tr className="border-bottom  border-gray-400 ">
                                                        <td className="border-end  border-gray-400 ps-2">Contracts</td>
                                                        <td className="border-end  border-gray-400 "> <input type="number" className="border-0 contractinput" placeholder="Enter Qty" value={customPackageQtyUser}
                                                            onChange={handleUserQtyChange}
                                                            name="custompackageinput"

                                                            required /></td>
                                                        <td className="border-end  border-gray-400 text-center ">X</td>
                                                        <td className="border-end  border-gray-400 ">INR <span id="cp_value">200.000</span></td>
                                                        <input type="hidden" name="percontract" value="500.000" />

                                                        <td className="border-end  border-gray-400 text-center">=</td>
                                                        <td className="border-end  border-gray-400 ">INR <span className="totalcontract" name="totalprice"> {totalAmountForUser.toFixed(3)}</span></td>
                                                    </tr>
                                                    <tr className="border-bottom  border-gray-400 ">
                                                        <td className="border-end  border-gray-400 "></td>
                                                        <td className="border-end  border-gray-400 "></td>
                                                        <td className="border-end  border-gray-400 "></td>
                                                        <td className="border-end  border-gray-400 "></td>
                                                        <td className="border-end  border-gray-400 "></td>
                                                        <td className="border-end  border-gray-400 ">Total Amount</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="d-flex justify-content-end ">
                                            <button type="submit" className="btn btn-outline btn-outline-danger btn-active-light-danger btn-sm mt-3" disabled={isSubmitDisabledForUser}>Send Package</button>

                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                </div >
            </div>
        </>
    );
};

export default BusinessAdminDetalis;