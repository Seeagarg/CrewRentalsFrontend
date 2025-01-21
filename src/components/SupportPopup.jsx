import React from 'react';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import SendIcon from '@mui/icons-material/Send';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import "../css/supportPopup.css"



const SupportPopup = () => {
  console.log("popopop")
  return (
    <div  className="support-popup">
      <h1 style={{ color: 'white' }} >Crew-Rental</h1>
      <div className='intro-contact'>
        <h2 style={{ color: 'white' }}>Hello {<span style={{ fontWeight: "700", color: 'white' }}>{JSON.parse(localStorage.getItem("user"))?.fullname.split(" ")[0]}&nbsp;!!</span>}</h2>
        <h2 style={{ fontWeight: 900, color: 'white' }} >How can we help you? </h2>

      </div>
      <div  className='inner-Section-contact'>
        <div style={{  display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ flex: 1, fontSize: 20, fontWeight: 700, padding: 20, backgroundColor: "#e5e8e9", borderRadius: 20 }}>Search for help</div>
            <div style={{ marginLeft: 20 }}><SavedSearchIcon fontSize="medium" /></div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ flex: 1, fontSize: 20, fontWeight: 700 }}>Reset Your Password</div>
            <div>&gt;</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ flex: 1, fontSize: 20, fontWeight: 700 }}>Atlas Developer Support Plan</div>
            <div>&gt;</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ flex: 1, fontSize: 20, fontWeight: 700 }}>Send us a message</div>
            <div>&gt;</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1, fontSize: 20, fontWeight: 700 }}>We will reply as soon as we can</div>
            <div>&gt;</div>
          </div>
        </div>
      </div>
      <div>
        <Nav style={{  marginTop: 10, marginBottom: 10, borderRadius: 20 }} className='d-flex align-items-center ineer-inner-sport'>
          <Link to="/" className='text-dark me-3 mt-2 fs-4 fw-bold d-flex flex-column align-items-center ' style={{ textDecoration: "none", width: "80px" }}>
            <HomeIcon fontSize="medium" className="mb-0 " />
            <span className="mt-0">Home</span>
          </Link>
          <Link to="/about" className='text-dark me-3 mt-2 fs-4 fw-bold d-flex flex-column align-items-center ' style={{ textDecoration: "none", width: "80px" }}>
            <InfoIcon fontSize="medium" />
            About
          </Link>
          <Link to="/contact" className='text-dark me-3 mt-2 fs-4 fw-bold d-flex flex-column align-items-center ' style={{ textDecoration: "none", width: "80px" }}>
            <ContactMailIcon fontSize="medium" />
            Contact
          </Link>

          <Link to="/aiChat" className='text-dark me-3 mt-2 fs-4 fw-bold d-flex flex-column align-items-center ' style={{ textDecoration: "none", width: "80px" }}>
            <SendIcon fontSize="medium" />
            Contact
          </Link>
        </Nav>
      </div>
    </div>
  );
}
export default SupportPopup;
