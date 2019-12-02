const modules = [
  {mass: 1},
  {mass: 12},
  {mass: 14},
  {mass: 1969},
  {mass: 100756},
];

modules.forEach((module) => module.fuel = Math.floor(module.mass / 3) - 2);
const fuelRequirement = modules.reduce((acc, curr) => {
  return curr.fuel > 0 ? acc + curr.fuel : 0;
}, 0);

console.log(fuelRequirement);
