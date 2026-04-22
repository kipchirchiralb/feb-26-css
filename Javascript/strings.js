// Strings - datatype
// String is a sequence of characters enclosed in single or double quotes

// Example of string
let name = "  Albert";
let greeting = "Hello, World!";
let email = "alb@gmail.com";

// String concatenation +
const fullGreeting = greeting + " i am " + name;
console.log(fullGreeting);

// String interpolation (template literals)
const age = 30;
const Age = 90;
const info = `My name is ${name} and I am ${age} years old.`;
console.log(info);

// String methods - javascript provides various functions to manipulate strings
console.log(name.length); // Length of the string/number of characters in a string
console.log(name.toUpperCase()); // Convert string to uppercase
console.log(email.charAt(4));
console.log(email.indexOf("@"));
console.log(email.includes(".COM"));


// Assignment - string methods

/**
 * Write a function that takes a string as input and returns the number of characters in the string.
 * Write a function that takes an email address as input and returns the username (the part before the @ symbol).
 * 
 * Write a function that replaces all occurrences of a specified word in a string with another word in a string/sentence.
 * 
 * Write a function that takes a string as input and returns the number of words in the string.
 * Write a function that takes a string as input and returns the string in reverse order.
 */