const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const isDivBy3 = testArray.map((arr) => {
  if (arr % 3 === 0) {
    return true;
  } else {
    return false;
  }
});
console.log(isDivBy3);

//       /**
//      * Use .map to return an array of booleans, if the number is divisible by 3 return true otherwise false
//      * * The modulus % operator may be useful *
//      */

const filterOdds = testArray.filter((arr) => {
    if (arr % 2 === 1) {
        return arr
    }
});

console.log(filterOdds)
/**
 * Use .filter to return an array of all odd numbers
 * * The modulus % operator may be useful *
 */

 const addAllUp = (arr) => testArray.reduce((a ,b ){
    return a + b
  });
      /**
     * Use .reduce to return the total sum of all numbers
     */