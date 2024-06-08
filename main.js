const operation = "sum";
const a = 1;
const b = 2;
function calc(a, b, operation) {
  switch (operation) {
    case "sum":
      return a + b;
    case "subtract":
      return a - b;
    case "multi":
      return a * b;
  }
}
console.log(calc(a, b, operation));
