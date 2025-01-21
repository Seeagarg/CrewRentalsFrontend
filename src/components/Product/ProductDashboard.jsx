import React, { useEffect, useState } from 'react'
import Header from "../Pages/Header"
import Footer from "../Footer";
import "../Pages/Profile/ProfileDashbord.css"
import { FaDiscord, FaInstagram, FaYoutube , FaTwitter , FaFacebook } from "react-icons/fa";
// import { AccountContext } from '../../../context/AccountProvider';
// import { useContext } from 'react';
import { json, useLocation } from 'react-router-dom';
import { getProductProvider, getUser } from '../../service/api';



const  ProfileDashbord =() => {

     const location = useLocation();
     const product=location.state.product;
    //  console.log("product is ", product)
     const userId=JSON.parse(localStorage.getItem("user"))._id
     const [providerid , setProviderid] = useState(userId)
     const  [provider, setProvider]=useState();
     const [profile,setProfile] = useState();
    useEffect(() => {
        getProvider();
        getProfile();
    }, []);

    const getProfile=async ()=>{
      const res = await  getUser(product.userId);
      // console.log(res);
      setProfile(res);
    }

    const getProvider=async()=>{
      // console.log(product);
      const res=await getProductProvider(product?.userId);
      console.log("-----",res[0]);
      if(res){
        setProvider(res[0]);
        
      }
      else{
        console.log("res is empty")
      }
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
                {/* <img src={worker.profilePic} className="img-fluid mb-2" alt="User profile" /> */}
                {/* <img src="https://ak.picdn.net/offset/photos/5ec54169a75ca0db3709300d/medium/offset_943315.jpg" className="img-fluid mb-2" alt="User profile" /> */}
                <img src={product.image} alt="User profile" />
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Delhi , India</p>
                <div className="btn-group">
                  <button type="button" className="btn btn-primary">Follow</button>
                  <button type="button" className="btn btn-secondary">Message Provider</button>
                </div>
                
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
                <h5 className="card-title-dashbord">Product Information</h5>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Product Name: </strong>{product.name}</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Category:</strong> {product.category}</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Company:</strong> {product.company}</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Description:</strong> {product.description}</p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Available:</strong>
                 {/* {product.description} */}
                 yes
                 </p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Status:</strong>
                 {
                product.status? <span  style={{"color":"green"}}>Verified</span> : <span style={{"color":"red"}}> Not verified</span>
                }
                </p>
              </div>
            </div>
            <div className="col-md-6">
            <div className="card-dashbord">
              <div className="card-body-dashbord">
                <h5 className="card-title-dashbord">Provider Information</h5>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Provider Name:</strong> {profile?.fullname}</p>
                {/* <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Description:</strong> john.doe@example.com</p> */}
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Location:</strong> {provider?.address} </p>
                <hr className='hr-dashbord' />
                <p className="card-text-dashbord"><strong>Country:</strong> {provider?.country}</p>
              </div>
            </div>
          </div>
          </div>
          
        </div>
        
      </div>
      
    </section>

    <Footer/>
    </>
  )
}

export default ProfileDashbord;