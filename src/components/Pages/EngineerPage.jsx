import React from "react";
import "../../css/WorkersPage.css";
import Header from "./Header";
import Footer from "../Footer";
import { getAllEngineers, getEngineer } from "../../service/api";
import { useState, useEffect } from "react";
import EngineerCard from "./EngineerCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../Spinner";

const parastyle = {
  marginTop: "15px",
  fontWeight: "bold",
  fontFamily: "Arial",
};

const nameWorker = {
  fontFamily: "Helvet",
  fontWeight: "bold",
  fontSize: "35px",
  textAlign: "center",
  color: "black",
};

const variableFields = {
  fontFamily: "Helvet",
  fontWeight: "bold",
  fontSize: "20px",
  textAlign: "center",
  color: "black",
};

const variableFieldsYes = {
  fontFamily: "Helvet",
  fontWeight: "bold",
  fontSize: "20px",
  textAlign: "center",
  color: "green",
};

const WorkerCard = ({ worker }) => {
  return (
    <div className="card-workers my-4">
      <div className="image-container-workers">
        <img src={worker.imageUrl} alt={worker.name} />
      </div>
      <div className="details-workers m-2">
        <h2 style={nameWorker}>{worker.name}</h2>
        <p style={parastyle}>
          Age: <span style={variableFields}>{worker.age}</span>
        </p>
        <p style={parastyle}>
          Location: <span style={variableFields}>{worker.location}</span>
        </p>
        <p style={parastyle}>
          Category: <span style={variableFields}>{worker.role}</span>
        </p>
        <p style={parastyle}>
          Available:{" "}
          <span style={variableFieldsYes}>
            {worker.available ? "Yes" : "No"}
          </span>
        </p>
        <p style={parastyle}>
          Price per day:{" "}
          <span style={variableFields}>{worker.pricePerDay}</span>
        </p>
        <p style={parastyle}>
          Experience: <span style={variableFields}>{worker.experience}</span>
        </p>
      </div>
    </div>
  );
};

const EngineerPage = () => {
  const [role, setRole] = useState("");
  const [price, setPrice] = useState("100");
  const [experience, setExperience] = useState("100");
  const [address, setAddress] = useState("All cities");
  const [showFilter, setShowFilter] = useState(true);

  const [loading, setLoading] = useState(false);

  const [engineers, setEngineers] = useState();
  useEffect(() => {
    setGetEngineers();
  }, []);
  const setGetEngineers = async () => {
    const res = await getAllEngineers();
    // console.log("engineers are ", res[0]);
    // if(res){
    // }
    setEngineers(res);
    setLoading(true);
  };

  const handleRemoveFilter = () => {
    setShowFilter(true);
    setGetEngineers();
  };

  const showNotification = () => {
    toast.warn("No Engineers found !!", {
      autoClose: 2000,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    console.log("experience is", experience);
    console.log("role --> ", role);
    console.log("address --> ", address);
    // console.log("role --> " ,role)

    let filteredData = [];

    for (let i = 0; i < engineers.length; i++) {
      if (address != "All cities" && role != "") {
        if (
          engineers[i].address === address &&
          engineers[i].type === role &&
          engineers[i].experience <= experience
        ) {
          filteredData.push(engineers[i]);
        }
      } else if (address === "All cities" && role === "") {
        if (engineers[i].experience <= experience) {
          filteredData.push(engineers[i]);
        }
      } else if (address === "All cities") {
        console.log("jiji  ", engineers[i]);
        if (
          engineers[i].type === role &&
          experience[i].experience <= experience
        ) {
          filteredData.push(engineers[i]);
        }
      } else if (role === "") {
        if (
          engineers[i].address === address &&
          experience[i].experience <= experience
        ) {
          filteredData.push(engineers[i]);
        }
      }
    }

    setShowFilter(false);
    console.log(filteredData);

    setEngineers(filteredData);
  };

  return (
    <>
      <Header />

      <h1 style={{ margin: "40px" }}>Engineer Page</h1>

      <div className="workers-page-workers m-3">
        <div className="filter-section">
          <h3>Filter Engineers </h3>
          <form>
            <label for="location">Location:</label>
            <select
              disabled={!showFilter}
              value={address}
              style={{ cursor: "pointer" }}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              id="location"
            >
              <option style={{ cursor: "pointer" }} value="All cities">
                {" "}
                All cities{" "}
              </option>
              {engineers?.map((engineer) => {
                return (
                  <option
                    style={{ cursor: "pointer" }}
                    key={engineer._id}
                    value={engineer.address}
                  >
                    {" "}
                    {engineer.address}{" "}
                  </option>
                );
              })}
            </select>
            <label for="city">Experience:</label>
            <select
              disabled={!showFilter}
              name="city"
              id="city"
              style={{ cursor: "pointer" }}
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <option style={{ cursor: "pointer" }} value="100">
                {" "}
                All Experience
              </option>
              <option style={{ cursor: "pointer" }} value="2">
                {" "}
                0-2 years{" "}
              </option>
              <option style={{ cursor: "pointer" }} value="5">
                {" "}
                2-5 years{" "}
              </option>
              <option style={{ cursor: "pointer" }} value="50">
                {" "}
                above 5 years{" "}
              </option>
            </select>

            <label htmlFor="role">Type of Engineer :</label>
            <select
              disabled={!showFilter}
              id="role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
            >
              <option value="">--Please select--</option>
              <option value="Architectural Engineer">
                Architectural Engineer
              </option>
              <option value="Structural Engineer">Structural Engineer</option>
              <option value="Mechanical Engineer">Mechanical Engineer</option>
              <option value="Electrical Engineer">Electrical Engineer</option>
              <option value="Fire Protection Engineer">
                Fire Protection Engineer
              </option>
              <option value="Environmental Engineer">
                Environmental Engineer
              </option>
              <option value="Building Information Modeler (BIM)">
                Building Information Modeler (BIM)
              </option>
              <option value="Civil Engineer">Civil Engineer</option>
              <option value="Other Engineer">Other Engineer </option>
            </select>

            {showFilter ? (
              <button type="submit" onClick={handleClick}>
                {" "}
                Apply Filter{" "}
              </button>
            ) : (
              <button type="submit" onClick={handleRemoveFilter}>
                {" "}
                Remove Filter{" "}
              </button>
            )}
          </form>
        </div>

        {/* <div className="container"> */}
        {/* <div className="Container-main-worker"> */}

        {engineers?.length === 0 && showFilter === false ? (
          showNotification()
        ) : (
          <div
            className="workers-page-workers-group"
            style={{
              boxSizing: "border-box",
              width: "100%",
            }}
          >
            {loading ? (
              engineers?.map((engineer) => {
                return <EngineerCard key={engineer._id} engineer={engineer} />;
              })
            ) : (
              <Spinner className="spinner m-5" />
            )}
          </div>
        )}

        {/* {
              <div className="workers-page-workers-group">
              engineers?.length === 0 && showFilter === false ? showNotification() : <div className="workers-page-workers-group-12">
                {loading ? engineers.map((engineer) => {
                  return <EngineerCard key={engineer._id} engineer={engineer} />;
                }) : <Spinner className='spinner m-5' />}
                </div>
              </div>
            } */}

        {/* </div> */}
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default EngineerPage;
