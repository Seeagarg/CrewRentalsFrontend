import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../css/RoleSelectionPage.css";
import './AdminNavbar.css';




const Adminnavbar = () => {
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    // redirect to the corresponding registration page based on the selected role
    switch (role) {
      case 'worker':
        navigate('/adminWorkers');
        break;
      case 'contractor':
        navigate('/ContractorList');
        break;
      case 'provider':
        navigate('/providers');
        break;
      case 'rentalProducts':
        navigate('/rentalProducts');
        break;
      case 'groupOfWorkers':
        navigate('/adminGroupOfWorkersList');
        break;
      case 'engineers':
        navigate('/Engineers');
        break;  
      default:
        break;
    }
  };

  return (
    <>
      
      <div className="role-selection-register-div">
      <div className="role-selection-page-register">

        <h1>Admin Panel</h1>
        <hr style={{width:"100%",justifyContent:"center",margin:"0",backgroundColor:"gray",height:"2px"}}/>
       
        <div className="role-selection-options">
          <div className="role-option" onClick={() => handleRoleClick('worker')}>
            {/* <img src={workerimg} alt="Worker" /> */}
            <span className='role p-2'>Worker</span>
          </div>
          
          <div className="role-option" onClick={() => handleRoleClick('groupOfWorkers')}>
            {/* <img src={customerimg} alt="Customer" /> */}
            <span className='role p-2'>Group worker</span>
          </div>
          <div className="role-option" onClick={() => handleRoleClick('contractor')}>
            {/* <img src={contractorimg} alt="Contractor" /> */}
            <span className='role p-2'>Contractor</span>
          </div>
          <div className="role-option" onClick={() => handleRoleClick('provider')}>
            {/* <img src={rentalIimg} alt="rental" /> */}
            <span className='role p-2'>Rental Provider</span>
          </div>

          <div className="role-option" onClick={() => handleRoleClick('rentalProducts')}>
            {/* <img src={rentalIimg} alt="rental" /> */}
            <span className='role p-2'>Rental Products</span>
          </div>

          <div className="role-option" onClick={() => handleRoleClick('engineers')}>
            {/* <img src={rentalIimg} alt="rental" /> */}
            <span className='role p-2'>Engineer</span>
          </div>
          
        </div>
      </div>
      </div>
     
    </>
  );
};

export default Adminnavbar;
