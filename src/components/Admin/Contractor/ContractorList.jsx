import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AccountContext } from "../../../context/AccountProvider";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RemoveModeratorIcon from '@mui/icons-material/RemoveModerator';
import '../../../css/Admin.css'
import { getUser } from '../../../service/api';


function ContractorList({contractor}) {
    const navigate = useNavigate();
    const {account,setAccount}= useContext(AccountContext);

    const [profile, setProfile]= useState();

    useEffect(()=>{
      getSetProfile();
    },[])

    const getSetProfile=async()=>{
        const res=await getUser(contractor.userId);
        // console.log("res for contracvsvhdh ", res);
        setProfile(res);
    }
    const handleClick = () => {
        
    //     console.log("Submitted");
    //     console.log(worker);
        navigate('/contractorProfile',{state:{contractor}});
        
      }
  return (
    <div>
      <div className="hvr row  p-1 pb-1 m-2" contractor={contractor} key={contractor._id} style={{border:"1px solid rgb(229 232 236)" ,borderRadius:"30px"}} onClick ={handleClick}>
              <div className="col">
              <p className="fs-5" >{profile?.fullname}</p> 
              </div>
              <div className="col">
              <p className="fs-5">{contractor?.address}</p> 
              </div>
              
              <div className="col">
              <p className="fs-5">{contractor?.role}</p> 
              </div>
              <div className="col">
              <p className="fs-5">{contractor.price}</p> 
              </div>
              <div className="col">
              <p className="fs-5">{contractor.experience}</p> 
              </div>
              <div className="col text-center">
              {contractor.verified?<VerifiedUserIcon fontSize='large' style={{color:"#056805"}}/>:<RemoveModeratorIcon  style={{color:"#c88f06"}}  fontSize='large'/>}
              </div>
             </div>
    </div>
  )
}

export default ContractorList
