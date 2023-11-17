import React from "react";

function ContactUserPrice(props) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="settings-card-content">
            <div className="settings-sub-header d-flex flex-wrap justify-content-between align-items-center">
              <h2 className="settings-sub-heading text-primary mb-0">
                Contact & User Price
              </h2>
              <button className="btn btn-primary">Update</button>
            </div>

            <div className="row mt-4">
              <div className="col-12 col-sm-6">
                <label className="form-label">Contract Price</label>
                <input
                  type="text"
                  name=""
                  className="form-control form-control-solid"
                  placeholder="Enter Contact Price"
                  defaultValue="5.000"
                />
              </div>
              <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                <label className="form-label">User Price</label>
                <input
                  type="text"
                  name=""
                  className="form-control form-control-solid"
                  placeholder="Enter User Price"
                  defaultValue="2.000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUserPrice;
