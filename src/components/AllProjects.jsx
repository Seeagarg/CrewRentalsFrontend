import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { deleteProject} from '../service/api';

import DeleteIcon from '@mui/icons-material/Delete';


function AllProjects({showModal,hideModal,projects,projectInfo,userDash}) {
    
   

    const DeleteProject=async(id)=>{
        const res = await deleteProject(id);
        hideModal();

        
      
        console.log(res);
        projects();
    }
  

  return (
    <div>
      <Modal show={showModal} onHide={hideModal} style={{width:"100vw"}}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">ALL PROJECTS</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        {projectInfo?(   
        <>
        {projects.map((data,index)=>(
            <>
            <span className='fs-5 fw-bold'>Project-{index+1}</span>
            {userDash?<DeleteIcon className='float-end icon-hvr' onClick={()=>{DeleteProject(data._id)}}/>:" "}
            <p className='fs-5'>Project Title: {data.title}</p>
            <p className='fs-5'>Project Desc{data.description}</p>
            
            <hr />

            </>
        ))
        }
        
        </>
        ):(<p className='fs-5 fw-bold'>No Project To Show</p>)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal} >
            Close
          </Button>
          {/* <Button variant="success" onClick={SubmitHandler}>Submit</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AllProjects
