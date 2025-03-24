// calculadora na pasta models para isolar o escopo - TESTE UNITÁRIO
function sum(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return NaN;
  }

  return num1 + num2;
}
function subtract(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return NaN;
  }
  return num1 - num2;
}
function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return NaN;
  }
  return num1 * num2;
}
function divide(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return NaN;
  }
  return num1 / num2;
}

exports.sum = sum;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
