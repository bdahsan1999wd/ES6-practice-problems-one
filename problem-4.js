/* ------------------------------No 4 problem------------------------------ */

/* 
Write an arrow function where it will do the following:

a) It will take two array inputs
b) Combine the two arrays and assign them to a new array
c) Find the maximum number from the new array and return the result

Print the result.
*/

/* Define an arrow function that takes two array inputs */
const findMaxNumber = (array1, array2) => {
  
    /* Combine the two arrays using the concat() method and assign the result to a new array */
    const combinedArray = array1.concat(array2);
    
    /* Find the maximum number from the new array using the Math.max() method */
    const maxNumber = Math.max(...combinedArray);
    
    /* Return the maximum number */
    return maxNumber;
  };
  
  /* Define two arrays to use as input for the arrow function */
  const array1 = [10, 20, 30];
  const array2 = [40, 50, 60];
  
  /* Call the arrow function with the two arrays as arguments and assign the result to a variable */
  const result = findMaxNumber(array1, array2);
  
  /* Print the result to the console */
  console.log(result);