import React from "react";
import { Route } from "react-router-dom";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { LocationProvider } from "./location/LocationProvider";
import { LocationList } from "./location/LocationList";
import { AnimalForm } from "./animal/AnimalForm";

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <LocationProvider>
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>

      {/* Render the location list when http://localhost:3000/locations */}
      <LocationProvider>
        <Route exact path="/locations">
          <LocationList />
        </Route>
      </LocationProvider>

      {/* Render the location list when http://localhost:3000/animals */}
      <AnimalProvider>
        <Route exact path="/animals">
          <AnimalList />
        </Route>
      </AnimalProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      {/* Render the location list when http://localhost:3000/employees */}
      <EmployeeProvider>
        <Route exact path="/employees">
          <EmployeeList />
        </Route>
      </EmployeeProvider>

      {/* Render the location list when http://localhost:3000/customers */}
      <CustomerProvider>
        <Route exact path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

      <Route path="/">
        <footer>
          <h6>Thanks for stopping by 🖤 </h6>
        </footer>
      </Route>
    </>
  );
};
