/* ------------------------------No 2 problem------------------------------ */

/*
Write an arrow function where it will do the following:

a) It will take an array where the array elements will be the
name of your friends

b) Check if the length of each element is even, push elements
with even length to a new array and return the result

Print the result.
*/

// const friends = (friendsArray) => {
//     const friendsEvenLength = [];  /* create an empty array to store the friends with even length names */
  
//     friendsArray.forEach(friend => {  /* loop through each element of the friendsArray using forEach */
  
//       if (friend.length % 2 === 0) {  /* check if the length of the friend's name is even */
//         friendsEvenLength.push(friend);  /* if it's even, push the friend's name into the friendsEvenLength array */
//       }
//     });
  
//     return friendsEvenLength;  /* return the array containing the friends with even length names */
//   }
  
//   const myFriends = ['Md','Ahsan','Habib','Ashik'];

//   const friendsLength = friends(myFriends);  /* call the friends function with the myFriends array as argument */

//   console.log(friendsLength);  /* log the result to the console, which should be an array containing ['Md', 'Habib', 'Ashik'] */



/* -------------------------other way filter method---------------------------------- */

  /* Define a function called 'friends' that takes an array of strings as its parameter */
const friends = (friendsArray) => {
  
  /* Create a new array called 'friendsEvenLength' that contains only the strings whose length is even */
  const friendsEvenLength = friendsArray.filter(friend => friend.length % 2 === 0);
  /* Return the 'friendsEvenLength' array */
  return friendsEvenLength;
}

/* Define an array of strings called 'myFriends' */
const myFriends = ['Md', 'Ahsan', 'Habib', 'Ashik'];

/* Call the 'friends' function with 'myFriends' as its argument and store the result in a variable called 'friendsLength' */
const friendsLength = friends(myFriends);

/* Log the value of 'friendsLength' to the console */
console.log(friendsLength);