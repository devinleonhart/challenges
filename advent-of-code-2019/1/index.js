// Part 1
// Given an amount of weights, calculate how much fuel will be needed to launch the weight into orbit.
// The formula for fuel requirement is Math.floor(W/3) -2.

// Part 2
// Assume any fuel added also has weight.

function calculateFuel(mass) {
  let fuel = Math.floor(mass / 3) - 2;
  return fuel > 0 ? fuel : 0;
}

function calculateExtraFuel(fuel) {
  return fuel > 0 ? fuel + calculateExtraFuel(calculateFuel(fuel)) : fuel + 0
}

let inputs = require('./input.json');
const modules = inputs.mass.map((value) => {
  return {"mass": value}
});
modules.forEach((module) => module.fuel = calculateFuel(module.mass));
const fuelRequirement = modules.reduce((acc, curr) => {
  return acc + calculateExtraFuel(curr.fuel);
}, 0);
console.log(fuelRequirement);
