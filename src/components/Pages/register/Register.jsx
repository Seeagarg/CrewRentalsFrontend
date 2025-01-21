// import { Dialog } from '@mui/material'


import { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  authenticateSignup,
  authenticateLogin,
  verifyEmail,
  updatePassword,
  verifyUser,
  URL,
} from "../../../service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./register.css";
import "react-phone-number-input/style.css";
import axios from 'axios'

// import { useState , useEffect, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { authenticateSignup,authenticateLogin, verifyEmail, updatePassword, verifyUser } from '../../../service/api'
// import {ToastContainer, toast} from 'react-toastify';

// import FloatingLabel from "react-bootstrap/FloatingLabel";
// import Form from "react-bootstrap/Form";
// import { useState , useEffect, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { authenticateSignup,authenticateLogin, verifyEmail, updatePassword, verifyUser } from '../../../service/api'
// import {ToastContainer, toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './register.css'
import 'react-phone-number-input/style.css'

// import PhoneInput from 'react-phone-number-input'
import generateOtp from "rv-otp-generator";
import OtpImg from "../../../Images/otp.png";
// import { height } from '@mui/system';
// import RegisterOtp from "../../../Images/RegisterOtp.png";
// import logo from "../../../Images/logo.png"




// import {TextField } from "@mui/material"
// import registergif from "../../../Images/gif (4).gif"

import {TextField } from "@mui/material"
import registergif from "../../../Images/gif (4).gif"


import { AccountContext } from '../../../context/AccountProvider';




const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const Register = () => {
  const {user, setUser}= useContext(AccountContext)
  const company_email = "officialjobhunt@gmail.com";

  useEffect(() => {
    const auth = localStorage.getItem("user");
    const role = localStorage.getItem("role")
    console.log(role,auth)
    if(role == 'admin'){
      navigate("/adminDashboard");
    }
    else if (auth) {
      navigate('/roleSelectionPage')
    }
  });
  const temp = [];
  const navigate = useNavigate();
  const ImgUrl = { registergif };

  const [signup, setSignup] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  // const {user, setUser}= useContext(AccountContext)

  const [registerPage, setRegisterpage] = useState(true);
  const [phone, setPhone] = useState("+911234567890");
  const [forget, setForget] = useState(true);
  const [forgetEmail, setforgetEmail] = useState("");
  const [OTP, setOTP] = useState(true);
  const [newPass, setNewPass] = useState(false);
  const [optSection, showOtpSection] = useState(false);
  const [registerOtp, setRegisterOtp] = useState("");
  const [sendRegisterOtp, setSendRegisterOtp] = useState("");
  const [getOtp, setGetOtp] = useState("");
  const [otp, setotp] = useState(0);
  // const {user, setUser}= useContext(AccountContext)

  const [getNewpass, setGetNewpass] = useState({
    newpassword: "",
    confirmpassword: "",
  });
  //==========Registeration code =========================================

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const userSignup = async (e) => {
    e.preventDefault();
    console.log(signup)
    if (signup.fullname.length <= 1) {
      toast("Name should be more than 1 characters", {
        autoClose: 2000,
      });
    } else if (signup.password.length <= 4) {
      toast("Password should be more than 4 characters", {
        autoClose: 2000,
      });
    } else if (signup.password != signup.confirmPass) {
      console.log("pass is ", signup.password);
      console.log("confirm pass is ", signup.confirmPass);
      toast("Passwords do not match", {
        autoClose: 2000,
      });
    } else {
      delete signup.confirmPass;

      const res = await verifyUser(signup);

      // console.log("res is ", res);
      if (res.data === "") {
        showOtpSection(true);
        toast("Check your e-mail to verify OTP", {
          autoClose: 2000,
        });
        const otp = generateOtp(6);

        //yeh send hua h
        console.log("opt is ",otp);
        setSendRegisterOtp(otp);
        // /send-mail

        try{
          const data ={
            otp:otp,
            email:signup.email
          }
          const res = await axios.post(`${URL}/send-mail`,data);
          toast.success(res.data.message)
        }
        catch(err){
          toast.error(err?.response?.data?.message)
        }

        // window.Email.send({
        //   Host: "smtp.elasticemail.com",
        //   Username: "anshu.verma62074@gmail.com",
        //   Password: "B4B14856EDDCC0A25DAF23492E8D4A7E356B",
        //   To: signup.email,
        //   From: "anshu.verma62074@gmail.com",
        //   Subject: "Verify Registeration",
        //   Body: `${otp} is the OTP to Register in Rental Rack`,
        // }).then((message) => {
        //   if (message !== "OK") {
        //     toast.error("Something went wrong try after some time", {
        //       autoClose: 3000,
        //     });
        //   }
        // });
      } else {
        toast.warning("Email-id is already registered", {
          autoClose: 2000,
        });


           //==========Registeration code =========================================

                // 


        const onInputChange = (e) => {
                setSignup({ ...signup, [e.target.name]: e.target.value });
        }
        const userSignup = async (e) => {
                e.preventDefault();     
                if(signup.fullname.length<=1){
                toast.warning("Name should be more than 1 characters",{
                        autoClose:2000
                })
               }
               else if(signup.password.length<=4){
                toast.warning("Password should be more than 4 characters",{
                        autoClose:2000
                })
               }
               else if(signup.password!=signup.confirmPass){
                  console.log("pass is ",signup.password);
                  console.log("confirm pass is ",signup.confirmPass)
                toast.error("Passwords do not match",{
                        autoClose:2000
                })
               }
               else{  
              
                 delete signup.confirmPass; 
              
                 const res= await verifyUser(signup);
        

                // console.log("res is ", res)
                if(res.data ===""){
                        showOtpSection(true);   

                        toast("Check your e-mail to verify OTP",{
                                autoClose:2000
                        })
                        const otp = generateOtp(6)
                        setSendRegisterOtp(otp);     
                        
                        
        
                        window.Email.send({
                                Host : "smtp.elasticemail.com",
                                Username : "anshu.verma62074@gmail.com",
                                Password : "B4B14856EDDCC0A25DAF23492E8D4A7E356B",
                                To : signup.email ,
                                From : "anshu.verma62074@gmail.com",
                                Subject : "Vefify Registeration",
                                Body : `${otp} is the OTP to Register in Rental Rack`
                        }).then(
                             message=>{
                                if(message!=="OK"){
                                        toast("Something went wrong try after some time",{
                                                autoClose:3000
                                        })
                                }                       
                             }
                        );                   
                }

                else{
                        toast("Email-id is already registered",{
                                autoClose:2000
                        })

                        console.log("registeration is unsucessfull")        
                }  
        }
        }

        const handleRegisterOtp=async()=>{
                        if(sendRegisterOtp==registerOtp){
                                 let res= await authenticateSignup(signup);

                                //  console.log("registeration res is ",res);

                                 if(res){
                                      
                                        localStorage.setItem("user",JSON.stringify(res.data.newUser));
                                        localStorage.setItem("token",JSON.stringify(res.data.auth));
                                        localStorage.setItem("role","customer");
                                        navigate("/roleSelectionPage")
                                 }
                                 else{
                                        toast("Registeration failed try after sometime",{
                                                autoClose:2000
                                        })
                                 }     
                        }
                        else{
                                toast("Verification failed entered OTP is not correct",{
                                                                autoClose:2000
                                                        })
                        }
                }
        const handleLogin = () => {
                setRegisterpage(!registerPage);
        }


        //=============================================Login Code=============================================

       const onInputChangeLogin=(e)=>{
             setLogin({...login,[e.target.name]:e.target.value})
       }

        const userLogin = async(e) => {
                e.preventDefault();
                        // console.log("login is ", login)
                        let res= await authenticateLogin(login);

                        // console.log("res from login is ",res);
                        if(res){
                                console.log("Login is successfull")
                                localStorage.setItem("user",JSON.stringify(res.data.user));
                                setUser(res.data.user)
                                localStorage.setItem("token",JSON.stringify(res.data.auth));
                                localStorage.setItem("role","customer");
                                navigate("/")
                        }
                        else{
                                toast.error("E-mail or Password  is incorrect",{
                                        autoClose:2000
                                })
                                console.log("Login is unsucessfull")
                                return
                        } 
                       }      
        



        //================================Forget password code===========================================

        const handleForget=()=>{
                setForget(false);
        }
        const handleForgetEmail=(e)=>{
                setforgetEmail(e.target.value)
                console.log("mail is ",forgetEmail)
        }
        const handleOtp=async(e)=>{
                e.preventDefault();
                        
                let res=await verifyEmail({email:forgetEmail});

                       
                   if(res){
                        setOTP(false)
                        console.log("opthhh is ",getOtp)
                        console.log("email is ",forgetEmail)
                        const otp = generateOtp(6)
                        setotp(otp);
                        
                        temp.push({"email" : forgetEmail , "otp" : otp})
                        console.log("temp 1 ",temp)
                        setGetOtp('');
                        
                        console.log("opt is ",getOtp)
                        window.Email.send({
                                Host : "smtp.elasticemail.com",
                                Username : "anshu.verma62074@gmail.com",
                                Password : "B4B14856EDDCC0A25DAF23492E8D4A7E356B",
                                To : forgetEmail,
                                From : "anshu.verma62074@gmail.com",
                                Subject : "This is the otp to reset password for JOB HUNT",
                                Body : otp
                        }).then(
                        //       message => alert(message) 
                             message=>{
                                        // alert(message)
                                if(message==="OK"){
                                        toast("OTP has been sent successfully",{
                                                autoClose:2000
                                        })
                                }
                                else{
                                        alert("Something went wrong try after some time")
                                        toast(message,{
                                                autoClose:2000
                                        })
        
                                }
                               
                             }
                        );
                   }     
                        else {
                                toast.error("Email is not registered",{
                                        autoClose:2000
                                })  
                        }
        }

        // console.log("temp 1 ",temp)


        const handleChangeOtp=(e)=>{
                // e.preventDefault();
                setGetOtp(e.target.value);
              
        }

        const handleOtpSubmit=(e)=>{
                        e.preventDefault();
                        // console.log("temp is ", temp)
                        if(otp!=getOtp){
                                toast("OTP is incorrect",{
                                        autoClose:2000
                                })  
                        }
                        else{
                                console.log("forget email is ", forgetEmail)
                               setNewPass(true);
                        }
        }

        //============================New password set code==========================================


        console.log("registeration is unsucessfull");
      }
    }
  };

  const handleRegisterOtp = async () => {
    if (sendRegisterOtp == registerOtp) {
      let res = await authenticateSignup(signup);

      console.log("registeration res is ", res);

      if (res) {
        navigate("/roleSelectionPage");
        localStorage.setItem("user", JSON.stringify(res.data.newUser));
        localStorage.setItem("token", JSON.stringify(res.data.auth));
        localStorage.setItem("role", "customer");
      } else {
        toast.error("Registeration failed try after sometime", {
          autoClose: 2000,
        });
      }
    } else {
      toast.error("Verification failed entered OTP is not correct", {
        autoClose: 2000,
      });
    }
  };
  const handleLogin = () => {
    setRegisterpage(!registerPage);
  };

  //=============================================Login Code=============================================

  const onInputChangeLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const userLogin = async (e) => {
    e.preventDefault();
    console.log("login is ", login);
    let res = await authenticateLogin(login);

    console.log("res from login is ", res);
    if (res) {
      console.log("Login is successfull");
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", JSON.stringify(res.data.auth));
      localStorage.setItem("role", "customer");
      navigate("/");
    } else {
      toast.error("E-mail or Password  is incorrect", {
        autoClose: 2000,
      });
      console.log("Login is unsucessfull");
      return;
    }
  };

  // admin login 
  const adminLogin = async (e) => {
    e.preventDefault();

    if(login.email==="anshu.verma62074@gmail.com" || login.email==="kumaranurag296@gmail.com" || login.email==="seeagarg0203@gmail.com" || login.email==="laxmikantsarswat007@gmail.com"){    

    let res = await authenticateLogin(login);
    // console.log("mouse clicked --> ",res)
    if (res) {
      console.log("Login is successfull res is",res);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", JSON.stringify(res.data.auth));
      localStorage.setItem("role", "admin");
      navigate("/adminDashboard");
    } else {
      toast("E-mail or Password  is incorrect", {
        autoClose: 2000,
      });
      console.log("Login is unsucessfull");
      return;
    }
  }
    else{
      toast.error("You are not a valid Admin ", {
        autoClose: 2000,
      });
      console.log("Login is unsucessfull");
      return;
    }
  };

  //================================Forget password code===========================================

  const handleForget = () => {
    setForget(false);
  };
  const handleForgetEmail = (e) => {
    setforgetEmail(e.target.value);
    console.log("mail is ", forgetEmail);
  };
  const handleOtp = async (e) => {
    e.preventDefault();

    let res = await verifyEmail({ email: forgetEmail });

    if (res) {
      setOTP(false);
      console.log("opthhh is ", getOtp);
      console.log("email is ", forgetEmail);
      const otp = generateOtp(6);
      setotp(otp);

      temp.push({ email: forgetEmail, otp: otp });
      console.log("temp 1 ", temp);
      setGetOtp("");

      console.log("opt is ", getOtp);
      window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: "anshu.verma62074@gmail.com",
        Password: "B4B14856EDDCC0A25DAF23492E8D4A7E356B",
        To: forgetEmail,
        From: "anshu.verma62074@gmail.com",
        Subject: "This is the otp to reset password for JOB HUNT",
        Body: otp,
      }).then(
        //       message => alert(message)
        (message) => {
          // alert(message)
          if (message === "OK") {
            toast("OTP has been sent successfully", {
              autoClose: 2000,
            });
          } else {
            // alert("Something went wrong try after some time");
            toast(message, {
              autoClose: 2000,
            });
          }
        }
      );
    } else {
      toast("Email is not registered", {
        autoClose: 2000,
      });
    }
  };

  // console.log("temp 1 ",temp)

  const handleChangeOtp = (e) => {
    // e.preventDefault();
    setGetOtp(e.target.value);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // console.log("temp is ", temp)
    if (otp != getOtp) {
      toast("OTP is incorrect", {
        autoClose: 2000,
      });
    } else {
      console.log("forget email is ", forgetEmail);
      setNewPass(true);
    }
  };

  //============================New password set code==========================================

  const handleNewPass = (e) => {
    setGetNewpass({ ...getNewpass, [e.target.name]: e.target.value });
  };
  const handleNewPassSubmit = async (e) => {
    console.log("mouse has been clieked");
    e.preventDefault();
    console.log(getNewpass);
    if (getNewpass.newpassword != getNewpass.confirmpassword) {
      toast("Passwords do not match", {
        autoClose: 2000,
      });
    } else {
      console.log("registered email is ", forgetEmail);
      const res = await updatePassword({
        email: forgetEmail,
        password: getNewpass.newpassword,
      });
      console.log("res pwass upfdate is ", res);
      if (res.data) {
        toast("Password has been updated successfully", {
          autoClose: 2000,
        });

        console.log("Login is successfull");
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.auth));
        localStorage.setItem("role", "customer");

        navigate("/");
      } else {
        toast("Something went wrong try after sometime", {
          autoClose: 2000,
        });
      }
    }
  };

  return (
    <>
      <div className="Container">
        <div className="rightSide ">
          {registerPage ? (
            //==================================================This is registeration Form ===================================================
            <>
              {optSection ? (
                <div style={{ height: "60px" }}>
                  <TextField
                    id="standard-password-input"
                    label="OTP"
                    style={{ color: "black" }}
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    value={registerOtp}
                    name="otp"
                    onChange={(e) => setRegisterOtp(e.target.value)}
                  />
                  <button
                    className="btn-primary btn"
                    style={{
                      marginTop: "10px",
                      backgroundColor: "white",
                      width: "100px",
                      marginLeft: "80px",
                      height: "40px",
                      color: "blue",
                    }}
                    onClick={handleRegisterOtp}
                  >
                    Verify OTP
                  </button>
                </div>
              ) : (
                <form
                  className="signupForm"
                  action=""
                  onSubmit={userSignup}
                  style={{ padding: "20px" }}
                >
                  <h2
                    style={{ color: "rgb(37, 165, 220)", textAlign: "center" }}
                  >
                    REGISTRATION FORM
                  </h2>
                  {/* <div className='signupuserInput'>
                                                                <input type="text" onChange={(e) => onInputChange(e)} placeholder='First Name' name="firstname" />
                                                        </div>

                                                        <div className='signupuserInput'>
                                                                <input type="text" onChange={(e) => onInputChange(e)} placeholder='Last Name' name="lastname" />
                                                        </div> */}
                  <div className="signupuserInput">
                    <input type="text" onChange={(e) => onInputChange(e)} value={signup.fullname} placeholder='Enter Name' name="fullname" />

                    {/* <FloatingLabel
                      controlId="floatingInput"
                      label="Full Name"
                      className="mb-3"
                    >
                      <Form.Control
                        type="text"
                        onChange={(e) => onInputChange(e)}
                        value={signup.fullname}
                        placeholder='Enter Name' 
                        name="fullname"
                      />
                    </FloatingLabel> */}
                  </div>
                  <div className="signupuserInput">
                    <input
                      type="email"
                      onChange={(e) => onInputChange(e)}
                      value={signup.email}
                      placeholder="Email Address"
                      name="email"
                    />
                  </div>
                  {/* 
                                                        <div className='signupuserInput'>

                                                        <PhoneInput placeholder="Enter phone number"  value={phone} onChange={setPhone}
                            defaultCountry="" />  */}

                  {/* <input type="text" onChange={(e) => onInputChange(e)} placeholder='Phone Number' name="phone" /> */}
                  {/* </div> */}
                  <div className="signupuserInput">
                    <input
                      type="password"
                      onChange={(e) => onInputChange(e)}
                      value={signup.password}
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <div className="signupuserInput">
                    <input
                      type="password"
                      onChange={(e) => onInputChange(e)}
                      name="confirmPass"
                      placeholder="Re-Enter Password"
                    />
                  </div>
                  <button className="signupBtn" type="submit">
                    Register
                  </button>
                  <div className="LoginPage">
                    Already have an account?{" "}
                    <span className="login" onClick={handleLogin}>
                      {" "}
                      <u> Login </u>{" "}
                    </span>
                  </div>
                </form>
              )}
            </>
          ) : forget ? (
            //===================================Login form======================================

            <form
              className="signupForm"
              action=""
              onSubmit={userLogin}
              style={{ padding: "70px" }}
            >
              <h2 style={{ color: "rgb(37, 165, 220)", textAlign: "center" }}>
                LOGIN FORM
              </h2>
              <div className="signupuserInput">
                <input
                  type="email"
                  onChange={(e) => onInputChangeLogin(e)}
                  placeholder="Enter E-mail"
                  value={login.email}
                  name="email"
                />
              </div>
              <div className="signupuserInput">
                <input
                  type="password"
                  onChange={(e) => onInputChangeLogin(e)}
                  value={login.password}
                  placeholder="Password"
                  name="password"
                />
              </div>

              <button className="signupBtn" type="submit">
                Login
              </button>
              <button className="signupBtn" onClick={adminLogin}  >
                Admin Login
              </button>
              <div className="forgetPassword" onClick={handleForget}>
                Forget Password?
              </div>

              <div className="LoginPage">
                New to Job Hunt?{" "}
                <span className="login" onClick={handleLogin}>
                  {" "}
                  <u> Register </u>{" "}
                </span>
              </div>
            </form>
          ) : (
            //=================================Forget Email===================================================

            <div className="signupForm">
              <div className="OtpForm">
                <img
                  src={OtpImg}
                  style={{
                    objectFit: "fill",
                    width: "50vh",
                    height: "50vh",
                    margin: "auto",
                  }}
                  alt=""
                />

                <>
                  <div
                    className="signupuserInput"
                    style={{
                      alignItems: "center",
                      marginTop: "20px",
                      padding: "20px",
                    }}
                  >
                    {OTP ? (
                      <>
                        <input
                          type="email"
                          onChange={handleForgetEmail}
                          placeholder="Enter Registered Email"
                          value={forgetEmail}
                          name="forgetEmail"
                          style={{ fontSize: "25px", width: "80%" }}
                        />

                        <button
                          className="btn-primary btn"
                          style={{
                            marginTop: "20px",
                            backgroundColor: "#007bff",
                            fontWeight: "600",
                            fontSize: "25px",
                          }}
                          onClick={handleOtp}
                        >
                          Send OTP
                        </button>
                      </>
                    ) : (
                      <>
                        {newPass ? (
                          // ===========================================  new password===========================================

                          <>
                            <div className="signupuserInput">
                              <input
                                type="password"
                                onChange={(e) => handleNewPass(e)}
                                placeholder="Enter New Password"
                                name="newpassword"
                              />
                            </div>
                            <div className="signupuserInput">
                              <input
                                type="password"
                                onChange={(e) => handleNewPass(e)}
                                placeholder="Confirm Password"
                                name="confirmpassword"
                              />
                            </div>
                            <button
                              className="btn-primary btn"
                              style={{
                                marginTop: "10px",
                                backgroundColor: "green",
                                width: "100px",
                                marginLeft: "50px",
                              }}
                              onClick={handleNewPassSubmit}
                            >
                              Submit
                            </button>
                          </>
                        ) : (
                          <>
                            {/* ===========================================Opt validate section ==========================================   */}
                            <input
                              type="text"
                              style={{
                                fontSize: "25px",
                                width: "80%",
                              }}
                              onChange={handleChangeOtp}
                              placeholder="Enter OTP"
                              name="getOtp"
                              value={getOtp}
                            />
                            <br />

                            <button
                              className="btn-primary btn"
                              style={{
                                marginTop: "20px",
                                backgroundColor: "#007bff",
                                fontWeight: "600",
                                fontSize: "25px",
                              }}
                              onClick={handleOtpSubmit}
                            >
                              Submit
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </>
              </div>
            </div>
          )}
        </div>
        <div className="leftSide ">
          <div className="transparent-layer">
            "Choose a job you love, and you will never have to work a day in
            your life." - Confucius.
          </div>
          <img src={registergif} alt="" />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
