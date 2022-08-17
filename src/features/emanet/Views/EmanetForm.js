import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addValue, deleteValue, getList } from "../Slices/emanetSlice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function EmanetForm(props) {
  const dispatch = useDispatch();
  function createGuid() {
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-4" +
      S4().substr(0, 3) +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    ).toLowerCase();
  }
  const intialItem = {
    Id: createGuid(),
    PersonName: "",
    ItemName: "",
    CreateTime: ` ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
  };
  const [emanetState, setEmanetState] = useState(intialItem);
  const handleChange = (event) => {
    setEmanetState({ ...emanetState, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addValue(emanetState));
    console.log(emanetState);
    setEmanetState(intialItem);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Emaneti alan kişi:</Form.Label>
          <Form.Control
            placeholder="Lütfen adınızı giriniz."
            name="PersonName"
            onChange={handleChange}
            value={emanetState.PersonName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Emanet alınan malzeme:</Form.Label>
          <Form.Control
            placeholder="Emanet aldığınız malzemeyi giriniz."
            name="ItemName"
            onChange={handleChange}
            value={emanetState.ItemName}
          />
        </Form.Group>
        <div className="emanet-footer">
          <Button variant="secondary" onClick={props.onHide}>
            Kapat
          </Button>
          <Button variant="primary" type="submit" className="ms-2">
            Kaydet
          </Button>
        </div>

      </Form>
    </>
  );
}
