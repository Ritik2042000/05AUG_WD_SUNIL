import React from "react";
import SideNav from "./common Layouts/SideNav";

const Templates = () => {
  return (
    <>
      <SideNav />
      <div className="main-wrapper">
        <div className="container">
          <div className="page-title d-flex justify-content-between align-items-center">
            <h1 className="page-heading mb-0">Templates</h1>
            <div className="btn btn-primary">Create Template</div>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="searchBar">
                    <input
                      type="search"
                      name="searchBar"
                      className="searchInput w-100"
                    />
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col">
                  <h6>Card Image</h6>
                </div>
                <div className="col">
                  <h6>Card Image</h6>
                </div>
                <div className="col">
                  <h6>Card Image</h6>
                </div>
                <div className="col">
                  <h6>Card Image</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Templates;
