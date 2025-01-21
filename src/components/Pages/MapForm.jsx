import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../../css/lform.css";
import Footer from '../Footer';
import Header from './Header';

function MapForm() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [parking , setParking] = useState('');
  const [rooms, setRooms] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Mobile:', mobile);
    console.log('Email:', email);
    console.log('Role:', role);
    navigate('/threedmapHouse')
  };



  return (
    <>
    <Header/>
    <div className="registration-form3d">
      <h1>3D House Model info </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Land Size(sq.feet) :</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="mobile">No. of Rooms:</label>
        <select id="rooms" value={rooms} onChange={(event) => setRooms(event.target.value)}>
          <option value="">--Please select--</option>
          <option value="2BHK">2BHK </option>
          <option value="3BHK">3BHK </option>
          <option value="4BHK">4BHK</option>
          <option value="5BHK">5BHK</option>
          <option value="ANY">ANY</option>
        </select>

        <label htmlFor="parking">Parking Area (Yes or No)</label>
        <select id="parking" value={parking} onChange={(event) => setParking(event.target.value)}>
          <option value="">--Please select--</option>
          <option value="Yes">Yes </option>
          <option value="No">No </option>
        </select>

        <label htmlFor="role">Select Area Type :</label>
        <select id="role" value={role} onChange={(event) => setRole(event.target.value)}>
          <option value="">--Please select--</option>
          <option value="Labour">Hill </option>
          <option value="Engineer">Plan </option>
          <option value="Contractor">Near by River</option>
          <option value="Customer">Desert</option>
          <option value="Seller">Rain</option>
        </select>

        <button onClick={handleSubmit} type="submit">Submit</button>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default MapForm;
