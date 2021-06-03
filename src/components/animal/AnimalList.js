import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";
import { useHistory } from "react-router-dom";

export const AnimalList = () => {
  const { animals, getAnimals } = useContext(AnimalContext);

  useEffect(() => {
    getAnimals();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const history = useHistory();

  return (
    <>
      <button onClick={() => history.push("/animals/create")}>
        Add Animal
      </button>
      <section className="animals">
        {animals.map((animal) => (
          <div className="animal" id={"animal--" + animal.id} key={animal.id}>
            <h3 className="animal__name">Name: {animal.name}</h3>
            <div className="animal__breed">Breed: {animal.breed}</div>
          </div>
        ))}
      </section>
    </>
  );
};
