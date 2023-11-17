import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { MdEdit } from "react-icons/md";
import { Offcanvas, Spinner } from "react-bootstrap";
import { AiOutlineStop } from "react-icons/ai";
import SearchableDropdownForRoles from "./common Layouts/SearchableDropdownForRoles";

const SuperAdminuser = () => {
  const [loading, setLoading] = useState(true);

  // Offcanvas for DataTable Action
  const [adminActionShow, SetAdminActionShow] = useState(false);

  const handleAdminActionClose = () => SetAdminActionShow(false);
  const handleAdminActionShow = () => SetAdminActionShow(true);

  // Offcanvas for Add New user
  const [addUserShow, setAddUserShow] = useState(false);

  const handleAddUserClose = () => setAddUserShow(false);
  const handleAddUserShow = () => setAddUserShow(true);

  // State for managing the filter text
  const [search, setSearch] = useState("");

  const columns = [
    {
      name: "SR. NO",
      selector: (row) => row.id,
      sortable: true,
      width: "120px",
    },
    {
      name: "USER NAME",
      selector: (row) => row.user_name,
      sortable: true,
      width: "200px",
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
      sortable: true,
      width: "250px",
    },
    {
      name: "LAST LOGIN",
      selector: (row) => row.last_login,
      sortable: true,
      width: "200px",
    },
    {
      name: "ACCOUNT STATUS",
      cell: (row) => <AiOutlineStop className="stop-icon" />,
      sortable: true,
      width: "200px",
    },
    {
      name: "ACTION",
      cell: (row) => (
        <MdEdit className="edit-icon" onClick={handleAdminActionShow} />
      ),
      sortable: true,
      width: "100px",
    },
  ];

  const data = [
    {
      id: 1,
      user_name: "aijurist Admin",
      email: "admin@aijurist.com",
      last_login: "31-07-2023 | 14:30",
    },
    {
      id: 2,
      user_name: "aijurist Admin",
      email: "admin@aijurist.com",
      last_login: "31-07-2023 | 14:30",
    },
    {
      id: 3,
      user_name: "aijurist Admin",
      email: "admin@aijurist.com",
      last_login: "31-07-2023 | 14:30",
    },
    {
      id: 4,
      user_name: "aijurist Admin",
      email: "admin@aijurist.com",
      last_login: "31-07-2023 | 14:30",
    },
    {
      id: 5,
      user_name: "aijurist Admin",
      email: "admin@aijurist.com",
      last_login: "31-07-2023 | 14:30",
    },
    {
      id: 6,
      user_name: "aijurist Admin",
      email: "admin@aijurist.com",
      last_login: "31-07-2023 | 14:30",
    },
    {
      id: 7,
      user_name: "aijurist Admin",
      email: "admin@aijurist.com",
      last_login: "31-07-2023 | 14:30",
    },
    {
      id: 8,
      user_name: "aijurist Admin",
      email: "admin@aijurist.com",
      last_login: "31-07-2023 | 14:30",
    },
    {
      id: 9,
      user_name: "aijurist Admin",
      email: "admin@aijurist.com",
      last_login: "31-07-2023 | 14:30",
    },
    {
      id: 10,
      user_name: "aijurist Admin",
      email: "admin@aijurist.com",
      last_login: "31-07-2023 | 14:30",
    },
  ];

  // Filtere data based on user input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  // filter function
  const filteredData = data.filter((row) =>
    row.user_name.toLowerCase().includes(search.toLowerCase())
  );

  // Check if data has loaded
  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    }
  }, [data.length]);

  // DataTable options
  const tableOptions = {
    paginationPerPage: 5,
    paginationRowsPerPageOptions: [5, 10, 25, 50, 75, 100],
    pagination: true,
    striped: true,
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <div className="page-title">
            <h1 className="page-heading mb-0">Super Admin Users</h1>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="super-admin-table">
                <div className="d-flex justify-content-between align-items-center">
                  <input
                    type="search"
                    className="searchInput form-control"
                    placeholder="Search"
                    value={search}
                    onChange={handleSearch}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={handleAddUserShow}
                  >
                    Add New
                  </button>
                </div>
                {loading ? (
                  <div className="text-center my-5">
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </div>
                ) : (
                  <DataTable
                    className="pt-3"
                    columns={columns}
                    data={filteredData}
                    {...tableOptions}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Super Admin Edit OffCanvas   */}
      <Offcanvas
        show={adminActionShow}
        onHide={handleAdminActionClose}
        placement="end"
        // scroll={true}
      >
        <Offcanvas.Body>
          <Offcanvas.Header closeButton className="px-0">
            <Offcanvas.Title className="fw-bold">Edit User</Offcanvas.Title>
          </Offcanvas.Header>
          <hr />
          <form>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control form-control-solid"
                  placeholder="Edit User Name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact Number</label>
                <input
                  type="text"
                  maxLength="10"
                  className="form-control form-control-solid"
                  placeholder="Edit Contact Number "
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control form-control-solid validate-email-update"
                  placeholder="Edit The Email"
                />
              </div>
              {/* <div className="form-check">
                <input
                  className="form-check-input updateselectall"
                  type="checkbox"
                />
                <label className="form-check-label">
                  <strong>Select All</strong>
                </label>
              </div>
              <div className="form-check my-3">
                <input
                  className="form-check-input updateallcheck"
                  type="checkbox"
                />
                <label className="form-check-label">
                  Able to create template
                </label>
              </div>
              <div className="form-check my-3">
                <input
                  className="form-check-input updateallcheck"
                  type="checkbox"
                />
                <label className="form-check-label">
                  Able to edit template
                </label>
              </div>
              <div className="form-check my-3">
                <input
                  className="form-check-input updateallcheck"
                  type="checkbox"
                />
                <label className="form-check-label">
                  Able to assign custom package to users
                </label>
              </div>
              <div className="form-check my-3">
                <input
                  className="form-check-input updateallcheck"
                  type="checkbox"
                />
                <label className="form-check-label">
                  Able to activate and block business users
                </label>
              </div>
              <div className="form-check my-3">
                <input
                  className="form-check-input updateallcheck"
                  type="checkbox"
                />
                <label className="form-check-label">
                  Able to edit the label
                </label>
              </div>
              <div className="form-check my-3">
                <input
                  className="form-check-input updateallcheck"
                  type="checkbox"
                />
                <label className="form-check-label">
                  Able to create coupons
                </label>
              </div>
              <div className="form-check my-3">
                <input
                  className="form-check-input updateallcheck"
                  type="checkbox"
                />
                <label className="form-check-label">Able to edit coupons</label>
              </div>
              <div className="form-check my-3">
                <input
                  className="form-check-input updateallcheck"
                  type="checkbox"
                />
                <label className="form-check-label">
                  Able to create categories
                </label>
              </div>
              <div className="form-check my-3">
                <input
                  className="form-check-input updateallcheck"
                  type="checkbox"
                />
                <label className="form-check-label">
                  Able to edit categories
                </label>
              </div>
              <div className="form-check my-3">
                <input
                  className="form-check-input updateallcheck"
                  type="checkbox"
                />
                <label className="form-check-label">Able to Invite users</label>
              </div>
              <div className="form-check my-3">
                <input
                  className="form-check-input updateallcheck"
                  type="checkbox"
                />
                <label className="form-check-label">
                  Able to Invite business
                </label>
              </div>
              <div className="form-check my-3">
                <input
                  className="form-check-input updateallcheck"
                  type="checkbox"
                />
                <label className="form-check-label">
                  Able to download reports
                </label>
              </div> */}

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Roles
                </label>
                <SearchableDropdownForRoles />
              </div>
              <h5 className="mt-4">Login Credentials</h5>
              <div className="form-check mt-1 mb-20">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  defaultChecked="checked"
                />
                <label className="form-check-label">
                  Generate automatically and send contact person email
                </label>
              </div>
              <div className="pt-3 text-center">
                <button className="btn btn-primary" type="button">
                  Update
                </button>
              </div>
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Add new Admin OffCanvas   */}
      <Offcanvas
        show={addUserShow}
        onHide={handleAddUserClose}
        placement="end"
        // scroll={true}
      >
        <Offcanvas.Body>
          <Offcanvas.Header closeButton className="px-0">
            <Offcanvas.Title className="fw-bold">Add User</Offcanvas.Title>
          </Offcanvas.Header>
          <hr />
          <form>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control form-control-solid"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact Number</label>
                <input
                  type="text"
                  maxLength="10"
                  className="form-control form-control-solid"
                  placeholder="Contact Number "
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control form-control-solid validate-email-update"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Roles
                </label>
                <SearchableDropdownForRoles />
              </div>
              <h5 className="mt-4">Login Credentials</h5>
              <div className="form-check mt-1 mb-20">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  defaultChecked="checked"
                />
                <label className="form-check-label">
                  Generate automatically and send contact person email
                </label>
              </div>
              <div className="pt-3 text-center">
                <button className="btn btn-primary" type="button">
                  Create
                </button>
                <button className="btn btn-primary mx-2" type="button">
                  Create & send
                </button>
                <button className="btn btn-danger" type="button">
                  Clear
                </button>
              </div>
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SuperAdminuser;
