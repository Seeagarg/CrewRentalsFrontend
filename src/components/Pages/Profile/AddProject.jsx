import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { addProject } from "../../../service/api";
// import { Toast } from "react-bootstrap";
// import Toast

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function AddProject({ showModal, hideModal, userId }) {
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');

    const SubmitHandler=async(e)=>{
        e.preventDefault();
        console.log('submitted');
        console.log('Title: ',title);
        console.log('desc: ',desc);

        if(title.length<3 ){
          toast.error("Please give valid title", {
            autoClose: 2000,
          });
        }
        else if(desc.length<3){
          toast.error("Please give valid description", {
            autoClose: 2000,
          });
        }

        else{
            const res=await addProject({
              userId:userId,
              title:title,
              description:desc
            })
              // console.log("res add prokjeyc ",res)
              setTitle("");
              setDesc("")
              toast.success("Project Added Successfully!!", {
                autoClose: 2000,
              });
              hideModal();
        }

        // console.log("form data is ",title,desc)

        // if(title === '' || desc === ''){
        //     Toast("Add Title And Description of Your Project");
        // }
        // else{
        //     const res = await addProject({
        //         title:title,
        //         desc:desc,
        //     })
        //     console.log(res);
        // // }
        // hideModal();
    }
  return (
    <div>
      <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">ADD PROJECT</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <FloatingLabel className="mb-3 p-2"  label="Title">
            <Form.Control type="text" className="fs-5" onChange={(e)=>{setTitle(e.target.value)}} value={title}   placeholder="Project Title" />
          </FloatingLabel>
          <FloatingLabel  className="p-2"  label="Description">
            <Form.Control as="textarea" style={{height:"200px"}} onChange={(e)=>{setDesc(e.target.value)}} value={desc} className="fs-5" type="text" placeholder="Description" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal} >
            Close
          </Button>
          <Button variant="success" onClick={SubmitHandler}>Submit</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
    
  );
}

export default AddProject;
