import React from "react";
import { Modal, ListGroup } from "react-bootstrap";

const ViewModal = ({ handleClose, userData }) => {
  return (
    <>
      <Modal show={true} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">
            User Full Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>{userData.name}</ListGroup.Item>
            <ListGroup.Item>{userData.email}</ListGroup.Item>
            <ListGroup.Item>{userData.age}</ListGroup.Item>
            <ListGroup.Item>{userData.gender}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewModal;
