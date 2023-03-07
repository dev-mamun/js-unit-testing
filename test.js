/** ****************************************
 * Project: js-unit-testing
 * File: test.js
 * Created: 3/7/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
const sum = require('./sum');
const stringLength = require('./Task1');
const reverseString = require('./Task2');
const Calculator = require('./Task3');
const capitalize = require('./Task4');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('String Length: 6', () => {
  expect(stringLength("string")).toBe(6);
});

test('String Length: between 1-10 characters', () => {
  expect(stringLength("mamun")).toBe(5);
});

test("Reverse", () => {
  expect(reverseString("string")).toEqual("gnirts")
})

describe("Calculator", () => {
  test("add 2 to 3 equals 5", () => {
    expect(Calculator.add(3, 2)).toBe(5);
  })

  test("substract 2 from 3 equals 1", () => {
    expect(Calculator.substract(3, 2)).toBe(1);
  })

  test("divide 4 by 2 equals 2", () => {
    expect(Calculator.divide(4, 2)).toBe(2);
  })

  test("divide 4 by 0 equals Cannot", () => {
    expect(Calculator.divide(4, 0)).toBe("Cannot");
  })

  test("divide 4 by 2 equals 8", () => {
    expect(Calculator.multiply(4, 2)).toBe(8);
  })
})

test("isUppercase", () => {
  expect(capitalize("string")).toMatch(/^\p{Lu}/u)
})
