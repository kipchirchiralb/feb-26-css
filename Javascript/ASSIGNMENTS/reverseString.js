// Write a function that takes a string as input and returns the string in reverse order.

const fullname = "Albert Einstein";

function reverseString(str) {
  const arrayOfChars = str.split("");
  console.log(arrayOfChars);
  const reversedArray = arrayOfChars.reverse();
  console.log(reversedArray);
  const reversedString = reversedArray.join("");
  console.log(reversedString);
  return reversedString;
}

reverseString(fullname);
