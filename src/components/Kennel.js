import React from "react";
import "./Kennel.css";
import { Animal } from "./animal/Animal";
import { Location } from "./location/Location";
import { Customer } from "./customer/Customer";
import { Employee } from "./employee/Employee";

export const Kennel = () => (
  <>
    <h2>Val's Kennels</h2>
    <small>I'll watch your dogs and I'll do it good, too!</small>

    <h2>Employees</h2>
    <article className="employees">
      <Employee />
      <Employee />
      <Employee />
    </article>

    <h2>Animals</h2>
    <article className="animals">
      <Animal />
      <Animal />
      <Animal />
    </article>

    <h2>Customers</h2>
    <article className="customers">
      <Customer />
      <Customer />
      <Customer />
    </article>

    <footer className="locations">
      <Location />
      <Location />
      <Location />
    </footer>
  </>
);
