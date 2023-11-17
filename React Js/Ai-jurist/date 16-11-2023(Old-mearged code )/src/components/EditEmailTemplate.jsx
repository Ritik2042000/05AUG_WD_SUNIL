import React from "react";
import { NavLink } from "react-router-dom";
import CkEditor from "./common Layouts/CkEditor";

function EditEmailTemplate(props) {
  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <div className="page-title">
            <h1 className="page-heading mb-0">Edit Email Template</h1>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="settings-card-content">
                <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
                  <h5 className="mb-0">Template Information</h5>
                  <div className="d-flex justify-content-end mt-2 mt-sm-0">
                    <button type="submit" className="btn btn-primary">
                      Update
                    </button>
                    <NavLink to="/emailtemplate">
                      <button
                        type="button"
                        className="text-white btn btn-danger ms-2"
                      >
                        Cancel
                      </button>
                    </NavLink>
                  </div>
                </div>

                <div className="row my-2">
                  <div className="col">
                    {/* <div className="mb-3">
                      <label className="form-label mt-3">
                        <div className="d-flex justify-content-between">
                          <h6 className="required">Email Code</h6>
                        </div>
                      </label>
                      <input
                        className="form-control form-control-solid "
                        type="text"
                        name="email_code"
                        placeholder="Email Code"
                        maxLength="250"
                        required=""
                      />
                    </div> */}
                    <div className="mb-3 ">
                      <label className="form-label mt-3">
                        <div className="d-flex justify-content-between">
                          <h6 className="required">Subject (EN)</h6>
                        </div>
                      </label>
                      <input
                        className="form-control form-control-lg form-control-solid"
                        type="text"
                        name="email_subject_english"
                        placeholder="Email Subject English"
                        required=""
                        maxLength="250"
                      />
                    </div>
                    {/* <div className="mb-3 ">
                      <label className="form-label mt-3">
                        <div className="d-flex justify-content-between">
                          <h6 className="required">Email Subject (عربي)</h6>
                        </div>
                      </label>
                      <input
                        className="form-control form-control-lg form-control-solid text-end"
                        type="text"
                        name="email_subject_arabic"
                        placeholder="أدخل عنوان الفئة"
                        required=""
                        maxLength="250"
                      />
                    </div> */}
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-sm-12">
                    <div>
                      <h5>Description (ENGLISH)</h5>
                      <div className="form-group">
                        {/* <textarea
                          className="w-100 searchInput"
                          id="description_english"
                          name=""
                          rows="15"
                          placeholder="Enter Description"
                          required=""
                        /> */}
                        <CkEditor />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 mt-3 mt-lg-4">
                    <div>
                      <h5 className="text-end">Description (عربي)</h5>
                      <div className="form-group">
                        {/* <textarea
                          className="w-100 searchInput text-end"
                          id="description_arabic"
                          name=""
                          rows="15"
                          placeholder="أدخل الوصف"
                          required=""
                        /> */}
                        <CkEditor />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditEmailTemplate;
