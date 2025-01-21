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
import { deleteEngineer, getEngineer, getProjects, getUser, updateEngineer } from '../../../service/api';
import { sendVerificationMail } from '../../../utils/send-mail';
import AllProjects from '../../AllProjects';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from "react-toastify";
import AddIcon from '@mui/icons-material/Add';


function EngineerProfile() {
  const location = useLocation();
    const engineer = location.state.engineer;
    const navigate = useNavigate();
    const [displayConfirmation,setDisplayConfirmation] = useState(false)
    const [displayVerifyUser,setDisplayVerifyUser] = useState(false);
    const [Engineer,setEngineer] = useState();
    const [username,setUsername] = useState();
    const[project,setProject] = useState([]);
    const[projectInfo,setProjectInfo] = useState();
    const [showAllProjects,setShowAllProjects] = useState(false);

    useEffect(()=>{
      getSetEngineer();
    },[displayVerifyUser])

    useEffect(()=>{
      getSetUsername();
      getSetProject();
    },[])


    const getSetUsername=async()=>{
      const res = await getUser(engineer.userId);
      // console.log(res);
      setUsername(res);
    }

    const getSetEngineer= async ()=>{
      const res = await getEngineer(engineer._id);
      setEngineer(res);
    }

    const getSetProject=async()=>{
      const res = await getProjects(engineer.userId);
      console.log(res);
      if(res[0]){
        setProjectInfo(true);
      }
      setProject(res);
    }

    const deleteUser=()=>{
      console.log("deletedUser");
      setDisplayConfirmation(true);
    }

    const deleteCurrentUser=async()=>{
      const res = await deleteEngineer(engineer._id);
      setDisplayConfirmation(true);
      navigate("/Engineers")
    }


    const hideConfirmation = () => {
      console.log("Hide confirmation");
      setDisplayConfirmation(!displayConfirmation);
    };

    const hideVerifyConfirmation=()=>{
      setDisplayVerifyUser(false);
    }

    const Verify=()=>{
      console.log("Submitted");
      setDisplayVerifyUser(!displayVerifyUser);
    }

    const verifyCurrentUser=async()=>{
      const res = updateEngineer(Engineer._id,{status:true});
      if(res){
        sendVerificationMail(username.fullname,username.email)
        showNotification();
      }
      setDisplayVerifyUser(!displayVerifyUser);

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
      <img src={engineer.profilePic} alt="" style={{height:"30vh",width:"30vh",borderRadius:"50%",marginTop:"-20px",borderBottom:"2px solid gray",boxShadow:"8px 8px 8px 8px #888888"}} />
       <div className="m-3">
       <p className='fs-3 mb-0 fw-bold'> {username?.fullname} </p>
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
      <span className='fs-3 ms-3 mt-0'>{username?.fullname}</span>
      </div>
      <hr />
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>Age:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{engineer?.age}</span>
      </div>
      <hr />
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>Location:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{engineer?.address}</span>
      </div>
      <hr />
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>Experience{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{Engineer?.experience}</span>
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
          {Engineer?.status?<VerifiedUserIcon style={{color:"#056805"}} fontSize='large'/>:<RemoveModeratorIcon style={{color:"#c88f06"}} className='icon-hvr' fontSize='large' onClick={Verify}/>}
        </div>
        <div className='col' >
        <DeleteIcon className='icon-hvr' style={{color:"#b51a1a"}} fontSize='large' onClick={deleteUser}/>
        </div>
        </div>
        {/* <RemoveModeratorIcon fontSize='large' /> */}
      </div>
      </div>

      <div className='m-5 bg-light p-5 mb-3' style={{borderRadius:"30px",border:"1px solid gray"}} >
      <p className='fs-2 fw-bold'>Project Details...</p>
      {projectInfo?(<>
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
      </>):<p className='fs-3 ms-3 mt-0'>No Project To Show.</p>}
      
     
      </div>
        
       
      </div>
      </div>
      <Footer/>
      <ToastContainer />
      <AllProjects showModal={showAllProjects} hideModal={()=>{setShowAllProjects(false)}} projects ={project} projectInfo={projectInfo} />
      <VerifyConfirmation showModal={displayVerifyUser} confirmModal={Verify} verifyCurrentUser={verifyCurrentUser}  hideModal={hideVerifyConfirmation}  message={"Do You want to verify the user?"}/>
      <Confirmation showModal={displayConfirmation} confirmModal={deleteUser} deleteCurrentUser={deleteCurrentUser}  hideModal={hideConfirmation}  message={"Are You Sure??"}/>
    </div>

  )
}

export default EngineerProfile
