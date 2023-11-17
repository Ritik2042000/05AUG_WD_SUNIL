import React, { useRef, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import DataTable from "react-data-table-component";
import { Offcanvas } from "react-bootstrap";
import imgfornotificationtable from "../assets/images/notificationimg.jpg";
import coupanimg from "../assets/images/coupanimg.jpg";
import SearchableDropdown from "./common Layouts/SearchableDropdown";

const Coupans = () => {
  // for offcanvas
  const [addShowMain, setAddShowMain] = useState(false);
  const [addShow, setAddShow] = useState(false);

  //state for search function
  const [searchText, setSearchText] = useState("");

  //function of offcanvas
  const handlAddCloseMain = () => setAddShowMain(false);
  const handleAddShowMain = () => setAddShowMain(true);
  const handlAddClose = () => setAddShow(false);
  const handleAddShow = () => setAddShow(true);

  // Profile Picture Upload
  const [img, setImg] = useState("");
  const inputRef = useRef(null);

  const handleImgClick = () => {
    inputRef.current.click();
  };

  const handleImgChange = (event) => {
    const file = event.target.files[0];
    // console.log(file);
    setImg(event.target.files[0]);
  };

  const columns = [
    {
      name: "COUPON NAME",
      selector: (row) => row.coupanname,
      sortable: true,
    },
    {
      name: "COUPON CODE",
      selector: (row) => row.coupancode,
      sortable: true,
    },
    {
      name: "STATUS",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "TOTAL",
      selector: (row) => row.total,
      sortable: true,
    },
    {
      name: "USED",
      selector: (row) => row.used,
      sortable: true,
    },
    {
      name: "UNUSED",
      selector: (row) => row.unused,
      sortable: true,
    },
    {
      name: "START DATE",
      selector: (row) => row.startdate,
      sortable: true,
    },
    {
      name: "END DATE",
      selector: (row) => row.enddate,
      sortable: true,
    },

    {
      name: "ACTION",
      cell: (row) => (
        <MdModeEdit className="edit-icon" onClick={handleAddShow} />
      ),
      sortable: true,
    },
  ];
  const data = [
    {
      coupanname: "Testing Coupon",
      coupancode: "123",
      status: "active",
      total: "20",
      used: "0",
      unused: "0",
      startdate: "12-10-2023",
      enddate: "31-10-2023",
    },
    {
      coupanname: " Coupon",
      coupancode: "3256",
      status: "active",
      total: "20",
      used: "0",
      unused: "0",
      startdate: "12-10-2023",
      enddate: "31-10-2023",
    },
    {
      coupanname: "New offer",
      coupancode: "1234",
      status: "active",
      total: "20",
      used: "0",
      unused: "0",
      startdate: "12-10-2023",
      enddate: "31-10-2023",
    },
    {
      coupanname: "Testing Coupon",
      coupancode: "15623",
      status: "active",
      total: "20",
      used: "0",
      unused: "0",
      startdate: "12-10-2023",
      enddate: "31-10-2023",
    },
    {
      coupanname: "Testing Coupon",
      coupancode: "151515",
      status: "active",
      total: "20",
      used: "0",
      unused: "0",
      startdate: "12-10-2023",
      enddate: "31-10-2023",
    },
    {
      coupanname: "Testing Coupon",
      coupancode: "12543",
      status: "active",
      total: "20",
      used: "0",
      unused: "0",
      startdate: "12-10-2023",
      enddate: "31-10-2023",
    },
    {
      coupanname: "Testing Coupon",
      coupancode: "123",
      status: "active",
      total: "20",
      used: "0",
      unused: "0",
      startdate: "12-10-2023",
      enddate: "31-10-2023",
    },
    {
      coupanname: "Testing Coupon",
      coupancode: "123",
      status: "active",
      total: "20",
      used: "0",
      unused: "0",
      startdate: "12-10-2023",
      enddate: "31-10-2023",
    },
  ];
  // search functionality code
  // function for input changes
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  // filter function
  const filteredData = data.filter((row) =>
    row.coupanname.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <div className="page-title d-flex justify-content-between">
            <h1 className="page-heading mb-0">Coupons</h1>
            <div className="coupan_btn">
              <button className="btn btn-primary" onClick={handleAddShowMain}>
                Create Coupon
              </button>
            </div>
          </div>
          <div className="card bg-white p-3    ">
            <div className="card-body">
              <div className="search_coupan-table align-items-center d-flex justify-content-end   ">
                <input
                  type="text"
                  className="form-control   w-100"
                  onChange={handleSearch}
                  id="Search"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="card-body">
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

      {/* offcanvas for create-coupan */}
      <Offcanvas
        show={addShowMain}
        onHide={handlAddCloseMain}
        placement="end"
        //   scroll={true}
      >
        <Offcanvas.Body>
          <Offcanvas.Header closeButton className="px-0">
            <Offcanvas.Title className="fw-bold ">
              Create Coupon
            </Offcanvas.Title>
          </Offcanvas.Header>
          <hr />
          <div className="modal-body">
            <div className="mb-3">
              <label
                for="exampleFormControlInput1"
                className="form-label required"
              >
                {" "}
                Name{" "}
              </label>
              <input
                type="text"
                className="form-control form-control-solid"
                placeholder="Name"
                name="coupon_name"
                required=""
              />
            </div>
            {/* <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label required"> Name (عربي)</label>
                            <input type="text" className="form-control form-control-solid  arabic_text-style" placeholder="أدخل اسم القسيمة" name="coupon_name_arabic" required="" />
                        </div> */}
            <div className="mb-3">
              <label
                for="exampleFormControlInput1"
                className="form-label required"
              >
                Coupon Code
              </label>
              <input
                type="text"
                className="form-control form-control-solid"
                max="999999999999"
                placeholder="Enter Coupon Code"
                name="coupon_code"
              />
            </div>
            <div className="row">
              <div className="col-6">
                <div className="mb-0">
                  <label className="form-label required">
                    Start Date &amp; Time
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control form-control-solid "
                    placeholder="Pick date and time"
                    name="start_datetime"
                    required=""
                  />
                  <div
                    id="startDatetimeValidation"
                    className="text-danger"
                  ></div>
                </div>
              </div>
              <div className="col-6">
                <div className="">
                  <label className="form-label required">
                    End Date &amp; Time
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control form-control-solid "
                    placeholder="Pick date and time"
                    name="end_datetime"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm-6 col-12">
                <h6 className="mt-2">Total number Of coupons available</h6>
                <div className="d-flex mt-3  mb-">
                  <button className="btn btn-primary">Unlimited</button>
                  <button className="btn ms-1 btn-primary ">Limited</button>
                </div>
              </div>
              <div className="col-sm-6 col-12 ">
                <div className="form-outline">
                  <label className="form-label mt-2 " for="typeNumber">
                    <h6>Total number Of coupons</h6>
                  </label>
                  <input
                    type="number"
                    pattern="[0-9]*"
                    placeholder="Total number Of coupons available"
                    className="form-control  form-control-solid"
                    min="0"
                    name="limited_number_input"
                  />
                </div>
                {/* <!-- number input tag --> */}
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-6">
                <h6>Limited Coupon Per Customer</h6>
                <div className="form-switch form-check-solid my-2 d-flex p-0">
                  <div className="col-7">
                    <label className="form-check-label" for="flexSwitchChecked">
                      Limited Coupon per Customer
                    </label>
                  </div>
                  <div className="col-3 ">
                    <input
                      className="form-check-input ms-2 pt-2 pb-3 ps-4 pe-4"
                      type="checkbox"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    {" "}
                    Limited Coupon per Customer
                  </label>
                  <input
                    type="number"
                    name="limited_coupon_code"
                    className="form-control form-control form-control-solid mt-1"
                    placeholder="Coupon per Customer"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <label className="form-label">Coupon Banner image</label>
              <p id="create-img-size-validation">
                Allowed files .png, .jpg, .jpeg, .webp | Image size : 400px X
                800px | Max 2MB.
              </p>
              <div className="profileImgUpload text-center mt-3">
                {img ? (
                  <img
                    src={URL.createObjectURL(img)}
                    alt="Prilfe Img Upload"
                    className="notificationimg"
                  />
                ) : (
                  <img
                    src={imgfornotificationtable}
                    alt="Prilfe Img Upload"
                    className="notificationimg"
                  />
                )}
                <input
                  type="file"
                  ref={inputRef}
                  onChange={handleImgChange}
                  className="inputImg"
                />
                <div className="select_img-btn mt-4">
                  <button className="btn btn-primary" onClick={handleImgClick}>
                    Select an image
                  </button>
                </div>
              </div>
              <div className="col-12 justify-content-center">
                <div className="col-12 mt-4">
                  <label className="form-check-label" for="flexSwitchChecked">
                    User Type
                  </label>
                  <select
                    className="form-select form-select-sm form-select-solid select2-hidden-accessible"
                    name="discount_for"
                  >
                    <option
                      value="1"
                      selected=""
                      data-select2-id="select2-data-2-2iax"
                    >
                      All user
                    </option>
                    <option value="2">Individual Users</option>
                    <option value="3">Business Users</option>
                  </select>
                </div>
                {/* <div className="col-12 mt-4" id="select_all">
                                    <label className="form-check-label" for="individualUserSelect">
                                        User
                                    </label>
                                    <select className="form-control form-control-solid " name="selected_user" >
                                        <option value="0" selected="" >Select All</option>
                                        <option value="1">Mathew Patron</option>
                                        <option value="2">Caleb Anderson</option>
                                        <option value="3">Cameron Bell</option>
                                        <option value="4">Caroline Collins</option>
                                        <option value="5">Daniel Johnson</option>
                                        <option value="6">Benjamin Smith</option>
                                        <option value="7">Olivia Johnson</option>
                                        <option value="8">lapawi</option>
                                        <option value="9">Ava Brown</option>
                                        <option value="10">Ava white</option>
                                    </select>
                                </div> */}
                {/* <div className="col-12 mt-4 d-none" id="individual_User" >
                                    <label className="form-check-label" for="individualUserSelect">
                                        User
                                    </label>
                                    <select className="form-control form-control-solid select2-hidden-accessible" >
                                        <option value="0">Select All</option>
                                        <option value=" 1 ">Mathew Patron</option>
                                        <option value=" 7 ">Caleb Anderson</option>
                                        <option value=" 8 ">Cameron Bell</option>
                                        <option value=" 9 ">Caroline Collins</option>
                                        <option value=" 10 ">Daniel Johnson</option>
                                    </select>
                                </div> */}
                <div className="col-12 mt-4">
                  <label className="form-check-label" for="flexSelectUser">
                    Users
                  </label>
                  <SearchableDropdown />
                </div>

                <div className="form-group mt-3">
                  <label className="form-check-label" for="flexSwitchChecked">
                    Coupon Details
                  </label>
                  <textarea
                    className="form-control rounded-0 "
                    id="exampleFormControlTextarea1"
                    rows="4"
                    placeholder="Enter Details..."
                    name="coupon_details"
                    required=""
                  ></textarea>
                </div>
                {/* <div className="form-group mt-5">
                                    <label className="form-check-label" for="flexSwitchChecked">
                                        Coupon Details (عربي)
                                    </label>
                                    <textarea className="form-control rounded-0  arabic_text-style" id="exampleFormControlTextarea1" rows="4" placeholder="تفاصيل القسيمة..." name="coupon_details_arabic" required=""></textarea>
                                </div> */}
                <div className="row mt-4">
                  <div className="col-6">
                    <label
                      className="form-check-label required"
                      for="flexSwitchChecked"
                    >
                      Discount Type
                    </label>
                    <select
                      className="form-select form-select-sm form-select-solid "
                      data-control="select2"
                      data-placeholder=" "
                      data-allow-clear="true"
                      data-minimum-results-for-search="Infinity"
                      name="discount_for"
                      data-select2-id="select2-data-13-6cip"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="1" data-select2-id="select2-data-15-m1en">
                        Percentage
                      </option>
                      <option value="2">Fixed price</option>
                    </select>
                  </div>
                  <div className="col-6 ">
                    <div className="mt-4">
                      <input
                        type="number"
                        className=" form-control form-control-solid"
                        name="couponrate"
                        value=""
                        placeholder="Rate"
                        min="0"
                      />
                    </div>
                  </div>
                  <div className="col-6 mt-2">
                    <label className="form-check-label" for="flexSwitchChecked">
                      Discount if for
                    </label>
                    <select
                      className="form-select form-select-sm form-select-solid "
                      name="discount_for"
                    >
                      <option value="membership">Membership</option>
                      <option value="contract">Contract</option>
                      <option value="user">User</option>
                      <option value="all">All</option>
                    </select>
                  </div>
                </div>
                <div className="form-check my-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked="checked"
                  />
                  <label className="form-check-label">
                    Send Alert to all existing users
                  </label>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary  ">
                    Create
                  </button>
                  <button type="reset" className="btn btn-danger ms-2  ">
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* offcanvas for Create-coupan */}

      <Offcanvas
        show={addShow}
        onHide={handlAddClose}
        placement="end"
        //   scroll={true}
      >
        <Offcanvas.Body>
          <Offcanvas.Header closeButton className="px-0">
            <Offcanvas.Title className="fw-bold py-0 ">
              Update Coupon
            </Offcanvas.Title>
          </Offcanvas.Header>
          <hr />
          <div className="modal-body">
            <div className="mb-3">
              <label
                for="exampleFormControlInput1"
                className="form-label required"
              >
                {" "}
                Name{" "}
              </label>
              <input
                type="text"
                className="form-control form-control-solid"
                placeholder="Name"
                name="coupon_name"
                required=""
              />
            </div>
            {/* <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label required"> Name (عربي)</label>
                            <input type="text" className="form-control form-control-solid  arabic_text-style" placeholder="أدخل اسم القسيمة" name="coupon_name_arabic" required="" />
                        </div> */}
            <div className="mb-3">
              <label
                for="exampleFormControlInput1"
                className="form-label required"
              >
                Coupon Code
              </label>
              <input
                type="text"
                className="form-control form-control-solid"
                max="999999999999"
                placeholder="Enter Coupon Code"
                name="coupon_code"
              />
            </div>
            <div className="row">
              <div className="col-6">
                <div className="mb-0">
                  <label className="form-label required">
                    Start Date &amp; Time
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control form-control-solid "
                    placeholder="Pick date and time"
                    name="start_datetime"
                    required=""
                  />
                  <div
                    id="startDatetimeValidation"
                    className="text-danger"
                  ></div>
                </div>
              </div>
              <div className="col-6">
                <div className="">
                  <label className="form-label required">
                    End Date &amp; Time
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control form-control-solid "
                    placeholder="Pick date and time"
                    name="end_datetime"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6 ">
                <h6 className="mt-2">Total number Of coupons available</h6>
                <div className="d-flex mt-3  mb-">
                  <button className="btn btn-primary">Unlimited</button>
                  <button className="btn ms-1 btn-primary ">Limited</button>
                </div>
              </div>
              <div className="col-6 ">
                <div className="form-outline">
                  <label className="form-label mt-2 " for="typeNumber">
                    <h6>Total number Of coupons</h6>
                  </label>
                  <input
                    type="number"
                    pattern="[0-9]*"
                    placeholder="Total number Of coupons available"
                    className="form-control  form-control-solid"
                    min="0"
                    name="limited_number_input"
                  />
                </div>
                {/* <!-- number input tag --> */}
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-6">
                <h6>Limited Coupon Per Customer</h6>
                <div className="form-switch form-check-solid my-2 d-flex p-0">
                  <div className="col-7">
                    <label className="form-check-label" for="flexSwitchChecked">
                      Limited Coupon per Customer
                    </label>
                  </div>
                  <div className="col-3 ">
                    <input
                      className="form-check-input ms-2 pt-2 pb-3 ps-4 pe-4"
                      type="checkbox"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    {" "}
                    Limited Coupon per Customer
                  </label>
                  <input
                    type="number"
                    pattern="[0-9]*"
                    name="limited_coupon_code"
                    className="form-control form-control form-control-solid mt-1"
                    placeholder="Coupon per Customer"
                    id="couponCodeInput"
                    disabled=""
                  />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <label className="form-label">Coupon Banner image</label>
              <p id="create-img-size-validation">
                Allowed files .png, .jpg, .jpeg, .webp | Image size : 400px X
                800px | Max 2MB.
              </p>
              <div className="profileImgUpload text-center mt-3">
                {img ? (
                  <img
                    src={URL.createObjectURL(img)}
                    alt="Prilfe Img Upload"
                    className="notificationimg"
                  />
                ) : (
                  <img
                    src={coupanimg}
                    alt="Prilfe Img Upload"
                    className="notificationimg"
                  />
                )}
                <input
                  type="file"
                  ref={inputRef}
                  onChange={handleImgChange}
                  className="inputImg"
                />
                <div className="select_img-btn mt-4">
                  <button className="btn btn-primary" onClick={handleImgClick}>
                    Select an image
                  </button>
                </div>
              </div>
              <div className="col-12 justify-content-center">
                <div className="col-12 mt-4">
                  <label className="form-check-label" for="flexSwitchChecked">
                    User Type
                  </label>
                  <select
                    className="form-select form-select-sm form-select-solid select2-hidden-accessible"
                    name="discount_for"
                  >
                    <option
                      value="1"
                      selected=""
                      data-select2-id="select2-data-2-2iax"
                    >
                      All user
                    </option>
                    <option value="2">Individual Users</option>
                    <option value="3">Business Users</option>
                  </select>
                </div>
                <div className="col-12 mt-4">
                  <label className="form-check-label" for="flexSelectUser">
                    Users
                  </label>
                  <SearchableDropdown />
                </div>

                <div className="form-group mt-3">
                  <label className="form-check-label" for="flexSwitchChecked">
                    Coupon Details
                  </label>
                  <textarea
                    className="form-control rounded-0 "
                    id="exampleFormControlTextarea1"
                    rows="4"
                    placeholder="Enter Details..."
                    name="coupon_details"
                    required=""
                  ></textarea>
                </div>
                {/* <div className="form-group mt-5">
                                    <label className="form-check-label" for="flexSwitchChecked">
                                        Coupon Details (عربي)
                                    </label>
                                    <textarea className="form-control rounded-0  arabic_text-style" id="exampleFormControlTextarea1" rows="4" placeholder="تفاصيل القسيمة..." name="coupon_details_arabic" required=""></textarea>
                                </div> */}
                <div className="row mt-4">
                  <div className="col-6">
                    <label
                      className="form-check-label required"
                      for="flexSwitchChecked"
                    >
                      Discount Type
                    </label>
                    <select
                      className="form-select form-select-sm form-select-solid "
                      data-control="select2"
                      data-placeholder=" "
                      data-allow-clear="true"
                      data-minimum-results-for-search="Infinity"
                      name="discount_for"
                      data-select2-id="select2-data-13-6cip"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option value="1" data-select2-id="select2-data-15-m1en">
                        Percentage
                      </option>
                      <option value="2">Fixed price</option>
                    </select>
                  </div>
                  <div className="col-6 ">
                    <div className="mt-4">
                      <input
                        type="number"
                        className=" form-control form-control-solid"
                        name="couponrate"
                        placeholder="Rate"
                        min="0"
                      />
                    </div>
                  </div>
                  <div className="col-6 mt-2">
                    <label className="form-check-label" for="flexSwitchChecked">
                      Discount if for
                    </label>
                    <select
                      className="form-select form-select-sm form-select-solid "
                      name="discount_for"
                    >
                      <option value="membership">Membership</option>
                      <option value="contract">Contract</option>
                      <option value="user">User</option>
                      <option value="all">All</option>
                    </select>
                  </div>
                </div>
                <div className="form-check my-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked="checked"
                  />
                  <label className="form-check-label">
                    Send Alert to all existing users
                  </label>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                  <button type="reset" className="btn btn-danger ms-2">
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Coupans;
