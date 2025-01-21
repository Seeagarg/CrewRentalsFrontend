import React, { useEffect, useState } from 'react'
import EngineersList from './EngineersList';
import HeaderAdmin from '../HeaderAdmin';
import Footer from '../../Footer';
import { getAllEngineers } from '../../../service/api';
import Spinner from '../../Spinner';

function Engineers() {

    const [engineers,setEngineers] = useState([]);
    const [loading,setLoading] = useState(false)


    useEffect(()=>{
      getSetEngineers();
    },[]);

    const getSetEngineers=async ()=>{
      const res = await getAllEngineers();

      console.log(res);
      setEngineers(res);
      setLoading(true);
    }


    const workers = [
        {
          id: 1,
          name: 'Sunil',
          age: 40,
          location: 'Delhi, India',
          available: false,
          pricePerDay: 5,
          experience: '10 years',
          imageUrl: 'https://thumbs.dreamstime.com/b/factory-worker-clipboard-hand-31301133.jpg',
        },
        {
          id: 2,
          name: 'Raman',
          age: 35,
          location: 'Mumbai, India',
          available: true,
          pricePerDay: 500,
          experience: '3 years',
          imageUrl: 'https://media.istockphoto.com/id/1346124841/photo/successful-construction-site-worker-thinking.jpg?b=1&s=170667a&w=0&k=20&c=Xzq26ISOhRuQK95yVQKmgAqKS6IexXZNqf1TBmHjeZA=',
        },
        {
          id: 1,
          name: 'Anil ',
          age: 28,
          location: 'Delhi, India',
          available: false,
          pricePerDay: 500,
          experience: '2 years',
          imageUrl: 'https://image.cnbcfm.com/api/v1/image/105420523-1535475566932civilengineer.jpg?v=1535475620',
        },
        {
          id: 1,
          name: 'Karan',
          age: 28,
          location: 'Delhi, India',
          available: true,
          pricePerDay: 500,
          experience: '2 years',
          imageUrl: 'https://media.istockphoto.com/id/1326870605/photo/portrait-of-a-confident-young-man-working-a-construction-site.jpg?b=1&s=170667a&w=0&k=20&c=t070c9avYpnrw5Oq-ImZBtnX0fiKSj2qgAYv7KadQHg=',
        },
        {
          id: 1,
          name: 'Mahima',
          age: 28,
          location: 'Delhi, India',
          available: true,
          pricePerDay: 500,
          experience: '2 years',
          imageUrl: 'https://media.istockphoto.com/id/1298550035/photo/putting-in-the-dedication-to-build-her-dreams.jpg?s=612x612&w=0&k=20&c=g9-gKgAno_DWwCS4U5FfLf1S7sypm4zFZE1xyusXlEM=',
        },
        {
          id: 1,
          name: 'Vikas',
          age: 28,
          location: 'Delhi, India',
          available: true,
          pricePerDay: 500,
          experience: '2 years',
          imageUrl: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?cs=srgb&dl=pexels-yury-kim-585419.jpg&fm=jpg',
        },
        {
          id: 1,
          name: 'Dinesh',
          age: 28,
          location: 'Delhi, India',
          available: true,
          pricePerDay: 500,
          experience: '2 years',
          imageUrl: 'https://image.cnbcfm.com/api/v1/image/105323669-1531324756600sinadecaroll.jpg?v=1539725575&w=1920&h=1080',
        },
        {
          id: 1,
          name: 'Farahan',
          age: 28,
          location: 'Delhi, India',
          available: true,
          pricePerDay: 500,
          experience: '2 years',
          imageUrl: 'https://thewire.in/wp-content/uploads/2017/06/chinese-factory-workers.jpg',
        },
        {
          id: 1,
          name: 'Ram Piyari',
          age: 28,
          location: 'Delhi, India',
          available: true,
          pricePerDay: 500,
          experience: '2 years',
          imageUrl: 'https://media.istockphoto.com/id/475144426/photo/african-american-woman-wearing-hardhat-and-safety-vest.jpg?s=612x612&w=0&k=20&c=URJ0M-xZ1dL5wOgpiN63VFSbfBy0mxf6Pq11oF4X5hw=',
        },
        // add more workers here...
      ];
      
  return (
    <div>
      <HeaderAdmin/>
             <div className="container p-2 mb-3 text-center" style={{backgroundColor:"#eef3f7",marginTop:"150px",position:"relative",borderRadius:"30px"}}>
             <p className="fs-3 fw-bold text-center p-3 w-100 m-0">List of Engineers ....</p>

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
              <p className="fs-5">Type</p> 
              </div>
              <div className="col">
              <p className="fs-5">Experience</p> 
              </div>
              
              <div className="col">
                <p className="fs-5">Verified/not Verified</p>
              </div>
             </div>

             

             {
              loading?
              engineers.map((engineer)=>{
                return(
                  <>
                  <EngineersList key={engineer._id} engineer={engineer}/>
                  </>
                )
              }):<Spinner/>
             }

             

             </div>
             <Footer/>

    </div>
  )
}

export default Engineers
