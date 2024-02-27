for (let i = 1; i < 101; i++) {
  let res = "";
  i % 3 === 0 ? (res += "Fizz") : null;
  i % 5 === 0 ? (res += "Buzz") : null;
  !res ? console.log(i) : console.log(res);
}
