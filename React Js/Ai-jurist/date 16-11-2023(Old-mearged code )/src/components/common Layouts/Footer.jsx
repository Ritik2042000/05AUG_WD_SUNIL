import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
    return (
        <>
        <div className="dashbord-footer">
          <Navbar expand="lg" className="bg-white py-3" fixed="bottom">
            <Container fluid className="d-flex justify-content-end">
              <div className="dashbord-footer-content d-flex align-items-center me-3">
                <span className="text-muted fw-bold me-1">© 2023</span>
                <a
                  href="aijurist.com"
                  target="_blank"
                  className="text-dark text-hover-primary text-decoration-none"
                >
                  aijurist.com
                </a>
              </div>
            </Container>
          </Navbar>
        </div>
      </>
    );
};

export default Footer;