import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { getValueFromApi } from "../Slices/emanetSlice";
import Table from "react-bootstrap/Table";

export default function EmanetList() {
  const dispatch = useDispatch();

  const itemList = useSelector((state) => state.emanet);
  const getApi = () => {
    fetch("http://localhost:5299/Emanet", {
      method: "GET",
    })
      .then((httpResponse) => httpResponse.json())
      .then((response) => {
        console.log(response);
        response.map((el) => {
          dispatch(
            getValueFromApi({
              Id: el.id,
              PersonName: el.personName,
              ItemName: el.itemName,
              CreateTime: el.createTime,
            })
          );
        });
      })
      .catch((error) => {
        console.log(error);
      });
    document.getElementById("btnVeriCek").style.display = "none";
  };
  return (
    <>
      <Button id="btnVeriCek" variant="secondary" onClick={getApi}>
        Çek
      </Button>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Personel Adı</th>
            <th>Malzeme Adı</th>
            <th>Tarih</th>
          </tr>
        </thead>
        <tbody>
          {itemList.value &&
            itemList.value.map((item, key) => {
              return (
                <tr key={item.Id}>
                  <td>{item.PersonName}</td>
                  <td>{item.ItemName}</td>
                  <td>{item.CreateTime}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}
