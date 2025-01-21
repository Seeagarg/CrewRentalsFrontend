import React,{useState, useEffect} from 'react'
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
import '../../../css/Admin.css'
import { deleteWorker, getWorkerData , updateWorker, getUser, getProjects} from '../../../service/api';
import { sendVerificationMail } from '../../../utils/send-mail';
import AllProjects from '../../AllProjects';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from "react-toastify";
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';

// import { BorderTop } from '@mui/icons-material';

function WorkerProfile() {
    const location = useLocation();
    const data = location.state.worker;
    const navigate = useNavigate();

    const [displayConfirmation,setDisplayConfirmation] = useState(false);
    const [displayVerifyUser,setDisplayVerifyUser] = useState(false)
    const [projectInfo,setProjectInfo] = useState(false);
    const [showAllProjects,setShowAllProjects] = useState(false);
    
    // const[notVerified,setVerified] = useState(worker.verified)
      // const navigate= useNavigate()
    const [worker, setWorker]= useState()
    const [project,setProject] = useState([]);
    const getSetWorker= async()=>{
      let res=await getWorkerData(data._id);
      console.log("res 000 ", res);
      setWorker(res);
    }
    useEffect(()=>{
      getSetWorker();
  },[displayVerifyUser])

  const [profile, setProfile]= useState();

    useEffect(()=>{
      getSetProfile();
      getSetProject();
    },[])

    const getSetProfile=async()=>{
        const res=await getUser(data.userId); 
        setProfile(res);
    }

    const getSetProject=async()=>{
      const res = await getProjects(data.userId);
      console.log(res);
      if(res[0]){
        setProjectInfo(true);
      }
      setProject(res);
    }




    const deleteUser=async()=>{
      console.log("deletedUser");
      //  const res= await deleteWorker(worker._id);
      //  console.log("res after delete is ",res)
      setDisplayConfirmation(true);
    }

    const verifyCurrentUser=async()=>{
      // console.log("user vcnehfr")
      const res=await updateWorker(worker._id, {verified:true});
      console.log("res for update is ", res);
      if(res){
        // console.log("fun is called !!!")
      
        sendVerificationMail(profile.fullname,profile.email);
        showNotification();
      }
      setDisplayVerifyUser(!displayVerifyUser);
  }


  const deleteCurrentUser= async()=>{
    const res= await deleteWorker(worker._id);
    setDisplayConfirmation(true);
    navigate("/adminWorkers")
      //  console.log("res after delete is ",res)
  }


    const hideConfirmation = () => {
      console.log("Hide confirmation");
      setDisplayConfirmation(false);
    };

    const hideVerifyConfirmation=()=>{
      setDisplayVerifyUser(false);
    }

    const Verify=()=>{
      console.log("Submitted");
      setDisplayVerifyUser(!displayVerifyUser);
      // const res=await updateWorker(worker._id, {verified:true});
      
    }


    const showNotification = () => {
      toast.success("Service provider Verified!!", {
        autoClose: 2000,
      });
    }

    const onClickHandler=()=>{
      {
        worker.aadharPic ?
        window.open(`${worker.aadharPic}`,"_blank")
        :
        window.open("https://images.hindustantimes.com/tech/img/2022/12/19/original/aadhaar-card-7579588_960_720_1671442149571.webp","_blank")
      }
      
    }


  return (
    <div>
      <Header/>
      <div className="container mb-5 p-0 " style={{backgroundColor:"rgb(245, 245, 245)",marginTop:"20vh",borderRadius:"30px",}}>
      <img src="https://img.freepik.com/premium-photo/abstract-white-grey-tone-paper-background-texture-pastel-color_364465-75.jpg?w=2000" alt="" style={{height:"30vh",width:"100%",borderRadius:"30px",backgroundSize:"cover,contain",borderBottom:"2px solid gray"}}/>
      <div className="m-0 ms-5 p-5"  >

      <div className="d-inline-flex">
      <div className='text-center p-3'>
      <img src={profile?.profilePic} alt="" style={{height:"30vh",width:"30vh",borderRadius:"50%",marginTop:"-20px",borderBottom:"2px solid gray",boxShadow:"8px 8px 8px 8px #888888"}} />
       <div className="m-3">
       <p className='fs-3 mb-0 fw-bold'> {profile?.fullname} </p>
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
      <span className='fs-3 fw-bold ms-5 mt-0'>Email:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{profile?.email}</span>
      </div>
      <hr />
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>Phone No.{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{worker?.phone}</span>
      </div>
      <hr />
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>Address:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{worker?.address}</span>
      </div>
      <hr/>
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>View Aadhar{" "} </span>
      
      <span className='fs-3 ms-3 mt-0 float-end' style={{cursor:"pointer"}} onClick={onClickHandler}><VisibilityIcon fontSize='large'/></span>
      
      
      </div>
      
      </div>

      <div className=' m-5 p-3 bg-light text-center w-50' style={{borderRadius:"30px",border:"1px solid gray",height:"80%"}} >
        <p className='fs-3 fw-bold  m-5'>User Verification or Delete User</p>
        <div className="row">
        <div className='col ' >
        {/* {
         ()=>{
          if(worker.verified){
            <VerifiedUserIcon className='icon-hvr' fontSize='large'/>
          }
          else{
            <RemoveModeratorIcon className='icon-hvr' fontSize='large' />
          }
         }
        } */}
          {worker?.verified?<VerifiedUserIcon  fontSize='large'  style={{color:"#056805"}} />:<RemoveModeratorIcon className='icon-hvr' fontSize='large' style={{color:"#c88f06"}} onClick={Verify}/>}
        </div>
        <div className='col '>
        <DeleteIcon className='icon-hvr' fontSize='large'  onClick={deleteUser} style={{color:"#b51a1a"}} />
        
        </div>
        </div>
        {/* <RemoveModeratorIcon fontSize='large' /> */}
      </div>
      {/* <div  className='row m-5 p-3 bg-light text-center w-50' style={{borderRadius:"30px",border:"1px solid gray",height:"80%"}}>
      Hello 
      </div> */}
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
      <hr />
      <Button variant="info" className='float-end' style={{marginTop:"-3vh"}} onClick={()=>{setShowAllProjects(true)}}>View All</Button>
      </>):<p className='fs-3 ms-3 mt-0'>No project To Show.</p>}
      {/* <div>
      <span className='fs-3 fw-bold ms-5 mt-0'>Location:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>Jalandhar </span>
      </div> */}
      {/* <hr />
      <div>
      <span className='fs-3 fw-bold ms-5 mt-0'>Address:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>Model Town street:404 </span>
      </div> */}
      </div>
      </div>
      </div>
      <Footer/>
      <ToastContainer />
      <AllProjects showModal={showAllProjects} hideModal={()=>{setShowAllProjects(false)}} projects ={project} projectInfo={projectInfo} />
      <VerifyConfirmation showModal={displayVerifyUser} confirmModal={Verify} verifyCurrentUser={verifyCurrentUser}  hideModal={hideVerifyConfirmation}  message={"Do You want to verify the user?"}/>
      <Confirmation showModal={displayConfirmation} confirmModal={deleteUser}  hideModal={hideConfirmation} deleteCurrentUser={deleteCurrentUser}  message={"Are You Sure??"}/>
    </div>
  )
}

export default WorkerProfile
