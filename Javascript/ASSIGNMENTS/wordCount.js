// Write a function that takes a string as input and returns the number of words in the string.

const sentence = "Hello, how are you doing today?";

function countWords(sent) {
  const words = sent.split(" "); // Split the sentence into an array of words
  return words.length; // Return the length of the array, which is the number of words
}


// using a arrow function - clean shorter syntax 
const countWordsArrow = (sent) => sent.split(" ").length;

console.log(countWords(sentence)); // Output: 6
console.log(countWordsArrow(sentence)); // Output: 6