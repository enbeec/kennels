import React, { useContext, useEffect } from "react";
import { LocationContext } from "./LocationProvider";
import { Link } from "react-router-dom";
import "./Location.css";

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getLocations();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="locations">
      {locations.map((location) => (
        <div className="location" key={location.id}>
          <Link to={`/locations/detail/${location.id}`}>
            Visit us at our {location.name} location!
          </Link>
        </div>
      ))}
    </section>
  );
};
