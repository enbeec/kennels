import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";

export const AnimalList = () => {
  const { animals, getAnimals } = useContext(AnimalContext);

  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals");
    getAnimals();
  }, []);

  return (
    <section className="animals">
      {console.log("AnimalList: Render", animals)}
      {animals.map((animal) => (
        <div classList="animal" id={`animal--${animal.id}`}>
          <h4 className="animal__name">Name: {animal.name}</h4>
          <div className="animal__breed">Breed: {animal.breed}</div>
        </div>
      ))}
    </section>
  );
};