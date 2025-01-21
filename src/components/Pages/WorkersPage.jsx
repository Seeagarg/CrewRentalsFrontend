import React, { useEffect, useState } from 'react';
import "../../css/WorkersPage.css";
import Header from './Header';
import Footer from '../Footer';
import { getAllWorkers, filterWorker } from '../../service/api';
import WorkerCard from '../WorkerCard';
import Spinner from '../Spinner';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const WorkersPage = () => {


  const [workers, setWorkers] = useState([]);
  const [price, setPrice] = useState("500");
  const [role, setRole] = useState("All Categories")
  const [experience, setExperience] = useState("100")
  const [address, setAddress] = useState("All cities");
  const [loading, setLoading] = useState(false);

  const [showFilter, setShowFilter] = useState(true);


  useEffect(() => {
    getWorkers();
  }, [])

  const handleClick = async (e) => {
    e.preventDefault();
  
    console.log("experience is", experience)
    console.log("role is", role)
    console.log("city is", address)
    console.log("price", price)

    let filteredData = [];

    for (let i = 0; i < workers.length; i++) {

      if (address != "All cities" && role != "All Categories") {
        if (workers[i].price <= price && workers[i].address === address && workers[i].role === role && workers[i].experience <= experience) {
          filteredData.push(workers[i]);
        }
      }
      else if (address === "All cities" && role === "All Categories") {
        if (workers[i].price <= price && workers[i].experience <= experience) {
          filteredData.push(workers[i]);
        }
      }
      else if (address === "All cities") {
        if (workers[i].price <= price && workers[i].role === role &&   workers[i].experience <= experience) {
          filteredData.push(workers[i]);
        }
      }
      else if (role === "All Categories") {

        if (workers[i].price <= price && workers[i].address === address &&   workers[i].experience <= experience) {

        console.log("worker is reqq ",workers[i])
        // if (workers[i].price <= price && workers[i].address === address && workers[i].experience <= experience) {

          filteredData.push(workers[i]);
        }
      }
    }
    setShowFilter(false);
    setWorkers(filteredData)
  }


  const handleRemoveFilter = () => {
    setShowFilter(true)
    getWorkers();
  }


  const showNotification = () => {
    toast.warn("No Worker found !!", {
      autoClose: 2000,
    });
  }


  const getWorkers = async () => {
    let result = await getAllWorkers();
    setWorkers(result?.data);
    setLoading(true);
  }
  console.log("Workers from backend are ", workers);
  return (
    <>
      <Header />
      <h1 style={{ marginTop: "120px", fontWeight: 600 }}>Workers Page</h1>
      <div className="workers-page-workers m-3">
        <div className="filter-section">
          <h3 >Filter Workers</h3>
          <form>
            <label for="location">Location:</label>
            <select disabled={!showFilter} value={address} style={{ "cursor": "pointer" }} onChange={(e) => { setAddress(e.target.value) }} id="location">
              <option style={{ "cursor": "pointer" }} value="All cities"   > All cities </option>
              {workers.map((worker) => {
                return <option style={{ "cursor": "pointer" }} key={worker._id} value={worker.address} > {worker.address} </option>
              })}
            </select>

            <label for="city">Category:</label>
            <select name="city" id="city" style={{ "cursor": "pointer" }} disabled={!showFilter} value={role} onChange={(e) => setRole(e.target.value)}>
              <option style={{ "cursor": "pointer" }} value="All Categories"   > All Categories </option>
              <option value="Construction Labour">Construction Labour</option>
              <option value="Tiles | Marble | Work Helper">Tiles | Marble | Work Helper</option>
              <option value="Loading | Unloading">Loading | Unloading</option>
              <option value="Cleaning Workers">Cleaning Workers</option>
              <option value="Home Shifting">Home Shifting</option>
              <option value="Godam | Warehouse">Godam | Warehouse</option>
              <option value="Factory Labour">Factory Labour</option>
              <option value="Gardening Work">Gardening Work</option>
              <option value="Other Labour Works">Other Labour Works</option>
            </select>

            <label for="price">Price: ₹{price} </label>
            <div class="filter_price">

              <input type="range" name="price" disabled={!showFilter} style={{ "cursor": "pointer" }} onChange={(e) => { setPrice(e.target.value) }} min="100" max="3000" value={price}></input>
            </div>

            <label for="city">Experience:</label>
            <select name="city" id="city" style={{ "cursor": "pointer" }} value={experience} disabled={!showFilter} onChange={(e) => setExperience(e.target.value)}>
              <option style={{ "cursor": "pointer" }} value="100"> All Experience</option>
              <option style={{ "cursor": "pointer" }} value="2"   > 0-2 years </option>
              <option style={{ "cursor": "pointer" }} value="5"   > 2-5 years </option>
              <option style={{ "cursor": "pointer" }} value="50"   > above 5 years </option>

            </select>


            {
              showFilter ? <button type="submit" onClick={handleClick}> Apply Filter </button> :
                <button type="submit" onClick={handleRemoveFilter}> Remove Filter  </button>
            }


          </form>
        </div>
       
        {

          workers.length === 0 && showFilter === false ? showNotification() : <div className="workers-page-workers-group-12">
            {loading ? workers.map((worker) => {
              return <WorkerCard key={worker._id} worker={worker} />;
            }) : <Spinner className='spinner m-5' />}

          </div>
        }

      </div>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default WorkersPage;
