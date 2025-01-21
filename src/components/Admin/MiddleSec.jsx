import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../css/RoleSelectionPageHome.css"
import "./MiddleSec.css"
import workerimg from '../../Images/worker23.jpg';
import { getAllContractors, getAllEngineers, getAllGroupWorkers, getAllProducts, getAllWorkers } from '../../service/api';
import groupofworker from "../../Images/groupworker.jpg";
import engineerphoto from "../../Images/engineer111.jpg"
import VisibilityIcon from '@mui/icons-material/Visibility';
// import contractorimg from '../../Images/contractor23.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import equipmentphot from "../../Images/tools2.jpg";
import { getAllProductProvider } from '../../service/api';
// import contractorimg from '../../Images/contractor23.jpg';

const MiddleSec = () => {
  const navigate = useNavigate();
  const[ workers,setWorkers]=useState([]);
  const [contractors, setContractor]= useState([]);
  const [rentalProvider, setRentalProvider]= useState([]);
  const [groupWorker, setGroupWorker]=useState([]);
  const [products, setProducts]=useState([]);
  const [engineers, setEngineers]=useState([]);



  useEffect(()=>{
    getWorkers();
    getContractors();
    getRentalProviders();
    getGroupWorkers();
    getProducts();
    getEngineers();
  },[])

  const  getWorkers= async ()=>{
      let result= await getAllWorkers();
        setWorkers(result.data);
        // console.log("workers are ",workers)
 }

 const getContractors= async()=>{
  let result = await getAllContractors();
  // console.log("res for contractors --> ", result);
  setContractor(result.data);
 }

 const getRentalProviders= async()=>{
    let result= await getAllProductProvider();
    // console.log("res rental provider ",result)
    setRentalProvider(result.data);
 }
 const getGroupWorkers= async()=>{
  let result =await getAllGroupWorkers();
   setGroupWorker(result);

 }

 const getProducts= async()=>{
  let result= await getAllProducts();
  setProducts(result.data)

 }
 const getEngineers= async()=>{
  let result= await getAllEngineers();
  setEngineers(result)
 }



 const handleAllWorker=()=>{
       navigate("/adminWorkers", )
 }

 
  return (
    <div className="role-selection-main-div mb-5">
    <div className="role-selection-middlesec text-center ">
      <h1>Complete Description of Crew-Rental</h1>
      <hr style={{width:"100%",textAlign:"center",margin:"0",backgroundColor:"gray",height:"2px"}}/>
     
      <div className="role-selection-options-home-admin " onClick={() => handleAllWorker}>
      <div className="row role-option-home-admin mt-0">
        <div className="col-2">
        <img src={workerimg} alt="Worker" />
        </div>
        <div className="col-4">
        <span>Total Workers : {workers.length}</span>
        </div>
        <div className="col-3">
        <div className='userView p-2 me-0' style={{borderRadius:"30px"}} onClick={handleAllWorker}>
        <VisibilityIcon fontSize='large'/>
          <span className='ms-2'> View all</span> </div>
        </div>
        </div>
        <hr style={{width:"90%",margin:"0",backgroundColor:"gray",height:"2px"}}/>

        <div className="row role-option-home-admin mt-2" >
        <div className="col-2">
        <img src={groupofworker} alt="groupworker" />
        </div>
        <div className="col-4">
        <span>Total Group Workers :{groupWorker.length}</span>
        </div>
        <div className="col-3">
        <div className='userView pe-0' style={{borderRadius:"30px"}}  onClick={()=>navigate("/adminGroupOfWorkersList")}>
          {/* <i className="bi bi-eye"></i>  */}
          <VisibilityIcon fontSize='large'/>
          <span className='ms-2'> View all</span>  </div>
        </div>
        </div>
        <hr style={{width:"90%",margin:"0",backgroundColor:"gray",height:"2px"}}/>

        <div className="row role-option-home-admin" >
          <div className="col-2">
          <img src="https://t4.ftcdn.net/jpg/02/23/39/67/360_F_223396730_3JX4Xj1ELMNQgXAi5mMsQotkW29C2csw.jpg" alt="Worker" />
          </div>
          <div className="col-4">
          <span>Total Contractors :{contractors.length}</span>
          </div>
          <div className="col-3">
          <div className='userView' style={{borderRadius:"30px"}} onClick={()=>navigate('/ContractorList')}>
          <VisibilityIcon fontSize='large'/>
          <span className='ms-2'> View all</span>  </div>
          </div>
        </div>
        <hr style={{width:"90%",margin:"0",backgroundColor:"gray",height:"2px"}}/>



        <div className="role-option-home-admin row" onClick={() => handleAllWorker}>
          <div className="col-2">
          <img src="https://img.freepik.com/premium-photo/car-rental-company-employees-are-checking-contract-before-sending-car-customer-rent-car-preparing-contract-customer-sign-rental-agreement-car-rental-concept_528263-1507.jpg" alt="Worker" />
          </div>
          <div className="col-4">
          <span>Total Rental Providers :  {rentalProvider.length}</span>
          </div>
          <div className="col-3">
          <div className='userView' style={{borderRadius:"30px"}} onClick={()=>navigate('/providers')}>
          <VisibilityIcon fontSize='large'/>
          <span className='ms-2'> View all</span>  </div>
          </div>
        </div>
        <hr style={{width:"90%",margin:"0",backgroundColor:"gray",height:"2px"}}/>


        <div className="role-option-home-admin row" onClick={() => handleAllWorker}>
          <div className="col-2">
          <img src={engineerphoto} alt="engineer" />
          </div>
          <div className="col-4">
          <span>Total Engineers : {engineers.length}</span>
          </div>
          <div className="col-3">
          <div className='userView' style={{borderRadius:"30px"}} onClick={()=>navigate('/engineers')}>
          <VisibilityIcon fontSize='large'/>
          <span className='ms-2'> View all</span> </div>
          </div>
        </div>
        <hr style={{width:"90%",margin:"0",backgroundColor:"gray",height:"2px"}}/>


        <div className="role-option-home-admin row" >
          <div className="col-2">
          <img src={equipmentphot} alt="engineer" />
          </div>
          <div className="col-4">
          <span>Total Rental Products : {products.length}</span>
          </div>
          <div className="col-3">
          <div className='userView' style={{borderRadius:"30px"}} onClick={()=>navigate('/rentalProducts')}>
          <VisibilityIcon fontSize='large'/>
          <span className='ms-2'> View all</span> </div>
          </div>
        </div>
        {/* <hr style={{width:"90%",textAlign:"left",margin:"0",backgroundColor:"gray",height:"1.5px"}}/> */}






        {/* <div className="role-option-home-admin mt-0" onClick={() => handleAllWorker}>
          <img src={workerimg} alt="Worker" />
          <span>Total Workers : &nbsp; &nbsp; &nbsp; {workers.length}</span>
          <hr />
          <div className='userView' onClick={handleAllWorker}>
          <i className="bi bi-eye"></i> 
          View all </div>
        </div>
        <hr style={{width:"90%",textAlign:"left",margin:"0",backgroundColor:"gray",height:"1.5px"}}/>

        <div className="role-option-home-admin" onClick={() => handleAllWorker}>
        <img src={groupofworker} alt="groupworker" />
          <span>Total Group Workers : &nbsp; &nbsp; &nbsp; {workers.length}</span>
          <div className='userView' onClick={handleAllWorker}>
          <i className="bi bi-eye"></i> 
          View all </div>
        </div>
        <hr style={{width:"90%",textAlign:"left",margin:"0",backgroundColor:"gray",height:"2px"}}/>

        <div className="role-option-home-admin" onClick={() => handleAllWorker}>
          <img src={workerimg} alt="Worker" />
          <span>Total Contractors : &nbsp; &nbsp; &nbsp; {workers.length}</span>
          <div className='userView' onClick={handleAllWorker}>
          <i className="bi bi-eye"></i> 
          View all </div>
        </div>
        <hr style={{width:"90%",textAlign:"left",margin:"0",backgroundColor:"gray",height:"2px"}}/>

        <div className="role-option-home-admin" onClick={() => handleAllWorker}>
          <img src={workerimg} alt="Worker" />
          <span>Total Rental Providers : &nbsp; &nbsp; &nbsp; {workers.length}</span>
          <div className='userView' onClick={handleAllWorker}>
          <i className="bi bi-eye"></i> 
          View all </div>
        </div>
        <hr style={{width:"90%",textAlign:"left",margin:"0",backgroundColor:"gray",height:"2px"}}/>

        <div className="role-option-home-admin" onClick={() => handleAllWorker}>
        <img src={engineerphoto} alt="engineer" />
          <span>Total Engineers : &nbsp; &nbsp; &nbsp; {workers.length}</span>
          <div className='userView' onClick={handleAllWorker}>
          <i className="bi bi-eye"></i> 
          View all </div>
        </div>
        <hr style={{width:"90%",textAlign:"left",margin:"0",backgroundColor:"gray",height:"2px"}}/>

        <div className="role-option-home-admin" onClick={() => handleAllWorker}>
        <img src={equipmentphot} alt="engineer" />
          <span>Total Rental Products : &nbsp; &nbsp; &nbsp; {workers.length}</span>
          <div className='userView' onClick={handleAllWorker}>
          <i className="bi bi-eye"></i> 
          View all </div>
        </div> */}
                
       
        
       
              </div>
    </div>
    </div>
  );
};

export default MiddleSec;
