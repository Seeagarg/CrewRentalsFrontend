import React, { useEffect, useState } from 'react';
import HeaderAdmin from '../HeaderAdmin';
import Footer from '../../Footer';
import GroupList from './GroupList';
import { getAllGroupWorkers } from '../../../service/api';
import Spinner from '../../Spinner';
// import { Spinner } from 'react-bootstrap';




function GroupOfWorkerList() {

  const [groupWorker,setGroupWorker] = useState([]);
  const [loading,setLoading] = useState();
 useEffect(()=>{
  getSetGroupWorkers();
 },[]);

 const getSetGroupWorkers=async()=>{
  const res = await getAllGroupWorkers();
  setGroupWorker(res);
  setLoading(true);
 }

  const workers = [
    {
      id: 1,
      name: 'Swachh Group',
      category: "Cleaning Workers",
      location: 'Delhi, India',
      available: false,
      pricePerDay: 4500,
      experience: '10 .',
      imageUrl: 'https://i.pinimg.com/originals/3f/f1/8e/3ff18e59acdb29dfd8ab54a3a09bee72.jpg',
      phone :"9414173314"
  
    },
    {
      id: 2,
      name: 'Dil Mangee Marbel',
      category: "Marbel Work Helper",
      location: 'Mumbai, India',
      available: true,
      pricePerDay: 900,
      experience: '3 .',
      imageUrl: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/featured-image-tile-contractor.jpeg',
      phone :"9414173314"
  
    },
    {
      id: 1,
      name: 'Factory Dangal  ',
      category: "Factory Labours",
      location: 'Delhi, India',
      available: false,
      pricePerDay: 800,
      experience: '2 .',
      imageUrl: 'https://media.istockphoto.com/id/1282985327/photo/portrait-of-welders-in-the-workshop.jpg?s=612x612&w=0&k=20&c=f-IlqJgGDTBQh-xhDvYj4c4Cl3u6GbLVp_V2D2MaTM4=',
      phone :"9414173314"
  
    },
    {
      id: 1,
      name: 'Kaho na Bijli haii..',
      category: "Electrician Group  ",
      location: 'Delhi, India',
      available: true,
      pricePerDay: 1100,
      experience: '2 .',
      imageUrl: 'https://ak.picdn.net/offset/photos/5ec54169a75ca0db3709300d/medium/offset_943315.jpg',
      phone :"9414173314"
  
    },
    {
      id: 1,
      name: 'Udta Majdurr',
      category: "Construction Labours",
      location: 'Delhi, India',
      available: true,
      pricePerDay: 1100,
      experience: '2 .',
      imageUrl: 'https://c8.alamy.com/comp/ET19DB/workers-working-on-construction-site-at-mumbai-maharashtra-india-ET19DB.jpg',
      phone :"9414173314"
  
  
    },
    {
      id: 1,
      name: 'Jal Yodha..',
      category: "Plumbing Labour",
      location: 'Delhi, India',
      available: true,
      pricePerDay: 1000,
      experience: '2 .',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/The_Minister_of_State_for_Petroleum_and_Natural_Gas_%28Independent_Charge%29%2C_Shri_Dharmendra_Pradhan_visiting_the_Geleky_GGS-I_%28Group_Gathering_Station-I%29%2C_in_ONGC_Assam_Asset%2C_on_April_16%2C_2015.jpg/640px-thumbnail.jpg',
      phone :"9414173314"
    }
    // add more workers here...
  ];

  




  return (

    <div>
      <HeaderAdmin/>
             <div className="container p-2 mb-3 text-center " style={{backgroundColor:"#eef3f7",marginTop:"150px",position:"relative",borderRadius:"30px"}}>
             <p className="fs-3 fw-bold text-center p-3 w-100 m-0">Groups of Workers ....</p>

             <div className="row p-1 pb-1 m-2  fw-bold " style={{border:"1px solid rgb(229 232 236)" ,borderRadius:"30px"}}>
              <div className="col">
              <p className="fs-5">Name of Group</p> 
              </div>
              <div className="col">
              <p className="fs-5">Category</p> 
              </div>
              <div className="col">
              <p className="fs-5">Location</p> 
              </div>
              
              
              <div className="col">
              <p className="fs-5">Phone</p> 
              </div>
              <div className="col">
              <p className="fs-5">Group price per day</p> 
              </div>
              <div className="col text-center">
              <p className="fs-5">Verified/not verified</p> 
              </div>
             
             </div>

             

             {
              loading?(
              groupWorker?.map((group)=>{
                return(
                  <>
                  <GroupList key={group._id} group={group}/>
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

export default GroupOfWorkerList
