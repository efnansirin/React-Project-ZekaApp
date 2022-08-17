import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import PlanBiList from "../features/planBi/Views/PlanBiList"
import PlanBiForm from "../features/planBi/Views/PlanBiForm"
export default function PlanBi() {
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
          <PlanBiList></PlanBiList>
        </Row>
      </Container>
      <Modal show={show} backdrop="static" centered onHide={handleClose}>
        <Modal.Body>
          <PlanBiForm onHide={() => setShow(false)}></PlanBiForm>
        </Modal.Body>
      </Modal>
    </>
  );
}
