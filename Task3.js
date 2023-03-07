/** ****************************************
 * Project: js-unit-testing
 * File: Task3.js
 * Created: 3/7/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */

const Calculator = {
  add(a, b) {
    return a + b;
  },

  substract(a, b) {
    return a - b;
  },

  divide(a, b) {
    if (b === 0) return "Cannot";
    else return a / b;
  },

  multiply(a, b) {
    return a * b;
  },
};

module.exports = Calculator;