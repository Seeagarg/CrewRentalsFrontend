import React, { useEffect, useState } from 'react';
import "../../css/Groupworkers.css";
import Footer from '../Footer';
import Header from './Header';
import GroupWorkerCard from './GroupWorkerCard';
import { getAllGroupWorkers, getGroupWorker } from '../../service/api';
import Spinner from '../Spinner';
import { ToastContainer, toast } from "react-toastify";

const parastyle = {
  
   
    marginTop : "15px", 
    fontWeight: 'bold',
   
    fontFamily: 'Arial',
    

}

const nameWorker = {
    fontFamily : 'Helvet',
    fontWeight: 'bold',
    fontSize: '35px',
    textAlign: 'center',
    color: 'black',
}

const variableFields = {
    fontFamily : 'Helvet',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
    color: 'black',
}

const variableFieldsYes = {
    fontFamily : 'Helvet',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
    color: 'green'
    
}

const WorkerCard = ({ worker }) => {
  return (
    <div className="card-workers-group my-4">
    {/* // <div className="workers-page-workers"> */}
      <div className="image-container-workers-group">
        <img src={worker.imageUrl} alt={worker.name} />
      </div>
      <div className="details-workers-group m-2">
        <h2 style={nameWorker}>{worker.name}</h2>
        <p style={parastyle}>Category: <span style ={variableFields}>{worker.category}</span></p>
        <p style={parastyle}>Location: <span style ={variableFields}>{worker.location}</span></p>
        <p style={parastyle}>Available: <span style ={variableFieldsYes}>{worker.available ? 'Yes' : 'No'}</span></p>
        <p style={parastyle}>No. of Members: <span style ={variableFields} >{worker.experience}</span></p>
        <p style={parastyle}>Group Price per day: <span style ={variableFields}>{worker.pricePerDay}</span></p>
        <p style={parastyle}>Experience: <span style ={variableFields} >{worker.experience}</span></p>
        <p style={parastyle}>Phone no: <span style ={variableFields} >{worker.phone}</span></p>
      </div>
    </div>
  );
};

const GroupOfWorkers = () => {

  const [price , setPrice] = useState('100');
  const [experience , setExperience] = useState('100');
  const [address , setAddress] = useState('All cities');
  const [role, setRole] = useState("All Categories");
  const [showFilter, setShowFilter] = useState(true);
  const [groupWorkers, setGroupWorkers]= useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setGetGroupWorkers()
  },[])

  const setGetGroupWorkers= async()=>{
    const res=await getAllGroupWorkers();
    console.log(res);
    setGroupWorkers(res)
    setLoading(true);
  }

  const handleApplyFilter=(e)=>{
    e.preventDefault();
    let filteredData = [];

    for(let i=0;i<groupWorkers.length;i++){
      if(address != 'All cities' && role != "All Categories"){
        if (groupWorkers[i].price <= price && groupWorkers[i].address === address && groupWorkers[i].role === role && groupWorkers[i].experience <= experience) {
          filteredData.push(groupWorkers[i]);
        }
      }
      else if (address === "All cities" && role === "All Categories") {
        if (groupWorkers[i].price <= price && groupWorkers[i].experience <= experience) {
          filteredData.push(groupWorkers[i]);
        }
      }
      else if (address === "All cities") {
        if (groupWorkers[i].price <= price && groupWorkers[i].role === role &&   experience <= groupWorkers[i].experience) {
          filteredData.push(groupWorkers[i]);
        }
      }
      else if (role === "All Categories") {
        if (groupWorkers[i].price <= price && groupWorkers[i].address === address &&  experience <= groupWorkers[i].experience) {
          filteredData.push(groupWorkers[i]);
        }
      }
    }
    setShowFilter(false);
    setGroupWorkers(filteredData);

  }

  const handleRemoveFilter = () => {
    setShowFilter(true)
    setGetGroupWorkers();
  }

  const showNotification = () => {
    console.log("notified")
    toast.warn("No Group of Workers found !!", {
      autoClose: 2000,
    });
  }

  return (
    <>
          <Header />
          <div className="m-0">
      <h1 style={{marginTop:"100px"}}>Group of Workers Page</h1>
      <div className='new-group-worker-sec m-3'>
    <div className="filter-section">
  <h3 >Filter Group Workers</h3>
  <form>
   
    <label for="location">Location:</label>
            <select  value={address} style={{ "cursor": "pointer" }} disabled={!showFilter} onChange={(e) => { setAddress(e.target.value) }} id="location">
              <option style={{ "cursor": "pointer" }} value="All cities"   > All cities </option>
              {groupWorkers?.map((groupWorker) => {
                return <option style={{ "cursor": "pointer" }} key={groupWorker._id} value={groupWorker.address}> {groupWorker.address} </option>
              })}
            </select>
                <label htmlFor="price">Price: ₹{price} </label>
            <div class="filter_price">

              <input type="range" name="price" disabled={!showFilter}  style={{ "cursor": "pointer" }} onChange={(e) => { setPrice(e.target.value) }} min="100" max="3000" value={price}></input>
            </div>
       

            <label htmlFor="city">Experience:</label>
            <select name="city" id="city" style={{ "cursor": "pointer" }} disabled={!showFilter} value={experience} onChange={(e) => setExperience(e.target.value)}>
              <option style={{ "cursor": "pointer" }} value="100"> All Experience</option>
              <option style={{ "cursor": "pointer" }} value="2"   > 0-2 years </option>
              <option style={{ "cursor": "pointer" }} value="5"   > 2-5 years </option>
              <option style={{ "cursor": "pointer" }} value="50"   > above 5 years </option>

            </select>

    <label for="city">Role:</label>
    <select name="city" id="city" disabled={!showFilter} value={role} onChange={(e) => setRole(e.target.value)}>
      <option style={{ "cursor": "pointer" }} value="All Categories"> All Categories </option>   
      <option value="Construction Labour">Construction Labour</option>
      <option value="Tiles | Marble | Work Helper">Tiles | Marble | Work Helper</option>
      <option value="Loading | Unloading">Loading | Unloading</option>
      <option value="Home Shifting">Home Shifting</option>
      <option value="Factory Labour">Factory Labour</option>
      <option value="Gardening Work">Gardening Work</option>
      <option value="Other Labour Works:">Other Labour Works:</option>
    </select>

    
            {
              showFilter ? <button type="submit" onClick={handleApplyFilter}>Apply Filter</button> :
                <button type="submit" onClick={handleRemoveFilter}> Remove Filter  </button>
            }
      </form>
      </div>
      <div className="container">
      {groupWorkers.length === 0 && showFilter === false ? showNotification():
      <div className="workers-container-workers-group">
        {loading? groupWorkers?.map((groupWorker, index) => {
          return <GroupWorkerCard key={groupWorker._id}   groupWorker={groupWorker} />;
        }):<Spinner className='spinner m-5'/>}
      </div>
      }
      </div>
    </div>
    </div>
    <Footer/>
    <ToastContainer />
    </>
  );
};

export default GroupOfWorkers;
