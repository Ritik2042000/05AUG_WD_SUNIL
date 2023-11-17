import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { MdEdit } from "react-icons/md";
import { Offcanvas, Form, Button, Spinner } from "react-bootstrap";

const Lables = () => {
  const [loading, setLoading] = useState(true);

  // Offcanvas for DataTable Action
  const [labelActionShow, setLabelActionShow] = useState(false);

  const handleLabelActionClose = () => setLabelActionShow(false);
  const handleLabelActionShow = () => setLabelActionShow(true);

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
      name: "LABEL (ENGLISH)",
      selector: (row) => row.label,
      sortable: true,
      width: "350px",
    },
    {
      name: "LABEL (عربي)",
      selector: (row) => row.label_arabic,
      sortable: true,
      width: "350px",
    },
    {
      name: "ACTION",
      cell: (row) => (
        <MdEdit className="edit-icon" onClick={handleLabelActionShow} />
      ),
      sortable: true,
      width: "100px",
    },
  ];

  const data = [
    {
      id: 1,
      label: "Sign here",
      label_arabic: "عربي",
    },
    {
      id: 2,
      label: "Back to Dashboard",
      label_arabic: "عربي",
    },
    {
      id: 3,
      label: "Sign here",
      label_arabic: "عربي",
    },
    {
      id: 4,
      label: "Back to Dashboard",
      label_arabic: "عربي",
    },
    {
      id: 5,
      label: "Sign here",
      label_arabic: "عربي",
    },
    {
      id: 6,
      label: "Back to Dashboard",
      label_arabic: "عربي",
    },
    {
      id: 7,
      label: "Sign here",
      label_arabic: "عربي",
    },
    {
      id: 8,
      label: "Back to Dashboard",
      label_arabic: "عربي",
    },
    {
      id: 9,
      label: "Sign here",
      label_arabic: "عربي",
    },
    {
      id: 10,
      label: "Back to Dashboard",
      label_arabic: "عربي",
    },
  ];

  // Filtere data based on user input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  // filter function
  const filteredData = data.filter((row) =>
    row.label.toLowerCase().includes(search.toLowerCase())
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
            <h1 className="page-heading mb-0">Lables</h1>
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

      {/* Label Edit OffCanvas   */}
      <Offcanvas
        show={labelActionShow}
        onHide={handleLabelActionClose}
        placement="end"
        // scroll={true}
      >
        <Offcanvas.Body className="mt-3 px-0">
          <Offcanvas.Header closeButton className="px-0">
            <Offcanvas.Title className="fw-bold">Update Label</Offcanvas.Title>
          </Offcanvas.Header>
          <hr />
          <Form>
            <Form.Group className="mb-10" controlId="formBasicName">
              <Form.Label>Label (ENGLISH)</Form.Label>
              <textarea
                className="w-100 searchInput"
                id="label_english"
                name=""
                rows="8"
                placeholder="Label (English)"
                required=""
              />
            </Form.Group>

            <Form.Group className="mb-10" controlId="formBasicPhone">
              <Form.Label>Label (عربي)</Form.Label>
              <textarea
                className="w-100 searchInput text-end"
                id="label_arabic"
                name=""
                rows="8"
                placeholder="Label (عربي)"
                required=""
              />
            </Form.Group>
            <div className="pt-3 text-center">
              <Button variant="primary" type="button">
                Update
              </Button>
            </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Lables;
