const operation = "subtract";
let a = 1;
let b = 2;
const calc = (a, b, operation) => {
  switch (operation) {
    case "sum":
      return a + b;
    case "subtract":
      return a - b;
    case "multi":
      return a * b;
  }
};
console.log(calc(a, b, operation));
