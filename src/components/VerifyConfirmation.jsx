import React from 'react';
import { Modal, Button } from "react-bootstrap";

function VerifyConfirmation({ showModal, hideModal, confirmModal,  message, verifyCurrentUser }) {
  return (
    <div>
      <Modal show={showModal} onHide={hideModal}>

      
    <Modal.Header closeButton>
    <Modal.Title>Verify Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-info">{message}</div></Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={hideModal}>
            Cancel
          </Button>
          {/* <Button variant="info" onClick={() => confirmModal() }> */}
          <Button variant="info" onClick={() => verifyCurrentUser() }>
            Verify
          </Button>
        </Modal.Footer>
    </Modal>
    </div>
  )
}

export default VerifyConfirmation
