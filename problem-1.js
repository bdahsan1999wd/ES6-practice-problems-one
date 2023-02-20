// const y = x =>  x * x;
// const z = y(5);
// console.log(z);

/* ------------------------------No 1------------------------------ */

/* Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result.*/

const Three = (a, b, c) => a * b * c;
const result1 = Three(2, 3, 4);
console.log(result1);

/* ------------------------------No 2------------------------------ */

/* Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani. */

const line1 = 'I am a web developer.';
const line2 = 'I love to code.';
const line3 = 'I love to eat biryani.';

const result2 = `
${line1}

${line2}

${line3}
`;
console.log(result2);

/* ------------------------------No 3------------------------------ */

/* Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result. */

const add = (num1, num2 =20) => {
    const result3 = num1 + num2;
    return result3;
  };
const sum1 = add(5);
const sum2 = add(5, 10);
console.log(sum1);
console.log(sum2);