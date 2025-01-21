import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from "../../Images/logo.png"

function HeaderAdmin() {
  const navigate = useNavigate();

  const auth=localStorage.getItem("user");
  // console.log("login auth is ", auth.fullname);
  
  const handleLogout=()=>{
        console.log("local stogare is cleared")
        localStorage.clear();
        navigate("/register");
  }


  const handleClick = () => {
    navigate("/register")
  }


  return (
    <>
      <Navbar className="sticky-top position-fixed w-100" variant="light" expand="lg" style={{ color: "black", backgroundColor: "#eef3f7", height: "100px" }}>
        {/* <Container> */}
          <Navbar.Brand href="#home" className='text-dark fs-3 fw-bold d-flex justify-content-end align-items-center' style={{ marginLeft: 0, marginRight: 0 }}>
            <img src={logo} alt="logo" width="auto" height="50" className="d-inline-block align-top me-2" style={{ maxWidth: "100%" }} />
            Crew-Rentals
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            <Nav className='d-flex align-items-center'>
              <Link to="/" className='text-dark me-3 mt-2 fs-4 fw-bold' style={{ textDecoration: "none", }}>Home</Link>
              <Link to="/about" className='text-dark me-3 mt-2 fs-4 fw-bold' style={{ textDecoration: "none" }}>About</Link>
              <Link to="/contact" className='text-dark me-3 mt-2 fs-4 fw-bold' style={{ textDecoration: "none" }}>Contact</Link>
              {/* <Link to="/aiChat" className='text-dark me-3 mt-2 fs-4 fw-bold' style={{ textDecoration: "none" }}>Chat Here</Link> */}
              <Link to="/userDashbord" className="text-dark me-3 mt-2 fs-5 fw-bold"><AccountCircleIcon fontSize="large" /></Link>
           {
                auth?
                <> 
                 <span style={{fontWeight:"700" , fontSize:"22px"}}> ({JSON.parse(auth).fullname}) &nbsp;</span>
                <button onClick={handleLogout}  >Logout</button> </>
                :
                <button onClick={handleClick} >Register/ Login</button>
           }      
            </Nav>
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>

    </>
  )
}

export default HeaderAdmin
