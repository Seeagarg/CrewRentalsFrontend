
import React, { useState } from 'react';
import "../../css/ThreedCard.css"
import Footer from '../Footer';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

import photo1 from "../3DModel/modelImages/house12.png"
import photo2 from "../3DModel/modelImages/house13.png";
import photo3 from "../3DModel/modelImages/house15.png";
import model1 from "../3DModel/modelImages/model21.png";
import model2 from "../3DModel/modelImages/model22.png";
import model3 from "../3DModel/modelImages/model23.png";
import model4 from "../3DModel/modelImages/model24.png";


const images = [
  photo1,
  photo2,
  photo3
];

const images2 = [

  model1,
  model2,
  model3,
  model4
];





const HouseInfo = () => {
  return (
    <div className="house-info">
      <h2>House Information</h2>
      <hr />
      <ul>
        <li style={{ fontWeight: 'bold' }}>Plot Area: 2400</li>
        <li >Total Builtup Area: 3590 sqft</li>
        <li>Width: 40 ft</li>
        <li>Length: 60 ft</li>
        <li>Building Type: Residential</li>
        <li>Style: Two Storey House</li>
        <li>Estimated Cost of Construction: 54 - 61 Lacs</li>
      </ul>
    </div>
  );
};
const HouseInfo2 = () => {
  return (
    <div className="house-info">
      <h2>House Information</h2>
      <ul>
        <li>Plot Area: 2400</li>
        <li>Total Builtup Area: 3590 sqft</li>
        <li>Width: 40 ft</li>
        <li>Length: 60 ft</li>
        <li>Building Type: Residential</li>
        <li>Style: Two Storey House</li>
        <li>Estimated Cost of Construction: 54 - 61 Lacs</li>
      </ul>
    </div>
  );
};
const HouseImage = () => {
  const [index, setIndex] = useState(0);





  const handleClick = () => {
    const nextIndex = index === images.length - 1 ? 0 : index + 1;
    setIndex(nextIndex);
  };



  return (
    <div className="house-image" onClick={handleClick}>
      <img src={images[index]} alt="House" />
    </div>
  );
};

const HouseImage2 = () => {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    const nextIndex = index === images2.length - 1 ? 0 : index + 1;
    setIndex(nextIndex);
  };



  return (
    <div className="house-image" onClick={handleClick}>
      <img src={images2[index]} alt="House" />
    </div>
  );
};

const ThreedmapHouse = () => {

  const navigate = useNavigate();
  const handleDalle = () => {
    navigate('/pixisAi');
  };



  return (
    <>
      <Header />
      <marquee style={{
        marginTop: "100px",
        backgroundColor: "rgba(61, 120, 230, 0.549)",
        padding: "30px",
        fontSize: "30px",
        fontFamily: "Georgia, 'Times New Roman', Times, serif",


      }} behavior="high" direction="right">Explore Your Dream Home: Choose from Our 3D House Models Click on Model Image to change Model.. </marquee>

      <div className='personilised-3d' >


        {/* <h1 onClick={handleDalle} style={{ background: "rgba(61, 120, 230, 0.549)", color: "black", cursor: "pointer" }}>Want Personalised 3D House? Click Here...</h1> */}

        <button style={{ fontSize: 30 }} onClick={handleDalle} className="custom-button-3d">
          Want Personalised 3D House? Click Here...
        </button>



      </div>

      <div className="threedmapHouse">


        <HouseImage />
        <HouseInfo />
        <hr />

        {/* <HouseInfo2/>
      <HouseInfo2/>
      <HouseInfo2/> */}

      </div>

      <div className="threedmapHouse">


        <HouseImage2 />
        <HouseInfo2 />
      </div>
      <Footer />
    </>
  );
};

export default ThreedmapHouse;
