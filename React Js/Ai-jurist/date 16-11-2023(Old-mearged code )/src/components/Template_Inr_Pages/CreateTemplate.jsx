import React from "react";
import { NavLink } from "react-router-dom";
import Colorpicker from "./Colorpicker";

const CreateTemplate = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <div className="page-title">
            <h1 className="page-heading mb-0">Create Template</h1>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="settings-card-content">
                <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
                  <h5 className="mb-0">Template Information</h5>
                  <div className="d-flex justify-content-end mt-2 mt-sm-0">
                    <button type="submit" className="btn btn-primary">
                      Save & Next
                    </button>
                    <NavLink to="/templates">
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
                  <div className="col-xxl-8 col-lg-12">
                    <div className="mb-3 ">
                      <label className="form-label mt-3">
                        <div className="d-flex justify-content-between">
                          <h6 className="required">
                            Template Title (ENGLISH)
                            <span className="text-danger"> *</span>
                          </h6>
                        </div>
                      </label>
                      <input
                        className="form-control form-control-solid "
                        type="text"
                        name="template_name"
                        placeholder="Enter Template Title"
                        maxLength="250"
                        required=""
                      />
                    </div>
                    <div className="mb-3 ">
                      <label className="form-label mt-3">
                        <div className="d-flex justify-content-between">
                          <h6 className="required">
                            Template Title (عربي)
                            <span className="text-danger"> *</span>
                          </h6>
                        </div>
                      </label>
                      <input
                        className="form-control form-control-lg form-control-solid text-end"
                        type="text"
                        name="template_name_arabic"
                        placeholder="أدخل عنوان الفئة"
                        required=""
                        maxLength="250"
                      />
                    </div>
                    <div className="mb-3 ">
                      <label className="form-label mt-3">
                        <div className="d-flex justify-content-between">
                          <h6 className="required">
                            Category
                            <span className="text-danger"> *</span>
                          </h6>
                        </div>
                      </label>

                      <select
                        name="app_update"
                        className="form-select form-select-md form-select-solid"
                        // defaultdefaultValue="Select a Category"
                      >
                        <option
                          defaultValue="Select a Category"
                          disabled
                          selected
                        >
                          Select a Category
                        </option>
                        <option disabled></option>
                        <option defaultValue="Availability">
                          Availability
                        </option>
                        <option defaultValue="Business">Business</option>
                        <option defaultValue="Ceat">Ceat</option>
                        <option defaultValue="Consulting">Consulting</option>
                        <option defaultValue="Education">Education</option>
                        <option defaultValue="Employment">Employment</option>
                        <option defaultValue="Healthcare">Healthcare</option>
                        <option defaultValue="House">House</option>
                        <option defaultValue="Legal">Legal</option>
                        <option defaultValue="Loans">Loans</option>
                        <option defaultValue="Manufacturing">
                          Manufacturing
                        </option>
                        <option defaultValue="Marketing">Marketing</option>
                        <option defaultValue="Real Estate">Real Estate</option>
                        <option defaultValue="Rent">Rent</option>
                        <option defaultValue="Sell">Sell</option>
                        <option defaultValue="Software">Software</option>
                        <option defaultValue="Technology">Technology</option>
                        <option defaultValue="Web Development">
                          Web Development
                        </option>
                        <option defaultValue="Test Titlea">Test Titlea</option>
                      </select>
                    </div>

                    <div className="template-avialability mt-5">
                      <h5>Template Availability</h5>
                      <div className="mt-4 d-md-flex">
                        <div className="type_membership">
                          <h6>Individual Membership</h6>
                          <div className="form-check mt-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="i_Free_Membership"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              Free Membership
                            </label>
                          </div>
                          <div className="form-check mt-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="i_Basic_Membership"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              Basic Membership
                            </label>
                          </div>
                          <div className="form-check mt-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="i_Premium_Membership"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              Premium Membership
                            </label>
                          </div>
                        </div>
                        <div className="ps-md-5 pt-3 pt-md-0">
                          <div className="type_membership">
                            <h6>Business Membership</h6>
                            <div className="form-check mt-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="b_Free_Membership"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Free Membership
                              </label>
                            </div>
                            <div className="form-check mt-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="b_Basic_Membership"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Basic Membership
                              </label>
                            </div>
                            <div className="form-check mt-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="b_Premium_Membership"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                              >
                                Premium Membership
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-4 col-lg-12 py-3 mt-4 mt-xxl-0">
                    <div className="template-color-section">
                      <h5>Choose Template Color</h5>
                      <Colorpicker />
                    </div>
                  </div>
                </div>

                <div className="row mt-xxl-5 mt-3">
                  <div className="col-sm-6">
                    <div>
                      <h5>
                        Description (ENGLISH)
                        <span className="text-danger"> *</span>
                      </h5>
                      <div className="form-group">
                        <textarea
                          className="w-100 searchInput"
                          id="description_english"
                          name=""
                          rows="8"
                          placeholder="Enter Description"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-3 mt-sm-0">
                    <div>
                      <h5 className="text-end">
                        Description (عربي)
                        <span className="text-danger"> *</span>
                      </h5>
                      <div className="form-group">
                        <textarea
                          className="w-100 searchInput text-end"
                          id="description_arabic"
                          name=""
                          rows="8"
                          placeholder="أدخل الوصف"
                          required=""
                        />
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
};

export default CreateTemplate;
