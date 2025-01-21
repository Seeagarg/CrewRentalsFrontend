import React, { useState } from 'react';
import workerimg from '../../Images/workerty.jpg';
import "../../css/Dashboard.css";

import locationImg from "../../Images/admindashbordworker.jpg"
import Footer from '../Footer';
import Header from './Header';


function   AdminLabour()  {
  const [isAvailable, setIsAvailable] = useState(false);
   const [fullName,setFullName]=useState("");
  const handleAvailabilityChange = () => {
    setIsAvailable(!isAvailable);
  };

  // const data=JSON.parse(localStorage.getItem("user"))
  // setFullName(data.fullName)
  // console.log("data is ",data)


  return (
    <>
    <Header />
    <div className="dashboard-container">
      <div className="labor-card">
        <div className="profile-picture">
          <img src="https://lh3.googleusercontent.com/a/AGNmyxb7GQuAPbgStCUV1dArWdntfDfus6XXkcrRyk-qXA=s357" alt="Profile" />
        </div>
        <div className="profile-details">
          <h2>{JSON.parse(localStorage.getItem("user")).fullname.split(" ")[0]}</h2>
          <p style={{fontSize:20 , fontWeight:'bold'}}>Phone: 9511506049</p>
        </div>
      </div>

      <div className="location-card">
        <div className="map-container">
          <img src={locationImg} alt="Map" />
        </div>
        <div className="availability">
          <p>Location : Jalandhar (144603)</p>
          <p>Availability:</p>
          <button
            className={`toggle-button ${isAvailable ? 'on' : 'off'}`}
            onClick={handleAvailabilityChange}
          >
            {isAvailable ? 'On' : 'Off'}
          </button>
          <p>I am {isAvailable ? ' available' : ' not available'}</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default AdminLabour;
