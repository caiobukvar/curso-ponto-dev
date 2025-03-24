const calculator = require("../../models/calculator.js");

//testes com valores hardcoded
test("somar 2 + 2 deveria retornar 4", () => {
  const result = calculator.sum(2, 2);
  expect(result).toBe(4);
});

test("subtrair 2 - 2 deveria retornar 0", () => {
  const result = calculator.subtract(2, 2);
  expect(result).toBe(0);
});

test("multiplicar 2 * 2 deveria retornar 4", () => {
  const result = calculator.multiply(2, 2);
  expect(result).toBe(4);
});

test("dividir 2 / 2 deveria retornar 1", () => {
  const result = calculator.divide(2, 2);
  expect(result).toBe(1);
});
