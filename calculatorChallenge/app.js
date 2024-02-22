const add = (a = 0, b = 0) => {
  return a + b;
};
const subtract = (a = 0, b = 0) => {
  return a - b;
};
const mulitply = (a = 0, b = 0) => {
  return a * b;
};
const devide = (a = 0, b = 1) => {
  return a / b;
};

const calculator = (a, b, sign) => {
  let result;
  switch (sign) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = mulitply(a, b);
      break;
    case "/":
      result = devide(a, b);
      break;
    default:
      result = "bad input";
  }
  return result;
};

console.log(calculator(5, 2, "+"));
console.log(calculator(5, 2, "-"));
console.log(calculator(5, 2, "*"));
console.log(calculator(5, 2, "/"));
console.log(calculator(5, 2, "&"));
