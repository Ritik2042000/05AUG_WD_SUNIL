import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { data } from "./UserPageLayouts/CommonDataOfUserTable";
import { useForm } from "react-hook-form";

const User = () => {
  //table data
  const IndividualUserData = data.IndividualUserData;
  const BussinessUserData = data.BussinessUserData;
  const BussinessAdminData = data.BussinessAdminData;
  const InvitedUserData = data.InvitedUserData;
  const InvitedBusinessData = data.InvitedBusinessData;

  // for tabs
  const tabs = [
    "Individual User",
    "Business User",
    "Business Admin",
    "Invited User",
    "Invited Business",
  ];
  // fot tabs
  const [activeTab, setActiveTab] = useState(tabs[0]);
  // for alphabet
  const [selectedAlphabet, setSelectedAlphabet] = useState("");

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

  // for search
  const [searchValue, setSearchValue] = useState("");

  // search function to get input value
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  //filter functions for input and alphabet

  const filterData = (data, columnName) => {
    return data.filter((item) => {
      // Check if no alphabet is selected
      if (selectedAlphabet === "") {
        return item[columnName]
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      } else {
        return (
          item[columnName].toLowerCase().includes(searchValue.toLowerCase()) &&
          item[columnName][0].toLowerCase() === selectedAlphabet.toLowerCase()
        );
      }
    });
  };

  // function for alphabet click to which alphabet click
  const handleAlphabetClick = (letter) => {
    setSelectedAlphabet(letter === selectedAlphabet ? "" : letter);
  };
  const alphabetLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // react from hook for validation for Invite User
  const {
    register: registerForm1,
    handleSubmit: handleSubmitForm1,
    formState: { errors: errorsForm1 },
    reset: resetForm1,
  } = useForm();
  const onSubmitForInviteUser = (data) => {
    // console.log('InviteUser', data);
    resetForm1();
  };
  // react from hook for validation for Invite Business
  const {
    register: registerForm2,
    handleSubmit: handleSubmitForm2,
    formState: { errors: errorsForm2 },
    reset: resetForm2,
  } = useForm();

  const onSubmitForInviteBusiness = (data) => {
    // console.log('InviteBusiness',data);
    resetForm2();
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <div className="page-title">
            <h1 className="page-heading mb-0">User</h1>
          </div>
          <div className="user_blocks-wrapper d-flex flex-wrap">
            <div className="bg-white  rounded  py-3 px-4 mb-3 user_blocks-fs">
              <div className="d-flex align-items-center">
                <div className=" fw-bold counted">Total Users</div>
              </div>
              <div className=" ">436</div>
            </div>

            <div className="bg-white  rounded  py-3 px-4 mb-3 user_blocks">
              <div className="d-flex align-items-center">
                <div className=" fw-bold counted">Individual Users</div>
              </div>
              <div className=" ">243</div>
            </div>
            <div className="bg-white rounded py-3 px-4 mb-3 user_blocks">
              <div className="d-flex align-items-center">
                <div className=" fw-bold counted">Business Users</div>
              </div>
              <div className=" ">87</div>
            </div>
            <div className="bg-white rounded py-3 px-4 mb-3 user_blocks-ls">
              <div className="d-flex align-items-center">
                <div className=" fw-bold counted">Business Admin</div>
              </div>
              <div className=" ">106</div>
            </div>
          </div>
          <div className="card  mt-5">
            <div className="card-body d-flex row py-3 flex-wrap align-items-center align-items-md-baseline">
              <div className="align-items-center col-xl-9 col-12 cursor-pointer ">
                <div>
                  <NavLink // Add a "Show All" button
                    onClick={() => setSelectedAlphabet("")}
                    className={`ps-1 pe-1 ${
                      selectedAlphabet === "" ? "selected" : ""
                    }`}
                    // activeclassname="active"
                  >
                    All
                  </NavLink>
                  {
                    /* Render alphabet buttons */
                    alphabetLetters.map((letter) => (
                      <NavLink
                        key={letter}
                        onClick={() => handleAlphabetClick(letter)}
                        className={`ps-2 pe-2  ${
                          selectedAlphabet === letter ? "selected" : ""
                        }`}
                        // activeclassname="active"
                      >
                        {letter}
                      </NavLink>
                    ))
                  }
                </div>
              </div>
              <div className="col-xl-3 col-12 d-sm-flex justify-content-xl-end">
                <form
                  data-kt-search-element="form"
                  className=" me-4 mb-lg-0 position-relative"
                >
                  <input
                    type="text"
                    className="form-control form-control-solid   w-100 "
                    name="search"
                    placeholder="Search"
                    value={searchValue}
                    onChange={handleSearchChange}
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between my-5 card ">
            <div className="card-body d-flex w-100 align-items-center justify-content-center flex-wrap">
              <div className="col-12 col-sm-6 col-md-9">
                <div className="user_table-links d-flex justify-content-around justify-content-xl-between flex-wrap ">
                  {tabs.map((tab) => (
                    <div
                      key={tab}
                      className={`nav-link ${
                        activeTab === tab ? "active-tab" : ""
                      }`}
                    >
                      <li
                        className="active-tabs  "
                        onClick={() => handleTabClick(tab)}
                      >
                        {tab}
                      </li>
                    </div>
                  ))}
                </div>
              </div>
              <div className="left_sidebtn col-xl-3 col-md-3 ">
                <div className="nav border-transparent fw-bold text-center d-flex justify-content-xl-end justify-content-center flex-wrap">
                  <div className="nav-item mt-1 mt-xl-0">
                    <button
                      className="btn btn-primary"
                      onClick={handleAddShowMain}
                    >
                      Invite User
                    </button>
                  </div>
                  <div className="nav-item ms-xl-2 ms-2 mt-1 ms-sm-1 mt-md-2 mt-xl-0 mt-lg-1">
                    <button className="btn btn-primary" onClick={handleAddShow}>
                      Invite Business
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Individual User table */}
          <div className="card">
            <div
              className={`${activeTab === tabs[0] ? "fade-in" : "fade-out"}`}
            >
              <DataTable
                data={filterData(IndividualUserData.data, "name")}
                columns={IndividualUserData.columns}
                pagination
                striped
              />
            </div>
          </div>
          {/* Business User table */}
          <div className="card">
            <div
              className={`${activeTab === tabs[1] ? "fade-in" : "fade-out"}`}
            >
              {/* <BusinessUser /> */}
              <DataTable
                data={filterData(BussinessUserData.data, "name")}
                columns={BussinessUserData.columns}
                pagination
                striped
              />
            </div>
          </div>
          {/* Business Admin table*/}
          <div className="card">
            <div
              className={`${activeTab === tabs[2] ? "fade-in" : "fade-out"}`}
            >
              {/* <BusinessAdmin /> */}
              <DataTable
                data={filterData(BussinessAdminData.data, "companyname")}
                columns={BussinessAdminData.columns}
                pagination
                striped
              />
            </div>
          </div>
          {/* Invited User Table */}
          <div className="card">
            <div
              className={`${activeTab === tabs[3] ? "fade-in" : "fade-out"}`}
            >
              {/* <InvitedUser /> */}
              <DataTable
                data={filterData(InvitedUserData.data, "email")}
                columns={InvitedUserData.columns}
                pagination
                striped
              />
            </div>
          </div>
          {/* Invited Business table */}
          <div className="card">
            <div
              className={`${activeTab === tabs[4] ? "fade-in" : "fade-out"}`}
            >
              {/* <InvitedBusiness /> */}
              <DataTable
                data={filterData(InvitedBusinessData.data, "companyname")}
                columns={InvitedBusinessData.columns}
                pagination
                striped
              />
            </div>
          </div>
        </div>
      </div>

      {/* offcanvas for inviteuser */}
      <Offcanvas
        show={addShowMain}
        onHide={handlAddCloseMain}
        placement="end"
        //   scroll={true}
      >
        <Offcanvas.Body>
          <Offcanvas.Header closeButton className="p-0">
            <Offcanvas.Title className="fw-bold">Invite User</Offcanvas.Title>
          </Offcanvas.Header>
          <hr />
          <div className="model ">
            <form onSubmit={handleSubmitForm1(onSubmitForInviteUser)}>
              <div className="m">
                <label
                  for="exampleFormControlInput1"
                  className="form-label required"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-solid w-100 "
                  placeholder="Enter Your Name"
                  {...registerForm1("UserName", { required: true })}
                />
                {errorsForm1.UserName && (
                  <p className="text-danger" style={{ fontSize: "10px" }}>
                    This Filed is Required
                  </p>
                )}
              </div>
              <div className="mt-2">
                <label
                  for="exampleFormControlInput1"
                  className="form-label required"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-solid w-100"
                  placeholder="Enter Your Email"
                  required=""
                  name="EmailAddress"
                  {...registerForm1("UserEmail", { required: true })}
                />
                {errorsForm1.UserEmail && (
                  <p className="text-danger" style={{ fontSize: "10px" }}>
                    This Filed is Required
                  </p>
                )}
              </div>
              <div className="pt-3 text-center">
                <button type="submit" className="btn btn-primary ">
                  Invite
                </button>
              </div>
            </form>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* for Invite Business */}

      <Offcanvas
        show={addShow}
        onHide={handlAddClose}
        placement="end"
        //   scroll={true}
      >
        <Offcanvas.Body>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="fw-bold ">
              Invite Business
            </Offcanvas.Title>
          </Offcanvas.Header>
          <hr />
          <div className="model ps-3">
            <form onSubmit={handleSubmitForm2(onSubmitForInviteBusiness)}>
              <div className="mb-2">
                <label
                  for="exampleFormControlInput1"
                  className="form-label required"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-solid w-100 "
                  placeholder="Enter Company Name"
                  name="CompamnyName"
                  {...registerForm2("UserName", { required: true })}
                />
                {errorsForm2.UserName && (
                  <p className="text-danger" style={{ fontSize: "10px" }}>
                    This Filed is Required
                  </p>
                )}
              </div>
              <div className="mt-2">
                <label
                  for="exampleFormControlInput1"
                  className="form-label required"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-solid w-100"
                  placeholder="Enter Email"
                  required=""
                  name="EmailAddress"
                  {...registerForm2("UserEmail", { required: true })}
                />
                {errorsForm2.UserEmail && (
                  <p className="text-danger" style={{ fontSize: "10px" }}>
                    This Filed is Required
                  </p>
                )}
              </div>
              <div className="pt-3 text-center">
                <button type="submit" className="btn btn-primary">
                  Invite
                </button>
              </div>
            </form>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default User;
