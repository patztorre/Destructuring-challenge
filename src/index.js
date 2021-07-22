// import animals, { useAnimals } from "./data.js";

// const [cat, dog] = animals;
// const [animal, makeSound] = useAnimals(cat);
// console.log(animal)
// makeSound()

// const { name: catName, sound: catSound, feedingRequirements } = cat;
// const { food, water } = feedingRequirements;
//setting default value of properties
// const { name = "Fluffy", sound = "Meow" } = cat;

// console.log(catName, catSound, food, water);

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js";

const [honda, tesla] = cars;

const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
// const [hondaTopColour] = hondaColour;
// const { topSpeed: hondaTopSpeed } = hondaSpeed;
console.log(honda.model, hondaTopColour, hondaTopSpeed);

const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
// const [teslaTopColour] = teslaColour;
// const { topSpeed: teslaTopSpeed } = teslaSpeed;
console.log(tesla.model, teslaTopColour, teslaTopSpeed);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
