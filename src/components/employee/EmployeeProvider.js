import React, { useState, createContext } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = (props) => {
  const apiURL = "http://localhost:3001";
  const employeesURL = apiURL + "/employees";
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return fetch(employeesURL + "?_expand=location")
      .then((res) => res.json())
      .then(setEmployees);
  };

  const addEmployee = (employeeObj) => {
    return fetch(employeesURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeObj),
    }).then(getEmployees);
  };

  return (
    <EmployeeContext.Provider value={{ employees, getEmployees, addEmployee }}>
      {props.children}
    </EmployeeContext.Provider>
  );
};
