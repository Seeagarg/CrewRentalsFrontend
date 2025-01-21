
import "../../css/Groupworkers.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../service/api";

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




const GroupWorkerCard = ({ groupWorker }) => {

    const [user, setUser]= useState();
    useEffect(()=>{
        getSetUser();
    },[])

    const navigate= useNavigate()

    const getSetUser= async()=>{
            const res=await getUser(groupWorker?.userId);

            setUser(res);
    }
    const handleClick=()=>{
        // setAccount(engineer._id)
        const user={
            id:groupWorker?._id,
            userId:groupWorker.userId,
            role:"groupWorker"
        }
        navigate('/profileDashbord', {state:{user}});
    }



    return (
      <div className="card-workers-group my-4" onClick={handleClick}>
      {/* // <div className="workers-page-workers"> */}
        <div className="image-container-workers-group mt-2" >
          <img src={groupWorker?.profilePic} alt={groupWorker?.groupName} />
        </div>
        <div className="details-workers-group m-2">
          <h2 style={nameWorker}>{groupWorker?.groupName}</h2>
          <p style={parastyle}>Category: <span style ={variableFields}>{groupWorker.category}</span></p>
          <p style={parastyle}>Location: <span style ={variableFields}>{groupWorker.address}, {groupWorker.country}</span></p>
          <p style={parastyle}>Available: <span style ={variableFieldsYes}>{groupWorker.available ? 'Yes' : 'No'}</span></p>
          <p style={parastyle}>Status: <span style ={variableFieldsYes}>{groupWorker.status ? <span style={{color:"green"}}> Verified </span>: <span style={{color:"red"}}> Not Verified </span>}</span></p>
          <p style={parastyle}>No. of Members: <span style ={variableFields} >{groupWorker.groupSize}</span></p>
          <p style={parastyle}>Group Price per day: <span style ={variableFields}>{groupWorker.price}</span></p>
          <p style={parastyle}>Experience: <span style ={variableFields} >{groupWorker.experience}</span></p>
          <p style={parastyle}>Phone no: <span style ={variableFields} >{groupWorker.phone}</span></p>
        </div>
      </div>
    );
  };

  export default GroupWorkerCard;