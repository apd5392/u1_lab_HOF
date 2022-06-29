/**
 * Utilizing the provided {arr} argument in each function, follow the prompts.
 * In order for the tests to pass, you MUST return the result!
 * The provided arr parameter for the non bonus questions will ALWAYS be an array with numbers from 1-15.
 * The bonus questions will tell you what to expect as an argument.
 */

const getSquares = (arr) =>
  arr.map((numbers) => {
    return numbers * 2;
  });
/**
 * Use .map to return an array of all nums multiplied by 2
 */

const isDivBy3 = (arr) =>
  arr.map((numbers) => {
    if (numbers % 3 === 0) {
      return true;
    } else {
      return false;
    }
  });
/**
 * Use .map to return an array of booleans, if the number is divisible by 3 return true otherwise false
 * * The modulus % operator may be useful *
 */

const filterOdds = (arr) =>
  arr.filter((numbers) => {
    if (numbers % 2 === 1) {
      return numbers;
    }
  });
/**
 * Use .filter to return an array of all odd numbers
 * * The modulus % operator may be useful *
 */

const filterEvens = (arr) =>
  arr.filter((numbers) => {
    if (numbers % 2 === 0) {
      return numbers;
    }
  });
/**
 * Use .filter to return all even numbers
 * * The modulus % operator may be useful *
 */
const filterDivBy4 = (arr) =>
  arr.filter((numbers) => {
    if (numbers % 4 === 0) {
      return numbers;
    }
  });
/**
 * Use .filter to return all numbers that are divisible by 4
 * * The modulus % operator may be useful *
 */

const addAllUp = (arr) =>
  arr.reduce((accumulator, numbers) => {
    return accumulator + numbers;
  });
/**
 * Use .reduce to return the total sum of all numbers
 */

const multiplyAllNums = (arr) =>
  arr.reduce((accumulator, numbers) => {
    return accumulator * numbers;
  });
  /**
   * Use .reduce to return the total product of all numbers
   */


// BONUS
const sumSquareAllNums = (arr) => 
  arr.reduce((accumulator, numbers) => {
  return accumulator + (numbers*numbers);
});
  /**
   * Use .reduce to return the total sum of each number to the second power
   * @param {[Number]} arr will contain numbers from 1-15
   * Your final result should be 1240
   */

const addAllAges = (arr) =>   
  arr.reduce((accumulator, numbers) => {
  return accumulator + numbers, 0
});
  /**
   * Use .reduce to return the total sum of all ages in the provided arr
   * The arr parameter contains:
      { name: 'Carl', age: 30 },
      { name: 'Cara', age: 10 },
      { name: 'Carmen', age: 15 }
    ]
    Your final result should be 55
   */
// BONUS

module.exports = {
  getSquares,
  isDivBy3,
  filterOdds,
  filterEvens,
  filterDivBy4,
  addAllUp,
  multiplyAllNums,
  sumSquareAllNums,
  addAllAges,
};
