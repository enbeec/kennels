import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import "./Location.css";

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getLocations();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="locations">
      {locations.map((location) => (
        <div
          className="location"
          id={"location--" + location.id}
          key={location.id}
        >
          <div>Visit us at our {location.name} location!</div>
          <address>
            <div>{location.address}</div>
          </address>
        </div>
      ))}
    </section>
  );
};
