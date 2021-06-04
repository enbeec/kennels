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
import { EmployeeForm } from "./employee/EmployeeForm";

export const ApplicationViews = () => {
  return (
    <>
      <EmployeeProvider>
        <LocationProvider>
          <AnimalProvider>
            <CustomerProvider>
              <Route exact path="/">
                <LocationList />
              </Route>

              <Route exact path="/locations">
                <LocationList />
              </Route>

              <Route exact path="/animals/create">
                <AnimalForm />
              </Route>

              <Route exact path="/animals">
                <AnimalList />
              </Route>

              <Route exact path="/employees">
                <EmployeeList />
              </Route>

              <Route exact path="/employees/create">
                <EmployeeForm />
              </Route>

              <Route exact path="/customers">
                <CustomerList />
              </Route>
            </CustomerProvider>
          </AnimalProvider>
        </LocationProvider>
      </EmployeeProvider>

      <Route path="/">
        <footer>
          <h6>Thanks for stopping by 🖤 </h6>
        </footer>
      </Route>
    </>
  );
};
