/** ****************************************
 * Project: js-unit-testing
 * File: Task1.js
 * Created: 3/7/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */

function stringLength(str) {
  if (str.length >= 1 && str.length <= 10) {
    return str.length;
  }
  throw new Error('String must be between 1-10 characters');
}
module.exports = stringLength;