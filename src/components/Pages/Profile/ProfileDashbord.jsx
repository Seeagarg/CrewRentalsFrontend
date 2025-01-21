import React, { useEffect, useState } from 'react'
import Header from '../Header';
import Footer from '../../Footer';
import "./ProfileDashbord.css"
import { FaDiscord, FaInstagram, FaYoutube , FaTwitter , FaFacebook } from "react-icons/fa";
import { AccountContext } from '../../../context/AccountProvider';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { getContractor, getEngineer, getGroupWorker, getUser, getWorkerData, setConversation,getProjects } from '../../../service/api';
import AllProjects from '../../AllProjects';


 const  ProfileDashbord =() => {
    const location = useLocation();
     const worker=location.state.user;
     console.log("profile is ", worker)
     const navigate= useNavigate(); 

     const [profile, setProfile]= useState();
    const [personalData, setPersonalData]= useState();
      const { socket, setActiveUsers, setUser,person, setPerson, user}=useContext(AccountContext)

      const [project,setProject] = useState([]);
      const [projectInfo,setProjectInfo] = useState(false);
      const [showAllProjects,setShowAllProjects] = useState(false);

      useEffect(()=>{
        getSetProfile();
        getSetProject();
      },[])

      const getSetProfile= async()=>{

           const data= await getUser(worker.userId);
           setPersonalData(data);
           if(worker.role==="engineer"){
             const res= await getEngineer(worker.id);
             setProfile(res);
           }
           else if(worker.role==="worker"){
            const res= await getWorkerData(worker?.id);
            setProfile(res);
          }
          else if(worker.role==="contractor"){
            const res= await getContractor(worker?.id);
            setProfile(res);
          }
          else if(worker.role==="groupWorker"){
            const res= await getGroupWorker (worker.id);
            setProfile(res);
          }


      }
     
      
     const handleMessage=async()=>{
        //  worker._id=worker.id
        console.log("person alsbegjjetb ", personalData)
         setPerson(personalData)
         const data=JSON.parse(localStorage.getItem("user"));
           console.log("worker is on click msg ", worker);
        //  setUser(data)
        //  console.log("worker is ", worker)
         const res=await setConversation({
                senderId:JSON.parse(localStorage.getItem("user"))._id,
                receiverId:worker?.userId
         })
        //  console.log("res form profile page is ", res);

         socket.current?.emit('addUsers',user)
         socket.current?.on("getUsers", users=> {
        //      // console.log("list of active users from backend --> ", users);
             setActiveUsers(users);
         })

         navigate("/chatDialog")
    } 

    const getSetProject=async()=>{
      const res = await getProjects(worker.userId);
      console.log(res);
      if(res[0]){
        setProjectInfo(true);
      }
      setProject(res);
      console.log()
    }

  return (
    <>
    <Header/>
    <section className='profiledashbordcon' style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container-dashbord">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                {/* <img src='https://media.istockphoto.com/id/1346124841/photo/successful-construction-site-worker-thinking.jpg?b=1&s=170667a&w=0&k=20&c=Xzq26ISOhRuQK95yVQKmgAqKS6IexXZNqf1TBmHjeZA=' className="img-fluid mb-2" alt="User profile" /> */}
                <img src={profile?.profilePic} className="img-fluid mb-2" alt="User profile" />
                <h5 className="card-title">{personalData?.fullname}</h5>
                <p className="card-text">Location: {profile?.address} , {profile?.country}</p>

                {

                personalData?._id === JSON.parse(localStorage.getItem("user"))._id? null:
                <div className="btn-group">
                  <button type="button" className="btn btn-primary">Follow</button>
                  <button type="button" className="btn btn-secondary" onClick={handleMessage}>Message</button>
                </div>
 }
              </div>
            </div>
            <div className="card-dashbord">
              <div className="card-body-dashbord">
                <h5 className="card-title-dashbord">Social Media</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><a href="#">Twitter</a><FaTwitter style={{color: 'blue'}} className="icons ms-2" /></li>
                 
                  <li className="list-group-item"><a href="#">Instagram</a><FaInstagram style={{color: 'blue'}} className="icons ms-2"/></li>
                  <li className="list-group-item"><a href="#">Facebook</a><FaFacebook style={{color: 'blue'}} className="icons ms-2"/></li>
                </ul>
              </div>
            </div>
            
          </div>
          <div className="col-md-6">
            <div className="card-dashbord">
              <div className="card-body-dashbord">
                <h5 className="card-title-dashbord">Personal Information</h5>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Full Name: </strong>{personalData?.fullname}</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Email:</strong> {personalData?.email}</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Phone Number:</strong> {profile?.phone}</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Address:</strong> {profile?.address},&nbsp; {profile?.country}</p>
              </div>
            </div>
            <div className="col-md-6">
            <div className="card-dashbord">
              <div className="card-body-dashbord">

                {
                  worker.role==="groupWorker" && <>
                     <h5 className="card-title-dashbord">Group Information</h5>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Group Name:</strong> {profile?.groupName} </p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Experience:</strong> {profile?.experience}</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Status:</strong>{profile?.status ? <span style={{color:"green"}}> Verified </span>: <span style={{color:"red"}}> Not Verified </span>} </p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>No. of members:</strong> {profile?.groupSize}</p>
                <p className="card-text-dashbord"><strong>Price per day:</strong> {profile?.price}</p>
                  

                  </>
                }

                {
                
                 worker.role!=="groupWorker" && <>
                 {/* <div className="position-relative "> */}
                <h5 className="card-title-dashbord">Project Information</h5>
                <hr className='hr-dashbord' />
                {projectInfo?(
                  <>
                <p className="card-text-dashbord"><strong>Project Title:</strong>{" "}{project[0]?.title}</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Description:</strong>{" "}{project[0]?.description}</p>
                <Button variant="info" className='float-end' style={{marginTop:"-3vh"}} onClick={()=>{setShowAllProjects(true)}}>View All</Button>
                </>
                ):(<p className="card-text-dashbord">No Project To Show.</p>)}
                {/* </div> */}
                {/* <hr className='hr-dashbord' /> */}
                {/* <p className="card-text-dashbord"><strong>Location:</strong> Jalandhar</p> */}
                {/* <hr className='hr-dashbord' /> */}
                {/* <p className="card-text-dashbord"><strong>Address:</strong> 123 Main St, New York, NY 10001</p> */}
                </>
 }
              </div>
            </div>
          </div>
          </div>
          
        </div>
        
      </div>
      
    </section>
    <AllProjects showModal={showAllProjects} hideModal={()=>{setShowAllProjects(false)}} projects ={project} projectInfo={projectInfo}  />
    <Footer/>
    </>
  )
}

export default ProfileDashbord;