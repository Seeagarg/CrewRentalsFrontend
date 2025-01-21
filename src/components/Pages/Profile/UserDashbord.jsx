
import React, { useEffect, useState } from 'react'
import Header from '../Header';
import Footer from '../../Footer';
import "./ProfileDashbord.css"
import {  FaInstagram,  FaTwitter , FaFacebook } from "react-icons/fa";
import { getUser, getProjects } from "../../../service/api"
import AddIcon from '@mui/icons-material/Add';
import AddProject from './AddProject';
import AllProjects from '../../AllProjects';
import Button from 'react-bootstrap/Button';





  const UserDashbord = () => {


    const [user,setUser]=useState();
    const [project,setProject] = useState([]);
    const [projectInfo,setProjectInfo] = useState(false);
    const [showForm,setShowForm] = useState(false);
    const [showAllProjects,setShowAllProjects] = useState(false);
    const [userDash,setUserDash] = useState(true);

    useEffect(()=>{
      const role=localStorage.getItem("role");
      // console.log("role is ", role);
    
          getUserData();
          getSetProject();
      
    },[])

    
    const getSetProject=async()=>{
      let data=localStorage.getItem("user");
       data= JSON.parse(data)
      const res = await getProjects(data?._id);
      // console.log(data?._id)
      // console.log("project to show ")
      // console.log("----------------",res);
      if(res[0]){
        setProjectInfo(true);
      };
      setProject(res);
      
    }
 

      // const [user,setUser]=useState();


     
      const getUserData= async()=>{
        
        let data=localStorage.getItem("user");
        data= JSON.parse(data)
        // console.log("user data is ",data)
        let res=await getUser(data?._id)
        console.log("user data is ",data)
        
        if(res){
          // console.log("res is ",res.price);
          setUser(res);
          // console.log("user data is popopop ", user._id);
        }

      }

    const AddProjectForm=()=>{
      console.log("form is clicked")
      setShowForm(true);
    }

    

    const hideModal=()=>{
      getSetProject();
      setShowForm(false);
    }


    return (
      <>
      <Header/>

    
      

      <section   className='profiledashbordcon' style={{  backgroundColor: '#f5f5f5' }}>
        <div className="container-dashbord">
          <div className="row">

            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <img src='https://avatars.githubusercontent.com/u/74814381?v=4' className="img-fluid mb-2" alt="User profile" />
                  <h5 className="card-title">{user?.fullName}</h5>
                  {/* <p className="card-text">Location: {user?.address}, {user?.country}</p> */}
              
                  
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
                  <p className="card-text-dashbord"><strong>Full Name:</strong> {user?.fullname}</p>
                  <hr className='hr-dashbord' />
                  <p className="card-text-dashbord"><strong>Email:</strong> {user?.email}</p>
                  {/* <hr className='hr-dashbord' />
                  <p className="card-text-dashbord"><strong>Phone Number:</strong> {user?.phone}</p>
                  <hr className='hr-dashbord' />
                  <p className="card-text-dashbord"><strong>Address:</strong> {user?.address}, {user?.country}</p> */}
                </div>
              </div>
            <div className="card-dashbord">
            
              <div className="card-body-dashbord">
                <h5 className="card-title-dashbord">Project Information <AddIcon className='float-end' style={{cursor:"pointer"}} onClick={AddProjectForm}/></h5>
                <hr className='hr-dashbord' />
                {projectInfo? (
                <>

                <p className="card-text-dashbord"><strong>Project Title:</strong>{" "}{project[0]?.title}</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Description:</strong>{" "}{project[0]?.description} </p>

                {/* <p className="card-text-dashbord"><strong>Project Title: &nbsp;&nbsp;</strong>{project?.title}</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Description: &nbsp;&nbsp;</strong>{project?.description} </p> */}

                <hr className='hr-dashbord' />
                <Button variant="info" className='float-end' style={{marginTop:"-3vh"}} onClick={()=>{setShowAllProjects(true)}}>View All</Button>

                <p className="card-text-dashbord"><strong>Location:</strong> Jalandhar</p>
                {/* <p className="card-text-dashbord"><strong>Address:</strong> 123 Main St, New York, NY 10001</p> */}
                </>)
                :(<p className="card-text-dashbord">No Project to show</p>)
                }

{/*               
              <div className="col-md-6">
              <div className="card-dashbord">
                <div className="card-body-dashbord">
                  <h5 className="card-title-dashbord">Project Information</h5>
                  <hr className='hr-dashbord' />
                  <p className="card-text-dashbord"><strong>Project Name:</strong> John Doe</p>
                  <hr className='hr-dashbord' />
                  <p className="card-text-dashbord"><strong>Description:</strong> john.doe@example.com</p>
                  <hr className='hr-dashbord' />
                  <p className="card-text-dashbord"><strong>Location:</strong> Jalandhar</p>
                  <hr className='hr-dashbord' />
                  <p className="card-text-dashbord"><strong>Address:</strong> 123 Main St, New York, NY 10001</p>
                </div>

              </div>
            
            </div> */}
            </div>
            
          </div>
          
        </div>
      </div>
      <AddProject showModal={showForm} hideModal={hideModal} userId={user?._id} />
    </div>   
      </section>   

      <AllProjects showModal={showAllProjects} hideModal={()=>{setShowAllProjects(false)}} projects ={project} projectInfo={projectInfo} userDash={()=>{setUserDash(true)}} />
      <Footer/>

      </>
    )
  }

  export default UserDashbord
