import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AccountContext } from "../../../context/AccountProvider";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RemoveModeratorIcon from '@mui/icons-material/RemoveModerator';
import '../../../css/Admin.css'

function GroupList({group}) {
    const navigate = useNavigate();
    const {account,setAccount}= useContext(AccountContext);

    const handleClick = () => {
        // setAccount(worker._id)z
        console.log("Submitted");
        // console.log(worker);
        navigate('/groupProfile',{state:{group}});
        // setAccount(worker._id)
        // console.log("id of other obj is ",account)
        // navigate('/profileDashbord', {state:{worker}});
      }
  return (
    <div>
      
      <div className="hvr row  p-1 pb-1 m-2 text-center"  style={{border:"1px solid rgb(229 232 236)" ,borderRadius:"30px"}} onClick ={handleClick}>
              <div className="col">
              <p className="fs-5" >{group?.groupName}</p> 
              </div>
              <div className="col">
              <p className="fs-5">{group?.category}</p> 
              </div>
              
              <div className="col">
              <p className="fs-5">{group?.address}</p> 
              </div>
             
              <div className="col">
              <p className="fs-5">{group?.phone}</p> 
              </div>
              <div className="col">
              <p className="fs-5">{group?.price}</p> 
              </div>
              <div className="col text-center">
              
              {group?.status?<VerifiedUserIcon style={{color:"#056805"}} fontSize='large'/>:<RemoveModeratorIcon style={{color:"#c88f06"}} fontSize='large'/>}
              </div>

              
              
              
             </div>
 
   
    </div>
  )
}

export default GroupList
