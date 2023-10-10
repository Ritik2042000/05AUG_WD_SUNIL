import React, { useRef, useState } from "react";
import ProfileImg from "../../assets/images/profile-img.jpeg";
import {
  Container,
  Navbar,
  NavDropdown,
  Offcanvas,
  Form,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  // Profile Update OffCanvas Hide Show
  const [prifleShow, setProfileShow] = useState(false);

  const handleProfileClose = () => setProfileShow(false);
  const handleProfileShow = () => setProfileShow(true);

  // Password Change OffCanvas Hide Show
  const [passwordShow, setPasswordShow] = useState(false);

  const handlePasswordClose = () => setPasswordShow(false);
  const handlePasswordShow = () => setPasswordShow(true);

  // Profile Picture Upload
  const [img, setImg] = useState("");
  const inputRef = useRef(null);

  const handleImgClick = () => {
    inputRef.current.click();
  };

  const handleImgChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImg(event.target.files[0]);
  };

  return (
    <>
      <div className="dashbord-header">
        <Navbar expand="lg" className="bg_header bg-white" fixed="top">
          <Container fluid className="d-flex justify-content-end ">
            <div className="dashbord-header-content d-flex align-items-center">
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={
                  <div className="rounded-circle">
                    <img
                      src={ProfileImg}
                      alt="Profile-Img"
                      className="rounded-img"
                    />
                  </div>
                }
              >
                <NavDropdown.Item
                  onClick={handleProfileShow}
                  className="py-2 header-dropdown-items"
                >
                  <i className="fa-solid fa-user pe-1"></i> Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={handlePasswordShow}
                  className="py-2 header-dropdown-items"
                >
                  <i className="fa-solid fa-key pe-1"></i> Change Password
                </NavDropdown.Item>
              </NavDropdown>

              <span className="menu-icon">
                <NavLink to="/notificationbell" activeClassname="active">
                  <i className="fa-regular fa-bell" />
                </NavLink>
              </span>
            </div>
          </Container>
        </Navbar>

        <Offcanvas
          className="offCanvas py-5 px-5"
          show={prifleShow}
          onHide={handleProfileClose}
          placement="end"
          // scroll={true}
        >
          <Offcanvas.Body>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="fw-bold">Profile</Offcanvas.Title>
            </Offcanvas.Header>
            <hr />
            <div
              className="profileImgUpload text-center mt-3"
              onClick={handleImgClick}
            >
              {img ? (
                <img
                  src={URL.createObjectURL(img)}
                  alt="Prilfe Img Upload"
                  className="profileImg"
                />
              ) : (
                <img
                  src={ProfileImg}
                  alt="Prilfe Img Upload"
                  className="profileImg"
                />
              )}
              <input
                type="file"
                ref={inputRef}
                onChange={handleImgChange}
                className="inputImg"
              />
              <h6 className="p-3 fw-bold">Change Picture</h6>
            </div>

            <Form>
              <Form.Group className="mb-10" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group className="mb-10" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-10" controlId="formBasicPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  min="10"
                  maxLength="10"
                  placeholder="Enter Phone"
                />
              </Form.Group>
              <div className="pt-3 text-center">
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </div>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>

        <Offcanvas
          className="offCanvas py-5 px-5"
          show={passwordShow}
          onHide={handlePasswordClose}
          placement="end"
          // scroll={true}
        >
          <Offcanvas.Body className="mt-3 px-0">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="fw-bold">
                Change Password
              </Offcanvas.Title>
            </Offcanvas.Header>
            <hr />
            <Form>
              <Form.Group className="mb-10" controlId="formBasicName">
                <Form.Label>
                  Current Password <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="passwod" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-10" controlId="formBasicPhone">
                <Form.Label>
                  New Password <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="pt-3 text-center">
                <Button variant="primary" type="submit">
                  Update
                </Button>
              </div>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default Header;
