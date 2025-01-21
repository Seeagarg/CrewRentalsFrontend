import React from 'react';
import { Modal, Button } from "react-bootstrap";

function Confirmation({ showModal, hideModal, confirmModal,  message, deleteCurrentUser }) {
  return (
    <div>
    <Modal show={showModal} onHide={hideModal}>
    <Modal.Header closeButton>
    <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-danger">{message}</div></Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={hideModal}>
            Cancel
          </Button>
          {/* <Button variant="danger" onClick={() => confirmModal() }> */}
          <Button variant="danger" onClick={() => deleteCurrentUser() }>
            Delete
          </Button>
        </Modal.Footer>
    </Modal>
    </div>
  )
}

export default Confirmation
