// const y = x =>  x * x;
// const z = y(5);
// console.log(z);

/* ------------------------------No 1 problem------------------------------ */

/* Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result.*/

const Three = (a, b, c) => a * b * c;  /* define an arrow function called Three that takes three parameters and returns their product */

const result1 = Three(2, 3, 4);  /* call the Three function with arguments 2, 3, and 4 and store the result in a variable called result1 */

console.log(result1);  /* print the value of result1 to the console, which should be 24 (the product of 2, 3, and 4) */


/* ------------------------------No 2 problem------------------------------ */

/* Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani. */

const line1 = 'I am a web developer.';  /* define a string variable containing the first sentence */

const line2 = 'I love to code.';  /* define a string variable containing the second sentence */

const line3 = 'I love to eat biryani.';  /* define a string variable containing the third sentence */

const result2 = `
${line1}

${line2}

${line3}
`;

console.log(result2);  /* print the value of result2, which should output the three sentences on separate lines */


/* ------------------------------No 3 problem------------------------------ */

/* Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result. */

const add = (num1, num2 =20) => {  /* define an arrow function called add that takes two parameters, num1 and num2, with num2 having a default value of 20 if no value is passed for num2 */

  const result3 = num1 + num2; /* add the two parameters and store the result in a variable called result3 */

  return result3;  /* return the value of result3 */
};

const sum1 = add(5);  /* call the add function with one argument and store the result in a variable called sum1 */

const sum2 = add(5, 10);  /* call the add function with two arguments and store the result in a variable called sum2 */

console.log(sum1);  /* print the value of sum1 to the console, which should be 25 (the sum of 5 and the default value of 20 for num2) */

console.log(sum2);  /* print the value of sum2 to the console, which should be 15 (the sum of 5 and 10) */

