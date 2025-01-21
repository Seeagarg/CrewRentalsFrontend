import { getAllWorkers } from "../../../service/api";
import { useEffect,useState } from "react";
import HeaderAdmin from "../HeaderAdmin";
import WorkerCardAdmin from "../WorkerCardAdmin";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RemoveModeratorIcon from '@mui/icons-material/RemoveModerator';
// import "../../css/Groupworkers.css";
import Footer from "../../Footer";
import { useNavigate } from "react-router-dom";

// import  {AccountContext} from '../context/AccountProvider';

import List from "./List";
import Spinner from "../../Spinner";
// import { useNavigate } from "react-router-dom";

export const WorkersList=()=>{

  const [loading,setLoading] = useState(false);
  
  const[workers,setWorkers]=useState([]);
  useEffect(()=>{
    getWorkers();
  },[])
  
  const navigate= useNavigate();
  


  const  getWorkers= async ()=>{
      let result= await getAllWorkers();

      if(!result){
        alert("User does not exist");
        navigate("/adminWorkers")
      }


        setWorkers(result.data);
        setLoading(true);
        console.log("workers are ",workers);
 }
    return (
        <>
             <HeaderAdmin/>

             <div className="container p-2 mb-3 text-center" style={{backgroundColor:"#eef3f7",marginTop:"150px",position:"relative",borderRadius:"30px"}}>
             <p className="fs-3 fw-bold text-center p-3 w-100 m-0">List of Workers ....</p>
             <div className="row p-1 pb-1 m-2  fw-bold" style={{border:"1px solid rgb(229 232 236)" ,borderRadius:"30px"}}>
              <div className="col">
              <p className="fs-5">Name</p> 
              </div>
              <div className="col">
              <p className="fs-5">Age</p> 
              </div>
              <div className="col">
              <p className="fs-5">Location</p> 
              </div>
              <div className="col">
              <p className="fs-5">Price</p> 
              </div>
              <div className="col">
              <p className="fs-5">Experience</p> 
              </div>
              <div className="col">
              <p className="fs-5">Phone</p> 
              </div>
              <div className="col">
                <p className="fs-5">Verified/not Verified</p>
              </div>
             </div>

             {
              
              loading? workers.map((worker)=>{
                return(
                  <>
                  <List key={worker._id} worker={worker}/>
                  </>
                )
              }):<Spinner/>
              
              }
             

             

             </div>
             <Footer/>



             {/* <div className="workers-container-workers-group">
                {
                    workers.map((worker) => {
                        return <WorkerCardAdmin key={worker._id} worker={worker}  />;
                      })   }
                      </div> */}
        </>
    )
}

export default WorkersList;