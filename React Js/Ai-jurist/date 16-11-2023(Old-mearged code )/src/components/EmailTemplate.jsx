import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { MdEdit } from "react-icons/md";
import { Spinner } from "react-bootstrap";
import { FaCheck } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const EmailTemplate = () => {
  // state for loading
  const [loading, setLoading] = useState(true);

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
      name: "SUBJECT (EN)",
      selector: (row) => row.email,
      sortable: true,
    },
    // {
    //   name: "EMAIL SUBJECT (عربي)",
    //   selector: (row) => row.email_arabic,
    //   sortable: true,
    // },
    {
      name: "STATUS",
      selector: (row) => <FaCheck className="edit-icon text-success" />,
      sortable: true,
    },
    {
      name: "EDIT",
      cell: (row) => (
        <NavLink to="/emailtemplate/editemailtemplate">
          <MdEdit className="edit-icon" />
        </NavLink>
      ),
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      email: "test@test.com",
      // email_arabic: "عربي",
    },
    {
      id: 2,
      email: "test@test.com",
      // email_arabic: "عربي",
    },
    {
      id: 3,
      email: "test@test.com",
      // email_arabic: "عربي",
    },
    {
      id: 4,
      email: "test@test.com",
      // email_arabic: "عربي",
    },
    {
      id: 5,
      email: "test@test.com",
      // email_arabic: "عربي",
    },
    {
      id: 6,
      email: "test@test.com",
      // email_arabic: "عربي",
    },
    {
      id: 7,
      email: "test@test.com",
      // email_arabic: "عربي",
    },
    {
      id: 8,
      email: "test@test.com",
      // email_arabic: "عربي",
    },
    {
      id: 9,
      email: "test@test.com",
      // email_arabic: "عربي",
    },
    {
      id: 10,
      email: "test@test.com",
      // email_arabic: "عربي",
    },
  ];

  // Filtere data based on user input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  // filter function
  const filteredData = data.filter((row) =>
    row.email.toLowerCase().includes(search.toLowerCase())
  );

  // Check if data has loaded
  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    }
  }, [data.length]);

  // DataTable options
  const tableOptions = {
    paginationPerPage: 10,
    paginationRowsPerPageOptions: [5, 10, 25, 50, 75, 100],
    pagination: true,
    striped: true,
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <div className="page-title">
            <h1 className="page-heading mb-0">Email Templates</h1>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="rdt-subHeader">
                <input
                  type="search"
                  className="form-control w-100"
                  placeholder="Search"
                  value={search}
                  onChange={handleSearch}
                />
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
    </>
  );
};

export default EmailTemplate;
