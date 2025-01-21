import React from 'react';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RemoveModeratorIcon from '@mui/icons-material/RemoveModerator';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { AccountContext } from "../../../context/AccountProvider";
import { getUser } from '../../../service/api';
function List({worker}) {
    const navigate = useNavigate();
  const {account,setAccount}= useContext(AccountContext)

  const [profile, setProfile]= useState();

  useEffect(()=>{
    getSetProfile();
  },[])

  const getSetProfile=async()=>{
      const res=await getUser(worker.userId);
      // console.log("res for contracvsvhdh ", res);
      setProfile(res);
  }

    const handleClick = () => {
        // setAccount(worker._id)
        
        console.log("Submitted");
        // console.log(worker);
        navigate('/workerprofile',{state:{worker}})
        // setAccount(worker._id)
        // console.log("id of other obj is ",account)
        // navigate('/profileDashbord', {state:{worker}});
      }
  return (
    <div>
      <div className="hvr row  p-1 pb-1 m-2 text-center" worker={worker} key={worker._id} style={{border:"1px solid rgb(229 232 236)" ,borderRadius:"30px"}} onClick ={handleClick}>
              <div className="col">
              <p className="fs-5" >{profile?.fullname}</p> 
              </div>
              <div className="col">
              <p className="fs-5">{worker.age}</p> 
              </div>
              <div className="col">
              <p className="fs-5">{worker.address}</p> 
              </div>
              <div className="col">
              <p className="fs-5">{worker.price}</p> 
              </div>
              <div className="col">
              <p className="fs-5">{worker.experience}{" "} years</p> 
              </div>
              <div className="col">
              <p className="fs-5">{worker.phone}</p> 
              </div>
              <div className="col text-center">
              
              {worker.verified?<VerifiedUserIcon fontSize='large' style={{color:"#056805"}} />:<RemoveModeratorIcon fontSize='large'  style={{color:"#c88f06"}}  />}
              </div>
             </div>
 
    </div>
  )
}

export default List
