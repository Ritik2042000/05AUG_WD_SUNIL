import React, { useState } from 'react';
import { useCookies } from "react-cookie";
import {  useNavigate } from "react-router-dom";
import Form from '../form/Form';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


export default function App() {
  const [showBasic, setShowBasic] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const navigate = useNavigate()

  const handleLogout = () => {
    removeCookie("usename");
    removeCookie("userid");
    // console.log();
    window.confirm('Are You sure want Logout?')
    navigate("/login");
    
  };
  const renderLoginButton = () => {
    if (cookies.username && cookies.userid) {
      return (
        <MDBBtn onClick={handleLogout} className='nav-link btn-danger'>
          Logout
        </MDBBtn>
      );
    } else {
      return (
        <MDBBtn href='/login' className='nav-link' >
          Login
        </MDBBtn>
      );
    }
  };

  return (
    
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Project</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
          <MDBNavbarItem>
              <Link active aria-current='page' to='/' className='nav-link'>
                Home
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to='/About' className='nav-link'>About</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to='/Apidata' className='nav-link'>Data</Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
               {renderLoginButton()}
               {/* <MDBBtn href='/login' onClick={handleLogout} className='nav-link' >{cookies.usename ? 'Logout' : 'Login'}</MDBBtn>  */}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
  
}