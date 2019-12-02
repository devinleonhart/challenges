// Given an amount of weights, calculate how much fuel will be needed to launch the weight into orbit.
// The formula for fuel requirement is Math.floor(W/3) -2.

let inputs = require('./input.json');
const modules = inputs.mass.map((value) => {
  return {"mass": value}
});
modules.forEach((module) => module.fuel = Math.floor(module.mass / 3) - 2);
const fuelRequirement = modules.reduce((acc, curr) => {
  return curr.fuel > 0 ? acc + curr.fuel : 0;
}, 0);
console.log(fuelRequirement);
