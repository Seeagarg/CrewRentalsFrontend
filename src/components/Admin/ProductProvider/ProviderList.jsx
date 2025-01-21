import React, { useEffect, useState } from 'react';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RemoveModeratorIcon from '@mui/icons-material/RemoveModerator';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AccountContext } from "../../../context/AccountProvider";
import '../../../css/Admin.css'
import { getUser } from '../../../service/api';

function ProviderList({provider}) {
    const navigate = useNavigate();
  const {account,setAccount}= useContext(AccountContext);

  const [profile, setProfile]= useState();



  useEffect(()=>{
      getSetProfile();
  },[]);

  const getSetProfile= async()=>{
    const res=await getUser(provider.userId)
    // console.log("res for provider is ", res);
    setProfile(res);

  }
  const handleClick = () => {
    // setAccount(worker._id)
    // console.log("Submitted");
    // console.log(provider);
    navigate('/providerProfile',{state:{provider}})
    
  }
  return (
    <div>
      <div className="hvr row  p-1 pb-1 m-2 text-center"  style={{border:"1px solid rgb(229 232 236)" ,borderRadius:"30px"}} onClick ={handleClick}>
              <div className="col">
              <p className="fs-5" >{profile?.fullname}</p> 
              </div>
              <div className="col">
              <p className="fs-5">{provider?.aadhar}</p> 
              </div>
              <div className="col">
              <p className="fs-5">{provider?.address}</p> 
              </div>
              <div className="col">
              <p className="fs-5">{provider?.country}</p> 
              </div>
              
              <div className="col text-center">
              
              {provider.verified?<VerifiedUserIcon style={{color:"#056805"}} fontSize='large'/>:<RemoveModeratorIcon style={{color:"#c88f06"}} fontSize='large'/>}
              </div>
             </div>
    </div>
  )
}

export default ProviderList
