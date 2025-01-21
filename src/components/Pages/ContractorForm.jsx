import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import "../../css/lform.css"
import Footer from '../Footer';
import Header from './Header';
import { contractorRegister } from '../../service/api';
// import { contractorRegister } from '../../service/api';
import { ToastContainer, toast } from 'react-toastify';

function ContractorForm() {
    const [profilePicName, setProfilePicName] = useState('')
    const [aadhar, setAadhar] = useState();
    const [profilePicLink, setprofilePicLink] = useState('');
    const [experience, setExperience] = useState();
    const [price, setPrice] = useState();
    const [role, setRole] = useState('');
    const [address, setAddress] = useState('');
    const [pin, setPin] = useState();
    const [profilePic, setProfilePic] = useState('');

    const [age, setAge] = useState();
    const [bussinessname, setBussinessName] = useState('');
    const [tell, setTell] = useState('');
    const [phone, setPhone] = useState();
    const navigate = useNavigate();


    const onProfilePicChange = async (e) => {

        const reader = new FileReader();


        reader.onload = () => {
          
          if (reader.readyState === 2) {
            // setAvatarPreview(reader.result);
            setprofilePicLink(reader.result);
          }
        };

  
        reader.readAsDataURL(e.target.files[0]);
       
        setProfilePicName(e.target.files[0].name);



        // setProfilePic(e.target.files[0]);
        // setProfilePicName(e.target.files[0].name);
        // const d = new FormData();
        // d.append("file", profilePic);
        // d.append("upload_preset", "rental-rack");
        // d.append("cloud_name", "ddwsaojx6");
        // const d1 = await fetch("https://api.cloudinary.com/v1_1/ddwsaojx6/image/upload", {
        //     method: "post",
        //     body: d
        // }).then((res) => res.json()).then((data) => {
        //     if (data) {
        //         setProfilePic(data.url)
        //         setprofilePicLink(data.url);

        //     }
        //     // setProfilePic(data.url)
        //     console.log("profile pic is ", data.url);
        // }).catch((err) => {
        //     console.log(err)
        // })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setContractorData();

        toast.success("Form Submitted Successfully!!", {
            autoClose: 1500, 
        });

        const timer = setTimeout(() => {        navigate("/adminLabour");
    }, 1500);

    return () => clearTimeout(timer);

        // console.log('aadhar:', aadhar);
        // console.log('experience:', experience);
        // console.log('Price:', price);
        // console.log('address:', address);
        // console.log('pin:', pin);
        // console.log('age:', age);
        // console.log('bussinessname:', bussinessname);
        // console.log('tell:', tell);
        // console.log('phone:', phone);

        // const res = await contractorRegister({
        //     profilePic: "profile pic",
        //     aadhar: aadhar,
        //     experience: experience,
        //     price: price,
        //     role: role,
        //     userId: JSON.parse(localStorage.getItem("user"))._id,
        //     pin: pin,
        //     age: age,
        //     phone: phone,
        //     businessName: bussinessname,
        //     address: address

        // })

        // console.log("data from backend is ", res)



        // navigate('/');


    };

    const setContractorData = async()=>{

        const data = localStorage.getItem("user")
        const user = JSON.parse(data)
        localStorage.setItem("role", "worker");

        const myForm = new FormData();

        myForm.set("age", age);
        // myForm.set("email", user.email);
        // myForm.set("fullName", user.fullname);
        myForm.set("aadhar", aadhar);
        myForm.set("phone", phone);
        myForm.set("address",address);
        myForm.set("role", role);
        myForm.set("pin",pin);
        myForm.set("profilePic",profilePicLink);
        // myForm.set("aadharPic",aadharPicLink);
        myForm.set('experience',experience);
        myForm.set("businessName", bussinessname);
        myForm.set("price", price);
        // myForm.set("userId",JSON.parse(localStorage.getItem("user"))._id);
        // myForm.set("userId",user._id);


        const res=await contractorRegister(myForm);

        // const res = await contractorRegister({
        //     profilePic: "profile pic",
        //     aadhar: aadhar,
        //     experience: experience,
        //     price: price,
        //     role: role,
        //     userId: JSON.parse(localStorage.getItem("user"))._id,
        //     pin: pin,
        //     age: age,
        //     phone: phone,
        //     businessName: bussinessname,
        //     address: address

        // })

    }


    return (
        <>
            <Header />
            <h1 id="lform">Contractor Registration</h1>
            <div className="labour-form">
                <form className='roleform' onSubmit={handleSubmit}>

                    <div className="display2">
                        <div className="display1">

                            <label htmlFor="profilePic">Profile Photo:&nbsp;&nbsp;
                                <span style={{ border: "1px solid gray", padding: "10px", background: "white", fontSize: "15px", borderRadius: "10px", fontWeight: 500, cursor: "pointer" }} >

                                    {
                                        profilePicName.length > 1 ? <>{profilePicName}</> : <>Upload Profile </>
                                    }

                                </span>
                            </label>

                            <input
                                type="file"
                                style={{ display: "none" }}
                                id="profilePic"
                                onChange={(e) => onProfilePicChange(e)}

                            />

                        </div>

                        <div className="display1">
                            <label htmlFor="aadhar">Aadhar No.:&nbsp;&nbsp;</label>
                            <input
                                type="number"
                                placeholder='Enter AAdhar'
                                id="aadhar"
                                value={aadhar}
                                onChange={(event) => setAadhar(event.target.value)}
                            />
                        </div>
                    </div>


                    <div className="display2">
                        <div className="display1">
                            <label htmlFor="experience">Experience (in Years) :&nbsp;&nbsp;</label>
                            <input
                                type="number"
                                id="experience"
                                placeholder='Enter your Experience'
                                value={experience}
                                onChange={(event) => setExperience(event.target.value)}
                            />
                        </div>
                        <div className="display1">

                            <label htmlFor="price">Price (per day) :&nbsp;&nbsp;</label>
                            <input
                                type="number"
                                id="price-labour"
                                placeholder='Enter price per day'
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                            />
                        </div>
                    </div>

                    <div className="display2">
                        <div className="display1">
                            <label htmlFor="address">Address (City Name ) :&nbsp;&nbsp;</label>
                            <input
                                type="text"
                                placeholder='Enter Address'
                                id="address"
                                value={address}
                                onChange={(event) => setAddress(event.target.value)}
                            />
                        </div>
                        <div className="display1">
                            <label htmlFor="pin">Pin Code :&nbsp;&nbsp;</label>
                            <input
                                type="number"
                                placeholder='Enter Pin'
                                id="pin"
                                value={pin}
                                onChange={(event) => setPin(event.target.value)}
                            />
                        </div>
                    </div>

                    <div className="display2">
                        <div className="display1">
                            <label htmlFor="age">Age (only 18+) :&nbsp;&nbsp;</label>
                            <input
                                type="number"
                                placeholder='Enter Age'
                                id="age"
                                value={age}
                                onChange={(event) => setAge(event.target.value)}
                            />
                        </div>


                        <div className="display1">
                            <label htmlFor="role">Type of Contractor :</label>
                            <select id="role" value={role} onChange={(event) => setRole(event.target.value)}>
                                <option value="">--Please select--</option>
                                <option value="Construction Contract">Construction Contract</option>
                                <option value="Floor Contract">Floor Contract</option>
                                <option value="color contract">color contract</option>
                                <option value="furniture contract">furniture contract</option>
                                <option value="electrician contract">electrician contract</option>
                                {/* <option value="Godam | Warehouse Contract">Godam | Warehouse Contract</option> */}
                                <option value="Rennovation Contract">Rennovation Contract</option>
                                <option value="Gardening Contract">Gardening Contract</option>
                                <option value="Other Contract Works">Other Contract Works</option>
                            </select>
                        </div>
                    </div>


                    <div className="display2">
                        <div className="display1">
                            <label htmlFor="phone">Phone Number :&nbsp;&nbsp;</label>
                            <input
                                type="number"
                                id="phone"
                                placeholder='Phone Number'
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                        <div className="display1">
                            <label htmlFor="bussinessname">Enter Your Bussiness Name (Optional) :</label>
                            <input
                                type="text"
                                id="bussinessname"
                                placeholder='About Bussiness'
                                value={bussinessname}
                                onChange={(event) => setBussinessName(event.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer />
            <ToastContainer />
        </>
    )
}

export default ContractorForm;