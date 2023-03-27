import React from "react";
import "./AdminNav.css";

const AdminNav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-blueX">
        <div class="container">
          <button className="p-1 ps-2 btnNav">
            <i class="fas fa-bars"></i>
          </button>

          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <form class="d-flex input-group widthForm">
                  <input
                    type="search"
                    class="form-control rounded formInput widthInput"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <span class="input-group-text border-0 btnSrcForm" id="search-addon">
                    <i class="fas fa-search"></i>
                  </span>
                </form>
              </li>
            </ul>

            <div class="d-flex align-items-center buttonDiv">
              <button type="button" class="btn btn-link p-1 me-3">
                <i class="fas fa-grip-horizontal fa-lg"></i>
              </button>
              <button type="button" class="btn btn-link p-1 me-3">
              <i class="fas fa-bell fa-lg"></i>
              </button>
              <button type="button" class="btn btn-link p-1 me-3">
              <i class="fas fa-user-circle fa-2x"></i>
              </button>
              <button type="button" class="btn btn-link p-1 me-3">
              <i class="fas fa-ellipsis-v fa-lg"></i>
              </button>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNav;
