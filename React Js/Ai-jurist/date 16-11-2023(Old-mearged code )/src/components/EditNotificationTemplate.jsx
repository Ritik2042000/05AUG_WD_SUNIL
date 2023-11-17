import React from "react";
import { NavLink } from "react-router-dom";
import CkEditor from "./common Layouts/CkEditor";

function EditNotificationTemplate(props) {
  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <div className="page-title">
            <h1 className="page-heading mb-0">Edit Notification Template</h1>
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
                    <NavLink to="/notificationtemplate">
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
                          <h6 className="required">Notification ID</h6>
                        </div>
                      </label>
                      <input
                        className="form-control form-control-solid "
                        type="text"
                        name="notification_id"
                        placeholder="Notification ID"
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
                        name="notification_subject_english"
                        placeholder="Notification Subject English"
                        required=""
                        maxLength="250"
                      />
                    </div>
                    {/* <div className="mb-3 ">
                      <label className="form-label mt-3">
                        <div className="d-flex justify-content-between">
                          <h6 className="required">
                            Notification Subject (عربي)
                          </h6>
                        </div>
                      </label>
                      <input
                        className="form-control form-control-lg form-control-solid text-end"
                        type="text"
                        name="notification_subject_arabic"
                        placeholder="أدخل عنوان الفئة"
                        required=""
                        maxLength="250"
                      />
                    </div> */}
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-sm-6">
                    <div>
                      <h5>Description (ENGLISH)</h5>
                      <div className="form-group">
                        {/* <textarea
                          className="w-100 searchInput"
                          id="description_english"
                          name=""
                          rows="8"
                          placeholder="Enter Description"
                          required=""
                        /> */}
                        <CkEditor />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-3 mt-sm-0">
                    <div>
                      <h5 className="text-end">Description (عربي)</h5>
                      <div className="form-group">
                        {/* <textarea
                          className="w-100 searchInput text-end"
                          id="description_arabic"
                          name=""
                          rows="8"
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

export default EditNotificationTemplate;
