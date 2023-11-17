import React, { useRef, useState } from "react";
import AiJuristLogo from "../../assets/images/logo.png";
import defaultImg from "../../assets/images/img_default.jpeg";

const ImageUpload = ({ title, imgPlaceholder }) => {
  const [img, setImg] = useState("");

  const inputRef = useRef(null);

  const handleImgClick = () => {
    inputRef.current.click();
  };

  const handleImgChange = (event) => {
    setImg(event.target.files[0]);
  };

  return (
    <div className="text-center text-xxl-start py-xxl-3 px-sm-3">
      <p className="company-panel-header mb-2 mt-3 mt-xxl-0">{title}</p>
      <div className="company-img">
        {img ? (
          <img
            src={URL.createObjectURL(img)}
            alt="Img Upload"
            className="company-logo"
          />
        ) : (
          <img src={imgPlaceholder} alt="Img Upload" className="company-logo" />
        )}
        <input
          type="file"
          ref={inputRef}
          onChange={handleImgChange}
          className="inputImg"
        />
        <div className="text-center">
          <button className="btn btn-primary mt-4" onClick={handleImgClick}>
            Click to Upload Image
          </button>
        </div>
      </div>
    </div>
  );
};
function Company(props) {
  const itemsCol1 = ["Web Panel Header Logo", "Login Page Logo"];
  const itemsCol2 = ["Arabic Web Panel Header Logo", "Arabic Login Page Logo"];

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="settings-card-content">
            <div className="settings-sub-header d-flex flex-wrap justify-content-between align-items-center mb-1">
              <h2 className="settings-sub-heading text-primary mb-0">
                Company
              </h2>
              <button className="btn btn-primary">Update</button>
            </div>

            <h6>Logo Management</h6>

            <div className="row mt-4">
              <div className="col-12 col-xxl-6 px-0">
                <div className="d-sm-flex justify-content-around py-xxl-3 px-sm-2">
                  {itemsCol1.map((item, key) => (
                    <ImageUpload
                      key={key}
                      title={item}
                      imgPlaceholder={AiJuristLogo}
                    />
                  ))}
                </div>
              </div>
              <div className="col-12 col-xxl-6 px-0">
                <div className="d-sm-flex justify-content-around align-items-end py-xxl-3 px-sm-2">
                  {itemsCol2.map((item, key) => (
                    <ImageUpload
                      key={key}
                      title={item}
                      imgPlaceholder={defaultImg}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="row my-3">
              <div className="col-12 pt-3 col-sm-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  WebPanel Title Text
                </label>
                <input
                  type="text"
                  name=""
                  className="form-control form-control-solid"
                  defaultValue="Ai Jurist - Digital Contracts Platform"
                  placeholder="WebPanel Title text"
                />
              </div>
            </div>

            <div className="row my-3">
              <div className="col-12 col-sm-6">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  WebPanel Copyright Text
                </label>
                <input
                  type="text"
                  name=""
                  className="form-control form-control-solid"
                  defaultValue="aijurist.com"
                  placeholder="WebPanel Copyright"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Company;
