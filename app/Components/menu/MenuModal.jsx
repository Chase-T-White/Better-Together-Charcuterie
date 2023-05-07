import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import MenuForm from "./MenuForm";

const MenuModal = ({ modalInfo, modalShow, setModalShow }) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalShow}
      onHide={() => setModalShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalInfo ? modalInfo.location : "Modal heading"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MenuForm />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MenuModal;
