import React from "react";

function Application(props) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="settings-card-content">
            <div className="settings-sub-header d-flex flex-wrap justify-content-between align-items-center mb-3">
              <h2 className="settings-sub-heading text-primary mb-0">
                Application
              </h2>
              <button className="btn btn-primary">Update</button>
            </div>

            <h6>General Mobile Configuration</h6>

            <div className="row my-3">
              <div className="col-12 col-md-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Production Server API-End Point
                </label>
                <input
                  type="text"
                  name=""
                  className="form-control form-control-solid"
                  defaultValue="https://api.aijurist.com"
                />
              </div>
              <div className="col-12 col-md-6 pt-3 pt-md-0">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Pre-Production Server API-End Point
                </label>
                <input
                  type="text"
                  name=""
                  className="form-control form-control-solid"
                  defaultValue="https://api.stage.com"
                />
              </div>
            </div>

            <div className="row my-3">
              <div className="col-12 col-md-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Test Server API-End Point
                </label>
                <input
                  type="text"
                  name=""
                  className="form-control form-control-solid"
                  defaultValue="https://api.test.com"
                />
              </div>
            </div>

            <div className="separator border-3 my-sm-5 my-4"></div>

            <div className="row">
              <div className="col-12 col-md-6 pe-md-5">
                <h5 className="text-primary">iPhone Mobile Application </h5>
                <label
                  className="form-check-label my-3"
                  htmlFor="flexSwitchChecked"
                >
                  Application Update
                </label>

                <select
                  name="app_update"
                  className="form-select form-select-md form-select-solid"
                  // defaultValue="Active"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>

                <h6 className="my-3">Update Mandatory</h6>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="iphone-radio-btn"
                    value="YES"
                    id="flexRadioDefault1"
                    defaultChecked="checked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>

                <div className="form-check mt-2 mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="iphone-radio-btn"
                    value="NO"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    No
                  </label>
                </div>

                <div className="row align-items-baseline">
                  <div className="col-12 col-sm-6">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      iPhone Current Version
                    </label>
                    <input
                      type="text"
                      name=""
                      className="form-control form-control-solid"
                      placeholder="23.0.4"
                      defaultValue="2.0"
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      iPhone New Version
                    </label>
                    <input
                      type="text"
                      name=""
                      className="form-control form-control-solid"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 mt-5 mt-md-0">
                <h5 className="text-primary">Android Mobile Application </h5>
                <label
                  className="form-check-label my-3"
                  htmlFor="flexSwitchChecked"
                >
                  Application Update
                </label>

                <select
                  name=""
                  className="form-select form-select-md form-select-solid"
                  defaultValue="Active"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                <h6 className="my-3">Update Mandatory</h6>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="android-radio-btn"
                    value="YES"
                    id="flexRadioDefault1"
                    defaultChecked="checked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check mt-2 mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="android-radio-btn"
                    value="NO"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    No
                  </label>
                </div>
                <div className="row align-items-baseline">
                  <div className="col-12 col-sm-6">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Android Current Version
                    </label>
                    <input
                      type="text"
                      name=""
                      className="form-control form-control-solid"
                      placeholder="21.0.4"
                      defaultValue="2.0"
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Android New Version
                    </label>
                    <input
                      type="text"
                      name=""
                      className="form-control form-control-solid"
                      placeholder=""
                    />
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

export default Application;
