let operation = "multi";
let a = 1;
let b = 2;
function calc(operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multi":
      return a * b;
  }
}
console.log(calc(operation, 1, 2));
