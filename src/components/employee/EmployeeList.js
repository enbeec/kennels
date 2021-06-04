import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { useHistory } from "react-router-dom";
import "./Employee.css";

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext);
  const history = useHistory();

  useEffect(() => {
    getEmployees();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <section className="employees">
        {employees.map((employee) => (
          <div
            className="employee"
            id={"employee--" + employee.id}
            key={employee.id}
          >
            <h3 className="employee__name">{employee.name}</h3>
          </div>
        ))}
      </section>
      <button onClick={() => history.push("/employees/create")}>
        Add Employee
      </button>
    </>
  );
};
