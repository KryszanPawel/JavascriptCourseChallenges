// function getCelsius(fHeat) {
//   return ((fHeat - 32) * 5) / 9;
// }

const getCelsius = (fHeat) => ((fHeat - 32) * 5) / 9;

console.log(getCelsius(-459.67));

const minMax = (arr) => ({ min: Math.min(...arr), max: Math.max(...arr) });
console.log(minMax([5, 4, 1, 3, 9]));

((width, height) => console.log("Area of rectangle is : " + width * height))(
  5,
  7
);
