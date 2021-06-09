import React, { useState, createContext } from "react";

export const LocationContext = createContext();

export const LocationProvider = (props) => {
  const apiURL = "http://localhost:3001";
  const locationsURL = apiURL + "/locations";
  const embedURLparams = "?_embed=animals&_embed=employees";
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return fetch(locationsURL + embedURLparams)
      .then((res) => res.json())
      .then(setLocations);
  };

  const getLocationById = (id) => {
    return fetch(locationsURL + `/${id}` + embedURLparams).then((res) =>
      res.json()
    );
  };

  const addLocation = (locationObj) => {
    return fetch(locationsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationObj),
    }).then(getLocations);
  };

  return (
    <LocationContext.Provider
      value={{ locations, getLocations, addLocation, getLocationById }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};
