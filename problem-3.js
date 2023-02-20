/* ------------------------------No 3 problem------------------------------ */

/*
Write an arrow function where it will do the following:

a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements

Print the result.
*/


/* Define the arrow function squareAndAverage that takes an array as an argument. */
const squareAndAverage = array => {

    /* Create a new array squaredArray using the map() method to square each element of the input array. */
    const squaredArray = array.map(elem => elem ** 2);

    /* Calculate the sum of the squared elements using the reduce() method with an initial accumulator value of 0. */
    const sumOfSquares = squaredArray.reduce((acc, curr) => acc + curr, 0);

    /* Calculate the average of the sum of squared elements by dividing the sumOfSquares by the length of the input array. */
    const avgOfSquares = sumOfSquares / array.length;

    /* Return the average of squared elements. */
    return avgOfSquares;
  };
  
  /* Print the result of calling the squareAndAverage function with an input array [10, 20, 30, 40, 50]. */
  console.log(squareAndAverage([10, 20, 30, 40, 50]));