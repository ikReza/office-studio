import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const ExampleModal = (props) => {
  const { className } = props;

  const toggle = () => {
    props.setModal(!props.modal);
  };

  return (
    <Modal
      isOpen={props.modal}
      toggle={toggle}
      className={className}
      id="modal"
    >
      <ModalHeader toggle={toggle}>
        <p>{props.title}</p>
        <p className="text-muted">Lorem ipsum dolor sit amet consectetur.</p>
      </ModalHeader>

      <ModalBody className="text-center">
        <img className="img-fluid" src={props.photo} alt="portfolio_img" />
        <p style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Do Something
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ExampleModal;
