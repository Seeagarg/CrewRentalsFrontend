
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../css/RoleSelectionPageHome.css"
import workerimg from '../../Images/worker23.jpg';
import customerimg from '../../Images/customer23.jpg';
import contractorimg from '../../Images/contractor23.jpg';
import groupofworker from "../../Images/groupworker.jpg";
import engineerphoto from "../../Images/engineer111.jpg"
import equipmentphot from "../../Images/tools2.jpg";
import aichatphoto from "../../Images/AI-ChatBot.png"
import threedmodel from "../../Images/threedmodel.jpg"

const RoleSelectionPageHome = () => {
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    // redirect to the corresponding registration page based on the selected role
    switch (role) {
      case 'worker':
        navigate('/workersPage');
        break;
      case 'contractor':
        navigate('/contractors');
        break;
      case 'groupofworker':
        navigate('/groupOfWorkers');
        break;
      case 'equipments':
        navigate('/product');
        break;
      case 'chat':
        navigate('/aiChat');
        break;
      case 'engineer':
        navigate('/engineerPage');
        break;
      case 'threed':
        navigate('/mapForm');
        break;
      default:
        break;
    }
  };

  return (
    <div className="role-selection-main-div">
    <div className="role-selection-page-home">
      <h1>What type of  Services you want? Choose one..</h1>
      <div className="role-selection-options-home">
        <div className="role-option-home" onClick={() => handleRoleClick('worker')}>
          <img src={workerimg} alt="Worker" />
          <span>Worker</span>
        </div>
        <div className="role-option-home" onClick={() => handleRoleClick('groupofworker')}>
          <img src={groupofworker} alt="groupworker" />
          <span>Group of Workers</span>
        </div>
        <div className="role-option-home" onClick={() => handleRoleClick('contractor')}>
          <img src={contractorimg} alt="Contractor" />
          <span>Contractor</span>
        </div>
        <div className="role-option-home" onClick={() => handleRoleClick('engineer')}>
          <img src={engineerphoto} alt="engineer" />
          <span>Engineer</span>
        </div>
        <div className="role-option-home" onClick={() => handleRoleClick('equipments')}>
          <img src={equipmentphot} alt="engineer" />
          <span>Equipments on Rental</span>
        </div>
        <div className="role-option-home" onClick={() => handleRoleClick('chat')}>
          <img src={aichatphoto} alt="engineer" />
          <span>Construction uncertainty??</span>
        </div>
        <div className="role-option-home" onClick={() => handleRoleClick('threed')}>
          <img src={threedmodel} alt="threedmodel" />
          <span>Want 3D House Model..</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RoleSelectionPageHome;
