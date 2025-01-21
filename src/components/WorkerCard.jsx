
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/WorkersPage.css";
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';

const WorkerCard = ({ worker }) => {

  const navigate = useNavigate();
  //  const {setProfile, profile}= useContext(AccountContext)

  const { account, setAccount } = useContext(AccountContext)

  const parastyle = {
    marginTop: "5px",
    fontWeight: 'bold',
    fontFamily: 'Arial',
  }

  const nameWorker = {
    fontFamily: 'Helvet',
    fontWeight: 'bold',
    fontSize: '25px',
    textAlign: 'center',
    color: 'black',
  }

  const variableFields = {
    fontFamily: 'Helvet',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
    color: 'black',
  }

  const variableFieldsYes = {
    fontFamily: 'Helvet',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
    color: 'green'
  }
  const handleClick = () => {
    setAccount(worker._id)
    const user = {
      id: worker._id,
      userId: worker.userId,
      role: "worker"
    }
    // console.log("id of other obj is ",account)
    navigate('/profileDashbord', { state: { user } });
  }


  return (
    <>
      {/* <div className= "container"> */}
      <div onClick={handleClick} className="card-workers my-4">
        <div className="image-container-workers">
          {/* <img src={'https://media.istockphoto.com/id/1346124841/photo/successful-construction-site-worker-thinking.jpg?b=1&s=170667a&w=0&k=20&c=Xzq26ISOhRuQK95yVQKmgAqKS6IexXZNqf1TBmHjeZA='} alt={worker.name} /> */}
          <img src={worker.profilePic} alt={worker.fullName} />
        </div>
        <div className="details-workers m-3 p-3">
          <h5 style={nameWorker}>{worker.fullName}</h5>
          {/* <h2 style={nameWorker}>  Anshu  </h2> */}
          <p style={parastyle}>Age: <span style={variableFields}>{worker.age}</span></p>
          <p style={parastyle}>Location: <span style={variableFields}>{worker.address}</span></p>
          <p style={parastyle}>Available: <span style={variableFieldsYes}>{worker.status ? 'Yes' : 'No'}</span></p>
          <p style={parastyle}>Price per day: <span style={variableFields}>₹{worker.price}</span></p>
          <p style={parastyle}>Experience: <span style={variableFields} >{worker.experience} years</span></p>
          <p style={parastyle}>Phone: <span style={variableFields} >{worker.phone}</span></p>
          <p style={parastyle}>Status: <span style={variableFields} >{worker?.verified ? <span style={{ color: "green" }}> Verified </span> : <span style={{ color: "red" }}> Not Verified </span>}</span></p>
          <p style={parastyle}>Category: <span style={variableFields} >{worker?.role}</span></p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default WorkerCard;




