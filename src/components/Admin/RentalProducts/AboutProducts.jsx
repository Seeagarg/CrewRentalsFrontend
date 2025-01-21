import React,{useState,useEffect} from 'react';
import Header from '../../Pages/Header';
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../Footer';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RemoveModeratorIcon from '@mui/icons-material/RemoveModerator';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import DeleteIcon from '@mui/icons-material/Delete';
import Confirmation from '../../Confirmation';
import VerifyConfirmation from '../../VerifyConfirmation';
import { getProduct, updateProduct,deleteProducts, getProductProvider, getUser } from '../../../service/api';
import { PrintDisabled } from '@mui/icons-material';
import { ToastContainer, toast } from "react-toastify";

function AboutProducts() {
    const location = useLocation();
    const product = location.state.product;
    const provider = location.state.provider;
    const navigate = useNavigate();
    const [displayConfirmation,setDisplayConfirmation] = useState(false)
    const [displayVerifyUser,setDisplayVerifyUser] = useState(false);
    const [prdct,setPrdct] = useState();
    const [prdctProvider,setPrdctProvider] = useState();
    const [profile,setProfile] = useState();

    

    const deleteProduct=()=>{
      console.log("deletedUser");
      setDisplayConfirmation(true);
    }

    const deleteCurrentUser=async()=>{
      console.log("deleterd")
      const res = await deleteProducts(product._id);
      
      setDisplayConfirmation(true);
      navigate('/rentalProducts');
    }
    const hideConfirmation = () => {
      console.log("Hide confirmation");
      setDisplayConfirmation(!displayConfirmation);
    };

    useEffect(()=>{
      getSetPrdct();
      getSetPrdctProvider();
      getProfile();
      // console.log(prdct);
    },[displayVerifyUser])

    const getSetPrdctProvider=async()=>{
      const res = await getProductProvider(product?.userId);
      // console.log("--------",res);
      setPrdctProvider(res[0]);
    }

    const getProfile=async()=>{
      const res = await getUser(product?.userId);
      console.log("---------------",res)
      setProfile(res);
    }

    // useEffect(()=>{
    //   getSetPrdct();
    //   // console.log("--------",prdct)
    // },[])

    const getSetPrdct=async()=>{
      // console.log("||||||||");
      console.log(product)
      const res = await getProduct(product?._id);
      console.log("===============",res)
      setPrdct(res);
     
    }

    const hideVerifyConfirmation=()=>{
      setDisplayVerifyUser(false);
    }

    const verifyCurrentUser=async()=>{
      console.log("verified")
      const res = await updateProduct(product._id,{verified:true});
      
      setDisplayVerifyUser(!displayVerifyUser);
      showNotification();
      // getSetPrdct();
    }

    const Verify=()=>{
      console.log("Submitted");
      setDisplayVerifyUser(!displayVerifyUser);
    }

    const showNotification = () => {
      toast.success("Service provider Verified!!", {
        autoClose: 2000,
      });
    }

    
  return (
    <div>
       <Header/>
      <div className="container mb-5 p-0 " style={{backgroundColor:"rgb(245, 245, 245)",marginTop:"20vh",borderRadius:"30px",}}>
      <img src="https://img.freepik.com/premium-photo/abstract-white-grey-tone-paper-background-texture-pastel-color_364465-75.jpg?w=2000" alt="" style={{height:"30vh",width:"100%",borderRadius:"30px",backgroundSize:"cover,contain",borderBottom:"2px solid gray"}}/>
      <div className="m-0 ms-5 p-5"  >

      <div className="d-inline-flex">
      <div className='text-center p-3'>
      <img src={product.image} alt="" style={{height:"30vh",width:"30vh",borderRadius:"50%",marginTop:"-20px",borderBottom:"2px solid gray",boxShadow:"8px 8px 8px 8px #888888"}} />
       <div className="m-3">
       <p className='fs-3 mb-0 fw-bold'> {product.name} </p>
       <p className='fs-3 mt-0' style={{textDecoration:"underline"}}>Contact me:</p>
       <div className="row">
        <div className="col-3">
        <InstagramIcon />
        </div>
        <div className="col-2">
        |
        </div>
        <div className="col-3">
        <FacebookIcon />
        </div>
        <div className="col-2">
        |
        </div>
        <div className="col-2">
        <TwitterIcon/>
        </div>
       </div>
       </div>
       </div>

        <div className="ms-5 mt-5 bg-light p-3 w-100 " style={{borderRadius:"30px",border:"1px solid gray"}}>.
        <p className='fs-2 fw-bold'>Personal Details...</p>
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>Product:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{product.name}</span>
      </div>
      <hr />
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>Category: {" "} </span>
      <span className='fs-3 ms-3 mt-0'>{product.category}</span>
      </div>
      <hr />
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>Company: {" "} </span>
      <span className='fs-3 ms-3 mt-0'>{product.company}</span>
      </div>
      <hr />
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>Description{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{product.description}</span>
      </div>
      <hr />
      <div className='m-0'>
      <span className='fs-3 fw-bold ms-5 mt-0'>Price:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{product.price}</span>
      </div>
      </div>

      <div className='m-5 p-3 bg-light text-center w-50' style={{borderRadius:"30px",border:"1px solid gray",height:"80%"}} >
        <p className='fs-3 fw-bold  m-5'>Product Verification or Delete Product</p>
        <div className="row">
        <div className='col' >
        {/* {
         ()=>{
          if(product.verified){
            <VerifiedUserIcon fontSize='large'/>
          }
          else{
            <RemoveModeratorIcon fontSize='large' />
          }
         }
        } */}
          {prdct?.verified?<VerifiedUserIcon fontSize='large' style={{color:"#056805"}} />:<RemoveModeratorIcon style={{color:"#c88f06"}} className='icon-hvr' fontSize='large'  onClick={Verify}/>}
        </div>
        <div className='col' >
        <DeleteIcon className='icon-hvr' fontSize='large' style={{color:"#b51a1a"}} onClick={deleteProduct}/>
        </div>
        </div>
        {/* <RemoveModeratorIcon fontSize='large' /> */}
      </div>
      </div>

      <div className='m-5 bg-light p-5 mb-3' style={{borderRadius:"30px",border:"1px solid gray"}} >
      <p className='fs-2 fw-bold'>Provider Details...</p>
      <div>
      <span className='fs-3 fw-bold ms-5 mt-0'>Provider Name:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{profile?.fullname}</span>
      </div>
      <hr />
      <div>
      <span className='fs-3 fw-bold ms-5 mt-0'>Location{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{prdctProvider?.address} </span>
      </div>
      <hr />
      <div>
      <span className='fs-3 fw-bold ms-5 mt-0'>Address:{" "} </span>
      <span className='fs-3 ms-3 mt-0'>{prdctProvider?.country} </span>
      </div>
      <hr />
      
      </div>
        
       
      </div>
      </div>
      <Footer/>
      <ToastContainer />
      <VerifyConfirmation showModal={displayVerifyUser} confirmModal={Verify} verifyCurrentUser={verifyCurrentUser}  hideModal={hideVerifyConfirmation}  message={"Do You want to verify the user?"}/>
      <Confirmation showModal={displayConfirmation} confirmModal={deleteProduct} deleteCurrentUser={deleteCurrentUser}  hideModal={hideConfirmation}  message={"Are You Sure??"}/>
    </div>
  )
}

export default AboutProducts
