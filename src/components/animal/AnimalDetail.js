import React, { useContext, useEffect, useState } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";
import { useParams } from "react-router-dom";

export const AnimalDetail = () => {
  const { getAnimal } = useContext(AnimalContext);
  const [animal, setAnimal] = useState({ location: {}, customer: {} });

  // route for this component looks like: /animals/detail/{animal.id}
  const { animalId } = useParams();

  useEffect(() => {
    // getAnimal(animal.id).then((thisAnimal) => setAnimal(thisAnimal));
    getAnimal(animalId).then(setAnimal);
  }, [animalId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="animal">
      {/* TODO: include customer last name */}
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">Breed: {animal.breed}</div>
      <div className="animal__location">Location: {animal.location.name}</div>
      <div className="animal__owner">Customer: {animal.customer.name}</div>
    </section>
  );
};
