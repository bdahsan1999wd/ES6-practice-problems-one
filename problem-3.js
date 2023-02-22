/* ------------------------------No 3 problem------------------------------ */

/*
Write an arrow function where it will do the following:

a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements

Print the result.
*/

const squareAndAverage = array => {  /* define an arrow function squareAndAverage that takes an array as input */

  const squaredArray = array.map(number =>Math.pow(number, 2));  /* create a new array squaredArray with each element squared using Math.pow() method */

  const sumOfSquares = squaredArray.reduce((a, b) => a + b, 0);  /* calculate the sum of the squared elements using reduce() method with an initial value of 0 */

  const avgOfSquares = sumOfSquares / array.length;  /* calculate the average of the squared elements by dividing the sum by the length of the array */

  return avgOfSquares;  /* return the average of the squared elements */
  };
  
  console.log(squareAndAverage([10, 20, 30, 40, 50])); /* call the squareAndAverage function with an input array and print the result to the console */