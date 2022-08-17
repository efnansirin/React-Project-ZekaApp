import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import EmanetList from "../features/emanet/Views/EmanetList"
import EmanetForm from "../features/emanet/Views/EmanetForm"
export default function Emanet() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>      
      <Container>
        <Row className="pt-5 ps-3 pe-3 pb-3">
          <Button variant="secondary" onClick={handleShow}>
            Yeni Kayıt Ekle
          </Button>
        </Row>
        <Row>
          <EmanetList></EmanetList>
        </Row>
      </Container>
      <Modal show={show} backdrop="static" centered onHide={handleClose}>
        <Modal.Body>
          <EmanetForm onHide={() => setShow(false)}></EmanetForm>
        </Modal.Body>
      </Modal>
    </>
  );
}
