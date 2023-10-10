import React from "react";
import SideNav from "./common Layouts/SideNav";

const EmailTemplate = () => {
  return (
    <>
      <SideNav />
      <div className="main-wrapper">
        <div className="container">
          <div className="page-title">
            <h1 className="page-heading mb-0">Email Templates</h1>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="searchBar">
                <input
                  type="search"
                  className="searchInput w-25"
                  placeholder="Search"
                />
              </div>
              <div className="table-responsive pt-3">
                <table className="contact_listing_table table align-middle gs-0 gy-3 table-striped">
                  {/* {/ Table headers /} */}
                  <tr className="fw-bold text-muted">
                    <th className="min-w-100px">Email Code</th>
                    <th className="min-w-100px">Email Subject (English)</th>
                    <th className="min-w-180px">Email Subject (عربي)</th>
                    <th className="min-w-120px">Status</th>
                    <th className="min-w-120px">Edit</th>
                  </tr>
                  <tbody>
                    <tr>
                      <td>Hello</td>
                      <td>Hello</td>
                      <td>مرحبًا</td>
                      <td>Hello</td>
                      <td>Hello</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailTemplate;
