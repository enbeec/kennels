import React, { useContext, useEffect, useState } from "react";
import { CustomerContext } from "./CustomerProvider";
import { useHistory } from "react-router-dom";
import "./Customer.css";

export const AnimalForm = () => {
  const { addCustomer } = useContext(CustomerContext);

  const [animal, setAnimal] = useState({
    name: "",
    email: "",
    address: "",
  });

  const history = useHistory();

  useEffect(() => {
    getCustomers().then(getLocations);
  });
};
