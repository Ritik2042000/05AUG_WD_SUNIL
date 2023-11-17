import React from "react";

function SMTPFCM(props) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="settings-card-content">
            <div className="settings-sub-header d-flex flex-wrap justify-content-between align-items-center">
              <h2 className="settings-sub-heading text-primary mb-0">SMTP</h2>
              <button className="btn btn-primary">Update</button>
            </div>

            <div className="row mt-4">
              <div className="col-sm-6">
                <label className="form-label">SMTP Host Name</label>
                <input
                  type="text"
                  name=""
                  className="form-control form-control-solid"
                  placeholder="Enter SMTP Hostname"
                  defaultValue="None"
                />
              </div>
              <div className="col-sm-6 mt-3 mt-sm-0">
                <label className="form-label">SMTP Port</label>
                <input
                  type="text"
                  name=""
                  className="form-control form-control-solid"
                  placeholder="Enter SMTP Port"
                  defaultValue="None"
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-sm-6">
                <label className="form-label">SMTP Username</label>
                <input
                  type="text"
                  name=""
                  className="form-control form-control-solid"
                  placeholder="Enter SMTP Username"
                  defaultValue="None"
                />
              </div>
              <div className="col-sm-6 mt-3 mt-sm-0">
                <label className="form-label">SMTP Password</label>
                <input
                  type="text"
                  name=""
                  className="form-control form-control-solid"
                  placeholder="Enter SMTP Password"
                  defaultValue="None"
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-sm-6">
                <label className="form-label">SMTP Sender Email</label>
                <input
                  type="email"
                  name=""
                  className="form-control form-control-solid"
                  placeholder="Enter Sender Email"
                  defaultValue="None"
                />
              </div>
              <div className="col-sm-6 mt-3 mt-sm-0">
                <label className="form-label">Security</label>
                <select
                  name="app_update"
                  className="form-select form-select-md form-select-solid"
                  defaultValue="TLS"
                >
                  <option value="Active">TLS</option>
                  <option value="Inactive">SSL</option>
                </select>
              </div>
            </div>

            <h2 className="settings-sub-heading text-primary my-4">FCM</h2>

            <div className="my-10">
              <label className="form-label">Ai Jurist API Key</label>
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

export default SMTPFCM;
