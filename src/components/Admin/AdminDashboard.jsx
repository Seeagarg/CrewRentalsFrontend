import React from 'react';
import HeaderAdmin from "./HeaderAdmin";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Adminnavbar from "./Adminnavbar";
import MiddleSec from "./MiddleSec"
import Header from '../Pages/Header';



function  AdminDashboard  ()  {
  return (
    <>

    <Header/>
    <Adminnavbar/>
    {/* <HeroSection/> */}
    <MiddleSec/>
    {/* <div>AdminDashboard</div> */}
    <Footer/>
    </>
  )
}

export default AdminDashboard
