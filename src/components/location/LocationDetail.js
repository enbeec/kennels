import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider";
import "./Location.css";
import { useParams, Link } from "react-router-dom";

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext);
  const [location, setLocation] = useState({ animals: [], employees: [] });

  const { locationId } = useParams();

  useEffect(() => {
    getLocationById(locationId).then((thisLocation) =>
      setLocation(thisLocation)
    );
  }, [locationId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div>{location.address}</div>

      {/* TODO refactor into a component of animal  */}
      <h4>Animals</h4>
      <div className="location__animals">
        {location.animals.map((a) => (
          <div key={a.id}>
            <Link to={`/animals/detail/${a.id}`} className="location__animal">
              {a.name}
            </Link>
          </div>
        ))}
      </div>

      {/* TODO refactor into a component of employee */}
      <h4>Employees</h4>
      <div className="location__employees">
        {location.employees.map((e) => (
          <div key={e.id}>
            <Link
              to={`/employees/detail/${e.id}`}
              className="location__employee"
            >
              {e.name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
