import React from 'react'
import Footer from '../../Footer';
import Header from '../../Pages/Header';
import HeaderAdmin from '../HeaderAdmin';
import ContractorList from './ContractorList';
import { useEffect, useState } from 'react';
import { getAllContractors } from '../../../service/api';
import Spinner from '../../Spinner';


function Contractor() {
     
  const [contractors, setContractor]= useState();
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    getContractors();
  },[])

  const getContractors= async()=>{
    let result = await getAllContractors();
    console.log("res for contractors --> ", result);
    setContractor(result.data);
    setLoading(true);
   }
      
  return ( 
    <div>
      <HeaderAdmin/>
             <div className="container p-2 mb-3 text-center" style={{backgroundColor:"#eef3f7",marginTop:"150px",position:"relative",borderRadius:"30px"}}>
             <p className="fs-3 fw-bold text-center p-3 w-100 m-0">Contractors ....</p>

             <div className="row p-1 pb-1 m-2  fw-bold" style={{border:"1px solid rgb(229 232 236)" ,borderRadius:"30px"}}>
              <div className="col">
              <p className="fs-5">Name </p> 
              </div>
              <div className="col">
              <p className="fs-5">Location</p> 
              </div>
              <div className="col">
              <p className="fs-5">Category</p> 
              </div>
              <div className="col">
              <p className="fs-5">price per day</p> 
              </div>
              <div className="col text-center">
              <p className="fs-5">Experience</p> 
              </div>
              <div className="col text-center">
              <p className="fs-5">Verified/not verified</p> 
              </div>
             
             </div>

             

             {
              loading?(
            contractors?.map((contractor)=>{
                return(
                  <>
                  <ContractorList key={contractor._id} contractor={contractor}/>
                  </>
                )
              })
              ):<Spinner/>
             }

             

             </div>
             <Footer/>
    </div>
  )
}

export default Contractor
