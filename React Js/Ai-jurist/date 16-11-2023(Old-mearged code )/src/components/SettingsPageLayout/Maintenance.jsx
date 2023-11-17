import React, { useState, useRef } from "react";
import MaintenanceImg from "../../assets/images/miantenance-img.png";

function Maintenance(props) {
  // Img Upload
  const [img, setImg] = useState("");
  const inputRef = useRef(null);

  const handleImgClick = () => {
    inputRef.current.click();
  };

  const handleImgChange = (event) => {
    setImg(event.target.files[0]);
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="settings-card-content">
            <div className="settings-sub-header d-flex flex-wrap justify-content-between align-items-center">
              <h2 className="settings-sub-heading text-primary mb-0">
                Maintenance
              </h2>
              <button className="btn btn-primary">Update</button>
            </div>

            <div className="maintenance-enable my-4">
              <label className="form-check-label maintenance-label">
                Maintenance Enable
              </label>
              <select
                name="enable"
                className="form-select form-select-solid maintenance-select"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="my-4 d-sm-flex">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="induser"
                  defaultChecked="checked"
                />
                <label
                  className="form-check-label maintenance-label"
                  htmlFor="induser"
                >
                  Individual User
                </label>
              </div>
              <div className="form-check mx-sm-4 mx-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="busiuser"
                  defaultChecked="checked"
                />
                <label
                  className="form-check-label maintenance-label"
                  htmlFor="busiuser"
                >
                  Business User
                </label>
              </div>

              <div className="form-check mx-sm-4 mx-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="busadmin"
                  defaultChecked="checked"
                />
                <label
                  className="form-check-label maintenance-label"
                  htmlFor="busadmin"
                >
                  Business Admin
                </label>
              </div>
            </div>

            <h5 className="maintenance-img-heading mb-0">
              Maintenance mode web panel Image
            </h5>
            <br />
            <div className="MaintenanceImgUpload">
              {img ? (
                <img
                  src={URL.createObjectURL(img)}
                  alt="Prilfe Img Upload"
                  className="MaintenanceImg"
                />
              ) : (
                <img
                  src={MaintenanceImg}
                  alt="Prilfe Img Upload"
                  className="MaintenanceImg"
                />
              )}
              <input
                type="file"
                ref={inputRef}
                onChange={handleImgChange}
                className="inputImg"
              />
              <button className="btn btn-primary mt-3" onClick={handleImgClick}>
                Click to Upload Image
              </button>
            </div>

            <input
              type="text"
              defaultValue="Maintenance Title"
              className="searchInput my-3 my-md-4 w-100"
              placeholder="Maintenance page title"
            />

            <textarea
              className="searchInput rounded-0 w-100"
              defaultValue="Maintenance Content"
              rows="7"
              placeholder="Maintenance page contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Maintenance;
