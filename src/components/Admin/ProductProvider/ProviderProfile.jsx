import React,{useState,useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../../Pages/Header';
import Footer from '../../Footer';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RemoveModeratorIcon from '@mui/icons-material/RemoveModerator';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import DeleteIcon from '@mui/icons-material/Delete';
import Confirmation from '../../Confirmation';
import VerifyConfirmation from '../../VerifyConfirmation';
import { deleteRentalProvider, getProductProvider, getUser, updateRentalProvider } from '../../../service/api';
import { sendVerificationMail } from '../../../utils/send-mail';
import { ToastContainer, toast } from "react-toastify";
import AddIcon from '@mui/icons-material/Add';


function ProviderProfile() {
    const location = useLocation();
    const provider = location.state.provider;
    const navigate = useNavigate();
    const [displayConfirmation,setDisplayConfirmation] = useState(false)
    const [displayVerifyUser,setDisplayVerifyUser] = useState(false)
    const [prdctProvider,setPrdctProvider] = useState();
    const [data,setData] = useState();
    
    // const[notVerified,setVerified] = useState(worker.verified)

    useEffect(()=>{
      getSetData();
    },[])
    const getSetData=async()=>{
      const res = await getUser(provider?.userId);
      console.log(res);
      setData(res);
    }
    useEffect(()=>{
      getSetPrdctProvider();
    },[displayVerifyUser])

    const getSetPrdctProvider=async()=>{
      // console.log(provider);
      const res = await getProductProvider(provider?._id);
      // console.log(" respomse from back",res[0]);
      setPrdctProvider(res[0]);
      // console.log("========",prdctProvider);
    }
    const deleteCurrentUser=async()=>{
      const res = await deleteRentalProvider(prdctProvider?._id);
      setDisplayConfirmation(true);
      navigate('/providers');
    }
    const deleteUser=()=>{
      // console.log("deletedUser");
      setDisplayConfirmation(true);
    }
    const hideConfirmation = () => {
      // console.log("Hide confirmation");
      setDisplayConfirmation(!displayConfirmation);
    };

    const hideVerifyConfirmation=()=>{
      setDisplayVerifyUser(false);
    }

    const Verify=()=>{
      // console.log("Submitted");
      setDisplayVerifyUser(!displayVerifyUser);
    }

    const verifyCurrentUser=async()=>{
      // console.log("=======",provider._id)
      // console.log(prdctProvider);
      const res = await updateRentalProvider(provider?._id,{verified:true})
      // setPrdctProvider(provider)

      console.log("res",res);
      if(res){
        
          // console.log("fun is called !!!")
          sendVerificationMail(data.fullname,data.email)
          showNotification();
        
      }
      
      setDisplayVerifyUser(!displayVerifyUser);
      // getSetPrdctProvider();
    }

    const showNotification = () => {
      toast.success("Service provider Verified!!", {
        autoClose: 2000,
      });
    }

  return (
    <div>
      <Header/>
      <div className="container mb-5 p-0 " style={{backgroundColor:"rgb(245, 245, 245)",marginTop:"20vh",borderRadius:"30px",}}>
      <img src="https://img.freepik.com/premium-photo/abstract-white-grey-tone-paper-background-texture-pastel-color_364465-75.jpg?w=2000" alt="" style={{height:"30vh",width:"100%",borderRadius:"30px",backgroundSize:"cover,contain",borderBottom:"2px solid gray"}}/>
      <div className="m-0 ms-5 p-5"  >

      <div className="d-inline-flex">
      <div className='text-center p-3'>
      <img src={provider?.profilePic} alt="" style={{height:"30vh",width:"30vh",borderRadius:"50%",marginTop:"-20px",borderBottom:"2px solid gray",boxShadow:"8px 8px 8px 8px #888888"}} />
       <div className="m-3">
       <p className='fs-3 mb-0 fw-bold'> {data?.fullname} </p>
       <p className='fs-3 mt-0' style={{textDecoration:"underline"}}>Contact me:</p>
       <div className="row">
        <div className="col-3">
        <InstagramIcon />
        </div>
        <div className="col-2">
        |
        </div>
        <div className="col-3">
        <FacebookIcon />
        </div>
        <div className="col-2">
        |
        </div>
        <div className="col-2">
        <TwitterIcon/>
        </div>
       </div>
       </div>
       </div>

        <div className="ms-5 mt-5 bg-light p-3 w-100 " style={{borderRadius:"30px",border:"1px solid gray"}}>.
        <p className='fs-2 fw-bold'>Product Details...</p>
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>Full Name:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{data?.fullname}</span>
      </div>
      <hr />
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>Address:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{provider?.address}</span>
      </div>
      <hr />
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>Country:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{provider?.country}</span>
      </div>
      <hr />
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>Aadhar No. :{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{provider?.aadhar}</span>
      </div>
      <hr/>
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>View Aadhar{" "} </span>
      <span className='fs-3 ms-3 mt-0 float-end'><AddIcon fontSize='large'/></span>
      </div>
      </div>

      <div className='m-5 p-3 bg-light text-center w-50' style={{borderRadius:"30px",border:"1px solid gray",height:"80%"}} >
        <p className='fs-3 fw-bold  m-5'>User Verification or Delete User</p>
        <div className="row">
        <div className='col' >
        {/* {
         ()=>{
          if(provider.verified){
            <VerifiedUserIcon fontSize='large'/>
          }
          else{
            <RemoveModeratorIcon fontSize='large' />
          }
         }
        } */}
          {prdctProvider?.verified?<VerifiedUserIcon fontSize='large' style={{color:"#056805"}}/>:<RemoveModeratorIcon className='icon-hvr' style={{color:"red"}} fontSize='large' onClick={Verify}/>}
        </div>
        <div className='col'>
        <DeleteIcon className='icon-hvr' fontSize='large' onClick={deleteUser} style={{color:"#b51a1a"}}/>
        </div>
        </div>
        {/* <RemoveModeratorIcon fontSize='large' /> */}
      </div>
      </div>

      {/* <div className='m-5 bg-light p-5 mb-3' style={{borderRadius:"30px",border:"1px solid gray"}} >
      <p className='fs-2 fw-bold'>Project Details...</p>
      <div>
      <span className='fs-3 fw-bold ms-5 mt-0'>Project Name:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>Construction of Park</span>
      </div>
      <hr />
      <div>
      <span className='fs-3 fw-bold ms-5 mt-0'>Description:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>It is in 50 hectares of Area .Footpaths Are Made . </span>
      </div>
      <hr />
      <div>
      <span className='fs-3 fw-bold ms-5 mt-0'>Location:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>Jalandhar </span>
      </div>
      <hr />
      <div>
      <span className='fs-3 fw-bold ms-5 mt-0'>Address:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>Model Town street:404 </span>
      </div>
      </div> */}
        
       
      </div>
      </div>
      <Footer/>
      <ToastContainer />
      <VerifyConfirmation showModal={displayVerifyUser} confirmModal={Verify} verifyCurrentUser={verifyCurrentUser}  hideModal={hideVerifyConfirmation}  message={"Do You want to verify the user?"}/>
      <Confirmation showModal={displayConfirmation} confirmModal={deleteUser} deleteCurrentUser={deleteCurrentUser}  hideModal={hideConfirmation}  message={"Are You Sure??"}/>
    </div>
  )
}

export default ProviderProfile
