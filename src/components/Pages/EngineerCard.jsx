


import { useContext, useEffect, useState } from "react";
import "../../css/WorkersPage.css";

import { getUser } from "../../service/api";
import { Navigate, useNavigate } from "react-router-dom";
const parastyle = {
  
   
    marginTop : "15px", 
    fontWeight: 'bold',
    // fontSize: '15px',
    fontFamily: 'Arial',
    // textAlign: 'center',
    
    // textShadow: '2px 2px 4px #000000',

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
    // textColor: 'green'
}




const EngineerCard = ({ engineer }) => {

    const [user, setUser]= useState();
    useEffect(()=>{
        getSetUser();
    },[])

    const navigate= useNavigate()

    const getSetUser= async()=>{
            const res=await getUser(engineer.userId);

            setUser(res);
    }
    const handleClick=()=>{
        // setAccount(engineer._id)
        const user={
            id:engineer._id,
            userId:engineer.userId,
            role:"engineer"
        }
        navigate('/profileDashbord', {state:{user}});
    }

    return (
      <div className="card-workers m-2 mb-4 " onClick={handleClick}>
        <div className="image-container-workers">
          <img src={engineer.profilePic} alt="loading" />
        </div>
        <div className="details-workers">
          <h2 style={nameWorker}> {user?.fullname.split(" ")[0]} </h2>
          <p style={parastyle}>Age: <span style ={variableFields}>{engineer.age}</span></p>
          <p style={parastyle}>Location: <span style ={variableFields}>{engineer.address}, {engineer.country}</span></p>
          <p style={parastyle}>Category: <span style ={variableFields}>{engineer.type}</span></p>
          <p style={parastyle}>Available: <span style ={variableFieldsYes}>{engineer.available ? 'Yes' : 'No'}</span></p>
          <p style={parastyle}>Status: <span style ={variableFields}>{engineer.status? <span style={{color:"green"}}> Verified </span>:<span style={{color:"red"}}> Not Verified </span> }</span></p>
          <p style={parastyle}>Experience: <span style ={variableFields} >{engineer.experience}</span></p>
        </div>
      </div>
    );
  };
  export default EngineerCard;