const colors = ["green", "blue", "red", "yellow", "purple"];

console.log(colors.length);

// Array methods - are javascript provided functions that can be used to manipulate arrays

console.log(colors.join("_")); // oposite of splitx
console.log(colors.reverse()); //

console.log(colors.sort());
const fsClass = ["vincent", "gorbachev", "marion"];
const dsClass = ["albert", "einstein", "shiza"];

console.log(fsClass.concat(dsClass));

// explore other array methods.

// ASSIGNMENT - array methods
/**
 * Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.
 * Write a function that takes an array of strings as input and returns a new array with all the strings in uppercase.
 * Write a function that takes an array of numbers as input and returns a new array with only the even numbers from the original array.
 * Write a function that takes an array of strings as input and returns a new array with only the strings that contain the letter "a".
 * Write a function that takes an array of numbers as input and returns the average of the numbers in the array.
 **/

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const marks = [85, 90, 78, 92, 88];
const result = sumArray([1, 2, 3, 4, 5]);

const totalMarks = sumArray(marks);

