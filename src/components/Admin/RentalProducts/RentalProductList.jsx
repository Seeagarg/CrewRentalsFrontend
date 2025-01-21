import React from 'react';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import RemoveModeratorIcon from '@mui/icons-material/RemoveModerator';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AccountContext } from "../../../context/AccountProvider";

function RentalProductList({product}) {
    const navigate = useNavigate();
  const {account,setAccount}= useContext(AccountContext);

  const handleClick = () => {
    // setAccount(worker._id)
    console.log("Submitted");
    console.log(product);
    navigate('/aboutProduct',{state:{product}})
    
  }

  return (
    <div>
      <div className="hvr row  p-1 pb-1 m-2 text-center"  style={{border:"1px solid rgb(229 232 236)" ,borderRadius:"30px"}} onClick ={handleClick}>
              <div className="col">
              <p className="fs-5" >{product.name}</p> 
              </div>
              <div className="col">
              <p className="fs-5">{product.category}</p> 
              </div>
              <div className="col">
              <p className="fs-5">{product.company}</p> 
              </div>
              <div className="col">
              <p className="fs-5">{product.price}</p> 
              </div>
              
              <div className="col text-center">
              
              {product.verified?<VerifiedUserIcon style={{color:"#056805"}} fontSize='large' style={{color:"green"}}/>:<RemoveModeratorIcon style={{color:"#c88f06"}} fontSize='large'/>}
              </div>
             </div>
    </div>
  )
}

export default RentalProductList
