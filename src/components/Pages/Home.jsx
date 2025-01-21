
import React, { useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import Header from "./Header";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Services from "../Services";
import RoleSelectionPageHome from './RoleSelectionPageHome';
// import SupportPopup from './SupportPopup';
import SupportPopup from '../SupportPopup';

import "../../css/home.css";

function Home() {
  const [showSupportPopup, setShowSupportPopup] = useState(false);

  const handleSupportIconClick = () => {
    console.log("clicked")
    setShowSupportPopup(!showSupportPopup);
  };

  const handleCloseSupportPopup = () => {
    setShowSupportPopup(!showSupportPopup);
  };

  return (
    <>
      <Header className="z-150"/>
      <HeroSection/>
      <RoleSelectionPageHome/>
      <Services/>
     
      <Footer/>
      <div  id="support-icon" onClick={handleSupportIconClick}>
        <i className="fas fa-question-circle"></i>
      </div>
      {showSupportPopup && 
        <div className="support-popup-overlay"  onClick={handleCloseSupportPopup}>
          <SupportPopup/>
        </div>
      }
    </>
  );
}

export default Home;
