

import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ChatIcon from '@mui/icons-material/Chat';

import ContactMailIcon from '@mui/icons-material/ContactMail';
import "../../css/home.css";


import logo from "../../Images/logo.png"
import { AccountContext } from '../../context/AccountProvider';
import { useContext } from 'react';

function Header() {
  const navigate = useNavigate();

  let auth=localStorage.getItem("user");
  
  const handleLogout=()=>{
        localStorage.clear();
        navigate("/register");
  }

  const handleClick = () => {
    navigate("/register")
  }

  const handlelogoCLick =()=>{
    navigate("/")
  }

  return (
    <>
      <Navbar className="sticky-top position-fixed w-100" variant="light" expand="lg" style={{ color: "black", backgroundColor: "#eef3f7", height: "100px" }}>
          <Navbar.Brand href="#home" className='text-dark fs-3 fw-bold d-flex justify-content-end align-items-center' style={{ marginLeft: 0, marginRight: 0 }}>
            <img src={logo} alt="logo" width="auto" height="50" onClick={handlelogoCLick} className="d-inline-block align-top me-2" style={{ maxWidth: "100%" }} />
            Crew-Rentals
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav className='d-flex align-items-center'>

            
              <Link to="/" className='text-dark me-3 mt-2 fs-4 fw-bold d-flex flex-column align-items-center   hover-icon' style={{ textDecoration: "none", width: "80px" }}>
                <HomeIcon fontSize="medium"  className="mb-0 " />
                <span className="mt-0">Home</span>
              </Link>
              <Link to="/about" className='text-dark me-3 mt-2 fs-4 fw-bold d-flex flex-column align-items-center hover-icon' style={{ textDecoration: "none", width: "80px" }}>
                <InfoIcon fontSize="medium" />
                About
              </Link>
              <Link to="/contact" className='text-dark me-3 mt-2 fs-4 fw-bold d-flex flex-column align-items-center hover-icon' style={{ textDecoration: "none", width: "80px" }}>
                <ContactMailIcon fontSize="medium" />
                Contact
              </Link>
              <Link to="/chatDialog" className='text-dark me-3 mt-2 fs-4 fw-bold d-flex flex-column align-items-center hover-icon' style={{ textDecoration: "none", width: "80px" }}>
                <ChatIcon fontSize="medium" />
                Chat
              </Link>
              <div className='profile_Image_user'>
              <Link to="/userDashbord" className="text-dark me-3 mt-2 fs-5 fw-bold">
                  <img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg" alt="" />
                {/* <AccountCircleIcon fontSize="large" /> */}
              </Link>
              </div>


              {
                auth ?
                  <>
                    <span style={{ fontWeight: "700", fontSize: "22px" }}> ({JSON.parse(auth).fullname.split(" ")[0]}) &nbsp;</span>
                    <button onClick={handleLogout}>Logout</button> </>
                  :
                  <button onClick={handleClick}>Register/ Login</button>
              }
            </Nav>
          </Navbar.Collapse>
      </Navbar>

    </>
  )
}

export default Header;
