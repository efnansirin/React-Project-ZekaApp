import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";

export default function PlanBiList() {
  const itemList = useSelector(state=>state.planBi);
  console.log(itemList);
  const dispatch = useDispatch();
  return (
    <>           
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>IP / Adres</th>
              <th>Sunucu Adı</th>
              <th>Kullanıcı Adı</th>
              <th>Parola</th>
              <th>Açıklama</th>
            </tr>
          </thead>
          <tbody>
            {itemList.value &&
              itemList.value.map((item, key) => {
                return (
                  <tr key={item.Id}> 
                    <td>{item.IpAdress}</td>                  
                    <td>{item.ServerName}</td>
                    <td>{item.UserName}</td>
                    <td>{item.Password}</td>
                    <td>{item.Description}</td>
                                       
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </>   
  );
}
