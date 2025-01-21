import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import "../../css/lform.css";
import Footer from '../Footer';
import Header from './Header';
import { rentalProvider } from '../../service/api';

function RentalProviderForm() {
    const [aadhar, setAadhar] = useState('');
    const [experience, setExperience] = useState('');
    const [price, setPrice] = useState('');
    const [role, setRole] = useState('');
    const [address, setAddress] = useState('');
    const [pin, setPin] = useState('');
    const [age, setAge] = useState('');
    const [bussinessname, setBussinessName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const navigate = useNavigate();




    // const [rentalProvider , setRentalProvider] = useState({
    //     aadhar : "",
    //      profilePic : "",
    //     price : "",
    //     address : "",
    //     pin : "",
        
    // })

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user=JSON.parse(localStorage.getItem("user"))
        // console.log("user is ", user._id);
        // console.log('aadhar:', aadhar);
        // console.log('experience:', experience);
        // console.log('Price:', price);
        // console.log('address:', address);
        // console.log('pin:', pin);
        // console.log('age:', age);
        // console.log('bussinessname:', bussinessname);
        

        // setProvider();



        const res=await rentalProvider({
                userId:user._id,
                address:address,
                profilePic:"",
                pin:pin,
                aadhar:aadhar
        })
        console.log("res is ", res.data);
        if(res){
            navigate('/productRegister');
        }
        else{
            console.log("provider is not registered")
        }
    };

   


    return (
        <>
            <Header />
            <h1 id = "lform">Rental-Provider Registration</h1>
        <div className="labour-form">
            <form className='roleform' onSubmit={handleSubmit}>
                 <div className = "display2"> 
                 <div className = "display1"> 
                 <label htmlFor="profilePic">Profile Photo:&nbsp;&nbsp; 
                        <span  style={{border:"1px solid gray",padding:"10px", background:"white", fontSize:"15px", borderRadius:"10px",fontWeight:500, cursor:"pointer"}} >
                            Upload Profile         
                               </span>
                        </label>
                <input
                    style = {{"display":"none"}}
                    type="file"
                    id="profilePic"
                    accept="image/*"
                    onChange={(event) => {
                        setProfilePic( event.target.files[0])
                        // handle file upload logic here
                    }}
                />
                </div>

                    <div className = "display1"> 
                <label htmlFor="aadhar">Aadhar No.:</label>
                <input
                    type="text"
                    placeholder='Enter Aadhar No.'
                    id="aadhar"
                    value={aadhar}
                    onChange={(event) => setAadhar(event.target.value)}
                />
                </div>

                </div>
                

                {/* <div className = "display2"> */}
                {/* <div className = "display1">
                <label htmlFor="experience">Experience (in Years):</label>
                <input
                    type="text"
                    placeholder='Enter Experience'
                    id="experience"
                    value={experience}
                    onChange={(event) => setExperience(event.target.value)}
                />
                </div> */}
                {/* <div className = "display1">

                <label htmlFor="price">Price (per day):</label>
                <input
                    type="text"
                    placeholder='Enter Price per day'
                    id="price-labour"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />
                </div> */}

                {/* </div> */}

                <div className = "display2">
                <div className = "display1">
                <label htmlFor="address">Address (City Name ):</label>
                <input
                    type="text"
                    placeholder='Enter Address'
                    id="address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />
                </div>
                <div className = "display1">
                <label htmlFor="pin">Pin Code :</label>
                <input
                    type="text"
                    placeholder='Enter Pin Code'
                    id="pin"
                    value={pin}
                    onChange={(event) => setPin(event.target.value)}
                />
                </div>

                    </div>


                  <div className = "display2">    
                {/* <div className = "display1">
                <label htmlFor="age">Age (only 18+) :</label>
                <input
                    type="text"
                    placeholder='Enter Age'
                    id="age"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                />
                </div> */}


                {/* <div className = "display1">
                <label htmlFor="role">Type of Rental Product :</label>
                <select id="role" value={role} onChange={(event) => setRole(event.target.value)}>
                    <option value="">--Please select--</option>
                    <option value="Labour">Construction vehicles </option>
                    <option value="Labour">Loading Equipments </option>
                    <option value="Labour">Cleaing Equipments</option>
                    <option value="Labour">Home Shifting Vehicles</option>
                    <option value="Labour"> Warehouse Equipments</option>
                    <option value="Labour">Factory Equipments</option>
                    <option value="Labour">Gardening Equipments</option>
                
                    <option value="Labour">Other Equipments... </option>
                </select>
                </div> */}
                </div>


                  <div className = "display2"> 
                {/* <div className = "display1">   
                <label htmlFor="bussinessname">Enter Your Bussiness Name (Optional) :</label>
                <input
                    type="text"
                    placeholder='Enter Bussiness Name'
                    id="bussinessname"
                    value={bussinessname}
                    onChange={(event) => setBussinessName(event.target.value)}
                />
                </div> */}
                {/* <div className = "display1">
                <label htmlFor="tell">Tell about Bussiness  :</label>
                <input
                    type="text"
                    placeholder='Enter Bussiness Details'
                    id="tell"
                    value={tell}
                    onChange={(event) => setTell(event.target.value)}
                />
                </div> */}
                </div>



                <button className='rolebutton' onClick={handleSubmit} type="submit">Continue</button>
            </form>
        </div>
        <Footer />
        </>
    )
}

export default RentalProviderForm;