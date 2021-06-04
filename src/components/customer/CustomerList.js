import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider";
import "./Customer.css";

export const CustomerList = () => {
  const { customers, getCustomers } = useContext(CustomerContext);

  useEffect(() => {
    getCustomers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <section className="customers">
        {customers.map((customer) => (
          <div
            className="customer"
            id={"customer--" + customer.id}
            key={customer.id}
          >
            <h3 className="customer__name">{customer.name}</h3>
          </div>
        ))}
      </section>
    </>
  );
};
