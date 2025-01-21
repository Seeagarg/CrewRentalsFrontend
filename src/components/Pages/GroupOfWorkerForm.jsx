import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import "../../css/lform.css";
import Footer from '../Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

import { groupRegister } from '../../service/api';
// import { uploadFile } from '../../service/api';

function GroupOfWorkerForm() {
    const [groupName, setgroupName] = useState();
    const [groupSize, setgroupSize] = useState();
    const [price, setPrice] = useState();
    const [category, setcategory] = useState();
    const [role, setRole] = useState('');
    const [address, setAddress] = useState('');
    const [pin, setPin] = useState();
    const [age, setAge] = useState();
    const [phone, setPhone] = useState();
    const [profilePic, setProfilePic] = useState('');
    const [aadharPic, setAadharPic] = useState('');
    const [profilePicName, setProfilePicName] = useState('')
    const [aadharPicName, setAadharPicName] = useState('')
    const [storeData, setStoreData] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [showImg, setShowImg] = useState(false);
    const [profilePicLink, setprofilePicLink] = useState('');
    const [aadharPicLink, setAadharPicLink] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (event) => {

        event.preventDefault();
        console.log('groupName:', groupName);
        console.log('groupSize:', groupSize);
        console.log('Price:', price);
        console.log('address:', address);
        console.log('pin:', pin);
        console.log('age:', age);
        console.log('phone:', phone);
        console.log("profile pic link ", profilePicLink);
        console.log("aadhar pic link ", aadharPicLink);
        console.log("category", category);


        //   if(!address || !phone || !age || !pin || !price || !experience || !aadharPic || !profilePic ||  !aadhar){
        //     console.log("mouse clicked");
        //     toast("Form is not filled properly",{
        //         autoClose:2000
        // })
        //   }

        //   else{
        setgroupWorkerData();


        // const d= new FormData();
        // d.append("file", profilePic);
        // d.append("upload_preset","rental-rack");
        // d.append("cloud_name","ddwsaojx6");

        // const d1= await fetch("https://api.cloudinary.com/v1_1/ddwsaojx6/image/upload",{
        //     method:"post",
        //     body:d
        // }).then((res)=>res.json()).then((data)=>{

        //     if(data){
        //         setProfilePic(data.url)
        //         setprofilePicLink(data.url);

        //     }
        //     // setProfilePic(data.url)
        //     console.log("profile pic is ",data.url);
        // }).catch((err)=>{
        //     console.log(err)
        // })

        // const dA= new FormData();
        // dA.append("file", aadharPic);
        // dA.append("upload_preset","rental-rack");
        // dA.append("cloud_name","ddwsaojx6");

        // const d2= await fetch("https://api.cloudinary.com/v1_1/ddwsaojx6/image/upload",{
        //     method:"post",
        //     body:dA
        // }).then((res)=>res.json()).then((data)=>{

        //     if(data){
        //         setAadharPic(data.url)
        //         setAadharPicLink(data.url);
        //         console.log("aadhar url is ", data.url);


        //     }

        // }).catch((err)=>{
        //     console.log(err)
        // })

        console.log("aadhar pis is ", aadharPic);
        console.log("profile pic is ", profilePic)
        // }
    };
    const setgroupWorkerData = async () => {
        const data = localStorage.getItem("user")
        const user = JSON.parse(data)
        localStorage.setItem("role", "groupworker");
        const res = await groupRegister({
            groupName: groupName,
            category:category,
            groupSize:groupSize,
            email: user.email,
            userId: user._id,
            phone: phone,
            pin: pin,
            address: address,
            role: role,
            profilePic: profilePicLink,
            aadharPic: aadharPicLink,
            leaderName: user.fullName,
            price: price,
        })

        // navigate("/groupOfWorkers");
    }

    const onProfilePicChange = async (e) => {
        setProfilePic(e.target.files[0]);
        setProfilePicName(e.target.files[0].name);
        const d = new FormData();
        d.append("file", profilePic);
        d.append("upload_preset", "rental-rack");
        d.append("cloud_name", "ddwsaojx6");
        const d1 = await fetch("https://api.cloudinary.com/v1_1/ddwsaojx6/image/upload", {
            method: "post",
            body: d
        }).then((res) => res.json()).then((data) => {
            if (data) {
                setProfilePic(data.url)
                setprofilePicLink(data.url);

            }
            // setProfilePic(data.url)
            console.log("profile pic is ", data.url);
        }).catch((err) => {
            console.log(err)
        })
    }
    const onAadharPicChange = async (e) => {
        setAadharPic(e.target.files[0]);
        setAadharPicName(e.target.files[0].name);

        const dA = new FormData();
        dA.append("file", aadharPic);
        dA.append("upload_preset", "rental-rack");
        dA.append("cloud_name", "ddwsaojx6");

        const d2 = await fetch("https://api.cloudinary.com/v1_1/ddwsaojx6/image/upload", {
            method: "post",
            body: dA
        }).then((res) => res.json()).then((data) => {

            if (data) {
                setAadharPic(data.url)
                setAadharPicLink(data.url);
                console.log("aadhar url is ", data.url);
                // setWorkerData();   
            }
        }).catch((err) => {
            console.log(err)
        })
    }



    return (
        <>
            <Header />
            <h1 id="lform">Group of Worker Registration</h1>
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
                            <label htmlFor="groupName">Group Name :&nbsp;&nbsp;

                            </label>
                            <input
                                type="string"
                                id="groupName"
                                placeholder='Group Name'
                                min={0}
                                value={groupName}
                                onChange={(event) => setgroupName(event.target.value)}
                               

                            />
                        </div>
                    </div>


                    <div className="display2">
                        <div className="display1">
                            <label htmlFor="aadharPic">Aadhar Photo:
                                &nbsp;&nbsp;

                                <span style={{ border: "1px solid gray", padding: "10px", background: "white", fontSize: "15px", fontWeight: 500, borderRadius: "10px", cursor: "pointer" }} >


                                    {
                                        aadharPicName.length > 1 ? <>{aadharPicName}</> : <>Upload Aadhar</>
                                    }


                                </span>

                            </label>
                            <input
                                type="file"
                                id="aadharPic"
                                style={{ display: "none" }}
                                onChange={(e) => onAadharPicChange(e)}

                            />
                        </div>
                        <div className="display1">

                            <label htmlFor="experience">Group Size   :&nbsp;&nbsp;</label>
                            <input
                                type="string"
                                placeholder='Group size'
                                id="groupSize"
                                value={groupSize}
                                onChange={(event) => setgroupSize(event.target.value)}
                            />
                        </div>
                    </div>

                    <div className="display2">
                        <div className="display1">
                            <label htmlFor="price">Price (per day) :&nbsp;&nbsp;</label>
                            <input
                                type="number"
                                placeholder='Price Per Day'
                                id="price-labour"
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                            />
                        </div>
                        <div className="display1">

                            <label htmlFor="address">Address (City Name ) :&nbsp;&nbsp; </label>
                            <input
                                type="text"
                                id="address"
                                placeholder='Enter Address'
                                value={address}
                                onChange={(event) => setAddress(event.target.value)}
                            />
                        </div>
                    </div>


                    <div className="display2">
                        <div className="display1">
                            <label htmlFor="pin">Pin Code :&nbsp;&nbsp;</label>
                            <input
                                type="number"
                                id="pin"
                                placeholder='Enter Pin '
                                value={pin}
                                onChange={(event) => setPin(event.target.value)}
                            />
                        </div>
                        <div className="display1">
                            <label htmlFor="age">Age (only 18+) :&nbsp;&nbsp;</label>
                            <input
                                type="number"
                                id="age"
                                placeholder='Your Age'
                                value={age}
                                onChange={(event) => setAge(event.target.value)}
                            />
                        </div>

                    </div>

                    <div className="display2">
                        <div className="display1">
                            <label htmlFor="role">Type of Group :&nbsp;&nbsp;</label>
                            <select id="role" value={category} onChange={(event) => setcategory(event.target.value)}>
                                <option value="">--Please select--</option>
                                <option value="Construction Labour">Construction Labour</option>
                                <option value="Tiles | Marbel">Tiles | Marbel | Work Helper</option>
                                <option value="Loading | Unloading">Loading | Unloading</option>
                                <option value="Cleaing Group">Cleaing Group</option>
                                <option value="Home Shifting">Home Shifting</option>
                                <option value="Godam | Warehouse">Godam | Warehouse</option>
                                <option value="Factory Group">Factory Group</option>
                                <option value="Gardening Group">Gardening Group</option>
                                <option value="Other Group Works">Other Group Works </option>
                            </select>
                        </div>

                        <div className="display1">
                            <label htmlFor="phone">Phone Number :&nbsp;&nbsp;</label>
                            <input
                                type="number"
                                placeholder=' Enter Phone Nmber'
                                id="phone"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                    </div>


                    <button className='rolebutton' onClick={handleSubmit} type="submit">Submit</button>
                </form>


            </div>
            <Footer />
            <ToastContainer />
        </>
    )
}

export default GroupOfWorkerForm;





