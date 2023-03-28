import React from "react";
import "./AdminNav.css";

const AdminNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-blueX">
        <div className="container">
          <button className="p-1 ps-2 btnNav">
            <i className="fas fa-bars"></i>
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <form className="d-flex input-group widthForm">
                  <input
                    type="search"
                    className="form-control rounded formInput widthInput"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <span className="input-group-text border-0 btnSrcForm" id="search-addon">
                    <i className="fas fa-search"></i>
                  </span>
                </form>
              </li>
            </ul>

            <div className="d-flex align-items-center buttonDiv">
              <button type="button" className="btn btn-link p-1 me-3">
                <i className="fas fa-grip-horizontal fa-lg"></i>
              </button>
              <button type="button" className="btn btn-link p-1 me-3">
              <i className="fas fa-bell fa-lg"></i>
              </button>
              <button type="button" className="btn btn-link p-1 me-3">
              <i className="fas fa-user-circle fa-2x"></i>
              </button>
              <button type="button" className="btn btn-link p-1 me-3">
              <i className="fas fa-ellipsis-v fa-lg"></i>
              </button>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNav;
