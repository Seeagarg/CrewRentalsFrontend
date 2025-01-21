import React, { useEffect, useState } from 'react';
import "../../css/WorkersPage.css";
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from '../Footer';
import { getAllContractors, getContractor, getUser } from '../../service/api';
import { ToastContainer, toast } from "react-toastify";
import Spinner from '../Spinner';
// const workers = [
//   {
//     id: 1,
//     name: 'Sunil',
//     age: 40,
//     location: 'Delhi, India',
//     available: false,
//     pricePerDay: 5,
//     experience: '10 years',
//     imageUrl: 'https://thumbs.dreamstime.com/b/factory-worker-clipboard-hand-31301133.jpg',
//     category : "Building Contractor",

//   },
//   {
//     id: 2,
//     name: 'Raman',
//     age: 35,
//     location: 'Mumbai, India',
//     available: true,
//     pricePerDay: 500,
//     experience: '3 years',
//     imageUrl: 'https://media.istockphoto.com/id/1346124841/photo/successful-construction-site-worker-thinking.jpg?b=1&s=170667a&w=0&k=20&c=Xzq26ISOhRuQK95yVQKmgAqKS6IexXZNqf1TBmHjeZA=',
//     category : "Cleaning Contractor",

//   },
//   {
//     id: 1,
//     name: 'Anil ',
//     age: 28,
//     location: 'Delhi, India',
//     available: false,
//     pricePerDay: 500,
//     experience: '2 years',
//     imageUrl: 'https://image.cnbcfm.com/api/v1/image/105420523-1535475566932civilengineer.jpg?v=1535475620',
//     category : "Marbel Contractor",

//   },
//   {
//     id: 1,
//     name: 'Karan',
//     age: 28,
//     location: 'Delhi, India',
//     available: true,
//     pricePerDay: 500,
//     experience: '2 years',
//     imageUrl: 'https://media.istockphoto.com/id/1326870605/photo/portrait-of-a-confident-young-man-working-a-construction-site.jpg?b=1&s=170667a&w=0&k=20&c=t070c9avYpnrw5Oq-ImZBtnX0fiKSj2qgAYv7KadQHg=',
//     category : "Construction Contractor",

//   },
//   {
//     id: 1,
//     name: 'Mahima',
//     age: 28,
//     location: 'Delhi, India',
//     available: true,
//     pricePerDay: 500,
//     experience: '2 years',
//     imageUrl: 'https://media.istockphoto.com/id/1298550035/photo/putting-in-the-dedication-to-build-her-dreams.jpg?s=612x612&w=0&k=20&c=g9-gKgAno_DWwCS4U5FfLf1S7sypm4zFZE1xyusXlEM=',
//     category : "Iron Contractor",

//   },
//   {
//     id: 1,
//     name: 'Vikas',
//     age: 28,
//     location: 'Delhi, India',
//     available: true,
//     pricePerDay: 500,
//     experience: '2 years',
//     imageUrl: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?cs=srgb&dl=pexels-yury-kim-585419.jpg&fm=jpg',
//     category : "Decoration Contractor",

//   },
//   {
//     id: 1,
//     name: 'Dinesh',
//     age: 28,
//     location: 'Delhi, India',
//     available: true,
//     pricePerDay: 500,
//     experience: '2 years',
//     imageUrl: 'https://image.cnbcfm.com/api/v1/image/105323669-1531324756600sinadecaroll.jpg?v=1539725575&w=1920&h=1080',
//     category : "Roofer Contractor",

//   },
//   {
//     id: 1,
//     name: 'Farahan',
//     age: 28,
//     location: 'Delhi, India',
//     available: true,
//     pricePerDay: 500,
//     experience: '2 years',
//     imageUrl: 'https://thewire.in/wp-content/uploads/2017/06/chinese-factory-workers.jpg',
//     category : "Plumbing Contractor",

//   },
//   {
//     id: 1,
//     name: 'Ram Piyari',
//     age: 28,
//     category : "Electrical Contractor",
//     location: 'Delhi, India',
//     available: true,
//     pricePerDay: 500,
//     experience: '2 years',
//     imageUrl: 'https://media.istockphoto.com/id/475144426/photo/african-american-woman-wearing-hardhat-and-safety-vest.jpg?s=612x612&w=0&k=20&c=URJ0M-xZ1dL5wOgpiN63VFSbfBy0mxf6Pq11oF4X5hw=',
//   },
//   // add more workers here...
// ];

const parastyle = {
  
   
    marginTop : "15px", 
    fontWeight: 'bold',
    // fontSize: '15px',
    fontFamily: 'Arial',
    // textAlign: 'center',
    
    // textShadow: '2px 2px 4px #000000',

}

const nameWorker = {
    fontFamily : 'Helvet',
    fontWeight: 'bold',
    fontSize: '35px',
    textAlign: 'center',
    color: 'black',
}

const variableFields = {
    fontFamily : 'Helvet',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
    color: 'black',
}

const variableFieldsYes = {
    fontFamily : 'Helvet',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
    color: 'green'
    // textColor: 'green'
}

const WorkerCard = ({ contractor }) => {
      const navigate= useNavigate();
    const [profile, setProfile]= useState();
    useEffect(()=>{
        setGetProfile()
        
    },[]);

    const setGetProfile= async()=>{
      const res=await getUser(contractor?.userId);
      setProfile(res);
      
    }

    const handleClick=()=>{
      // setAccount(engineer._id)
      const user={
          id:contractor._id,
          userId:contractor.userId,
          role:"contractor" 
      }
      navigate('/profileDashbord', {state:{user}});
  }


  return (
    // <div className="card-workers my-4"  onClick={handleClick}>
    <div className="card-workers m-2 mb-4"  onClick={handleClick}>
      <div className="image-container-workers">
        <img src={contractor?.profilePic} alt={profile?.fullname} />
         {/* <img src="https://thewire.in/wp-content/uploads/2017/06/chinese-factory-workers.jpg" alt="loading" /> */}
      </div>
      <div className="details-workers m-2">
        {/* <h2 style={nameWorker}>{worker.name}</h2> */}
          <h2 style={nameWorker}> {profile?.fullname} </h2>
        <p style={parastyle}>Age: <span style ={variableFields}>{contractor.age}</span></p>
        <p style={parastyle}>Category: <span style ={variableFields}>{contractor.role}</span></p>
        <p style={parastyle}>Location: <span style ={variableFields}>{contractor.address}</span></p>
        <p style={parastyle}>Available: <span style ={variableFieldsYes}>{contractor.status ? 'Yes' : 'No'}</span></p>
        <p style={parastyle}>Price per day: <span style ={variableFields}>{contractor.price}</span></p>
        <p style={parastyle}>Experience: <span style ={variableFields} >{contractor.experience}</span></p>
      </div>
    </div>
  );
};

const Contractors = () => {

    const [contractors, setContractos]=useState([]);
    const [price, setPrice]=useState('100');
    const [experience , setExperience]=useState('100');
    const [role, setRole] = useState("All Categories")
    const [address , setAddress]=useState('All cities');
    const [showFilter, setShowFilter] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      getContractors();
    },[])

    const getContractors= async ()=>{
      let result= await getAllContractors();
        setContractos(result.data);
        setLoading(true);
    }

    const handleApplyFilter=(e)=>{
      e.preventDefault();
      let filteredData = [];


      console.log(price,"    ",role,"      ",address,"   ",experience);

      for(let i=0;i<contractors.length;i++){
        if(address != 'All cities' && role != "All Categories" ){
          if (contractors[i].price <= price && contractors[i].address === address && contractors[i].role === role && contractors[i].experience <= experience) {
            filteredData.push(contractors[i]);
          }
        }
        else if (address === "All cities" && role === "All Categories") {
          if (contractors[i].price <= price && contractors[i].experience <= experience) {
            filteredData.push(contractors[i]);
          }
        }
        else if (address === "All cities") {
          if (contractors[i].price <= price && contractors[i].role === role &&  contractors[i].experience  <= experience ) {
            filteredData.push(contractors[i]);
          }
        }
        else if (role === "All Categories") {
          if (contractors[i].price <= price && contractors[i].address === address &&  experience >= contractors[i].experience ) {
            filteredData.push(contractors[i]);
          }
        }
      }
      setShowFilter(false);
      setContractos(filteredData);

    }

    const handleRemoveFilter = () => {
      setShowFilter(true)
      getContractors();
    }

    const showNotification = () => {
      toast.warn("No Contractor found !!", {
        autoClose: 2000,
      });
    }
  



  return (
    
    <>
     <Header/>
      <h1 style={{margin:"40px"}}>Contractor Page</h1>
    <div className="workers-page-workers-contractor m-3 ">
    
      <div className="filter-section " style={{width:"20%"}}>
  <h3 >Filter Contractors </h3>
  <form>
   
    <label for="location">Location:</label>
            <select  value={address} style={{ "cursor": "pointer" }} disabled={!showFilter} onChange={(e) => { setAddress(e.target.value) }} id="location">
              <option style={{ "cursor": "pointer" }} value="All cities"   > All cities </option>
              {contractors.map((contractor) => {
                return <option style={{ "cursor": "pointer" }} key={contractor._id} value={contractor.address}   > {contractor.address} </option>
              })}
            </select>

    <label for="price">Price: ₹{price} </label>
            <div class="filter_price">

              <input type="range" name="price" disabled={!showFilter}  style={{ "cursor": "pointer" }} onChange={(e) => { setPrice(e.target.value) }} min="100" max="4000" value={price}></input>
            </div>
       

            <label for="city">Experience:</label>
            <select disabled={!showFilter} name="city" id="city" style={{ "cursor": "pointer" }} value={experience} onChange={(e) => setExperience(e.target.value)}>
              <option style={{ "cursor": "pointer" }} value="100"> All Experience</option>
              <option style={{ "cursor": "pointer" }} value="2"   > 0-2 years </option>
              <option style={{ "cursor": "pointer" }} value="5"   > 2-5 years </option>
              <option style={{ "cursor": "pointer" }} value="50"   > above 5 years </option>

            </select>

    <label for="city">Role:</label>
    <select name="city" id="city" style={{ "cursor": "pointer" }} disabled={!showFilter} value={role} onChange={(e) => setRole(e.target.value)}>
      <option style={{ "cursor": "pointer" }} value="All Categories"> All Categories </option>   
      <option value="Construction Contract">Construction Contract</option>
      <option value="Floor Contract">Floor Contract</option>
      <option value="color contract">color contract</option>
      <option value="furniture contract">furniture contract</option>
      <option value="electrician contract">electrician contract</option>
      <option value="Rennovation Contract">Rennovation Contract</option>
      <option value="Gardening Contract">Gardening Contract</option>
      <option value="Other Contract Works">Other Contract Works</option>
    </select>

    {
              showFilter ? <button type="submit" onClick={handleApplyFilter}>Apply Filter</button> :
                <button type="submit" onClick={handleRemoveFilter}> Remove Filter  </button>
            }
      
      </form>
      </div>

      <div className="Container-main-worker" style={{width:"70%"}}>
      {
        contractors.length === 0 && showFilter === false ? showNotification():
      
      <div className="workers-page-workers-group m-0">
      
        {loading?contractors.map((contractor, index) => {
          return <WorkerCard  key={contractor._id} contractor={contractor} />;
        }): <Spinner className='spinner m-5' />}
      </div>
      }
      
      </div>
    </div>
    <Footer/>
    <ToastContainer />
    </>
  );
};

export default Contractors;
