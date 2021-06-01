import React, { useState, createContext } from "react";

export const CustomerContext = createContext();

export const CustomerProvider = (props) => {
  const apiURL = "http://localhost:3001";
  const customersURL = apiURL + "/customers";
  const [customers, setCustomers] = useState([]);

  const getCustomers = () => {
    return fetch(customersURL)
      .then((res) => res.json())
      .then(setCustomers);
  };

  const addCustomer = (customerObj) => {
    return fetch(customersURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerObj),
    }).then(getCustomers);
  };

  return (
    <CustomerContext.Provider value={{ customers, getCustomers, addCustomer }}>
      {props.children}
    </CustomerContext.Provider>
  );
};
