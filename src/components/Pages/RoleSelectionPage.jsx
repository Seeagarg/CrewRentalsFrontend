import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../css/RoleSelectionPage.css";
import workerimg from "../../Images/worker23.jpg"
import customerimg from '../../Images/customer23.jpg';
import contractorimg from '../../Images/contractor23.jpg';
import rentalIimg from '../../Images/rental-provider.jpg';
import groupofworker from "../../Images/groupworker.jpg";

import engineerphoto from "../../Images/engineer111.jpg"

import Header from './Header';
import Footer from '../Footer';


const RoleSelectionPage = () => {
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    // redirect to the corresponding registration page based on the selected role
    switch (role) {
      case 'worker':
        navigate('/labourform');
        break;
      case 'contractor':
        navigate('/contractorForm');
        break;
      case 'customer':
        navigate('/');
        break;
        case 'group worker':
        navigate('/groupOfWorkerForm');
        break;
        case 'engineer':
        navigate('/engineerForm');
        break;
      case 'rental':
        navigate('/rentalProviderForm');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Header />
      <div className="role-selection-register-div">
      <div className="role-selection-page-register">

        <h1>Choose Your Role</h1>
        <div className="role-selection-options">
          <div className="role-option" onClick={() => handleRoleClick('worker')}>
            <img src={workerimg} alt="Worker" />
            <span>Worker</span>
          </div>
          <div className="role-option" onClick={() => handleRoleClick('group worker')}>
            <img src={groupofworker} alt="group Worker" />
            <span> Group of Worker</span>
          </div>
          <div className="role-option" onClick={() => handleRoleClick('contractor')}>
            <img src={contractorimg} alt="Contractor" />
            <span>Contractor</span>
          </div>
          <div className="role-option" onClick={() => handleRoleClick('engineer')}>
            <img src={engineerphoto} alt="engineer" />
            <span>Engineer</span>
          </div>
          <div className="role-option" onClick={() => handleRoleClick('customer')}>
            <img src={customerimg} alt="Customer" />
            <span>Customer</span>
          </div>
          <div className="role-option" onClick={() => handleRoleClick('rental')}>
            <img src={rentalIimg} alt="rental" />
            <span>Rental Provider</span>
          </div>
          
        </div>
      </div>
      </div>
      <Footer style={{ position: "fixed", bottom: "0" }} />
    </>
  );
};

export default RoleSelectionPage;
