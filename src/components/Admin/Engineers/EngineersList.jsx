import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AccountContext } from "../../../context/AccountProvider";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RemoveModeratorIcon from '@mui/icons-material/RemoveModerator';
import '../../../css/Admin.css'
import { getUser } from '../../../service/api';

function EngineersList({engineer}) {
    const navigate = useNavigate();
    const {account,setAccount}= useContext(AccountContext);
    const [profile,setProfile] = useState();

    useEffect(()=>{
      getSetProfile()
    },[])
    const getSetProfile=async()=>{
      const res = await getUser(engineer.userId);
      // console.log(res);
      setProfile(res);
    }
    const handleClick = () => {
        console.log("Submitted");
        console.log(engineer);
        navigate('/engineerProfile',{state:{engineer}});
      }
    return (
    <div>
    <div className="hvr row  p-1 pb-1 m-2"  style={{border:"1px solid rgb(229 232 236)" ,borderRadius:"30px"}} onClick ={handleClick}>
              <div className="col">
              <p className="fs-5" >{profile?.fullname}</p> 
              </div>
              <div className="col">
              <p className="fs-5">{engineer?.age}</p> 
              </div>
              
              <div className="col">
              <p className="fs-5">{engineer?.address}</p> 
              </div>
             
            
              <div className="col">
              <p className="fs-5">{engineer?.type}</p> 
              </div>
              <div className="col">
              <p className="fs-5">{engineer?.experience}</p> 
              </div>
              <div className="col text-center">
              
              {engineer?.status?<VerifiedUserIcon  style={{color:"#056805"}} fontSize='large'/>:<RemoveModeratorIcon fontSize='large'  style={{color:"#c88f06"}}/>}
              </div>
             </div>
      
    </div>
  )
}

export default EngineersList
