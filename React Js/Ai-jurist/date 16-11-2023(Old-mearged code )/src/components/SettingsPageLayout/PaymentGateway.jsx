import React from "react";

function Paymentgateway(props) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="settings-card-content">
            <div className="settings-sub-header d-flex flex-wrap justify-content-between align-items-center">
              <h2 className="settings-sub-heading text-primary mb-0">
                Payment Gateway
              </h2>
              <button className="btn btn-primary">Update</button>
            </div>

            <div className="form-check form-check-solid mt-3 form-switch form-check-custom d-flex justify-content-between align-items-center ps-0">
              <label className="form-check-label">Test Mode :</label>
              <input
                className="form-check-input check-box-switch"
                type="checkbox"
                name="check-box-switch"
              />
            </div>

            <div className="my-4">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Ai Jurist API Url
              </label>
              <input
                type="text"
                name=""
                className="form-control form-control-solid"
                placeholder="Enter Ai Jurist API Url"
                defaultValue="None"
              />
            </div>

            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Ai Jurist API Key
              </label>

              <textarea
                className="form-control form-control-solid rounded-0"
                name=""
                rows="4"
                placeholder="Enter Ai Jurist API Key"
                defaultValue="None"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Paymentgateway;
