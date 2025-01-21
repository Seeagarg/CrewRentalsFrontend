import React,{useEffect, useState} from 'react';
import Header from '../../Pages/Header';
import Footer from '../../Footer';
import { useLocation, useNavigate } from 'react-router-dom'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RemoveModeratorIcon from '@mui/icons-material/RemoveModerator';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import DeleteIcon from '@mui/icons-material/Delete';
import Confirmation from '../../Confirmation';
import VerifyConfirmation from '../../VerifyConfirmation';
import { deleteContractor, getAllContractors, getContractor, getProjects, getUser, updateContractor } from '../../../service/api';
import { sendVerificationMail } from '../../../utils/send-mail';
import AllProjects from '../../AllProjects';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from "react-toastify";
import AddIcon from '@mui/icons-material/Add';

function ContractorProfile() {
    const location = useLocation();
    const data = location.state.contractor;  
    const [contractor, setContractor]= useState();
    const [showAllProjects,setShowAllProjects] = useState(false);

    

    const getSetContractor= async()=>{
      let res=await getContractor(data._id);
      // console.log("res 000 ", res);
      if(!res){
        alert("User does not exist");
        navigate("/ContractorList")
      }
      setContractor(res);
    }

   const [profile, setProfile]= useState();
    const navigate = useNavigate();
    const [displayConfirmation,setDisplayConfirmation] = useState(false);
    const [displayVerifyUser,setDisplayVerifyUser] = useState(false)
    const [project,setProject] = useState([]);
    const [projectInfo,setProjectInfo] = useState(false);

    useEffect(()=>{
      getSetContractor();
  },[displayVerifyUser])

    useEffect(()=>{
     getSetProfile();
     getSetProject();
    },[])

    const getSetProject=async()=>{
      const res = await getProjects(data.userId);
      console.log("id_____",data.userId)
      console.log(res);
      if(res[0]){
        setProjectInfo(true);
        setProject(res);
      }
      
    }

      const getSetProfile=async()=>{
        console.log("contractor is ", contractor);
        const res=await getUser(data.userId);
        console.log("res for profile is ", res);
        setProfile(res);
      }
    const deleteUser=async()=>{
      console.log("deletedUser");
      // const res= await deleteContractor(contractor._id);
      // console.log("delete contractor ",res);
      setDisplayConfirmation(true);
    }

    const deleteCurrentUser= async()=>{
      const res= await deleteContractor(contractor._id);
      setDisplayConfirmation(true);
      navigate("/ContractorList")
        //  console.log("res after delete is ",res)
    }

    const showNotification = () => {
      toast.success("Service Provider Verified !!", {
        autoClose: 2000,
      });
    }



    const hideConfirmation = () => {
      console.log("Hide confirmation");
      setDisplayConfirmation(!displayConfirmation);
    };

    const hideVerifyConfirmation=()=>{
      setDisplayVerifyUser(false);
    }

    const verifyCurrentUser=async()=>{
      
        const res=await updateContractor(contractor._id, {verified:true});
        console.log("res for update is ", res);
        if(res){
          console.log("fun is called !!!")
          sendVerificationMail(profile.fullname,profile.email)
          showNotification();
        }
        setDisplayVerifyUser(!displayVerifyUser);
    }

    const Verify=()=>{
      console.log("Submitted");
      
      setDisplayVerifyUser(!displayVerifyUser);
    }
    
  return (
    <div>
      <Header/>
      <div className="container mb-5 p-0 " style={{backgroundColor:"rgb(245, 245, 245)",marginTop:"20vh",borderRadius:"30px",}}>
      <img src="https://img.freepik.com/premium-photo/abstract-white-grey-tone-paper-background-texture-pastel-color_364465-75.jpg?w=2000" alt="" style={{height:"30vh",width:"100%",borderRadius:"30px",backgroundSize:"cover,contain",borderBottom:"2px solid gray"}}/>
      <div className="m-0 ms-5 p-5"  >

      <div className="d-inline-flex">
      <div className='text-center p-3'>
      <img src={contractor?.profilePic} alt="" style={{height:"30vh",width:"30vh",borderRadius:"50%",marginTop:"-20px",borderBottom:"2px solid gray",boxShadow:"8px 8px 8px 8px #888888"}} />
       <div className="m-3">
       {/* <p className='fs-3 mb-0 fw-bold'> {contractor.name} </p> */}
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
        <p className='fs-2 fw-bold'>Personal Details...</p>
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>Full Name:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{profile?.fullname}</span>
      </div>
      <hr />
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>Category:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{contractor?.role}</span>
      </div>
      <hr />
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>Location:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{contractor?.address}</span>
      </div>
      <hr />
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>Experience{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{contractor?.experience}</span>
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
          if(worker.verified){
            <VerifiedUserIcon fontSize='large'/>
          }
          else{
            <RemoveModeratorIcon fontSize='large' />
          }
         }
        } */}
          {contractor?.verified?<VerifiedUserIcon style={{color:"#056805"}}  fontSize='large'/>:<RemoveModeratorIcon  style={{color:"#c88f06"}}  className='icon-hvr' fontSize='large' onClick={Verify}/>}
        </div>
        <div className='col' >
        <DeleteIcon className='icon-hvr' fontSize='large' style={{color:"#b51a1a"}} onClick={deleteUser}/>
        </div>
        </div>
        {/* <RemoveModeratorIcon fontSize='large' /> */}
      </div>
      </div>

      <div className='m-5 bg-light p-5 mb-3' style={{borderRadius:"30px",border:"1px solid gray"}} >
      <p className='fs-2 fw-bold'>Project Details...</p>
      {projectInfo?(
        <>
      <div>
      <span className='fs-3 fw-bold ms-5 mt-0'>Project Title:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{project[0]?.title}</span>
      </div>
      <hr />
      <div>
      <span className='fs-3 fw-bold ms-5 mt-0'>Description:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{project[0]?.description} </span>
      </div>
      <Button variant="info" className='float-end' style={{marginTop:"-3vh"}} onClick={()=>{setShowAllProjects(true)}}>View All</Button>
      <hr />
      </>
      ):(<p className='fs-3 ms-3 mt-0'>No Project To show.</p>)
      }
      
      </div>
        
       
      </div>
      </div>
      <Footer/>
      <ToastContainer />
      <AllProjects showModal={showAllProjects} hideModal={()=>{setShowAllProjects(false)}} projects ={project} projectInfo={projectInfo} />
      <VerifyConfirmation showModal={displayVerifyUser} confirmModal={Verify} verifyCurrentUser={verifyCurrentUser} hideModal={hideVerifyConfirmation}  message={"Do You want to verify the user?"}/>
      <Confirmation showModal={displayConfirmation} deleteCurrentUser={deleteCurrentUser}  confirmModal={deleteUser}  hideModal={hideConfirmation}  message={"Are You Sure??"}/>
    </div>
  )
}

export default ContractorProfile
