import React from "react";
import "./Kennel.css";
import { Location } from "./location/Location";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";

export const Kennel = () => (
  <>
    <h2>Val's Kennels</h2>
    <small>I'll watch your dogs and I'll do it good, too!</small>

    <h2>Employees</h2>
    <article className="employees">
      <EmployeeProvider>
        <EmployeeList />
      </EmployeeProvider>
    </article>

    <h2>Animals</h2>
    <article className="animals">
      <AnimalProvider>
        <AnimalList />
      </AnimalProvider>
    </article>

    <h2>Customers</h2>
    <article className="customers">
      <CustomerProvider>
        <CustomerList />
      </CustomerProvider>
    </article>

    <footer className="locations">
      <Location />
      <Location />
      <Location />
    </footer>
  </>
);
