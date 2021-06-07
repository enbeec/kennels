import React, { useState, createContext } from "react";

export const AnimalContext = createContext();

export const AnimalProvider = (props) => {
  const apiURL = "http://localhost:3001";
  const animalsURL = apiURL + "/animals";
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return fetch(
      animalsURL + "?_expand=location&_expand=customer&_sort=location.id"
    )
      .then((res) => res.json())
      .then(setAnimals);
  };

  const addAnimal = (animalObj) => {
    return fetch(animalsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animalObj),
    }).then(getAnimals);
  };

  return (
    <AnimalContext.Provider value={{ animals, getAnimals, addAnimal }}>
      {props.children}
    </AnimalContext.Provider>
  );
};
