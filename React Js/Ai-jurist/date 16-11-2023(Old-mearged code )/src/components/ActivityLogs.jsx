import React, { useEffect, useState } from "react";

import DataTable from "react-data-table-component";
import { Spinner } from "react-bootstrap";

const ActivityLogs = () => {
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
      name: "NAME",
      selector: (row) => row.name,
      sortable: true,
      width: "170px",
    },
    {
      name: "BROWSER",
      selector: (row) => row.browser,
      sortable: true,
      width: "150px",
    },
    {
      name: "IP ADDRESS",
      selector: (row) => row.ip_address,
      sortable: true,
      width: "150px",
    },
    {
      name: "LATITUDE",
      selector: (row) => row.latitude,
      sortable: true,
      width: "150px",
    },
    {
      name: "LONGITUDE",
      selector: (row) => row.longitude,
      sortable: true,
      width: "150px",
    },
    {
      name: "ACTIVITY TYPE",
      selector: (row) => row.activity_type,
      sortable: true,
      width: "170px",
    },
    {
      name: "CREATED AT",
      selector: (row) => row.created_at,
      sortable: true,
      width: "200px",
    },
  ];

  const data = [
    {
      id: 1,
      name: "aijurist admin",
      browser: "Chrome",
      ip_address: "172.26.15.149",
      latitude: "53.3331",
      longitude: "-6.2489",
      activity_type: "Login",
      created_at: "30-10-2023 | 07:48",
    },
    {
      id: 2,
      name: "aijurist admin",
      browser: "Chrome",
      ip_address: "172.26.15.149",
      latitude: "53.3331",
      longitude: "-6.2489",
      activity_type: "Login",
      created_at: "30-10-2023 | 07:48",
    },
    {
      id: 3,
      name: "aijurist admin",
      browser: "Chrome",
      ip_address: "172.26.15.149",
      latitude: "53.3331",
      longitude: "-6.2489",
      activity_type: "Login",
      created_at: "30-10-2023 | 07:48",
    },
    {
      id: 4,
      name: "aijurist admin",
      browser: "Chrome",
      ip_address: "172.26.15.149",
      latitude: "53.3331",
      longitude: "-6.2489",
      activity_type: "Login",
      created_at: "30-10-2023 | 07:48",
    },
    {
      id: 5,
      name: "aijurist admin",
      browser: "Chrome",
      ip_address: "172.26.15.149",
      latitude: "53.3331",
      longitude: "-6.2489",
      activity_type: "Login",
      created_at: "30-10-2023 | 07:48",
    },
    {
      id: 6,
      name: "aijurist admin",
      browser: "Chrome",
      ip_address: "172.26.15.149",
      latitude: "53.3331",
      longitude: "-6.2489",
      activity_type: "Login",
      created_at: "30-10-2023 | 07:48",
    },
    {
      id: 7,
      name: "aijurist admin",
      browser: "Chrome",
      ip_address: "172.26.15.149",
      latitude: "53.3331",
      longitude: "-6.2489",
      activity_type: "Login",
      created_at: "30-10-2023 | 07:48",
    },
    {
      id: 8,
      name: "aijurist admin",
      browser: "Chrome",
      ip_address: "172.26.15.149",
      latitude: "53.3331",
      longitude: "-6.2489",
      activity_type: "Login",
      created_at: "30-10-2023 | 07:48",
    },
    {
      id: 9,
      name: "aijurist admin",
      browser: "Chrome",
      ip_address: "172.26.15.149",
      latitude: "53.3331",
      longitude: "-6.2489",
      activity_type: "Login",
      created_at: "30-10-2023 | 07:48",
    },
    {
      id: 10,
      name: "aijurist admin",
      browser: "Chrome",
      ip_address: "172.26.15.149",
      latitude: "53.3331",
      longitude: "-6.2489",
      activity_type: "Login",
      created_at: "30-10-2023 | 07:48",
    },
  ];

  // Filtere data based on user input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  // filter function
  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase())
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
            <h1 className="page-heading mb-0">Activity Logs</h1>
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

export default ActivityLogs;
